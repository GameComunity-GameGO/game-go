import { useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import Board from "../components/Board";
import ImageSlider from "../components/ImageSlider";
const Wrap = styled.div`
  width: 80vw;
  height: 100vh;
  min-width: 700px;
`;

function Main() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["아베", "일본"],
  });

  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <Board
        boardName={"인기 게시판"}
        date={"1일 전"}
        tag={dumyTag}
        subTitle={"일본 난리남"}
        subDetail={"일본 아베 신조 죽음"}
        userName={"마자파자브라자"}
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

export default Main;
