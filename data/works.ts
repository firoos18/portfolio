import { v4 as uuid } from "uuid";

export interface WorksItemProps {
  id: string;
  title: string;
  image: string;
  desc: string;
  links: string;
  stacks: string[];
}

export const worksList: WorksItemProps[] = [
  {
    id: uuid(),
    title: "SILAB",
    image: "silab.svg",
    desc: "Class Management application used in Information System's Laboratory",
    links: "https://github.com/firoos18/silab",
    stacks: ["Flutter", "NodeJS", "MongoDB"],
  },
  {
    id: uuid(),
    title: "Sehatin",
    image: "sehatin.svg",
    desc: "Food Order application for diet enthusiast which provide various customs for fulfilling customer's diet plan",
    links: "https://github.com/firoos18/sehatin",
    stacks: ["Flutter", "Firebase"],
  },
  {
    id: uuid(),
    title: "Rentzy",
    image: "rentzy.svg",
    desc: "Motorcycle Rental application",
    links: "https://github.com/firoos18/Rentzy",
    stacks: ["Flutter", "Firebase"],
  },
];
