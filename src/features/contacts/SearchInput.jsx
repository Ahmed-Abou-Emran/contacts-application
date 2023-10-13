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
  width: 946px;
  height: 45px;
  border-radius: 25px;
  background: #fff;
  padding: 13px 18px;
`;
export default SearchUserInput;
