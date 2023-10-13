import SearchUserInput from "./SearchInput";
import { AiFillPlusCircle as Plus } from "react-icons/ai";
import styled from "styled-components";
function ContactsActions() {
  return (
    <Wrapper>
      <SearchUserInput />
      <ButtonWithIcon>
        <Plus style={{ fontSize: "22px" }} />
        Add New Contact
      </ButtonWithIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-100);

  @media (max-width: 37.5rem) {
    gap: var(--spacing-50);
  }
`;
const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14.375rem;
  height: 3.75rem;
  background-color: var(--sky-400);
  align-self: flex-end;

  @media (max-width: 37.5rem) {
    align-self: center;
  }

  padding: 0.875rem 1.25rem;
  border-radius: 20px;
  color: #fff;
  font-size: 1.25rem;
  transition: all 300ms ease-in;

  &:hover {
    cursor: pointer;
    background-color: var(--sky-600);
  }
`;

export default ContactsActions;
