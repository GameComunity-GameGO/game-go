import axios from "axios";
import { MotionConfigContext } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../../components/CategoryNav";
import CommentView from "../../components/Board/CommentView";
import CommentWrite from "../../components/Board/CommentWrite";
import Siderbar from "../../components/Siderbar";
import { setComment } from "../../redux/actions/BoardAction";
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
  height: fit-content;
  background-color: #282e40;
  padding: 20px;
  overflow: hidden;

  img {
    width: 70%;
  }
`;
const ViewWrap = styled.div``;
const PostTitle = styled.div`
  div:first-child {
    div {
      font-weight: 400;
      margin-bottom: 5px;
      font-size: 22px;
    }
    span {
      margin-right: 10px;
      font-size: 18px;
      :last-child {
        margin-right: 0px;
        font-size: 13px;
        color: #eee;
      }
    }
  }
  display: flex;
  justify-content: space-between;
  button {
    :first-child {
      margin-right: 10px;
    }
    font-size: 13px;
    width: 50px;
    height: 35px;
    font-weight: 400;
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

const Good = styled.div`
  display: flex;
  justify-content: center;
`;
const LikeWrap = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid black;
`;
const Like = styled.div`
  cursor: pointer;
  :hover {
    svg {
      fill: #2196f3;
    }
  }
  svg {
    margin: 0px 10px;
    width: 25px;
    fill: white;
  }
  :last-child {
    svg {
      transform: rotate(180deg);
    }
  }
`;
const PostContent = styled.div`
  margin: 10px 0px;
`;
function BoardView() {
  const [data, setData] = useState<any>({});
  const [userNick, setUserNick] = useState("");
  const [onUD, setOnUD] = useState(false);
  const { username, comment } = useSelector((state: any) => ({
    username: state.User.username,
    comment: state.Board.comment,
  }));
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const { game, type, id } = useParams();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  useEffect(() => {
    axios
      .get(`api/board/${id}`, config)
      .then((reponse) => {
        setData(reponse.data);
        dispatch(setComment(reponse.data.replyList));
        axios
          .get(`/api/v1/member/${username}`, config)
          .then((reponse) => {
            setUserNick(reponse.data.nickname);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onDelBtn = () => {
    axios.delete(`/api/board/${id}`, config).then((reponse) => {
      navigate(`/gamepage/${game}/${type}`);
    });
  };
  const onLike = async () => {
    if (data.checkLikes === 0) {
      await axios
        .post(`/api/board/${id}/like`, config)
        .then((reponse) => {
          console.log(reponse);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios.delete(`/api/board/${id}/like`, config).then((reponse) => {
        console.log(reponse);
      });
    }
  };

  return (
    <Wrap>
      {data && (
        <>
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
                    <div>
                      <div>{data.type}게시판</div>
                      <div>{data?.title}</div>
                      <span>{data?.memberDTO?.nickname}</span>
                      <span></span>
                    </div>

                    <div>
                      {data.memberDTO?.nickname === userNick && (
                        <>
                          <button
                            onClick={() =>
                              navigate(
                                `/gamepage/${game}/${type}/boardupdate/${id}`
                              )
                            }
                          >
                            수정
                          </button>
                          <button onClick={onDelBtn}>삭제</button>
                        </>
                      )}
                    </div>
                  </PostTitle>
                  <PostContent
                    dangerouslySetInnerHTML={{ __html: data.contents }}
                  ></PostContent>
                  <Good>
                    <LikeWrap>
                      <Like onClick={onLike}>
                        <div>
                          <span>{data.likes?.length}개</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" />
                          </svg>
                        </div>
                      </Like>
                      <Like onClick={onLike}>
                        <div>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" />
                          </svg> */}
                          {/* <span>{data.likes?.length}개</span> */}
                        </div>
                      </Like>
                    </LikeWrap>
                  </Good>
                </PostWrap>
                <CommentWrap>
                  <CommentTitle>
                    <span>댓글</span> 총 {comment.length}개
                  </CommentTitle>
                  <CommentWrite />
                  <CommentView />
                </CommentWrap>
              </ViewWrap>
            </ContentWrap>
          </ContentsWrap>
        </>
      )}
    </Wrap>
  );
}

export default BoardView;
