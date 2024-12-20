import { styled } from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const StyledConfirmLogout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  padding: 1rem 1.2rem;
`;

function ConfirmLogout({ onConfirm, onCloseModal, disabled }) {
  return (
    <StyledConfirmLogout>
      <Heading as="h3">Are you sure you want logout ? </Heading>
      <Box>
        <Button onClick={onCloseModal} disabled={disabled}>
          Cancel
        </Button>
        <Button variation="secondary" onClick={onConfirm} disabled={disabled}>
          Logout
        </Button>
      </Box>
    </StyledConfirmLogout>
  );
}

export default ConfirmLogout;
