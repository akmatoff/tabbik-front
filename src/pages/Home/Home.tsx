import { useUserdata } from "@/queries/userdata";

export default function Home() {
  useUserdata();

  return <div className="w-full min-h-full"></div>;
}
