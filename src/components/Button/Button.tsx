import cn from "classnames";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type ButtonType = "primary" | "outline" | "text" | "big";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  text: string;
  size?: ButtonSize;
  icon?: JSX.Element;
  type?: ButtonType;
  isLoading?: boolean;
  onClick: () => void;
}

export default function Button({
  text,
  icon,
  size = "sm",
  type = "primary",
  isLoading = false,
  onClick,
}: Props) {
  const CLASSES_BY_TYPE = {
    primary: "bg-accent px-5 py-2",
    outline: "border border border-accent px-5 py-2",
    text: "text-text px-5 py-2",
    big: "bg-accent px-12 py-4",
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
        "flex items-center rounded-primary shadow-lg gap-2",
        CLASSES_BY_TYPE[type]
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
              size="m"
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
