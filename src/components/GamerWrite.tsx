import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const CreateWrap = styled.div`
  width: 1000px;
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
  queue: string;
  tier: string;
  position: string;
}

function GamerWrite() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
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
    setError,
    formState: { errors },
  } = useForm<ICreate>();
  const onSubmit = ({ username, content, queue, tier, position }: ICreate) => {
    setGamer(username, content, queue, tier, position);
  };
  const setGamer = (
    username: String,
    content: String,
    queue: string,
    tier: string,
    position: string
  ) => {
    console.log(username, content, queue, tier, position);
    axios
      .post(
        `/api/v1/gamer`,
        JSON.stringify({
          gameUsername: username,
          introdution: content,
          game: "리그오브레전드",
        }),
        config
      )
      .then((response) => {
        console.log("게이머등록 성공");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    const gamerSuccess = (val: any) => {
      console.log("게이머등록 성공");
    };
  };
  async function gamerList() {
    console.log("게이머정보요청");
    axios
      .get("/api/v1/GamerList", config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  }
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
            <Select {...register("queue")} style={{ borderColor: "black" }}>
              {GameList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Select {...register("tier")} style={{ borderColor: "black" }}>
              {LevelList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Select {...register("position")} style={{ borderColor: "black" }}>
              {Line.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <input
              {...register("username")}
              placeholder="게임 유저명"
              type="text"
            />
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
      <button onClick={gamerList}>list</button>
    </CreateWrap>
  );
}

export default GamerWrite;
