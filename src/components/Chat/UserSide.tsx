import styled from "styled-components";

const Wrap = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #282e40;
`;
const Header = styled.div`
  width: 100%;
  height: 55px;
  padding: 10px;
  padding-right: 30px;
  background-color: #363d51;
  border-bottom: 1px solid #282e40;
  box-shadow: 10px 0px 3px 1px #282e40;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const Contents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 15px;
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 15px;
  margin-right: 5px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
function UserSide() {
  return (
    <Wrap>
      <Header>
        <Content>
          <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
          <span>닉네임</span>
        </Content>
      </Header>
      <Contents>
        <div>온라인 2명</div>
        <Content>
          <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
          <span>닉네임</span>
        </Content>
        <Content>
          <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
          <span>닉네임</span>
        </Content>
      </Contents>
    </Wrap>
  );
}

export default UserSide;
