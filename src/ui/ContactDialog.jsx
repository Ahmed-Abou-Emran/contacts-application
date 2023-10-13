import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import {
  AiOutlineEdit as Edit,
  AiOutlineDelete as Delete,
  AiFillInfoCircle as InfoCircle,
  AiOutlineCloseCircle as Close,
} from "react-icons/ai";

export function ContactDialog() {
  return (
    <Dialog.Root>
      <ActionsWrapper>
        <Button hoverColor="var(--white-300)">
          <Edit style={{ color: "var(--sky-400)" }} />
        </Button>
        <Dialog.Trigger asChild>
          <Button hoverColor="var(--white-300)">
            <Delete style={{ color: "var(--red-400)" }} />
          </Button>
        </Dialog.Trigger>
      </ActionsWrapper>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            <InfoCircle
              style={{
                fill: "var(--red-400)",
                color: "var(--white-100)",
                fontSize: "100px",
              }}
            />
          </DialogTitle>
          <DialogDescription>
            Are you sure you need delete this user ?
          </DialogDescription>
          <ActionsWrapper>
            <Dialog.Close asChild>
              <Button
                color="#000"
                backgroundColor="var(--white-400)"
                hoverColor="var(--white-300)"
                borderRadius="25px"
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button
                backgroundColor="var(--sky-400)"
                hoverColor="var(--sky-300)"
                color="var(--white-100)"
                borderRadius="25px"
                type="submit"
              >
                Yes
              </Button>
            </Dialog.Close>
          </ActionsWrapper>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">
              <Close />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const ActionsWrapper = styled.div`
  display: flex;
  gap: 37px;
  align-self: flex-start;
`;
const Button = styled.button`
  width: 54px;
  height: 45px;
  border-radius: 5px;
  font-size: 20px;
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
`;

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: hsl(0deg 0% 0% / 40%);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DialogContent = styled(Dialog.Content)`
  background-color: var(--white-100);
  border-radius: 25px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 300px;
  max-width: 450px;
  max-height: 85vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div > button {
    min-width: 100px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    margin-top: auto;
  }
  &:focus {
    outline: none;
  }
`;

const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  font-size: 17px;
`;

const DialogDescription = styled(Dialog.DialogDescription)`
  margin: 10px 0 20px;
  color: var(--red-300);
  font-size: 15px;
  line-height: 1.5;
`;

const IconButton = styled.button`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  > svg {
    color: var(--white-500);
    font-size: 25px;
    transition: all 300ms;
  }
  &:hover {
    cursor: pointer;
    > svg {
      color: var(--white-400);
    }
  }
  &:focus {
    /* box-shadow: 0 0 0 2px var(--sky-600); */
  }
`;
