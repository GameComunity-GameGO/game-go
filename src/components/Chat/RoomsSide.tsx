import styled from "styled-components";

const Wrap = styled.div`
  width: 90px;
  height: 100vh;
  background-color: #282e40;
  padding: 15px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
function RoomsSide() {
  return (
    <Wrap>
      <Contents>
        <Img src="https://cdn-icons-png.flaticon.com/512/5692/5692359.png" />
        {[...new Array(3)].map((data, index) => (
          <Img
            key={index}
            src="https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg"
          />
        ))}
      </Contents>
    </Wrap>
  );
}

export default RoomsSide;
