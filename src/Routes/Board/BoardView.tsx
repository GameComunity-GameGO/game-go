import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../../components/CategoryNav";
import CommentView from "../../components/CommentView";
import CommentWrite from "../../components/CommentWrite";
import Siderbar from "../../components/Siderbar";
const Wrap = styled.div`
  min-width: 1000px;
  height: 120vh;
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

const PostWrap = styled.div`
  width: 690px;
  height: 900px;
  background-color: #282e40;
  padding: 20px;
  span:first-child {
    display: block;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
const ViewWrap = styled.div``;
const PostTitle = styled.div``;
const ContentWrap = styled.div`
  display: flex;
  height: fit-content;
`;
const CommentWrap = styled.div`
  width: 690px;
  height: fit-content;
  padding: 20px;
  background-color: #282e40;
  margin-top: 10px;
`;
const CommentTitle = styled.div`
  font-weight: 400;
  span {
    font-size: 20px;
  }
`;

function BoardView() {
  const { pathname } = useLocation();
  const Type = ["자유", "유머", "유저뉴스", "영상", "팬아트"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const { game, type, id } = useParams();
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
          <ViewWrap>
            <PostWrap>
              <PostTitle>
                <span>Title {id}</span>
                <span>UserName</span>
              </PostTitle>
              <div>Script</div>
            </PostWrap>
            <CommentWrap>
              <CommentTitle>
                <span>댓글</span> 총 0개
              </CommentTitle>
              <CommentWrite />
              <CommentView />
            </CommentWrap>
          </ViewWrap>
        </ContentWrap>
      </ContentsWrap>
    </Wrap>
  );
}

export default BoardView;
