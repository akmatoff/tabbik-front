import { QUERY_KEYS } from "@/constants/queryKeys";
import {
  getClubDetails,
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
