import ChatForm from "../../components/Chat/ChatForm";
import ChatHeader from "../../components/Chat/ChatHeader";
import UserSide from "../../components/Chat/UserSide";
import styled from "styled-components";
import Message from "../../components/Chat/Message";
import RoomsSide from "../../components/Chat/RoomsSide";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { PathMatch, useMatch, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import SockJS from "sockjs-client";
import axios from "axios";
const Stomp = require("stompjs");
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 300%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  z-index: 2;
`;
const Wrap = styled.div`
  z-index: 2;
`;

const Side = styled.div``;
const Contents = styled.div`
  background-color: #36393f;
  width: 100%;
  position: relative;
`;
const ModalWrap = styled(motion.div)`
  width: 80vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
`;

function ChatView() {
  // 소켓 설정
  let sock = new SockJS("http://3.39.37.209:8080/ws/chat");
  let stomp = Stomp.over(sock);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };

  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const chatMatch: PathMatch<string> | null = useMatch(
    "/gamepage/:game/:type/chatview/:id"
  );
  const { game, type, id } = useParams();
  const clicked = chatMatch?.pathname && `${id}` === chatMatch?.params.id;

  if (chatMatch) {
    document.body.style.overflow = "hidden";
  }
  const wsConnectSubscribe = () => {
    try {
      stomp.connect(
        { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        () => {
          stomp.subscribe(
            `/topic/chat/room/${id}`,
            (data: any) => {
              // const newMessage = JSON.parse(data.body);
              console.log(data);
            },
            { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const chatEntarance = async () => {
    // 1. 채팅방 입장 할 때
    await axios.get(`/api/chat/room/${id}`, config).then((response) => {
      if (response) {
        wsConnectSubscribe();
      }
    });
    // 2. 위의 유저정보에 현재유저가 없어서 새로운 채팅방 입장할 때
    // await axios.post(`/api/chat/room/${id}/join`, config).then((response) => {
    //   if (response) {
    //     stomp.debug = null;
    //     stomp.connect({}, () => {
    //       stomp.subscribe(`/topic/chat/room/${id}`, config, (data: any) => {
    //         console.log(data);
    //       });
    //     });
    //   }
    // });
    // 리턴에다 서브스크라이브 해야함
  };
  if (clicked) {
    chatEntarance();
  }

  const onOverlayClick = () => {
    navigate(-1);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {chatMatch && (
        <>
          <Overlay
            onClick={onOverlayClick}
            key={1}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <AnimatePresence>
            <Wrap>
              <ModalWrap
                layoutId={chatMatch?.params.id}
                style={{ top: scrollY.get() + 60 }}
              >
                <Side>
                  <RoomsSide />
                </Side>
                <Contents>
                  <ChatHeader />
                  <Message />
                  <ChatForm />
                </Contents>
                <Side>
                  <UserSide />
                </Side>
              </ModalWrap>
            </Wrap>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default ChatView;
