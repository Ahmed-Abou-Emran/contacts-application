import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditContact } from "../../services/apiContacts";
import { toast } from "react-hot-toast";

export function useEditContact() {
  const queryClient = useQueryClient();

  const { mutate: editContact, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newContactData, id }) => addEditContact(newContactData, id),
    onSuccess: () => {
      toast.success("Contact successfully edited");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, editContact };
}
