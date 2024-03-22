import { Link, useLocation } from "react-router-dom";
import { NAV_ELEMENTS } from "./navElements";
import TabbikLogo from "@/assets/tabbik_logo.svg";
import cn from "classnames";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center px-12 text-text w-full h-24 fixed z-10 justify-between backdrop-blur-sm">
      <Link to="/">
        <img src={TabbikLogo} className="w-36 h-36" />
      </Link>
      <div className="flex">
        {NAV_ELEMENTS.map((element, index) => (
          <Link key={index} to={element.link} className="font-bold">
            <div
              className={cn(
                "flex items-center p-7 hover:text-accent duration-300 rounded-primary",
                pathname.includes(element.link) ? "text-accent" : ""
              )}
            >
              <div className="text-2xl mr-4">{element.icon}</div>
              <h1>{element.text}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
