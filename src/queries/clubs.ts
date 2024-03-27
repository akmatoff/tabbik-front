import { QUERY_KEYS } from "@/constants/queryKeys";
import {
  approveClubJoinRequest,
  getClubDetails,
  getClubJoinRequests,
  getClubs,
  joinClub,
  requestToJoinClub,
} from "@/requests/clubs";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useClubs() {
  const { data, isLoading } = useQuery({
    queryFn: getClubs,
    queryKey: [QUERY_KEYS.CLUBS],
  });

  return {
    data,
    isLoading,
  };
}

interface QueryParams {
  id: number;
}

export function useClubDetails({ id }: QueryParams) {
  const { data, isLoading } = useQuery({
    queryFn: () => getClubDetails(id),
    queryKey: [QUERY_KEYS.CLUBS, id],
  });

  return {
    data,
    isLoading,
  };
}

export function useClubJoinRequests({ id }: QueryParams) {
  const { data, isLoading } = useQuery({
    queryFn: () => getClubJoinRequests(id),
    queryKey: [QUERY_KEYS.CLUBS, id, QUERY_KEYS.CLUB_JOIN_REQUESTS],
  });

  return {
    data,
    isLoading,
  };
}

interface MutationParams {
  id: number;
  onSuccess?: () => void;
  onError?: () => void;
}

export function useRequestToJoinClub({
  id,
  onSuccess,
  onError,
}: MutationParams) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => requestToJoinClub(id),
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
  };
}

export function useJoinClub({ id, onSuccess, onError }: MutationParams) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => joinClub(id),
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
  };
}

export function useApproveJoinRequest({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (error: string) => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => approveClubJoinRequest(id),
    onSuccess,
    onError: (error) => onError(error.message),
  });

  return {
    mutate,
    isPending,
  };
}
