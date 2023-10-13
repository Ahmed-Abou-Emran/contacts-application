import styled from "styled-components";
import ContactsActions from "./ContactsActions";
import { DUMMY_CONTACTS } from "../../data/contacts";
import Contact from "./Contact";
import { AiOutlineRight as Right, AiOutlineLeft as Left } from "react-icons/ai";

function ContactsList() {
  return (
    <Wrapper>
      <ContactsActions />
      <ContactsWrapper>
        {DUMMY_CONTACTS.map((contact) => {
          return (
            <>
              <Contact />
              <div className="horizontalLine"></div>
            </>
          );
        })}
      </ContactsWrapper>

      <Pagination>
        <Button>
          <Left />
        </Button>
        {/* to be dynamic */}
        <span>1/10</span>
        <Button>
          <Right />
        </Button>
      </Pagination>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-80);
  border-radius: 25px;
  border: 1px solid #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  @media (max-width: 37.5rem) {
    padding: var(--spacing-80) var(--spacing-40);
    border-radius: 0;
    border: 0;
    gap: var(--spacing-100);
    box-shadow: none;
  }
`;
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-40);
  margin-bottom: var(--spacing-400);

  @media (max-width: 37.5rem) {
    margin-bottom: var(--spacing-100);
  }
`;

const Pagination = styled.div`
  color: var(--white-100);
  font-size: 1.375rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 14px;
  right: 14px;
`;
const Button = styled.button`
  background: none;
  color: var(--white-100);
  font-size: 1.375rem;

  &:hover {
    color: var(--white-300);
    cursor: pointer;
  }
`;

export default ContactsList;
