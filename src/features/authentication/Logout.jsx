import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import Modal from "../../ui/Modal";
import ConfirmLogout from "./ConfrimLogout";

function Logout() {
  const { logout, isLoading: isLogout } = useLogout();

  return (
    <>
      <Modal>
        <Modal.Open opens="logout">
          <ButtonIcon>
            {!isLogout ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
          </ButtonIcon>
        </Modal.Open>
        <Modal.Window name="logout">
          <ConfirmLogout onConfirm={() => logout()} disabled={isLogout} />
        </Modal.Window>
      </Modal>
      {/* <ButtonIcon onClick={logout} disabled={isLoading}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon> */}
    </>
  );
}

export default Logout;
