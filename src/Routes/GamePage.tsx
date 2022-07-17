import { useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import BoardView from "../components/BoardView";
import ImageSlider from "../components/ImageSlider";
import { useParams } from "react-router-dom";
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

function GamePage() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["랭크", "빡겜"],
  });
  const { game: match } = useParams();
  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <SearchWrap>
        <GameTitle>{match}</GameTitle>
        <Search />
      </SearchWrap>

      <BoardView
        boardName={"인기 게시판"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={""}
        subDetail={"공룡은 사실 닭이다?"}
        userName={"마자파자브라자"}
      />
      <BoardView
        boardName={"인기 채팅방"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={"솔랭 다이아1 빡겜러 구함"}
        subDetail={"저는 실버1입니다"}
        userName={"호카손자"}
      />
      <BoardView
        boardName={"게이머 구하기"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={"솔랭 다이아1 빡겜러 구함"}
        subDetail={"저는 실버1입니다"}
        userName={"호카손자"}
      />
    </Wrap>
  );
}

export default GamePage;
