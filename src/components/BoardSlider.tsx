import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Board from "./Board";

const Wrap = styled.div`
  width: 100%;
  height: 270px;
`;

const Contents = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 26px;
  margin-left: 45px;
`;
const SeeMore = styled.div`
  text-align: right;
  font-size: 14px;
  margin-right: 45px;
  margin-bottom: 10px;
  span {
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
const SlideBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282e40;
  border-radius: 10px;
  width: 40px;
  margin-bottom: 10px;
`;
const Svg = styled.svg`
  height: 25px;
  width: 20px;
  cursor: pointer;
  :hover {
    fill: #2196f3;
  }
`;
function BoardView({
  game,
  date,
  subTitle,
  subDetail,
  userName,
  tag,
  boardName,
  data,
}: any) {
  const navigate = useNavigate();
  const offset = 3;
  const [dumy, setDumy] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [back, setBack] = useState(false);
  const [index, setIndex] = useState(0);
  const incraseIndex = (val: string) => {
    if (val === "add") {
      setBack(false);
      const totalAnimes = dumy.length - 1;
      const maxIndex = Math.floor(totalAnimes / offset);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
    if (val === "min") {
      setBack(true);
      setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };

  return (
    <Wrap>
      <Title>{boardName}</Title>
      <SeeMore>
        <span onClick={() => navigate(`/gamepage/${game}/${boardName}`)}>
          더 보기
        </span>
      </SeeMore>
      <Contents>
        <SlideBtn>
          <Svg
            onClick={() => incraseIndex("min")}
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              clipRule="evenodd"
            />
          </Svg>
        </SlideBtn>
        {dumy
          .slice(offset * index, offset * index + offset)
          .map((item, index) => (
            <Board
              key={index}
              date={date}
              item={item}
              tag={tag}
              subTitle={subTitle}
              subDetail={subDetail}
              userName={userName}
              boardName={boardName}
              game={game}
            />
          ))}
        <SlideBtn>
          <Svg
            onClick={() => incraseIndex("add")}
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            />
          </Svg>
        </SlideBtn>
      </Contents>
    </Wrap>
  );
}

export default BoardView;
