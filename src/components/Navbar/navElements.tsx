import { ICONS } from "../Icons/Icons";

interface NavElement {
  icon: JSX.Element;
  text: string;
  link: string;
}

export const NAV_ELEMENTS: NavElement[] = [
  { icon: ICONS.CUP, text: "Tournaments", link: "/tournaments" },
  { icon: ICONS.CLUBS, text: "Clubs", link: "/clubs" },
  { icon: ICONS.STAR, text: "Rating", link: "/rating" },
];
