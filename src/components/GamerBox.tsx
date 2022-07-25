import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
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
    color: whitesmoke;
    padding: 2px;
  }
`;
const Wrapper = styled.div`
  margin-top: 30px;
  position: relative;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 30%;
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
  height: 130px;
  display: flex;
  justify-content: center;
  span:first-child {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: white;
`;
const InfoItem = styled.div`
  margin: 2px 10px;
  font-weight: 400;
  padding: 5px;
`;

const GamerBox = ({ image, name, email, content }: any) => {
  const navigate = useNavigate();
  return (
    <Box>
      <span>프로필</span>
      <Wrapper>
        <Image src={process.env.PUBLIC_URL + "/image/level.jpeg"}></Image>
      </Wrapper>
      <Info>
        <span>{name} 님</span>
        <InfoItem>{email}</InfoItem>
        <InfoItem>{content}</InfoItem>
        <InfoItem>{content}</InfoItem>
      </Info>
      <CreateBtn onClick={() => navigate(`/mypage/프로필변경`)}>
        프로필 수정
      </CreateBtn>
    </Box>
  );
};

export default GamerBox;
