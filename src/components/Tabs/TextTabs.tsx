import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

interface Props {
  children?: ReactNode;
}

export function TextTabs({ children }: Props) {
  return <div className="mt-2 flex w-full">{children}</div>;
}

interface TabProps {
  label: string;
  to: string;
}

export function TextTab({ label, to }: TabProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={to}
      className={cn(
        "p-3 border-b-2",
        pathname.endsWith(to)
          ? "font-bold border-secondary"
          : "border-transparent"
      )}
    >
      {label}
    </Link>
  );
}
