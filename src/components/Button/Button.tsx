import cn from "classnames";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type ButtonType = "primary" | "outline" | "text";

interface Props {
  text: string;
  icon?: JSX.Element;
  type?: ButtonType;
  isLoading?: boolean;
  onClick: () => void;
}

export default function Button({
  text,
  icon,
  type = "primary",
  isLoading = false,
  onClick,
}: Props) {
  const CLASSES_BY_TYPE = {
    primary: "bg-accent",
    outline: "border border-2 border-accent",
    text: "text-text",
  };

  return (
    <button
      className={cn(
        "flex items-center px-12 py-4 text-textLight rounded-primary shadow-lg",
        CLASSES_BY_TYPE[type]
      )}
      onClick={onClick}
    >
      {icon && (
        <>
          {!isLoading ? (
            <span className="text-4xl">{icon}</span>
          ) : (
            <LoadingSpinner
              size="m"
              {...(type !== "text" && { light: true })}
            />
          )}
        </>
      )}
      <h1 className="text-xl font-bold ml-4">{text}</h1>
    </button>
  );
}
