import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CommentBox = styled.div`
  background-color: #373e59;
  border: 1px solid black;
  padding: 10px;
  margin-top: 15px;
  height: 10vh;
  margin-bottom: 10px;
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
const Comment = styled.div``;

function CommentView() {
  const { comment } = useSelector((state: any) => ({
    comment: state.comment,
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
        comment.map((item: any) => (
          <div key={item.id}>
            <CommentBox>
              <UserName>
                <div>{item.memberDTO.nickname}</div>
                <div>2022년 2월 2일</div>
                <button
                  onClick={() =>
                    navigate(
                      `/gamepage/${game}/${type}/commentupdate/${id}/${item.id}`
                    )
                  }
                >
                  수정
                </button>
                <button onClick={() => onDelBtn(item.id)}>삭제</button>
              </UserName>
              <Comment>{item.content}</Comment>
            </CommentBox>
          </div>
        ))}
    </>
  );
}

export default CommentView;
