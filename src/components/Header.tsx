import styled from "styled-components";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../auth/Modal";
import LogIn from "../auth/LogIn";
import SignUp from "../auth/SignUp";
const Wrap = styled.div`
  position: sticky;
  z-index: 1;
  width: 100%;
  height: 30px;
  min-height: 33px;
  background-color: #282e40;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0px 15px;
`;
const Button = styled.button`
  margin: 0px 10px;
  font-weight: 400;
  padding: 5px;
  color: whitesmoke;
  border-radius: 10px;
  background-color: #373e59;
  cursor: pointer;
  :hover {
    color: #2196f3;
  }
`;

function Header({ view }: any) {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  const navigate = useNavigate();
  return (
    <Wrap>
      {isOpenModal && (
        <Modal
          children={<SignUp></SignUp>}
          onClickToggleModal={onClickToggleModal}
        ></Modal>
      )}
      {/* <Button onClick={onClickToggleModal}>LogIn</Button> */}
      <Button onClick={onClickToggleModal}>SignUp</Button>
      <Button onClick={() => navigate(`/mypage/프로필`)}>Mypage</Button>
    </Wrap>
  );
}
export default Header;
