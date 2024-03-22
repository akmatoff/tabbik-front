import { ReactNode } from "react";
import Button from "../Button/Button";

import { LuPlus } from "react-icons/lu";

interface Props {
  title: string;
  children?: ReactNode;
  onActionButtonClick?: () => void;
}

export default function PageLayout({
  title,
  onActionButtonClick,
  children,
}: Props) {
  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full justify-between">
        <h1 className="font-bold text-3xl mb-8">{title}</h1>
        <div>
          {onActionButtonClick && (
            <Button
              icon={<LuPlus />}
              text="Create"
              onClick={onActionButtonClick}
            />
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
