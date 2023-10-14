import React from "react";

import styled from "styled-components";
import ContactsList from "../features/contacts/ContactsList";
import ContactForm from "../features/contacts/ContactForm";
import { ContactsContext } from "../features/contacts/ContactsProvider";
function Contacts() {
  const { formIsOpen } = React.useContext(ContactsContext);
  return (
    <Main>
      <ContainerWrapper>
        {!formIsOpen && <ContactsList />}
        {formIsOpen && <ContactForm />}
      </ContainerWrapper>
    </Main>
  );
}
const Main = styled.main`
  width: var(--container-width);
  height: 100%;
  position: relative;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: var(--spacing-80);

  @media (max-width: 37.5rem) {
    padding: 0;
  }
`;
export default Contacts;
