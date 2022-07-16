import { useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import Board from "../components/Board";
import ImageSlider from "../components/ImageSlider";
import { useParams } from "react-router-dom";
const Wrap = styled.div`
  width: 80vw;
  height: 100vh;
  min-width: 700px;
`;
function GamePage() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["랭크", "빡겜"],
  });
  const { game: match } = useParams();
  console.log(match);
  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <Board
        boardName={"인기 게시판"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={""}
        subDetail={"공룡은 사실 닭이다?"}
        userName={"마자파자브라자"}
      />
      <Board
        boardName={"인기 채팅방"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={"솔랭 다이아1 빡겜러 구함"}
        subDetail={"저는 실버1입니다"}
        userName={"호카손자"}
      />
      <Board
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
