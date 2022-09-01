import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryNav from "../components/CategoryNav";
import BoardSlider from "../components/Board/BoardSlider";
import ImageSlider from "../components/ImageSlider";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBoardInfo } from "../redux/action";

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
  const { board } = useSelector((state: any) => ({
    board: state.board,
  }));
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //     withCredentials: true,
  //   };
  //   axios
  //     .get(`/api/all/board`, config)
  //     .then((reponse) => {
  //       console.log(reponse.data.content);
  //       dispatch(setBoardInfo(reponse.data.content));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <Wrap>
      <ImageSlider />
      <CategoryNav />
      <SearchWrap>
        <GameTitle>{game}</GameTitle>
        <Search />
      </SearchWrap>
      <BoardWrap>
        <BoardSlider
          game={game}
          boardName={"게시판"}
          tag={dumyTag}
          subTitle={"공룡의 정체"}
          subDetail={"공룡은 사실 닭이다?"}
          userName={"마자파자브라자"}
        />
        <BoardSlider
          game={game}
          boardName={"채팅방"}
          date={"1일 전"}
          tag={dumyTag}
          subTitle={"빡겜방"}
          subDetail={"빡겜 하는 분만 원해요 티어는 다이아 이상만"}
          userName={"호카손자"}
        />
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
    </Wrap>
  );
}

export default GamePage;
