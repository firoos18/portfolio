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
      className="w-9 h-9 p-1 border rounded-lg flex justify-center hover/item:bg-violet-700 shadow-sm hover:shadow-2xl shadow-violet-500 duration-500 hover:-translate-x-1 hover:-translate-y-1"
    >
      <Image src={icon} alt={alt} width={"24"} height={"24"} />
    </Link>
  );
}
