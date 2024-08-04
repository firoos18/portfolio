import Image from "next/image";
import Link from "next/link";

interface CarouselProjectDetailsProps {
  images: string[];
  index: number;
}

export default function CarouselProjectDetails({
  images,
  index,
}: CarouselProjectDetailsProps) {
  return (
    <div
      id={`carousel-item-${index}`}
      className="carousel-item h-full md:relative md:w-full md:justify-center"
    >
      <div className="hidden md:relative md:flex md:flex-col">
        <Image
          src={images[index]}
          alt={`${images}`}
          width={300}
          height={300}
          className="h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      <Image
        src={images[index]}
        alt={`${images}`}
        width={200}
        height={50}
        style={{ objectFit: "contain" }}
        className="md:hidden"
      />

      <div className="absolute left-2 right-2 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex">
        <Link
          href={`#carousel-item-${index === 0 ? images.length - 1 : index - 1}`}
          className="btn btn-circle"
        >
          ❮
        </Link>
        <Link
          href={`#carousel-item-${index === images.length - 1 ? 0 : index + 1}`}
          className="btn btn-circle"
        >
          ❯
        </Link>
      </div>
    </div>
  );
}
