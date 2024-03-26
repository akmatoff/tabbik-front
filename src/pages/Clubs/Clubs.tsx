import { Tab, Tabs } from "@/components/Tabs/Tabs";
import { ROUTES } from "@/constants/routes";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useUserdata } from "@/queries/userdata";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Clubs() {
  const navigate = useNavigate();

  const { data: userData } = useUserdata();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/clubs") {
      navigate(ROUTES.CLUBS_LIST);
    }
  }, [navigate, pathname]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <PageLayout
        titleElement={
          <Tabs>
            <Tab to={ROUTES.CLUBS_LIST} label="Clubs" />
            {userData?.club && (
              <Tab
                to={`${ROUTES.CLUBS}/${userData?.club?.id}`}
                label="My club"
              />
            )}
          </Tabs>
        }
        onActionButtonClick={() => {}}
      >
        <Outlet />
      </PageLayout>
    </div>
  );
}
