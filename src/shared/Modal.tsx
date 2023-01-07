import ReactDOM from "react-dom";
import styled from "styled-components";

const portalElement = document.getElementById("overlays") as HTMLElement;

type Props = {
  onClose: () => void;
  children: JSX.Element[] | JSX.Element;
};
const Modal = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropDiv onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <ModalContent>{props.children}</ModalContent>
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

const BackdropDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  border-radius: 14px;
  z-index: 30;
`;

const ModalContent = styled.div``;

export default Modal;
