import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  background-color: #36393f;
  border-bottom: 1px solid #2f3136;
  box-shadow: 1px 1px 3px -10px #2f3136;
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
  }
`;
const Logo = styled.div`
  margin-left: 15px;
  svg {
    height: 25px;
    fill: #8e9297;
    margin-right: 10px;
    margin-top: 3px;
  }
`;
function ChatHeader() {
  return (
    <Wrap>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
        </svg>
      </Logo>
      <span>채팅방명</span>
    </Wrap>
  );
}

export default ChatHeader;
