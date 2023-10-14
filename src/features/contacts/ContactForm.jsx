import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ContactsContext } from "./ContactsProvider";
import { useAddContact } from "./useAddContact";
import { useEditContact } from "./useEditContact";
const avatarUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png";

export default function ContactForm() {
  const {
    setFormIsOpen,
    selectedContact,
    setSelectedContact,
    isEditing,
    setIsEditing,
  } = React.useContext(ContactsContext);
  const [previewImage, setPreviewImage] = React.useState(null);
  const { isCreating, addContact } = useAddContact();
  const { isUpdating, editCabin } = useEditContact();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: selectedContact,
  });
  let imageSrc = previewImage
    ? previewImage
    : selectedContact?.imageUrl
    ? selectedContact.imageUrl
    : avatarUrl;
  const onSubmit = (data) => {
    if (!isEditing) {
      addContact({ ...data, imageUrl: imageSrc });
    } else {
      editCabin({ newContactData: data, id: selectedContact.id });
    }
    setIsEditing(false);
    setFormIsOpen(false);
    console.log(data);
  };
  const onPreviewHandler = (e) => {
    e.preventDefault();
    setPreviewImage(getValues("imageUrl"));
  };

  // remaining: adding error messages and toasts
  return (
    <FormWrapper key={selectedContact?.id} onSubmit={handleSubmit(onSubmit)}>
      <PersonalImageContainer>
        <ImageWrapper>
          <Image src={imageSrc} />
        </ImageWrapper>
        <ImageInputWrapper>
          <Input
            type="text"
            style={{ flex: 1 }}
            placeholder="Image Url"
            {...register("imageUrl")}
          />
          <Button
            backgroundColor="var(--sky-600)"
            hoverColor="var(--sky-700)"
            color="var(--white-100)"
            borderRadius="25px"
            onClick={onPreviewHandler}
          >
            Preview
          </Button>
        </ImageInputWrapper>
      </PersonalImageContainer>
      <PersonalDetailsWrapper>
        <Input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <Input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <Input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Input
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
        />
      </PersonalDetailsWrapper>
      <ActionsWrapper>
        <Button
          color="#000"
          backgroundColor="var(--white-400)"
          hoverColor="var(--white-300)"
          borderRadius="25px"
          onClick={() => setFormIsOpen(false)}
        >
          Cancel
        </Button>

        <Button
          backgroundColor="var(--sky-400)"
          hoverColor="var(--sky-300)"
          color="var(--white-100)"
          borderRadius="25px"
          type="submit"
        >
          Yes
        </Button>
      </ActionsWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  min-height: var(--container-height);
  padding: var(--spacing-100) var(--spacing-70);
  border-radius: 25px;
  border: 1px solid #fff;
  background: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 38rem) {
    height: 100%;
    width: 100%;
    padding: var(--spacing-50) var(--spacing-35);
    border-radius: 0;
    box-shadow: none;
    border: none;
    background: #fff;
  }
`;

const PersonalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.8rem;
  gap: 2.2rem;
  width: 100%;
`;
const ImageWrapper = styled.div`
  width: 7rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const ImageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: var(--spacing-40);

  @media (max-width: 38rem) {
    flex-direction: column;

    > button {
      align-self: flex-start;
      margin-inline: auto;
    }
  }
`;
const Input = styled.input`
  min-width: 23rem;
  height: 3.5rem;
  border-radius: 25px;
  background: #f5f5f5;
  font-size: 1.25rem;
  padding: 1rem 2.3rem;
  flex: 1;
  @media (max-width: 38rem) {
    min-width: 0;
    width: 100%;
  }
`;

const PersonalDetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-60);

  @media (max-width: 38rem) {
    flex-direction: column;
    flex: 0;
  }
`;
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  margin-top: var(--spacing-120);
`;
const Button = styled.button`
  min-width: 6.25rem;
  height: 2.875rem;
  border-radius: 5px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background-color: ${(props) => props.hoverColor};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;