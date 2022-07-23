import { useForm } from "react-hook-form";
import styled from "styled-components";
const CreateWrap = styled.div`
  background-color: #282e40;
  border-radius: 10px;
  height: 260px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const Select = styled.select`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid #282e40;
  background-color: #373e59;
  color: whitesmoke;
  padding: 5px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  div:nth-child(2) > input {
    margin-top: 10px;
  }
  input {
    background-color: #373e59;
    border: none;
    width: 300px;
    height: 50px;
    margin-bottom: 5px;
    border: 1px solid black;
  }

  div:nth-child(3) > input {
    height: 100px;
    margin-right: 5px;
  }
  button {
    position: relative;
    top: 29.5px;
    width: 70px;
    height: 40px;
    background-color: #373e59;
    border: none;
    border: 1px solid black;
    color: whitesmoke;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
const LeftContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  span {
    font-size: 12px;
    font-weight: 400;
  }
  img {
    width: 130px;
  }
`;
const RightContents = styled.div``;
interface ICreate {
  username: string;
  content: string;
}
function GamerWrite() {
  const GameList = ["모든 큐", "솔로랭크", "자유랭크", "일반", "칼바람"];
  const Line = ["모든 포지션", "탑", "정글", "미드", "원딜", "서포터"];

  const LevelList = [
    "모든 티어",
    "챌린저",
    "그랜드마스터",
    "마스터",
    "다이아몬드",
    "플래티넘",
    "골드",
    "실버",
    "브론즈",
    "아이언",
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICreate>();
  const onSubmit = ({ username, content }: any) => {};
  return (
    <CreateWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LeftContents>
          <span>
            타인을 사칭하거나 모욕하는 일은
            <br /> 법률에 의해 제제를 받을 수 있습니다.
          </span>
          <div>
            <img src={process.env.PUBLIC_URL + "/image/timo.png"} />
          </div>
        </LeftContents>
        <RightContents>
          <div>
            <Select style={{ borderColor: "black" }}>
              {GameList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Select style={{ borderColor: "black" }}>
              {LevelList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Select style={{ borderColor: "black" }}>
              {Line.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <input {...register("username")} placeholder="유저명" type="text" />
          </div>
          <div>
            <input
              {...register("content")}
              placeholder="내용 (200자 이내)"
              type="text"
            />

            <button type="submit">등록</button>
          </div>
        </RightContents>
      </Form>
    </CreateWrap>
  );
}

export default GamerWrite;
