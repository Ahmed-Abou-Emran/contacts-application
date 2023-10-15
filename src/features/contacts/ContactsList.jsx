import React from "react";
import styled from "styled-components";
import ContactsActions from "./ContactsActions";
// import { DUMMY_CONTACTS } from "../../data/contacts";
import Contact from "./Contact";
import { AiOutlineRight as Right, AiOutlineLeft as Left } from "react-icons/ai";
import { useContacts } from "./useContacts";
import { ContactsContext } from "./ContactsProvider";

function ContactsList() {
  const { isLoading, error, contacts } = useContacts();
  const { searchName } = React.useContext(ContactsContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [numOfPages, setNumOfPages] = React.useState(1);
  console.log(contacts);

  let filteredContacts = contacts?.filter((contact) => {
    if (searchName !== "") {
      let fullName = `${contact?.firstName} ${contact?.lastName}`;

      return fullName.toLowerCase().includes(searchName.toLowerCase());
    } else {
      return true;
    }
  });

  const onPageChangeHandler = (dir) => {
    if (currentPage == 1 && dir == -1) return;
    if (currentPage == numOfPages && dir == 1) return;
    setCurrentPage((prevPage) => prevPage + dir);
  };

  React.useEffect(() => {
    setNumOfPages(Math.ceil(filteredContacts?.length / 2));
  }, [filteredContacts]);
  return (
    <Wrapper>
      <ContactsActions />
      {isLoading && <Loading>Loading ...</Loading>}
      {!isLoading && error && <Error> Ops 😢, Something Went wrong</Error>}
      {!isLoading && !error && (
        <>
          <ContactsWrapper>
            {filteredContacts
              ?.reverse()
              .slice(
                (currentPage - 1) * 2, // Calculate the starting index
                (currentPage - 1) * 2 + 2 // Calculate the ending index
              )
              ?.map((contact) => {
                return (
                  <React.Fragment key={contact.id}>
                    <Contact contact={contact} />
                    <div className="horizontalLine"></div>
                  </React.Fragment>
                );
              })}
          </ContactsWrapper>
          <Pagination>
            <Button onClick={() => onPageChangeHandler(-1)}>
              <Left />
            </Button>

            <span>
              {currentPage}/{numOfPages}
            </span>
            <Button onClick={() => onPageChangeHandler(1)}>
              <Right />
            </Button>
          </Pagination>
        </>
      )}
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

const Loading = styled.div`
  margin-inline: auto;
  background-color: var(--white-100);
  color: var(--sky-700);
  /* width: 30rem; */
  padding: 2rem 4rem;
  border-radius: 25px;
  font-weight: 700;
`;
const Error = styled.div`
  margin-inline: auto;
  background-color: var(--white-100);
  color: var(--red-300);
  min-width: 5rem;
  padding: 2rem 4rem;
  border-radius: 25px;
  font-weight: 700;
`;
export default ContactsList;
