import Image from "next/image";
import Link from "next/link";

interface SocialMediaProps {
  icon: string;
  alt: string;
  link: string;
}

export default function SocialMedia({ icon, alt, link }: SocialMediaProps) {
  return (
    <Link
      href={link}
      className="w-9 h-9 p-1 border rounded-lg flex justify-center hover:bg-violet-950"
    >
      <Image src={icon} alt={alt} width={"24"} height={"24"} />
    </Link>
  );
}
