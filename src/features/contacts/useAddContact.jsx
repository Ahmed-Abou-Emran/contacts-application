import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addEditContact } from "../../services/apiContacts";

export function useAddContact() {
  const queryClient = useQueryClient();

  const { mutate: addContact, isLoading: isCreating } = useMutation({
    mutationFn: addEditContact,
    onSuccess: () => {
      toast.success("New Contact successfully created");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addContact };
}
