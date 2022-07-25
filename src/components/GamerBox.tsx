import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  border-radius: 5px;
  height: fit-content;
  margin: 0px 10px;
  background-color: #282e40;
  padding: 20px;
  width: 740px;
  margin-bottom: 10px;
  span {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
`;
const Wrapper = styled.div`
  margin-top: 40px;
  width: 160px;
  height: 130px;
  position: relative;
`;
const Image = styled.img`
  width: 160px;
  height: 130px;
  position: absolute;
`;
const CreateBtn = styled.div`
  text-align: center;
  width: 95px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #282e40;
  background-color: #373e59;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #2196f3;
  }
  font-weight: 400;
`;
const Info = styled.div`
  margin-top: 40px;
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  span:first-child {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
  span:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;

const GamerBox = ({ image, name, profile }: any) => {
  const navigate = useNavigate();
  return (
    <Box>
      <span>게이머 정보</span>
      <Wrapper>
        <Image src={image}></Image>
      </Wrapper>
      <Info>
        <span>{name} 님</span>
        <span>{profile}</span>
      </Info>
      <CreateBtn onClick={() => navigate(`/mypage/정보수정`)}>
        정보 수정
      </CreateBtn>
    </Box>
  );
};

export default GamerBox;
