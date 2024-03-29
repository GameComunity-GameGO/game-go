import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  PropsWithChildren,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSignUpToggle } from "../redux/actions/TriggerAction";
const Wrap = styled.div`
  width: 96.5vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
const ModalBox = styled.div`
  color: #373e59;
  width: 380px;
  height: 530px;
  background-color: white;
  margin-top: 560px;
  z-index: 10000;
  border-radius: 15px;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;

interface ModalDefaultType {
  onClickToggleModal: () => void;
}
function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  const dispatch = useDispatch();
  return (
    <Wrap>
      <ModalBox>{children}</ModalBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
            dispatch(setSignUpToggle(false));
            document.body.style.overflow = "unset";
          }
        }}
      />
    </Wrap>
  );
}

export default Modal;
