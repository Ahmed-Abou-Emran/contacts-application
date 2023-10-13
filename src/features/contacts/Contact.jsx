import image from "../../assets/contacts/4.jpg";
import styled from "styled-components";
import {
  AiOutlineEdit as Edit,
  AiOutlineDelete as Delete,
} from "react-icons/ai";
import { ContactDialog } from "../../ui/ContactDialog";
function Contact() {
  {
    /* contact details should be a form, to enable edit in same place */
  }
  return (
    <Wrapper>
      <Details>
        <ImageWrapper>
          <Image src={image}></Image>
        </ImageWrapper>
        <ContactInfo>
          <div className="name"> Ahmed Ali</div>
          <PhoneNumber> +201158653666</PhoneNumber>
        </ContactInfo>
      </Details>
      <ContactDialog />
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
