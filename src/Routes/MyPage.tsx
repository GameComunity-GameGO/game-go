import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CategoryNav from "../components/CategoryNav";
import ImageSlider from "../components/ImageSlider";
import Search from "../components/Search";

const Wrap = styled.div`
  width: 80vw;
  height: 100vh;
  min-width: 700px;
`;
const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GameTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 15px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 40px;
  margin-right: 40px;
`;

function MyPage() {
  const navigate = useNavigate();
  const { game: game } = useParams();
  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <SearchWrap>
        <GameTitle>{game}</GameTitle>
        <Search />
      </SearchWrap>
      <Title>GG.GG</Title>
      <Sidebar></Sidebar>
    </Wrap>
  );
}

export default MyPage;
