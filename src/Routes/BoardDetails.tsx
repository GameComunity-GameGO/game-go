import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Board from "../components/Board";
import Search from "../components/Search";
const Wrap = styled.div`
  width: 80vw;
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
  border-radius: 10px;
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
`;
const SearchWrap = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  input {
    background-color: #373e59;
    border: none;
    width: 300px;
    height: 50px;
    margin-bottom: 5px;
    border: 1px solid black;
  }

  div:nth-child(2) > input {
    height: 100px;
    margin-right: 5px;
  }
  button {
    position: relative;
    width: 70px;
    height: 40px;
    top: 30px;
    background-color: #373e59;
    border: none;
    border: 1px solid black;
  }
`;
const LeftContents = styled.div`
  margin-right: 30px;
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
const RightContents = styled.div``;
const Img = styled.div<{ bgphoto: string }>`
  height: 120px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <LeftContents>
              <span>
                타인을 사칭하거나 모욕하는 일은
                <br /> 법률에 의해 제제를 받을 수 있습니다.
              </span>
              <div>
                <Img bgphoto={"https://your.gg/images/duo_warning.png"}></Img>
              </div>
            </LeftContents>
            <RightContents>
              <div>
                <input
                  {...register("username")}
                  placeholder="유저명"
                  type="text"
                />
              </div>
              <div>
                <input
                  {...register("content")}
                  placeholder="내용 (200자 이내)"
                  type="text"
                />

                <button type="submit">등록</button>
              </div>
            </RightContents>
          </Form>
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
