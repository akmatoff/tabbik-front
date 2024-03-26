import dayjs from "dayjs";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useClubDetails } from "@/queries/clubs";
import { useParams } from "react-router";
import ClubBanner from "./components/ClubBanner";
import { DATE_TIME_FORMAT } from "@/constants/common";

export default function ClubDetails() {
  const { id } = useParams();

  const { data: club, isLoading } = useClubDetails({ id: +id! });

  return (
    <div className="w-full">
      {isLoading && (
        <div className="w-full min-h-60 grid place-content-center">
          <LoadingSpinner size="l" />
        </div>
      )}
      {club && !isLoading && (
        <>
          <ClubBanner club={club} />

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
              <div className="bg-white p-6 rounded-secondary">
                <h1 className="font-bold text-lg">Leader</h1>
                {club.club_leader.username}
              </div>
              <div className="bg-white p-6 rounded-secondary">
                <h1 className="font-bold text-lg">Created</h1>
                {dayjs(club.created).format(DATE_TIME_FORMAT)}
              </div>
            </div>
            <div className="bg-white p-6 rounded-secondary">
              <h1 className="font-bold text-lg">Description</h1>
              {club.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
