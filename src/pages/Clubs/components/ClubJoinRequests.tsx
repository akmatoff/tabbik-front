import Button from "@/components/Button/Button";
import { ICONS } from "@/components/Icons/Icons";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useClubJoinRequests } from "@/queries/clubs";
import { useParams } from "react-router";

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
            <div className="flex justify-between p-6 bg-white rounded-secondary">
              <div>
                <h1 className="font-bold">
                  {request.user.first_name} {request.user.last_name}
                </h1>
                <h2 className="text-textSecondary">{request.user.username}</h2>
              </div>

              <Button icon={ICONS.CHECK} text="Approve request" />
            </div>
          ))}
      </div>
    </div>
  );
}
