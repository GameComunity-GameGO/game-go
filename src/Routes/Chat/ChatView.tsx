import ChatForm from "../../components/Chat/ChatForm";
import ChatHeader from "../../components/Chat/ChatHeader";
import UserSide from "../../components/Chat/UserSide";
import styled from "styled-components";
import Message from "../../components/Chat/Message";
import RoomsSide from "../../components/Chat/RoomsSide";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const chatMatch: PathMatch<string> | null = useMatch(
    "/gamepage/:game/:type/chatview/:id"
  );
  console.log(chatMatch?.params.id);
  if (chatMatch) {
    document.body.style.overflow = "hidden";
  }
  const clicked = chatMatch?.pathname && "/trailer" === chatMatch?.pathname;
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
