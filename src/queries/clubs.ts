import { QUERY_KEYS } from "@/constants/queryKeys";
import { getClubs, requestToJoinClub } from "@/requests/clubs";
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
  onSuccess?: () => void;
  onError?: () => void;
}

export function useRequestToJoinClub({ id, onSuccess, onError }: QueryParams) {
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
