import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
  border-radius: 5px;
  height: fit-content;
  margin: 0px 5px;
  background-color: #282e40;
  padding: 20px;
  width: 320px;
  margin-bottom: 10px;
`;
const ContentData = styled.div`
  font-size: 12px;
  color: #2196f3;
  margin-bottom: 15px;
`;
const ContentHeader = styled.div`
  font-weight: 400;
  margin-bottom: 15px;
`;
const ContentDetail = styled.div``;
const Detail = styled.div`
  color: gray;
  font-size: 14px;
  height: 60px;
`;
const UserJoin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  div:first-child {
    font-size: 14px;
    color: whitesmoke;
    font-weight: 400;
    display: flex;
    align-items: end;
  }
  div:last-child {
    font-size: 14px;
    font-weight: 400;
    background-color: #373e59;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
  img {
    width: 25px;
    margin-right: 5px;
  }
`;
const PostType = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 12px;
  margin-right: 12px;
  div {
    font-size: 12px;
    font-weight: 600;
    padding: 7px;
    border-radius: 10px;
    background-color: #373e59;
    cursor: pointer;
    margin-right: 5px;
  }
`;
function Board({ data, game, type, boardName }: any) {
  const navigate = useNavigate();
  const username = useSelector((state: any) => state.User.username);

  return (
    <Content>
      {type === "게시판" || boardName === "게시판" ? (
        <>
          <PostType>
            <div>{data.type}</div>
          </PostType>
          <ContentHeader>
            <ContentData>{data.createdDate}</ContentData>
            <span>{data.title}</span>
          </ContentHeader>
          <ContentDetail>
            <Detail></Detail>
            <UserJoin>
              <div>{data.memberDTO.nickname}</div>
              <div
                onClick={() =>
                  navigate(`/gamepage/${game}/게시판/boardview/${data.boardId}`)
                }
              >
                보러가기
              </div>
            </UserJoin>
          </ContentDetail>
        </>
      ) : type === "채팅방" || boardName === "채팅방" ? (
        <>
          <ContentHeader>
            <ContentData>{data.roomId}</ContentData>
            <span>{data.roomName}</span>
          </ContentHeader>
          <ContentDetail>
            <Detail>{}</Detail>
            <UserJoin>
              <div></div>
              <div
                onClick={() =>
                  navigate(`/gamepage/${game}/채팅방/chatview/${data.roomId}`)
                }
              >
                입장하기
              </div>
            </UserJoin>
          </ContentDetail>
        </>
      ) : type === "게이머 구하기" || boardName === "게이머 구하기" ? (
        <>
          <ContentHeader>
            <ContentData></ContentData>
            <span></span>
          </ContentHeader>
          <ContentDetail>
            <Detail></Detail>
            <UserJoin>
              <div>
                <img src={process.env.PUBLIC_URL + `/image/${"top"}.png`} />
                <span></span>
              </div>
              <div>같이하기</div>
            </UserJoin>
          </ContentDetail>
        </>
      ) : null}
    </Content>
  );
}

export default Board;
