import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CategoryNav from "../components/CategoryNav";

const Wrap = styled.div`
  min-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 15px;
`;
const HeaderContents = styled.div`
  position: relative;
  bottom: 200px;
  width: 1000px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Banner = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #282e40),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  span:first-child {
    display: block;
    font-size: 38px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 600;
  }
`;

function MyPage() {
  return (
    <Wrap>
      <CategoryNav />
      <Header>
        <Banner
          bgphoto={
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt728b7e80503d4a3b/60b813c6a8cd6a0a26e29220/Patch_11_12_Notes_Banner.jpg"
          }
        ></Banner>
      </Header>
      <HeaderContents>
        <Title>
          <span>마이페이지</span>
          <span>000님, 환영합니다.</span>
        </Title>
      </HeaderContents>
      <Sidebar></Sidebar>
    </Wrap>
  );
}

export default MyPage;
