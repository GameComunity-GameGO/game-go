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
  return (
    <CommentBox>
      <UserName>
        <div>유저명</div>
        <div>2022년 2월 2일</div>
      </UserName>
      <Comment>댓글내용</Comment>
    </CommentBox>
  );
}

export default CommentView;
