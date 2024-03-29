import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentMessageData } from "../../redux/actions/ChatAction";
import Skeleton from "../Skeleton";
import ChatForm from "./ChatForm";

const Wrap = styled.div`
  margin-top: 15px;
  height: 71vh;
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
const Contents = styled.div`
  margin-top: 500px;
`;
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
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 45px;
  }
`;
function Message() {
  const messageBoxRef = useRef<any>();
  const { messageData, currentMessageData, skeletonToggle } = useSelector(
    (state: any) => ({
      messageData: state.Chat.messageData,
      currentMessageData: state.Chat.currentMessageData,
      skeletonToggle: state.Trigger.skeletonToggle,
    })
  );
  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageData, currentMessageData]);
  return (
    <>
      <Wrap ref={messageBoxRef}>
        <Contents>
          {(messageData.length > 0 && skeletonToggle) || currentMessageData ? (
            messageData.map((data: any, index: number) => (
              <Content key={index}>
                <Img src={process.env.PUBLIC_URL + "/image/profile.png"} />
                <Msg>
                  <div>
                    <span>{data.member.nickname}</span>
                    <span>2022.00.00</span>
                  </div>
                  <p>{data.content}</p>
                </Msg>
              </Content>
            ))
          ) : (
            <>
              {[...new Array(12)].map((_data, index) => (
                <Skeleton key={index} />
              ))}
            </>
          )}
          {currentMessageData.length > 0 &&
            currentMessageData.map((data: any, index: number) => (
              <Content key={index}>
                <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
                <Msg>
                  <div>
                    <span>{data.member.nickname}</span>
                    <span>2022.00.00</span>
                  </div>
                  <p>{data.content}</p>
                </Msg>
              </Content>
            ))}
        </Contents>
      </Wrap>
    </>
  );
}

export default Message;
