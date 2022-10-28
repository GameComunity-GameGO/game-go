import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  border-radius: 5px;
  height: fit-content;
  margin: 0px 10px;
  background-color: #282e40;
  padding: 20px;
  width: 740px;
  span {
    display: block;
    font-size: 18px;
    font-weight: 600;
    color: whitesmoke;
    padding: 2px;
    height: 50px;
  }
`;
const CreateBtn = styled.div`
  text-align: center;
  width: 160px;
  padding: 10px;
  margin-left: 540px;
  font-size: 14px;
  border: 1px solid #282e40;
  background-color: #373e59;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #2196f3;
  }
  font-weight: 400;
`;
const Info = styled.div`
  display: flex;
  height: 400px;
`;
const InfoItem = styled.div`
  width: 200px;
  padding: 12px;
  font-weight: 400;
  border-radius: 5px;
  background-color: #373e59;
`;
const Select = styled.select`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  border: 1px solid #282e40;
  background-color: #373e59;
  color: whitesmoke;
  padding: 10px;
  font-weight: 400;
`;
const Form = styled.form`
  align-items: center;
  span {
    font-weight: 350;
    font-size: 15px;
    text-align: center;
    color: whitesmoke;
  }
  div:nth-child(2) > input {
    margin-top: 3px;
  }
  input {
    background-color: #373e59;
    border: none;
    border-radius: 5px;
    width: 180px;
    height: 40px;
    margin-bottom: 5px;
    border: 1px solid black;
  }
  button {
    position: relative;
    left: 50px;
    top: 5px;
    width: 70px;
    height: 40px;
    border-radius: 5px;
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
interface ICreate {
  username: string;
  content: string;
}
const GamerBox = () => {
  const GameList = [
    "리그오브레전드",
    "롤토체스",
    "오버워치",
    "배틀그라운드",
    "로스트아크",
  ];
  const Line = ["모든 포지션", "탑", "정글", "미드", "원딜", "서포터"];
  const LevelList = [
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
  const navigate = useNavigate();
  const onSubmit = ({ username, content }: any) => {};
  return (
    <Box>
      <span>게이머 정보</span>
      <Info>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InfoItem>
            <span>
              당신의 게이머 정보를 <br></br>등록해주세요!
            </span>
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
              <input
                {...register("username")}
                placeholder="유저명"
                type="text"
              />
              <input {...register("content")} placeholder="P.S" type="text" />
            </div>
            <div>
              <button type="submit">등록하기</button>
            </div>
          </InfoItem>
        </Form>
      </Info>
      <CreateBtn onClick={() => navigate(`/mypage/게이머정보수정`)}>
        게이머 정보 수정
      </CreateBtn>
    </Box>
  );
};

export default GamerBox;
