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

function Board({ date, item, tag, subTitle, subDetail, userName }: any) {
  return (
    <Content>
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
          <div>보러가기</div>
        </UserJoin>
      </ContentDetail>
    </Content>
  );
}

export default Board;
