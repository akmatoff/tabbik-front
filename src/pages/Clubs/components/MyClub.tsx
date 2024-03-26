import { useUserdata } from "@/queries/userdata";
import { Navigate } from "react-router";

export default function MyClub() {
  const { data: userData } = useUserdata();

  if (!userData?.club) {
    return <Navigate to="/clubs/list"></Navigate>;
  }

  return <div>{userData?.club?.title}</div>;
}
