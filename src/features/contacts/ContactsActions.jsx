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

  gap: 40px;
`;
const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 61px;
  background-color: var(--sky-400);
  align-self: flex-end;

  padding: 14px 20px;
  border-radius: 20px;
  color: #fff;
  font-size: 18px;
  transition: all 300ms ease-in;

  &:hover {
    cursor: pointer;
    background-color: var(--sky-600);
  }
`;

export default ContactsActions;
