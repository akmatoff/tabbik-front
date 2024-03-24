import { useParams } from "react-router";
import Tab from "./Tab";
import { useEffect, useState } from "react";

interface Props {
  children: JSX.Element[] | null;
}

export default function Tabs({ children }: Props) {
  const { tab } = useParams();

  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(children?.[0].props.label);
  }, [children]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex">
        <div className="flex bg-white rounded-primary gap-1 p-1">
          {children?.map((tab) => (
            <Tab
              label={tab.props.label}
              className={
                tab.props.label === activeTab
                  ? "font-bold bg-accent text-white"
                  : "text-text"
              }
              onClick={() => setActiveTab(tab.props.label)}
            />
          ))}
        </div>
      </div>
      {children?.map((child) => {
        if (child.props.label !== activeTab) return null;

        return child.props.children;
      })}
    </div>
  );
}
