import { IoPeopleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

interface NavElement {
  icon: JSX.Element;
  text: string;
  link: string;
}

export const NAV_ELEMENTS: NavElement[] = [
  { icon: <MdEmojiEvents />, text: "Tournaments", link: "/tournaments" },
  { icon: <IoPeopleSharp />, text: "Clubs", link: "/clubs" },
  { icon: <FaStar />, text: "Rating", link: "/rating" },
  { icon: <IoMdPerson />, text: "Profile", link: "/profile" },
];
