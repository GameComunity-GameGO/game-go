import { useEffect, useRef } from "react";
import styled from "styled-components";
import Skeleton from "../Skeleton";
import ChatForm from "./ChatForm";

const Wrap = styled.div`
  margin-top: 15px;
  height: 67vh;
  padding: 10px;
  margin-left: 10px;
  padding-bottom: 0px;
  margin-right: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #40444b;
    border-radius: 5px;
  }
`;
const Contents = styled.div``;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-right: 15px;
`;
const Msg = styled.div`
  span:first-child {
    font-weight: 400;
    margin-right: 10px;
  }
  span:last-child {
    font-size: 12px;
  }

  p {
    margin-top: 5px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
function Message() {
  const messageBoxRef = useRef<any>();
  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <>
      <Wrap ref={messageBoxRef}>
        <Contents>
          {[...new Array(12)].map((_data, index) => (
            <Skeleton key={index} />
          ))}
          {/* <Content>
          <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
          <Msg>
            <div>
              <span>닉네임</span>
              <span>2022.09.01</span>
            </div>
            <p>메시지 내용입니다.</p>
          </Msg>
        </Content> */}
        </Contents>
      </Wrap>
      {/* <ChatForm /> */}
    </>
  );
}

export default Message;
