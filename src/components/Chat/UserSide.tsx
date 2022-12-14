import styled from "styled-components";

const Wrap = styled.div`
  width: 260px;
  height: 85vh;
  background-color: #2f3136;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  padding: 10px;
  padding-right: 30px;
  background-color: #36393f;
  border-bottom: 1px solid #2f3136;
  box-shadow: 10px 0px 3px -10px #2f3136;
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
      <Header></Header>
      <Contents>
        <div>온라인 2명</div>
        <Content>
          <Img src={process.env.PUBLIC_URL + "/image/profile.png"} />
          <span>subin</span>
        </Content>
        <Content>
          <Img src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg" />
          <span>subin2</span>
        </Content>
      </Contents>
    </Wrap>
  );
}

export default UserSide;
