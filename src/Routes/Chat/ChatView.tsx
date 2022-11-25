import ChatForm from "../../components/Chat/ChatForm";
import ChatHeader from "../../components/Chat/ChatHeader";
import UserSide from "../../components/Chat/UserSide";
import styled from "styled-components";
import Message from "../../components/Chat/Message";
import RoomsSide from "../../components/Chat/RoomsSide";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { PathMatch, useMatch, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import axios from "axios";
import useInterval from "../../hooks/useInterval";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentMessageData,
  setMessageData,
} from "../../redux/actions/ChatAction";

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
  let sock = new SockJS("http://15.164.200.86:8080/ws/chat");
  let stomp = Stomp.over(sock);
  const dispatch = useDispatch();
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
  const connectUser = () => {
    stomp.send(
      `/app/chat/room/${id}/enter`,
      { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      JSON.stringify({
        message: "데이터 전송",
      })
    );
  };

  // const sendMessage = () => {
  //   stomp.send(
  //     `/app/chatting/room/${id}`,
  //     { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  //     JSON.stringify({
  //       message: "데이터 전송",
  //     })
  //   );
  // };
  const wsConnectSubscribe = () => {
    try {
      // stomp.debug = null;
      stomp.connect(
        { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
        () => {
          stomp.subscribe(
            `/topic/chat/room/${id}`,
            (data: any) => {
              if (JSON.parse(data.body).data.content !== undefined) {
                console.log(JSON.parse(data.body).data);
                dispatch(setCurrentMessageData(JSON.parse(data.body).data));
              }
            },
            {}
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      connectUser();
    }, 2000);
  };
  const chatEntarance = () => {
    // 1. 채팅방 입장 할 때
    axios.get(`/api/chat/room/${id}`, config).then((response) => {
      if (response.status === 200) {
        console.log(response.data.chatMessageList);
        dispatch(setMessageData(response.data.chatMessageList));
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

  const stompDisConnect = () => {
    try {
      stomp.disconnect(
        () => {
          stomp.unsubscribe(`/ws/topic/chat/room/${id}`);
        },
        { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const onOverlayClick = () => {
    navigate(-1);
    stompDisConnect();
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
