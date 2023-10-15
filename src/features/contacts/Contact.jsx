import styled from "styled-components";
import { ContactDialog } from "../../ui/ContactDialog";

function Contact({ contact }) {
  const { imageUrl, firstName, lastName, mobileNumber } = contact;

  return (
    <Wrapper>
      <Details>
        <ImageWrapper>
          <Image src={imageUrl}></Image>
        </ImageWrapper>
        <ContactInfo>
          <div className="name">
            {firstName} {lastName}
          </div>
          <PhoneNumber> {mobileNumber}</PhoneNumber>
        </ContactInfo>
      </Details>
      <ContactDialog contact={contact} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18.75rem;
  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  text-align: left;

  @media (max-width: 37.5rem) {
    width: 10rem;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 7rem;

  @media (max-width: 37.5rem) {
    width: 6rem;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 37.5rem) {
    align-items: center;
  }
`;

const PhoneNumber = styled.span`
  color: #d9d9d9;
`;

export default Contact;
