import styled from "styled-components";
import { useState } from "react";

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
`;
function CategoryNav() {
  const [category, setCategory] = useState([
    "리그오브레전드",
    "롤토체스",
    "오버워치",
    "배틀그라운드",
    "로스트아크",
  ]);
  return (
    <Wrap>
      <Ul>
        {category.map((data, index) => (
          <Li key={index}>{data}</Li>
        ))}
      </Ul>
    </Wrap>
  );
}

export default CategoryNav;
