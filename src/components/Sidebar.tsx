import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../utils/test.jpeg";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 600px;
  background-color: #282e40;
`;
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const User = styled.div`
  margin-top: 10px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
const SidebarItem = styled.div`
  margin: 2px 10px;
  font-weight: 400;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: #187f7f;
  }
`;

function Sidebar({ view }: any) {
  const [menus, setMenu] = useState([
    "프로필",
    "게이머 정보 관리",
    "채팅 관리",
    "계정 설정",
  ]);
  const navigate = useNavigate();
  return (
    <Side>
      <Profile src={img}></Profile>
      <User>
        게이머 <br></br>gggg@gmail.com<br></br>010-0000-0000
      </User>
      <Menu>
        {menus.map((menu, index) => (
          <SidebarItem onClick={() => navigate(`/mypage/${menu}`)} key={index}>
            {menu}
          </SidebarItem>
        ))}
      </Menu>
    </Side>
  );
}

export default Sidebar;
