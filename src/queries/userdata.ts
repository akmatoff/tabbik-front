import { QUERY_KEYS } from "@/constants/queryKeys";
import { getUserdata } from "@/requests/userdata";
import { useQuery } from "@tanstack/react-query";

export function useUserdata() {
  const { data, isLoading } = useQuery({
    queryFn: getUserdata,
    queryKey: [QUERY_KEYS.USERDATA],
    staleTime: 60 * 1000 * 60,
  });

  return {
    data,
    isLoading,
  };
}
