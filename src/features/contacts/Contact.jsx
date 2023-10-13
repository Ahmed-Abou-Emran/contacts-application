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
  width: 300px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

const ImageWrapper = styled.div`
  width: 110px;
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
`;

const PhoneNumber = styled.span`
  color: #d9d9d9;
`;

export default Contact;
