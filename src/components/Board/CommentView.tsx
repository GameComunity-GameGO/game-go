import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentUpdate from "./CommentUpdate";

const CommentBox = styled.div`
  background-color: #373e59;
  border: 1px solid black;
  padding: 13px;
  margin-top: 15px;
  height: fit-content;
  margin-bottom: 10px;
`;
const UserName = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
  div:first-child {
    display: flex;
    align-items: center;
    span:first-child {
      font-weight: 400;
      margin-right: 15px;
    }
    span:last-child {
      font-size: 13px;
    }
  }
  div:last-child {
    margin-left: 10px;
    font-size: 12px;
    button {
      :first-child {
        margin-right: 5px;
      }
      width: 40px;
      height: 30px;
      background-color: #282e40;
      border: none;
      border: 1px solid black;
      color: whitesmoke;
      cursor: pointer;
      :hover {
        color: #2196f3;
      }
    }
  }
`;
const Comment = styled.div``;

function CommentView() {
  const [commentIndex, setCommentIndex] = useState<Number>();
  const [onUpdate, setOnUpdate] = useState(false);
  const [reply, setReply] = useState<any>();
  const { comment } = useSelector((state: any) => ({
    comment: state.Board.comment,
  }));
  const { game, type, id } = useParams();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  const navigate = useNavigate();
  const onDelBtn = (reply: any) => {
    axios.delete(`/api/reply/${reply}`, config).then((reponse) => {
      console.log(reponse);
    });
  };
  return (
    <>
      {comment &&
        comment.map((item: any, index: number) => (
          <div key={index}>
            <CommentBox>
              <UserName>
                <div>
                  <div>{item.memberDTO.nickname}</div>
                  <div>2022년 2월 2일</div>
                </div>
                <div>
                  {onUpdate ? (
                    <>
                      <button onClick={() => setOnUpdate((prev) => !prev)}>
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setCommentIndex(index);
                          setOnUpdate((prev) => !prev);
                        }}
                      >
                        수정
                      </button>
                      <button onClick={() => onDelBtn(item.id)}>삭제</button>
                    </>
                  )}
                </div>
              </UserName>

              {/* && item.id === index + 1  */}
              {onUpdate && commentIndex === index ? (
                <CommentUpdate value={item.content} reply={item.id} />
              ) : (
                <Comment>{item.content}</Comment>
              )}
            </CommentBox>
          </div>
        ))}
      {/* <CommentBox>
        <UserName>
          <div>
            <span>UserName</span>
            <span>2022년 2월 2일</span>
          </div>
          <div>
            {onUpdate ? (
              <>
                <button onClick={() => setOnUpdate((prev) => !prev)}>
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setOnUpdate((prev) => !prev);
                  }}
                >
                  수정
                </button>
                <button onClick={() => onDelBtn(1)}>삭제</button>
              </>
            )}
          </div>
        </UserName>
        {onUpdate  && item.id === index+1 ? (
          <CommentUpdate value={"댓글 내용"} reply={1} />
        ) : (
          <Comment>{"댓글 내용"}</Comment>
        )}
      </CommentBox> */}
    </>
  );
}

export default CommentView;
