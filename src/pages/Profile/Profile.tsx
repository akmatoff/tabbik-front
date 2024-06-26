import { useUserdata } from "@/queries/userdata";
import { useMemo } from "react";

export default function Profile() {
  const { data: userdata, isLoading } = useUserdata();

  const user = useMemo(() => userdata?.user, [userdata]);
  const club = useMemo(() => userdata?.club, [userdata]);

  return (
    <div className="w-full min-h-screen">
      <div className="bg-white p-6 rounded-primary flex flex-col">
        {userdata && user && club && !isLoading && (
          <>
            <h1 className="font-bold text-2xl">{`${user.first_name} ${user.last_name}`}</h1>
            <h1 className="font-bold">{user.username}</h1>
            <h1>{user.email}</h1>
            <div className="flex items-center gap-4">
              <img
                className="w-20 h-20 rounded-secondary"
                src={club.icon}
                alt="club logo"
              />
              <h1>{club.title}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
