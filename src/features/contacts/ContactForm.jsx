import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ContactsContext } from "./ContactsProvider";
import { useAddContact } from "./useAddContact";
import { useEditContact } from "./useEditContact";
import FileInput from "../../ui/FileInput";
const avatarUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png";

const phoneRegEx =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export default function ContactForm() {
  const [isImageUpload, setIsImageUpload] = React.useState(false);
  const { selectedContact, isEditing, onEndEditingHandler } =
    React.useContext(ContactsContext);
  const [previewImage, setPreviewImage] = React.useState(null);
  const { addContact } = useAddContact();
  const { editContact } = useEditContact();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: selectedContact,
  });

  const imageSrc = previewImage ?? selectedContact?.imageUrl ?? avatarUrl;

  const toggleImageOption = () => {
    setPreviewImage(imageSrc);
    setIsImageUpload((prev) => !prev);
  };
  const onSubmit = (data) => {
    // const image = typeof data.image === "string" ? data.image : data.image[0];

    if (!isEditing) {
      addContact({
        ...data,
        imageUrl: imageSrc,
      });
    } else {
      editContact({ newContactData: data, id: selectedContact.id });
    }
    onEndEditingHandler();
  };
  const onPreviewHandler = (e) => {
    e.preventDefault();
    console.log(getValues("imageUrl"));
    if (isImageUpload) {
      setPreviewImage(URL.createObjectURL(getValues("imageUrl")[0]));
    } else {
      setPreviewImage(getValues("imageUrl"));
    }
  };
  console.log(errors);

  return (
    <FormWrapper key={selectedContact?.id} onSubmit={handleSubmit(onSubmit)}>
      <PersonalImageContainer>
        <ImageWrapper>
          <Image src={imageSrc} />
        </ImageWrapper>
        <ImageInputWrapper>
          {isImageUpload && (
            <FileInput
              accept="image/*"
              {...register("imageUrl", {})}
            ></FileInput>
          )}
          {!isImageUpload && (
            <Input
              type="text"
              style={{ flex: 1 }}
              placeholder="Image Url"
              {...register("imageUrl")}
            />
          )}

          <ImageInputActions>
            <Button
              backgroundColor="var(--sky-600)"
              hoverColor="var(--sky-700)"
              color="var(--white-100)"
              borderRadius="25px"
              onClick={toggleImageOption}
              type="button"
            >
              {isImageUpload && "URL ?"}
              {!isImageUpload && "Upload ?"}
            </Button>
            <Button
              backgroundColor="var(--sky-600)"
              hoverColor="var(--sky-700)"
              color="var(--white-100)"
              borderRadius="25px"
              onClick={onPreviewHandler}
            >
              Preview
            </Button>
          </ImageInputActions>
        </ImageInputWrapper>
      </PersonalImageContainer>
      <PersonalDetailsWrapper>
        <InputWithErrorWrapper>
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          {errors.firstName && <Error>This is a required field</Error>}
        </InputWithErrorWrapper>
        <InputWithErrorWrapper>
          <Input
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
          {errors.lastName && <Error>This is a required field</Error>}
        </InputWithErrorWrapper>

        <InputWithErrorWrapper>
          <Input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "This is a required field",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Not a Valid Email Address",
              },
            })}
          />
          {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
        </InputWithErrorWrapper>

        <InputWithErrorWrapper>
          <Input
            type="tel"
            placeholder="Mobile number"
            {...register("mobileNumber", {
              required: "This is a Required Field",
              pattern: {
                value: phoneRegEx,
                message: "Not a Valid Phone Number",
              },
              minLength: { value: 6, message: "Minimum 6 Digits" },
              maxLength: { value: 20, message: "maximum 20 Digits" },
            })}
          />
          {errors?.mobileNumber?.message && (
            <Error>{errors?.mobileNumber?.message}</Error>
          )}
        </InputWithErrorWrapper>
      </PersonalDetailsWrapper>
      <ActionsWrapper>
        <Button
          color="#000"
          backgroundColor="var(--white-400)"
          hoverColor="var(--white-300)"
          borderRadius="25px"
          onClick={onEndEditingHandler}
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

const InputWithErrorWrapper = styled.div`
  min-width: 23rem;
  display: flex;
  gap: var(--spacing-40);
  position: relative;
  flex: 1;
  @media (max-width: 38rem) {
    min-width: 0;
    width: 100%;
  }
`;
const Error = styled.span`
  color: var(--red-500);
  font-size: 0.75rem;
  padding-inline: 2rem;
  position: absolute;
  right: 16px;
  bottom: 20px;

  @media (max-width: 30rem) {
    bottom: -18px;
    left: 5px;
  }
`;
const PersonalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-100);
  gap: var(--spacing-90);
  width: 100%;

  @media (max-width: 38rem) {
    gap: var(--spacing-60);
  }
`;
const ImageWrapper = styled.div`
  width: 7rem;

  @media (max-width: 38rem) {
    width: 5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const ImageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ImageInputActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-40);
  justify-content: center;
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
  margin-bottom: var(--spacing-40);

  @media (max-width: 38rem) {
    margin-top: var(--spacing-80);
  }
`;
const Button = styled.button`
  min-width: 6.25rem;
  height: 2.875rem;
  border-radius: 5px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: var(--spacing-40) var(--spacing-40);
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
