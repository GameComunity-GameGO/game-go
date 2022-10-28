import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CategoryNav from "../components/CategoryNav";
import ProfileBox from "../components/ProfileBox";
import GamerBox from "../components/Gamer/GamerBox";
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
    font-weight: 300;
  }
`;
const Content = styled.div`
  margin-top: 90px;
  display: inline-flex;
`;
const Box = styled.div`
  display: grid;
`;
function MyPage() {
  const { type: type } = useParams();
  const navigate = useNavigate();
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
          <span>자신의 정보를 확인하세요!</span>
        </Title>
        <Content>
          <Sidebar></Sidebar>
          {type === "프로필" ? (
            <>
              <div>
                <Box>
                  <ProfileBox
                    //image={process.env.PUBLIC_URL + "/image/timo.png"}
                    name={"게이머"}
                    email={"gggg@gmail.com"}
                    content={"닉네임"}
                  ></ProfileBox>
                </Box>
              </div>
            </>
          ) : type === "게이머 정보 관리" ? (
            <>
              <div>
                <Box>
                  <GamerBox></GamerBox>
                </Box>
              </div>
            </>
          ) : // ) : type === "채팅 관리" ?(

          // ): type === " 계정 설정" ? (

          null}
        </Content>
      </HeaderContents>
    </Wrap>
  );
}

export default MyPage;
