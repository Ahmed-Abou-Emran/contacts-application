import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/apiContacts";

export function useContacts() {
  const {
    isLoading,
    data: contacts,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  return { isLoading, error, contacts };
}
