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
  const TEXT_COLOR_BY_TYPE = {
    primary: "text-textLight",
    outline: "text-accent",
    text: "text-text",
    big: "text-textLight",
  };

  return (
    <button
      className={cn(
        `flex items-center gap-2 border-none rounded-primary w-auto h-auto px-6 py-4 min-w-40`,
        isDisabled ? "bg-disabled" : `bg-${color} `
      )}
      disabled={isDisabled}
      onClick={(e) => {
        if (isDisabled) return;

        e.stopPropagation();
        onClick?.();
      }}
    >
      {!isLoading ? (
        <>
          {icon && (
            <span
              className={cn(
                TEXT_COLOR_BY_TYPE[type],
                type === "big" ? "text-4xl" : `text-${size}`
              )}
            >
              {icon}
            </span>
          )}
          <h1
            className={cn(
              "font-bold",
              TEXT_COLOR_BY_TYPE[type],
              `text-${size}`
            )}
          >
            {text}
          </h1>
        </>
      ) : (
        <LoadingSpinner size="xs" {...(type !== "text" && { light: true })} />
      )}
    </button>
  );
}
