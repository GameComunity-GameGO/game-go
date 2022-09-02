import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";
import UserSide from "./UserSide";
import styled from "styled-components";
import Message from "./Message";
import RoomsSide from "./RoomsSide";

const Wrap = styled.div`
  background-color: #363d51;
  height: 100vh;
  display: flex;
`;

const Side = styled.div``;
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function ChatView() {
  return (
    <Wrap>
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
    </Wrap>
  );
}

export default ChatView;
