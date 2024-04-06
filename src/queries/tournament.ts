import { QUERY_KEYS } from "@/constants/queryKeys";
import { getTournaments } from "@/requests/tournament";
import { useQuery } from "@tanstack/react-query";

export default function useTournaments() {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.TOURNAMENTS],
    queryFn: getTournaments,
  });

  return {
    data,
    isLoading,
  };
}
