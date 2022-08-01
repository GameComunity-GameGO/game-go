import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 45px;
  min-height: 45px;
  background-color: #282e40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  margin: 0px 10px;
  font-weight: 400;
  padding: 5px;
  border-radius: 10px;
  background-color: #373e59;
  cursor: pointer;
  :hover {
    color: #2196f3;
  }
`;
function Header({ view }: any) {
  const navigate = useNavigate();
  return <Wrap></Wrap>;
}

export default Header;
