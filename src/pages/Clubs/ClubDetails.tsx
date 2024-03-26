import { ICONS } from "@/components/Icons/Icons";
// import PageLayout from "@/components/Layouts/PageLayout";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useClubDetails } from "@/queries/clubs";
import { useParams } from "react-router";

export default function ClubDetails() {
  const { id } = useParams();

  const { data: club, isLoading } = useClubDetails({ id: +id! });

  return (
    // <PageLayout withBackButton>
    <div className="w-full">
      {isLoading && (
        <div className="w-full min-h-60 grid place-content-center">
          <LoadingSpinner size="l" />
        </div>
      )}
      {club && !isLoading && (
        <>
          <div className="w-full h-60 relative">
            <div
              className="w-full h-full bg-center bg-no-repeat rounded-secondary absolute"
              style={{
                backgroundImage: `url(${club.icon})`,
                backgroundSize: "110%",
              }}
            ></div>
            <div className="w-full h-full rounded-secondary absolute bg-black opacity-60"></div>
            <div className="flex flex-col justify-center items-center h-full p-6 relative text-textLight">
              <h1 className="text-3xl font-bold">{club.title}</h1>
              <div className="flex gap-4 absolute bottom-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <div className="text-xl">{ICONS.STAR}</div>
                  <div className="text-xl">{club.rating}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xl">{ICONS.PROFILE}</div>
                  <div className="text-xl">{club.members_count}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 gap-4">
            <div className="bg-white p-6 rounded-secondary">
              <h1 className="font-bold text-lg">Description</h1>
              {club.description}
            </div>
            <div className="bg-white p-6 rounded-secondary">
              <h1 className="font-bold text-lg">Leader</h1>
              {club.club_leader.username}
            </div>
          </div>
        </>
      )}
    </div>
    // </PageLayout>
  );
}
