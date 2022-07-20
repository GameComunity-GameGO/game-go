import styled from "styled-components";

const Content = styled.div`
  height: fit-content;
  margin: 0px 5px;
  background-color: #282e40;
  padding: 20px;
  /* width: 320px; */
  @media (max-width: 720px) {
    width: 220px;
  }
  width: 26vw;
  margin-bottom: 10px;
`;

const ContentData = styled.div`
  color: gold;
  margin-bottom: 10px;
`;
const ContentHeader = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
`;
const ContentDetail = styled.div``;
const Detail = styled.div`
  height: 80px;
`;
const UserJoin = styled.div`
  display: flex;
  justify-content: space-between;
  div:first-child {
    color: #616161;
  }
  div:last-child {
    color: #2196f3;
    :hover {
      cursor: pointer;
    }
  }
`;
const TagWrap = styled.div``;
const Tag = styled.div``;
const TagUl = styled.ul`
  display: flex;
`;
const TagLi = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 600;
  padding: 5px;
  border-radius: 10px;
  background-color: #187f7f;
  cursor: pointer;
`;

function Board({ date, item, tag, subTitle, subDetail, userName }: any) {
  return (
    <Content>
      <ContentHeader>
        <ContentData>
          {date} {item}
        </ContentData>
        <TagWrap>
          <Tag>
            <TagUl>
              {tag.tag.map((item: string, index: number) => (
                <TagLi key={index}>{item}</TagLi>
              ))}
            </TagUl>
          </Tag>
        </TagWrap>
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
