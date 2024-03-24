import Button from "@/components/Button/Button";
import { IClub } from "@/interfaces/club";
import { useUserdata } from "@/queries/userdata";
import { useJoinClub, useRequestToJoinClub } from "@/queries/clubs";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useNotification } from "@/hooks/useNotification";
import { ICONS } from "@/components/Icons/Icons";
import { useCallback } from "react";

interface Props {
  club: IClub;
}

export default function ClubCard({ club }: Props) {
  const queryClient = useQueryClient();

  const { data: userData } = useUserdata();

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const { mutate: requestToJoin, isPending: isRequestPending } =
    useRequestToJoinClub({
      id: club.id,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CLUBS] });
        showSuccessNotification("Join requested!");
      },
      onError: () => {
        showErrorNotification("Failed to send request");
      },
    });

  const { mutate: joinClub, isPending: isJoinPending } = useJoinClub({
    id: club.id,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CLUBS] });
      showSuccessNotification("Joined successfully!");
    },
    onError: () => {
      showErrorNotification("Failed to join the club");
    },
  });

  const handleJoinRequest = useCallback(() => {
    requestToJoin();
  }, [requestToJoin]);

  const handleJoinClub = useCallback(() => {
    joinClub();
  }, [joinClub]);

  const getButtonToDisplay = useCallback(() => {
    if (!userData?.club) {
      if (!club.is_join_requested) {
        return (
          <Button
            icon={ICONS.ARROW_RIGHT}
            text="Request to join"
            isLoading={isRequestPending}
            onClick={handleJoinRequest}
          />
        );
      } else {
        if (club.is_join_request_approved) {
          return (
            <Button
              icon={ICONS.ARROW_RIGHT}
              text="Join the club"
              onClick={handleJoinClub}
              isLoading={isJoinPending}
            />
          );
        }

        return <Button icon={ICONS.CHECK} text="Join requested" isDisabled />;
      }
    }
  }, [
    club,
    isRequestPending,
    isJoinPending,
    userData?.club,
    handleJoinRequest,
    handleJoinClub,
  ]);

  return (
    <div className="flex flex-col p-6 gap-6 bg-white rounded-primary hover:scale-105 duration-300">
      <div className="flex items-center gap-6">
        <img
          src={club.icon}
          alt="club icon"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="font-bold text-xl">{club.title}</h1>
          <p className="font-light text-textSecondary">{club.description}</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            {ICONS.PROFILE}
            <h3 className="text-sm font-light">{club.members_count}</h3>
          </div>
          <div className="flex gap-1 items-center">
            {ICONS.STAR}
            <h3 className="text-sm font-light">{club.rating}</h3>
          </div>
        </div>

        <div>{getButtonToDisplay()}</div>
      </div>
    </div>
  );
}
