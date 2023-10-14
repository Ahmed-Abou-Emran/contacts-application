import React from "react";
import styled from "styled-components";
import { ContactsContext } from "./ContactsProvider";

function SearchUserInput() {
  const { onSearchChange, searchName } = React.useContext(ContactsContext);

  return (
    <SearchInput
      value={searchName}
      onChange={onSearchChange}
      placeholder="Search by Name"
    />
  );
}

const SearchInput = styled.input`
  width: 100%;
  /* width: 946px; */
  height: 45px;
  border-radius: 25px;
  background: #fff;
  padding: var(--spacing-30) var(--spacing-40);
`;
export default SearchUserInput;
