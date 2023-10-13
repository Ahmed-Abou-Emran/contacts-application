import React from "react";
import styled from "styled-components";

function SearchUserInput() {
  return (
    // <SearchInputWrapper>
    <SearchInput placeholder="Search by Name" />
    // </SearchInputWrapper>
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
