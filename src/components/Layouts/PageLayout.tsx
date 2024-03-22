import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export default function PageLayout({ title, children }: Props) {
  return (
    <div className="w-full min-h-screen">
      <h1 className="font-bold text-3xl mb-8">{title}</h1>
      <div>{children}</div>
    </div>
  );
}
