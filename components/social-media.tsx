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
      className="flex h-9 w-9 justify-center rounded-lg border p-1 shadow-sm shadow-violet-500 duration-500 hover:-translate-x-1 hover:-translate-y-1 hover/item:bg-violet-700 hover:shadow-2xl"
    >
      <Image src={icon} alt={alt} width={"24"} height={"24"} />
    </Link>
  );
}
