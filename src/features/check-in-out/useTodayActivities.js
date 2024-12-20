import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivities() {
  const { data: activities, isLoading } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"]
  });

  return { activities, isLoading };
}
