import "./App.css";

import styled from "styled-components";
import ContactsList from "./features/contacts/ContactsList";
import ContactForm from "./features/contacts/ContactForm";

function App() {
  return (
    <Main>
      <ContainerWrapper>
        {/* <ContactsList /> */}
        <ContactForm />
      </ContainerWrapper>
    </Main>
  );
}

const Main = styled.main`
  width: 1164px;
  height: 667px;
  border-radius: 25px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100%;
  padding: 32px;
  position: relative;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 70px;

  height: 100%;
  width: 100%;
`;
export default App;
