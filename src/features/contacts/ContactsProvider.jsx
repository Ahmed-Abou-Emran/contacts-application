import React from "react";
export const ContactsContext = React.createContext();
function ContactsProvider({ children }) {
  const [searchName, setSearchName] = React.useState(" ");
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState(null);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchName(e.target.value);
  };
  return (
    <ContactsContext.Provider
      value={{
        formIsOpen,
        setFormIsOpen,
        selectedContact,
        setSelectedContact,
        isEditing,
        setIsEditing,
        searchName,
        onSearchChange,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
