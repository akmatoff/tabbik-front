import { QUERY_KEYS } from "@/constants/queryKeys";
import { getClubs } from "@/requests/clubs";
import { useQuery } from "@tanstack/react-query";

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
