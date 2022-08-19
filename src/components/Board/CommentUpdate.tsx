import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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
    background-color: #282e40;
    border: none;
    border: 1px solid black;
    color: whitesmoke;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  div:first-child {
    font-weight: 400;
  }
  div:last-child {
    margin-left: 10px;
    font-size: 12px;
  }
`;
interface ICommentWrite {
  content: string;
}
function CommentUpdate(props: any) {
  // let data = null;
  // const { comment } = useSelector((state: any) => ({
  //   comment: state.comment,
  // }));

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
    Update(content);
  };
  useEffect(() => {
    // data = comment.filter((ele: any) => ele.id === Number(reply));
    setValue("content", props.value);
  }, []);
  const Update = (content: any) => {
    axios
      .put(
        `/api/reply/${props.reply}`,
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

export default CommentUpdate;
