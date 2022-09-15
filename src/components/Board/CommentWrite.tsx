import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentBox = styled.div`
  width: 100%;
`;
const Comment = styled.div`
  textarea {
    margin-top: 10px;
    padding: 10px;
    height: 10vh;
    background-color: #373e59;
    overflow: auto;
    border: 1px solid black;
    width: 100%;
    color: whitesmoke;
    resize: none;
    &:focus {
      outline: none;
      border-color: #2196f3;
    }
  }
  div {
    display: flex;
    justify-content: right;
  }
  div > button {
    font-size: 13px;
    width: 120px;
    height: 40px;
    background-color: #373e59;
    border: none;
    border: 1px solid black;
    color: whitesmoke;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
interface ICommentWrite {
  content: string;
}
function CommentWrite() {
  const { id } = useParams();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ICommentWrite>();
  const onSubmit = ({ content }: any) => {
    Write(content);
  };
  const Write = (content: string) => {
    axios
      .post(
        `/api/board/${id}/reply`,
        JSON.stringify({
          content: content,
        }),
        config
      )
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e: any) => {
    setValue("content", e.target.value);
  };
  return (
    <CommentBox>
      <Comment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            onChange={handleChange}
            value={watch("content")}
            placeholder="타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
          ></textarea>
          <div>
            <button type="submit">작성</button>
          </div>
        </form>
      </Comment>
    </CommentBox>
  );
}

export default CommentWrite;
