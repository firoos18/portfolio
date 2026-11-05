import { Document, Link, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";
import { getDictionary, type Locale } from "@/content";
import { cv } from "@/content/cv";
import { OWNER, SITE_URL } from "./site";

// ATS-friendly on purpose: one column, standard headings, built-in Helvetica, real text, no
// tables, icons, or images, and the reading order matches the visual order.
const ink = "#0d0e10";
const soft = "#4a4640";
const rule = "#b9b1a6";

const styles = StyleSheet.create({
  page: { paddingTop: 34, paddingBottom: 30, paddingHorizontal: 40, fontFamily: "Helvetica", fontSize: 9, lineHeight: 1.36, color: ink },
  name: { fontFamily: "Helvetica-Bold", fontSize: 19, lineHeight: 1.1 },
  role: { fontSize: 10.5, marginTop: 2 },
  contact: { marginTop: 4, color: soft },
  section: { marginTop: 10 },
  heading: { fontFamily: "Helvetica-Bold", fontSize: 10, textTransform: "uppercase", letterSpacing: 0.6, paddingBottom: 2, marginBottom: 5, borderBottomWidth: 0.75, borderBottomColor: rule },
  entry: { marginBottom: 6 },
  entryTitle: { fontFamily: "Helvetica-Bold" },
  entryMeta: { color: soft },
  bullet: { flexDirection: "row", marginTop: 1.5 },
  dot: { width: 10 },
  bulletText: { flex: 1 },
  line: { marginBottom: 2 },
  label: { fontFamily: "Helvetica-Bold" },
  link: { color: ink, textDecoration: "none" },
});

function Bullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bullet} wrap={false}>
          <Text style={styles.dot}>-</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

function CvDocument({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const copy = cv[locale];
  const site = SITE_URL.replace(/^https?:\/\//, "");
  const github = OWNER.sameAs[0].replace(/^https?:\/\//, "");
  const linkedin = OWNER.sameAs[1].replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const { experience } = dict;

  return (
    <Document title={copy.documentTitle} author={OWNER.name} subject={dict.hero.role} language={locale} creator={OWNER.name} producer={site}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{OWNER.name}</Text>
        <Text style={styles.role}>
          {dict.hero.role} | {dict.hero.location}
        </Text>
        <Text style={styles.contact}>
          <Link src={`mailto:${OWNER.email}`} style={styles.link}>{OWNER.email}</Link>
          {"  |  "}
          <Link src={`${SITE_URL}/${locale}/`} style={styles.link}>{site}</Link>
          {"  |  "}
          <Link src={OWNER.sameAs[0]} style={styles.link}>{github}</Link>
          {"  |  "}
          <Link src={OWNER.sameAs[1]} style={styles.link}>{linkedin}</Link>
        </Text>

        <View style={styles.section}>
          <Text style={styles.heading}>{copy.headings.summary}</Text>
          <Text>{copy.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{copy.headings.skills}</Text>
          {dict.skills.groups.map((group) => (
            <Text key={group.label} style={styles.line}>
              <Text style={styles.label}>{group.label}: </Text>
              {group.items.join(", ")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{copy.headings.experience}</Text>
          {experience.roles.map((role) => (
            <View key={role.org} style={styles.entry}>
              <Text>
                <Text style={styles.entryTitle}>{role.title}</Text>, {role.org}
                <Text style={styles.entryMeta}>{`  |  ${role.period}`}</Text>
              </Text>
              <Bullets items={copy.bullets[role.org] ?? (role.note ? [role.note] : [])} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{copy.headings.projects}</Text>
          {copy.projects.map((project) => (
            <View key={project.name} style={styles.entry}>
              <Text>
                <Text style={styles.entryTitle}>{project.name}</Text>, {project.context}
                <Text style={styles.entryMeta}>{`  |  ${project.period}${project.link ? `  |  ${project.link}` : ""}`}</Text>
              </Text>
              <Bullets items={project.bullets} />
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.heading}>{copy.headings.education}</Text>
          <Text>
            <Text style={styles.entryTitle}>{experience.education.title}</Text>, {experience.education.org}
            <Text style={styles.entryMeta}>{`  |  ${experience.education.period}`}</Text>
          </Text>
          <Text>{experience.education.note}</Text>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.heading}>{copy.headings.languages}</Text>
          <Text>
            {dict.languages.items
              // The site keeps "Deutsch" as a nod to the language; a CV uses the keyword recruiters search for.
              .map((item) => `${locale === "en" && item.name === "Deutsch" ? "German" : item.name} (${item.level})`)
              .join(", ")}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export function renderCv(locale: Locale): Promise<Buffer> {
  return renderToBuffer(<CvDocument locale={locale} />);
}
