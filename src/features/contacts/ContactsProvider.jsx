import React from "react";
export const ContactsContext = React.createContext();
function ContactsProvider({ children }) {
  const [searchName, setSearchName] = React.useState(" ");
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState(null);

  // Searching
  const onSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  // onAddHandler
  const onAddHandler = () => {
    setFormIsOpen(true);
    setSelectedContact(null);
  };

  // Start Editng
  const onStartEditingHandler = (contact) => {
    setIsEditing(true);
    setFormIsOpen(true);
    setSelectedContact(contact);
  };

  // Stop Editing
  const onEndEditingHandler = () => {
    setIsEditing(false);
    setFormIsOpen(false);
  };

  return (
    <ContactsContext.Provider
      value={{
        formIsOpen,
        // setFormIsOpen,
        selectedContact,
        // setSelectedContact,
        isEditing,
        // setIsEditing,
        searchName,
        onSearchChange,
        onAddHandler,
        onStartEditingHandler,
        onEndEditingHandler,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
