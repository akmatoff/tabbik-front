import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

import { useClubJoinRequests } from "@/queries/clubs";
import { useParams } from "react-router";
import ClubJoinRequestCard from "./ClubJoinRequestCard";

export default function ClubJoinRequests() {
  const { id } = useParams();

  const { data: joinRequests, isLoading } = useClubJoinRequests({ id: +id! });

  return (
    <div>
      {isLoading && (
        <div className="grid w-full h-60 place-content-center">
          <LoadingSpinner size="l" />
        </div>
      )}
      <div className="flex flex-col gap-4 mt-4">
        {joinRequests &&
          !isLoading &&
          joinRequests.map((request) => (
            <ClubJoinRequestCard key={request.id} request={request} />
          ))}
      </div>
    </div>
  );
}
