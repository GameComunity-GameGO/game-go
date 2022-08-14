import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "../../components/Board";
import CategoryNav from "../../components/CategoryNav";
import ChatWrite from "../../components/ChatWrite";
import GamerWrite from "../../components/GamerWrite";
import Siderbar from "../../components/Siderbar";
import Top from "../../components/Top";
import axios from "axios";
const Wrap = styled.div`
  min-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 15px;
`;
const HeaderContents = styled.div`
  position: relative;
  bottom: 200px;
`;
const Banner = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #282e40),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
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
  width: 690px;
  width: 1000px;
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
  background-color: #373e59;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #2196f3;
  }
  font-weight: 400;
`;

const HeaderFormWrap = styled.div`
  width: 1000px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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
const ContentWrap = styled.div`
  display: flex;
  height: fit-content;
`;
function BoardDetails() {
  const { pathname } = useLocation();
  const { game, type } = useParams();
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
  // useEffect(()=>{
  //   try{
  //     const res =  axios.get(``)
  //   }
  // })

  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  function getGamer() {
    console.log("게이머정보 요청");
    axios
      .get("/api/v1/members")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  }
  return (
    <Wrap>
      <CategoryNav />
      <Top></Top>
      <Header>
        <Banner
          bgphoto={
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt728b7e80503d4a3b/60b813c6a8cd6a0a26e29220/Patch_11_12_Notes_Banner.jpg"
          }
        ></Banner>
      </Header>
      <HeaderContents>
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
              <CreateBtn
                onClick={() => navigate(`/gamepage/${game}/${type}/boardwrite`)}
              >
                글쓰기
              </CreateBtn>
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
              <CreateBtn onClick={() => setCreateView((prev) => !prev)}>
                {createView ? "닫기" : "채팅방 생성"}
              </CreateBtn>
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

        {createView && type === "채팅방" ? (
          <ChatWrite />
        ) : createView && type === "게이머 구하기" ? (
          <GamerWrite />
        ) : null}
        <ContentWrap>
          {/* <Siderbar /> */}
          <Contents>
            {dumy.map((item, index) => (
              <Board
                game={game}
                type={type}
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
        </ContentWrap>
      </HeaderContents>
    </Wrap>
  );
}

export default BoardDetails;
