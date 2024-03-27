import { Tab, Tabs } from "@/components/Tabs/Tabs";
import { ROUTES } from "@/constants/routes";
import { useUserdata } from "@/queries/userdata";
import PageLayout from "@/components/Layouts/PageLayout";
import ClubsList from "./components/ClubsList";

export default function Clubs() {
  const { data: userData } = useUserdata();

  return (
    <div className="flex flex-col gap-4 w-full">
      <PageLayout
        titleElement={
          <Tabs>
            <Tab to={ROUTES.CLUBS} label="Clubs" />
            {userData?.club && (
              <Tab
                to={ROUTES.CLUB_DETAILS(userData?.club.id)}
                label="My club"
              />
            )}
          </Tabs>
        }
      >
        <ClubsList />
      </PageLayout>
    </div>
  );
}
