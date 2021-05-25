import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = (props) => {
  return <BackdropContainer onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalOverlayWrapper>
      <ModalOvarlayContainer>
        
       
       {props.children}
     
      </ModalOvarlayContainer>
    </ModalOverlayWrapper>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
const ModalOverlayWrapper = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width:500px;
  background-color: white;
  padding: 1rem;
  margin-left: 400px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const ModalOvarlayContainer = styled.div`

`;



export default Modal;
