import styled from "styled-components";

const Skeletons = styled.div`
  position: relative;
  overflow: hidden;
  height: 57px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0px;
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    animation: sweep 2s infinite;
    background-image: linear-gradient(
      to left,
      transparent,
      rgba(47, 49, 54, 0.4),
      transparent
    );
    @keyframes sweep {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(150%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;
const Avatar = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 3px;
  background-color: #40444b;
`;
const Author = styled.div`
  background-color: #40444b;
  width: 110px;
  height: 15px;
  border-radius: 3px;
  position: absolute;
  bottom: 43px;
  left: 65px;
  right: 0;
`;
const Description = styled.div`
  background-color: #40444b;
  height: 30px;
  border-radius: 3px;
  position: absolute;
  bottom: 5px;
  left: 65px;
  right: 10px;
`;
function Skeleton() {
  return (
    <Skeletons>
      <Avatar />
      <Author />
      <Description />
    </Skeletons>
  );
}

export default Skeleton;
