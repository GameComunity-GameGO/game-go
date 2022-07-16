import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { categorys } from "../utils/gameCategory";
const Wrap = styled.div`
  width: 80vw;
  height: 100vh;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 30px;
`;
const CategoryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const BoxWrap = styled(motion.div)`
  :hover {
    cursor: pointer;
  }
  h4 {
    margin-top: 10px;
    color: #aeafbc;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }
`;
const Box = styled.div<{ bgphoto: string }>`
  background-image: url(${(props) => props.bgphoto});
  height: 35vh;
  width: 230px;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  margin: 5px;
`;
function Main() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Title>GG.GG</Title>
      <CategoryWrap>
        {categorys.map((data, index) => (
          <BoxWrap key={index} whileHover={{ scale: 1.03 }}>
            <Box
              bgphoto={data.img}
              onClick={() => navigate(`/gamepage/${data.game}`)}
            ></Box>
            <h4>{data.game}</h4>
          </BoxWrap>
        ))}
      </CategoryWrap>
    </Wrap>
  );
}

export default Main;
