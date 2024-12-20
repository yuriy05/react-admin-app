import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: bookingId => deleteBookingApi(bookingId),

    onSuccess: () => {
      toast.success(`Booking was successfully deleted`);
      queryClient.invalidateQueries({
        active: true
      });
    },

    onError: () => {
      toast.error("There was en error while deleting booking");
    }
  });

  return { deleteBooking, isDeleting };
}
