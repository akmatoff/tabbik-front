import { useClubs } from "@/queries/clubs";
import ClubCard from "./components/ClubCard/ClubCard";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Tabs from "@/components/Tabs/Tabs";
import Tab from "@/components/Tabs/Tab";
import { useUserdata } from "@/queries/userdata";

export default function Clubs() {
  const { data: clubs, isLoading } = useClubs();

  const { data: userData } = useUserdata();

  return (
    <div className="w-full">
      <Tabs>
        <Tab label="Clubs">
          {isLoading && (
            <div className="w-full min-h-96 grid place-content-center">
              <LoadingSpinner size="l" />
            </div>
          )}
          {!isLoading && (
            <div className="grid md:grid-cols-2 gap-6">
              {clubs?.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          )}
        </Tab>
        {userData?.club ? (
          <Tab label="My club">
            <ClubCard club={userData?.club} />
          </Tab>
        ) : (
          <div></div>
        )}
      </Tabs>
    </div>
  );
}
