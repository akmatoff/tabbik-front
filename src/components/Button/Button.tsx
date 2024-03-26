import cn from "classnames";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type ButtonType = "primary" | "outline" | "text" | "big";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  text: string;
  size?: ButtonSize;
  icon?: JSX.Element;
  color?: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  icon,
  color = "accent",
  size = "sm",
  type = "primary",
  isDisabled = false,
  isLoading = false,
  onClick,
}: Props) {
  const CLASSES_BY_TYPE = {
    primary: `px-5 py-2 max-h-12 shadow-md`,
    outline: `bg-transparent border px-5 py-2 max-h-12 border-accent`,
    text: "bg-transparent text-text px-5 py-2 max-h-12",
    big: `px-12 py-4 max-h-20 shadow-lg`,
  };

  const TEXT_COLOR_BY_TYPE = {
    primary: "text-textLight",
    outline: "text-accent",
    text: "text-text",
    big: "text-textLight",
  };

  return (
    <button
      className={cn(
        "flex items-center rounded-primary gap-2",
        CLASSES_BY_TYPE[type],
        isDisabled ? "bg-disabled" : `bg-${color}`
      )}
      onClick={onClick}
    >
      {icon && (
        <>
          {!isLoading ? (
            <span
              className={cn(
                TEXT_COLOR_BY_TYPE[type],
                type === "big" ? "text-4xl" : `text-${size}`
              )}
            >
              {icon}
            </span>
          ) : (
            <LoadingSpinner
              size="xs"
              {...(type !== "text" && { light: true })}
            />
          )}
        </>
      )}
      <h1 className={cn("font-bold", TEXT_COLOR_BY_TYPE[type], `text-${size}`)}>
        {text}
      </h1>
    </button>
  );
}
