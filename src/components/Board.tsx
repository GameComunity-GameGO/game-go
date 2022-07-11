import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 320px;
`;

const Contents = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 32vw;
  height: fit-content;
  :nth-child(2) {
    margin: 0px 14px;
  }
  background-color: #282e40;
  padding: 20px;
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
const Title = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 26px;
`;
const SeeMore = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
`;
function Board({ date, subTitle, subDetail, userName, tag, boardName }: any) {
  const [dumy, setDumy] = useState(["one", "two", "three"]);
  return (
    <Wrap>
      <Title>{boardName}</Title>
      <SeeMore>더 보기</SeeMore>
      <Contents>
        {dumy.map((item, index) => (
          <Content key={index}>
            <ContentHeader>
              <ContentData>{date}</ContentData>
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
        ))}
      </Contents>
    </Wrap>
  );
}

export default Board;
