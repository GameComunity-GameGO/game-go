import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import BoardSlider from "../components/Board/BoardSlider";
import ImageSlider from "../components/ImageSlider";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setGmae } from "../redux/actions/TriggerAction";
import ChatView from "./Chat/ChatView";

const Wrap = styled.div`
  min-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const { game } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGmae(game));
  }, []);

  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <SearchWrap>
        <GameTitle>{game}</GameTitle>
        <Search />
      </SearchWrap>
      <BoardWrap>
        <BoardSlider game={game} boardName={"게시판"} />
        <BoardSlider game={game} boardName={"채팅방"} />
        <BoardSlider
          game={game}
          boardName={"게이머 구하기"}
          date={"1일 전"}
          tag={dumyTag}
          subTitle={"솔랭 다이아4 예티 구함"}
          subDetail={"저는 실버1입니다"}
          userName={"귀살대 이성호"}
        />
      </BoardWrap>
      <ChatView />
    </Wrap>
  );
}

export default GamePage;
