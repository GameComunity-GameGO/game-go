import { useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import BoardView from "../components/BoardSlider";
import ImageSlider from "../components/ImageSlider";
import { useParams } from "react-router-dom";
import Search from "../components/Search";

const Wrap = styled.div`
  height: 100%;
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
const BoardWrap = styled.div`
  width: 1000px;
`;

function GamePage() {
  const [dumyTag, setDumyTag] = useState({
    tag: ["랭크", "빡겜"],
  });
  const { game: game } = useParams();
  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <SearchWrap>
        <GameTitle>{game}</GameTitle>
        <Search />
      </SearchWrap>

      <BoardWrap>
        <BoardView
          game={game}
          boardName={"게시판"}
          date={"1일 전"}
          tag={dumyTag}
          subTitle={"공룡의 정체"}
          subDetail={"공룡은 사실 닭이다?"}
          userName={"마자파자브라자"}
        />
        <BoardView
          game={game}
          boardName={"채팅방"}
          date={"1일 전"}
          tag={dumyTag}
          subTitle={"빡겜방"}
          subDetail={"빡겜 하는 분만 원해요 티어는 다이아 이상만"}
          userName={"호카손자"}
        />
        <BoardView
          game={game}
          boardName={"게이머 구하기"}
          date={"1일 전"}
          tag={dumyTag}
          subTitle={"솔랭 다이아4 예티 구함"}
          subDetail={"저는 실버1입니다"}
          userName={"호카손자"}
        />
      </BoardWrap>
    </Wrap>
  );
}

export default GamePage;
