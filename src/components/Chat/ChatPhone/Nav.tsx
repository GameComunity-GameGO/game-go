import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOutSideRef from "../../../hooks/useOutSideRef";
import styled from "styled-components";
import { setIsoutClick } from "../../../redux/actions/TriggerAction";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { setNotificationCount } from "../../../redux/actions/ChatAction";

const Wrap = styled.div``;
const NavBox = styled.div`
  background-color: #282e40;
  width: 60px;
  height: 60px;
  padding: 5px;
  margin: 30px;
  border-radius: 10px;
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const ViewLogo = styled(motion.svg)`
  width: 45px;
`;
const InLogo = styled.svg`
  width: 30px;
`;

const NavList = styled(motion.div)`
  background-color: #282e40;
  width: 360px;
  height: 600px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 15px;
  margin: 30px;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const ListWrap = styled(motion.div)`
  position: relative;
`;
const ExitBtn = styled.div`
  width: 25px;
  position: absolute;
  right: 0;
`;
const SetBtn = styled.div`
  width: 21px;
  position: absolute;
  right: 0;
  margin-right: 40px;
  margin-top: 1.5px;
`;
const Header = styled.div`
  display: flex;
  margin-bottom: 15px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    margin-left: 10px;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentHeader = styled.div`
  span {
    display: block;
    color: gary;
    font-weight: 400;
    opacity: 0.5;
    margin-bottom: 5px;
  }
`;
const ChatBox = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 100px;
  background-color: #363e59;
  margin-top: 15px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 18px;
  margin-bottom: 15px;
  margin-right: 10px;
`;
const ChatBoxContents = styled.div``;
const ChatBoxHeader = styled.div`
  h1 {
    font-weight: 400;
  }
`;
const MsgTotalCount = styled.div`
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MsgCount = styled.div`
  position: absolute;
  background-color: tomato;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Count = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
const ChatDescription = styled.div``;

function Nav() {
  // 소켓 설정
  let sock = new SockJS("http://15.164.200.86:8080/ws/chat");
  let stomp: any = Stomp.over(sock);

  const [id, setId] = useState<null | string>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const game = useSelector((state: any) => state.Trigger.game);
  const [chatList, setChatList] = useState<any>([]);
  const outsideRef = useOutSideRef();
  const { notificationCount, isOutClick } = useSelector((state: any) => ({
    notificationCount: state.Chat.notificationCount,
    isOutClick: state.Trigger.isOutClick,
  }));
  const wsConnectSubscribe = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let noticeCount = [];
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    };
    axios.get(`/api/chat/room/list`, config).then((response) => {
      setChatList(response.data);
      noticeCount = chatList.map((data: any) => {
        return data.noticeCount;
      });
      const result = noticeCount.reduce(function add(sum: any, currValue: any) {
        return sum + currValue;
      }, 0);
      dispatch(setNotificationCount(result));
    });
  }, []);

  const newMsgCount = (roomId: Number) => {
    let count = 0;
    try {
      stomp.debug = null;
      stomp.connect(
        { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        () => {
          stomp.subscribe(
            `/topic/alarm/room/${roomId}`,
            (data: any) => {
              if (JSON.parse(data.body).data !== undefined) {
                count++;
              }
            },
            {}
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
    return count;
  };

  return (
    <Wrap ref={outsideRef}>
      <NavBox
        onClick={() =>
          isOutClick
            ? dispatch(setIsoutClick(false))
            : dispatch(setIsoutClick(true))
        }
      >
        <ViewLogo
          layoutId={"a"}
          onClick={() => dispatch(setIsoutClick(false))}
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
        </ViewLogo>
        <MsgTotalCount>
          <Count>{notificationCount}</Count>
        </MsgTotalCount>
      </NavBox>
      <AnimatePresence>
        {isOutClick ? (
          <NavList layoutId={"a"}>
            <ListWrap>
              <SetBtn>
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
                </svg>
              </SetBtn>

              <ExitBtn>
                <svg
                  onClick={() => dispatch(setIsoutClick(false))}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </ExitBtn>
              <Header>
                <InLogo
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                </InLogo>
                <h1>채팅</h1>
              </Header>
              <ContentHeader>
                <span>GAME GO!</span>
                <span>닉네임님의 채팅목록입니다.</span>
              </ContentHeader>
              <Contents>
                {chatList &&
                  chatList.map((data: any, index: any) => (
                    <ChatBox
                      layoutId={String(data.roomId)}
                      key={index}
                      onClick={() =>
                        navigate(
                          `/gamepage/${game}/채팅방/chatview/${data.roomId}`
                        )
                      }
                    >
                      <MsgCount>
                        <Count>{chatList.noticeCount}</Count>
                        {/* <Count>{newMsgCount(data.roomId)}</Count> */}
                      </MsgCount>
                      <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
                      <ChatBoxContents>
                        <ChatBoxHeader>
                          <h1>{data.roomName}</h1>
                        </ChatBoxHeader>
                        <ChatDescription>
                          채팅방 설명입니다. 채팅방 설명입니다. 채팅방
                          설명입니다.
                        </ChatDescription>
                      </ChatBoxContents>
                    </ChatBox>
                  ))}
              </Contents>
            </ListWrap>
          </NavList>
        ) : null}
      </AnimatePresence>
    </Wrap>
  );
}
export default Nav;
