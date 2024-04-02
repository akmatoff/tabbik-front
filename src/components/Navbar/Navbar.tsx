import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ELEMENTS } from "./navElements";
import TabbikLogo from "@/assets/tabbik_logo.svg";
import cn from "classnames";
import { useUserdata } from "@/queries/userdata";
import Dropdown from "../Dropdown/Dropdown";
import { ROUTES } from "@/constants/routes";

export default function Navbar() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { data: userData } = useUserdata();

  return (
    <div className="flex items-center px-12 text-text w-full h-24 fixed z-10 justify-between backdrop-blur-sm">
      <Link to="/">
        <img src={TabbikLogo} className="w-36 h-36" />
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex">
          {NAV_ELEMENTS.map((element, index) => (
            <Link key={index} to={element.link} className="font-bold">
              <div
                className={cn(
                  "flex items-center p-6 hover:text-accent duration-300 rounded-primary",
                  pathname.includes(element.link) ? "text-accent" : ""
                )}
              >
                <div className="text-2xl mr-2">{element.icon}</div>
                <h1>{element.text}</h1>
              </div>
            </Link>
          ))}
        </div>

        <Dropdown
          trigger={
            <img
              src={userData?.user.avatar}
              className="w-10 h-10 rounded-full"
            />
          }
          options={[
            { text: "Profile", onClick: () => navigate(ROUTES.PROFILE) },
          ]}
        />
      </div>
    </div>
  );
}
