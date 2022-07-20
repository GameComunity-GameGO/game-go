import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 45px;
  background-color: #282e40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  margin: 0px 10px;
  font-weight: 400;
  padding: 5px;
  border-radius: 10px;
  background-color: #187f7f;
  cursor: pointer;
  :hover {
    color: #282e40;
  }
`;
function CategoryNav({ view }: any) {
  const [category, setCategory] = useState([
    "리그오브레전드",
    "롤토체스",
    "오버워치",
    "배틀그라운드",
    "로스트아크",
  ]);
  const navigate = useNavigate();
  return (
    <Wrap>
      <Ul>
        {category.map((data, index) => (
          <Li onClick={() => navigate(`/gamepage/${data}`)} key={index}>
            {data}
          </Li>
        ))}
      </Ul>
    </Wrap>
  );
}

export default CategoryNav;
