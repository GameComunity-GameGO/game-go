import { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import SockJS from "sockjs-client";
import axios from "axios";
import { useParams } from "react-router-dom";
const Stomp = require("stompjs");
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  margin-bottom: 5px;
  position: absolute;
  bottom: 0;
`;
const Input = styled.input`
  background-color: #40444b;
  border: none;
  width: 100%;
  height: 50px;
  :focus {
    outline: none;
  }
  padding-left: 55px;
  color: whitesmoke;
  border-radius: 10px;
  position: relative;
`;
const Logo = styled.div`
  position: absolute;
  z-index: 1;
  padding: 10px;
  margin-left: 5px;
  svg {
    height: 25px;
    margin-top: 2px;
    fill: #8e9297;
    margin-right: 10px;
    cursor: pointer;
    :hover {
      fill: #2196f3;
    }
  }
`;
interface IChat {
  content: string;
}
function ChatForm() {
  const { game, type, id } = useParams();
  const inputOpenImageRef = useRef<any>();
  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IChat>();
  const onSubmit = ({ content }: any) => {
    let sock = new SockJS("http://3.39.37.209:8080/ws/chat");
    let stomp = Stomp.over(sock);
    if (content === "") return;
    stomp.send(
      `/api/chat/room/${id}/enter`,
      { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      JSON.stringify({
        content: content,
      })
    );
    setValue("content", "");
  };
  return (
    <Wrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Logo onClick={handleOpenImageRef}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
            </svg>
          </Logo>
          <Input
            {...register("content")}
            type="text"
            placeholder="메시지 보내기..."
          />
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          ref={inputOpenImageRef}
          accept="image/jpeg, image/png"
          // onChange={handleUploadImage}
        />
      </form>
    </Wrap>
  );
}

export default ChatForm;
