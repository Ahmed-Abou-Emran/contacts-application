import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: 15px;

  width: 100%;
  margin-inline: auto;
  &::file-selector-button {
    content: "upload Image";
    width: 100%;
    font: inherit;
    font-weight: 500;
    height: 3.5rem;
    padding: 1rem 2.3rem;

    border-radius: 25px;
    border: none;
    color: var(--white-100);
    background-color: var(--sky-500);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--sky-400);
    }
  }
`;

export default FileInput;
