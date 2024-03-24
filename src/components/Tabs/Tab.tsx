import cn from "classnames";
import { ReactNode } from "react";

interface Props {
  label: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Tab({ label, onClick, className }: Props) {
  return (
    <div
      className={cn(
        "px-6 py-2 text-lg cursor-pointer rounded-primary duration-300",
        className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
