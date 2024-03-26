import { Tab, Tabs } from "@/components/Tabs/Tabs";
import { ROUTES } from "@/constants/routes";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { useUserdata } from "@/queries/userdata";

export default function Clubs() {
  const navigate = useNavigate();

  const { data: userData } = useUserdata();

  useEffect(() => {
    navigate(ROUTES.CLUBS_LIST);
  }, [navigate]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Tabs>
        <Tab to={ROUTES.CLUBS_LIST} label="Clubs" />
        {userData?.club && <Tab to={ROUTES.MY_CLUB} label="My club" />}
      </Tabs>
      <Outlet />
    </div>
  );
}
