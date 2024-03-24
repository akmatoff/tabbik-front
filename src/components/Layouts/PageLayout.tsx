import { ReactNode } from "react";
import Button from "../Button/Button";
import { ICONS } from "../Icons/Icons";

interface Props {
  title?: string;
  titleElement?: ReactNode;
  children?: ReactNode;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
}

export default function PageLayout({
  title,
  titleElement,
  onActionButtonClick,
  actionButtonText = "Create",
  children,
}: Props) {
  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full justify-between">
        {title && <h1 className="font-bold text-3xl mb-8">{title}</h1>}
        {titleElement}
        <div>
          {onActionButtonClick && (
            <Button
              icon={ICONS.PLUS}
              size="md"
              text={actionButtonText}
              onClick={onActionButtonClick}
            />
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
