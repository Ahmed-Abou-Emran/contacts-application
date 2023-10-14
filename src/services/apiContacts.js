import supabase from "./supabase";

export async function getContacts() {
  const { data, error } = await supabase.from("contacts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }
  return data;
}

export async function addEditContact(newContact, id) {
  let query = supabase.from("contacts");

  if (!id) query = query.insert([{ ...newContact }]);

  if (id) query = query.update({ ...newContact }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Contact could not be created");
  }

  return data;
}

export async function deleteContact(id) {
  const { data, error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Contact could not be deleted");
  }

  return data;
}
