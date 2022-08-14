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
const TagUl = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 12px;
  margin-right: 12px;
`;
const TagLi = styled.li`
  font-size: 12px;
  font-weight: 600;
  padding: 7px;
  border-radius: 10px;
  background-color: #373e59;
  cursor: pointer;
  margin-right: 5px;
`;
function Board({
  date,
  item,
  tag,
  subTitle,
  subDetail,
  userName,
  game,
  type,
  boardName,
}: any) {
  const navigate = useNavigate();
  return (
    <Content>
      {type === "게시판" || boardName === "게시판" ? (
        <>
          <TagUl>
            {tag.tag.map((item: string, index: number) => (
              <TagLi key={index}>#{item}</TagLi>
            ))}
          </TagUl>
          <ContentHeader>
            <ContentData>
              {/* {date} */}
              {item}일전
            </ContentData>
            <span>{subTitle}</span>
          </ContentHeader>
          <ContentDetail>
            <Detail>{subDetail}</Detail>
            <UserJoin>
              <div>{userName}</div>
              <div
                onClick={() =>
                  navigate(`/gamepage/${game}/게시판/boardview/${item}`)
                }
              >
                보러가기
              </div>
            </UserJoin>
          </ContentDetail>
        </>
      ) : type === "채팅방" || boardName === "채팅방" ? (
        <>
          <TagUl>
            {tag.tag.map((item: string, index: number) => (
              <TagLi key={index}>#{item}</TagLi>
            ))}
          </TagUl>
          <ContentHeader>
            <ContentData>
              {/* {date} */}
              {item}일전
            </ContentData>
            <span>{subTitle}</span>
          </ContentHeader>
          <ContentDetail>
            <Detail>{subDetail}</Detail>
            <UserJoin>
              <div>{userName}</div>
              <div>입장하기</div>
            </UserJoin>
          </ContentDetail>
        </>
      ) : type === "게이머 구하기" || boardName === "게이머 구하기" ? (
        <>
          <TagUl>
            {tag.tag.map((item: string, index: number) => (
              <TagLi key={index}>#{item}</TagLi>
            ))}
          </TagUl>
          <ContentHeader>
            <ContentData>
              {/* {date} */}
              {item}일전
            </ContentData>
            <span>{subTitle}</span>
          </ContentHeader>
          <ContentDetail>
            <Detail>{subDetail}</Detail>
            <UserJoin>
              <div>
                <img src={process.env.PUBLIC_URL + `/image/${"top"}.png`} />
                <span>{userName}</span>
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
