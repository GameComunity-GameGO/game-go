import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "../components/Board";
import Search from "../components/Search";
const Wrap = styled.div`
  height: fit-content;
  min-width: 700px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const GameTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  span:last-child {
    color: #187f7f;
  }
`;
const Contents = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* @media (max-width: 952px) {
    grid-template-columns: repeat(2, 1fr);
  } */
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
  width: 80px;
  font-weight: 600;
  font-size: 28px;
  cursor: pointer;
`;
const CreateWrap = styled.div`
  background-color: #282e40;
  width: 100%;
  height: 240px;
`;
const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
`;
interface ICreate {
  username: string;
  content: string;
}
function BoardDetails() {
  const { pathname } = useLocation();
  const { game: game, type: type } = useParams();
  const [createView, setCreateView] = useState(false);
  const [createText, setCrateText] = useState("글쓰기");
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreate>();
  const onSubmit = ({ username, content }: any) => {};
  return (
    <Wrap>
      <Header>
        <Link to="/">
          <Logo>GG.GG</Logo>
        </Link>
        <GameTitle>
          <span>{game} </span>
          <span>{type}</span>
        </GameTitle>
        <CreateBtn onClick={() => setCreateView((prev) => !prev)}>
          {createView ? "닫기" : "글쓰기"}
        </CreateBtn>
      </Header>
      {/* <SearchWrap>
        <Search />
      </SearchWrap> */}
      {createView && (
        <CreateWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="유저명" type="text" />
            <input
              {...register("content")}
              placeholder="내용 (200자 이내)"
              type="text"
            />
            <button type="submit">등록</button>
          </form>
        </CreateWrap>
      )}

      <Contents>
        {dumy.map((item, index) => (
          <Board
            key={index}
            date={"0일전"}
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
