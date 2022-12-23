import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { categorys } from "../utils/gameCategory";
import Header from "../components/Header";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin: 15px 0px;
`;
const CategoryWrap = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 899px) {
    width: 700px;
  }
`;
const BoxWrap = styled(motion.div)`
  margin: 10px;
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
  height: 34vh;
  width: 220px;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
`;
function Main() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Header></Header>
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
