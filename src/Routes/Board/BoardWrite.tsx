import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../../components/CategoryNav";
import Siderbar from "../../components/Siderbar";
const Wrap = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 155px;
`;
const Banner = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 155px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #282e40),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
`;
const GameTitle = styled.div`
  height: 90px;
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
const ContentsWrap = styled.div`
  width: 1000px;
  position: relative;
  bottom: 110px;
`;
const ContentWrap = styled.div`
  display: flex;
  height: fit-content;
`;
const Contents = styled.div`
  width: 690px;
  height: fit-content;
  background-color: #282e40;
  padding: 20px;
  span:first-child {
    display: block;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
const SelectWrap = styled.div``;
const Select = styled.select`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid black;
  background-color: #373e59;
  color: whitesmoke;
  padding: 5px;
  font-weight: 400;
  margin-bottom: 5px;
`;
const TitleWrap = styled.div``;

const Form = styled.form`
  input {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #373e59;
    color: whitesmoke;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid black;
  }
  textarea {
    border: none;
    border-radius: 5px;
    background-color: #373e59;
    color: whitesmoke;
    padding: 10px;
    width: 100%;
    height: 300px;
    border: 1px solid black;
  }
  button {
    :first-child {
      margin-right: 5px;
    }
    font-size: 13px;
    width: 120px;
    height: 40px;
    background-color: #373e59;
    border: none;
    border: 1px solid black;
    color: whitesmoke;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: right;
`;
function BoardWrite() {
  const { pathname } = useLocation();
  const Type = ["자유", "유머", "유저뉴스", "영상", "팬아트"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const { game, type } = useParams();
  return (
    <Wrap>
      <CategoryNav />
      <Header>
        <Banner
          bgphoto={
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt728b7e80503d4a3b/60b813c6a8cd6a0a26e29220/Patch_11_12_Notes_Banner.jpg"
          }
        ></Banner>
      </Header>
      <ContentsWrap>
        <GameTitle>
          <span>{type}</span>
          <span>{game} </span>
          <span>{type}입니다. 커뮤니티 매너를 준수합시다!</span>
        </GameTitle>
        <ContentWrap>
          <Siderbar />
          <Contents>
            <span>글쓰기</span>
            <SelectWrap>
              <Select>
                {Type.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </SelectWrap>
            <TitleWrap>
              <Form>
                <input type="text" placeholder="제목"></input>
                <textarea placeholder="내용"></textarea>
                <ButtonWrap>
                  <button onClick={() => navigate(`/gamepage/${game}/게시판`)}>
                    취소
                  </button>
                  <button>작성</button>
                </ButtonWrap>
              </Form>
            </TitleWrap>
          </Contents>
        </ContentWrap>
      </ContentsWrap>
    </Wrap>
  );
}

export default BoardWrite;
