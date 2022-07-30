import styled from "styled-components";

const SidebarWrap = styled.div`
  height: fit-content;
  width: fit-content;
  position: sticky;
  top: 40px;
`;
const SiderBar = styled.div`
  width: 300px;
  height: 500px;
  padding: 20px;
  background-color: #282e40;
  margin-right: 10px;
`;
function Siderbar() {
  return (
    <SidebarWrap>
      <SiderBar>UserInfo</SiderBar>
    </SidebarWrap>
  );
}

export default Siderbar;
