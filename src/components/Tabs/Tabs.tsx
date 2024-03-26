import { ReactNode } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export function Tabs({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex">
        <div className="flex bg-white rounded-primary gap-1 p-1">
          {children}
        </div>
      </div>
    </div>
  );
}

interface TabProps {
  label: string;
  to: string;
}

export function Tab({ label, to }: TabProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={cn(
        "px-6 py-2 text-lg cursor-pointer rounded-primary duration-300",
        pathname.includes(to) ? "bg-secondary text-textLight font-bold" : ""
      )}
    >
      {label}
    </Link>
  );
}
