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
function CommentWrite() {
  return (
    <CommentBox>
      <Comment>
        <form>
          <textarea placeholder="타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."></textarea>
          <div>
            <button>작성</button>
          </div>
        </form>
      </Comment>
    </CommentBox>
  );
}

export default CommentWrite;
