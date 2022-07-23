import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "../components/Board";
import CategoryNav from "../components/CategoryNav";
import GamerWrite from "../components/GamerWrite";
import Search from "../components/Search";
const Wrap = styled.div`
  width: 1000px;
  height: 100%;
`;
const Header = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 15px;
`;
const GameTitle = styled.div`
  span:first-child {
    display: block;
    font-size: 38px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 600;
  }
  span:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;
const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 34px;
  cursor: pointer;
`;
const CreateBtn = styled.div`
  text-align: center;
  width: 95px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #282e40;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #2196f3;
  }
  font-weight: 400;
`;

const HeaderFormWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Select = styled.select`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid #282e40;
  background-color: #373e59;
  color: whitesmoke;
  padding: 5px;
  font-weight: 400;
`;

function BoardDetails() {
  const { pathname } = useLocation();
  const { game: game, type: type } = useParams();
  const [createView, setCreateView] = useState(false);
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
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ]);
  const [dumyTag, setDumyTag] = useState({
    tag: ["랭크", "빡겜"],
  });
  const GameList = ["모든 큐", "솔로랭크", "자유랭크", "일반", "칼바람"];
  const LevelList = [
    "모든 티어",
    "챌린저",
    "그랜드마스터",
    "마스터",
    "다이아몬드",
    "플래티넘",
    "골드",
    "실버",
    "브론즈",
    "아이언",
  ];
  const Line = ["모든 포지션", "탑", "정글", "미드", "원딜", "서포터"];
  const Voice = ["보이스 OFF", "보이스 ON"];
  const Tag = ["자유", "빡겜", "친목"];
  const Type = ["유머", "자유", "유저뉴스", "영상", "팬아트"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Wrap>
      <CategoryNav />
      <Header>
        {/* <Link to="/">
          <Logo>GG.GG</Logo>
        </Link> */}
        <GameTitle>
          <span>{type}</span>
          <span>{game} </span>
          <span>{type}입니다. 커뮤니티 매너를 준수합시다!</span>
        </GameTitle>
        <HeaderFormWrap>
          {type === "게시판" ? (
            <>
              <div>
                <Select>
                  {Type.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </div>
              <CreateBtn>글쓰기</CreateBtn>
            </>
          ) : type === "채팅방" ? (
            <>
              <div>
                <Select>
                  {Tag.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <Select>
                  {Voice.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </div>
              <CreateBtn>채팅방 생성</CreateBtn>
            </>
          ) : type === "게이머 구하기" ? (
            <>
              <div>
                <Select>
                  {GameList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <Select>
                  {LevelList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                <Select>
                  {Line.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </div>
              <CreateBtn onClick={() => setCreateView((prev) => !prev)}>
                {createView ? "닫기" : "구하기"}
              </CreateBtn>
            </>
          ) : null}
        </HeaderFormWrap>
      </Header>

      {createView && type === "채팅방" ? null : createView &&
        type === "게이머 구하기" ? (
        <GamerWrite />
      ) : null}

      <Contents>
        {dumy.map((item, index) => (
          <Board
            key={index}
            date={"일전"}
            item={item}
            tag={dumyTag}
            subTitle={"subTitle"}
            subDetail={"subDetail"}
            userName={"userName"}
          />
        ))}
      </Contents>
    </Wrap>
  );
}

export default BoardDetails;
