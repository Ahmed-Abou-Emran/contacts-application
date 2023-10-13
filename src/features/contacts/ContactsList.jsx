import React from "react";
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
  display: flex;
  flex-direction: column;
  gap: 86px;
`;
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 150px;
`;

const Pagination = styled.div`
  color: var(--white-100);
  font-size: 22px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 14px;
  right: 14px;
`;
const Button = styled.button`
  background: none;
  color: var(--white-100);
  font-size: 22px;

  &:hover {
    color: var(--white-300);
    cursor: pointer;
  }
`;

export default ContactsList;
