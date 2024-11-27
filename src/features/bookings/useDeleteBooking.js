import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { bookingId } = useParams();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: bookingId => deleteBookingApi(bookingId),

    onSuccess: () => {
      toast.success(`Booking was successfully deleted`);
      queryClient.invalidateQueries({
        active: true
      });

      if (bookingId) {
        navigate("/");
      }
    },

    onError: () => {
      toast.error("There was en error while deleting booking");
    }
  });

  return { deleteBooking, isDeleting };
}
