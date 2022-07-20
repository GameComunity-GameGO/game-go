import { useState } from "react";
import styled from "styled-components";
import Board from "../components/Board";
import { useParams } from "react-router-dom";

const Wrap = styled.div`
  width: 80vw;
  height: 100vh;
  min-width: 700px;
`;
const Title = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 26px;
  margin-left: 40px;
`;
const Label = styled.div`
  margin-top: 40px;
  font-weight: 60;
  font-size: 26px;
  margin-right: 40px;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0px;
`;
const Li = styled.li`
  width: 28vw;
  display: flex;
  align-items: center;
  font-size: 1.6vw;
  margin 0 auto;
`;

function MyPage() {
  return (
    <Wrap>
      <Title>마이 페이지</Title>
      <Ul>
      <Li>
      <Label>닉네임</Label>
      <Label>성별</Label>
      </Li>  
      </Ul>
    </Wrap>
  );
  }

export default MyPage;
