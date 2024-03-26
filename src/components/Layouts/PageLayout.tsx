import { ReactNode } from "react";
import Button from "../Button/Button";
import { ICONS } from "../Icons/Icons";
import { useNavigate } from "react-router";

interface Props {
  title?: string;
  titleElement?: ReactNode;
  children?: ReactNode;
  withBackButton?: boolean;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
}

export default function PageLayout({
  title,
  titleElement,
  withBackButton = false,
  onActionButtonClick,
  actionButtonText = "Create",
  children,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen">
      <div className="flex w-full gap-4 justify-between items-center">
        {withBackButton && (
          <div className="text-2xl cursor-pointer" onClick={() => navigate(-1)}>
            {ICONS.ARROW_LEFT}
          </div>
        )}
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
