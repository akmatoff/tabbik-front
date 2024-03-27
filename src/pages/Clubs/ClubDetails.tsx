import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useClubDetails } from "@/queries/clubs";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import ClubBanner from "./components/ClubBanner";
import PageLayout from "@/components/Layouts/PageLayout";
import { Tab, Tabs } from "@/components/Tabs/Tabs";
import { ROUTES } from "@/constants/routes";
import { useUserdata } from "@/queries/userdata";
import ClubInfo from "./components/ClubInfo";
import { useEffect } from "react";
import ClubJoinRequests from "./components/ClubJoinRequests";

export default function ClubDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { data: userData } = useUserdata();

  const { data: club, isLoading } = useClubDetails({ id: +id! });

  useEffect(() => {
    club && pathname === "/clubs" && navigate(ROUTES.CLUB_DETAILS(club.id));
  }, [club, navigate, pathname]);

  return (
    <PageLayout
      titleElement={
        <Tabs>
          <Tab to={ROUTES.CLUBS} label="Clubs" />
          {userData?.club && (
            <Tab to={ROUTES.CLUB_DETAILS(userData?.club.id)} label="My club" />
          )}
        </Tabs>
      }
      options={[
        {
          text: "Join requests",
          onClick: () => {
            if (club) {
              navigate(ROUTES.CLUB_JOIN_REQUESTS(club.id));
            }
          },
        },
      ]}
      withOptionsButton={userData?.user.id === club?.club_leader.id}
    >
      <div className="w-full">
        {isLoading && (
          <div className="w-full min-h-60 grid place-content-center">
            <LoadingSpinner size="l" />
          </div>
        )}
        {club && !isLoading && (
          <>
            <ClubBanner club={club} />

            <Routes>
              <Route index path="details" element={<ClubInfo club={club} />} />
              <Route path="join-requests" element={<ClubJoinRequests />} />
            </Routes>
          </>
        )}
      </div>
    </PageLayout>
  );
}
