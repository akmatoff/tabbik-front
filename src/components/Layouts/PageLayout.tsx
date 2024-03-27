import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import { ICONS } from "../Icons/Icons";
import { useNavigate } from "react-router";
import { IDropdownOption } from "@/interfaces/common";

interface Props {
  title?: string;
  titleElement?: ReactNode;
  children?: ReactNode;
  options?: IDropdownOption[];
  withOptionsButton?: boolean;
  withBackButton?: boolean;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
}

export default function PageLayout({
  title,
  titleElement,
  withBackButton = false,
  withOptionsButton = false,
  actionButtonText = "Create",
  options,
  children,
  onActionButtonClick,
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

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

          {options && withOptionsButton && (
            <div>
              <div
                className="p-2 rounded-full bg-white text-xl cursor-pointer"
                onClick={() => setShowDropdown(true)}
              >
                {ICONS.THREE_DOTS}
              </div>

              {showDropdown && (
                <>
                  <div
                    className="top-0 left-0 absolute w-screen h-screen"
                    onClick={() => setShowDropdown(false)}
                  ></div>
                  <div className="mt-2 -ml-20 absolute z-40 bg-white rounded-secondary cursor-pointer shadow-lg">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="px-4 py-3"
                        onClick={() => {
                          option.onClick();
                          setShowDropdown(false);
                        }}
                      >
                        {option.text}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
