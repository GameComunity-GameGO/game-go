import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 320px;
`;

const Contents = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  height: fit-content;
  margin: 0px 5px;
  background-color: #282e40;
  padding: 20px;
  width: 360px;
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
const Title = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 26px;
  margin-left: 45px;
`;
const SeeMore = styled.div`
  text-align: right;
  font-size: 14px;
  margin-right: 45px;
  margin-bottom: 10px;
  span {
    cursor: pointer;
    :hover {
      color: #282e40;
    }
  }
`;
const SlideBtn = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282e40;
  border-radius: 10px;
  width: 40px;
`;
const Svg = styled.svg`
  height: 30px;
  width: 25px;
  cursor: pointer;
`;
function BoardView({
  date,
  subTitle,
  subDetail,
  userName,
  tag,
  boardName,
}: any) {
  const offset = 3;
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
  ]);
  const [back, setBack] = useState(false);
  const [index, setIndex] = useState(0);
  const incraseIndex = (val: string) => {
    if (val === "add") {
      setBack(false);
      const totalAnimes = dumy.length - 1;
      const maxIndex = Math.floor(totalAnimes / offset);
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
    if (val === "min") {
      setBack(true);
      setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    }
  };
  return (
    <Wrap>
      <Title>{boardName}</Title>
      <SeeMore>
        <span>더 보기</span>
      </SeeMore>
      <Contents>
        <SlideBtn>
          <Svg
            onClick={() => incraseIndex("min")}
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              clipRule="evenodd"
            />
          </Svg>
        </SlideBtn>
        {dumy
          .slice(offset * index, offset * index + offset)
          .map((item, index) => (
            <Content key={index}>
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
          ))}
        <SlideBtn>
          <Svg
            onClick={() => incraseIndex("add")}
            fill="white"
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            />
          </Svg>
        </SlideBtn>
      </Contents>
    </Wrap>
  );
}

export default BoardView;
