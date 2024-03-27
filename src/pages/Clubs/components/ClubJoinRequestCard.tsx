import Button from "@/components/Button/Button";
import { ICONS } from "@/components/Icons/Icons";
import { useNotification } from "@/hooks/useNotification";
import { IClubJoinRequest } from "@/interfaces/club";
import { useApproveJoinRequest } from "@/queries/clubs";

interface Props {
  request: IClubJoinRequest;
}

export default function ClubJoinRequestCard({ request }: Props) {
  const { showErrorNotification, showSuccessNotification } = useNotification();

  const { mutate: approve, isPending } = useApproveJoinRequest({
    onSuccess: () => {
      showSuccessNotification("Approved!");
    },
    onError: (error) => {
      showErrorNotification(error);
    },
  });

  const handleRequestApprove = (id: number) => {
    approve(id);
  };

  return (
    <div className="flex justify-between p-6 bg-white rounded-secondary">
      <div>
        <h1 className="font-bold">
          {request.user.first_name} {request.user.last_name}
        </h1>
        <h2 className="text-textSecondary">{request.user.username}</h2>
      </div>

      {!request.is_approved ? (
        <Button
          icon={ICONS.CHECK}
          text="Approve request"
          isLoading={isPending}
          onClick={() => handleRequestApprove(request.id)}
        />
      ) : (
        <Button text="Approved" isDisabled />
      )}
    </div>
  );
}
