import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import {
  Success,
  Form,
  Error,
  Label,
  Input,
  LinkContainer,
  Button,
  Header,
  Container,
  Button2,
} from "./styles";
import { setSignUpToggle } from "../redux/action";
import { access } from "fs";
interface IForm {
  email: string;
  password: string;
}
function LogIn() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<IForm>();

  const onSubmit = ({ email, password }: IForm) => {
    getLogin(email, password);
  };
  //API 호출
  const getLogin = (email: String, password: String) => {
    console.log(email, password);

    axios
      .post(
        `/api/v1/login`,
        JSON.stringify({
          username: email,
          password: password,
        }),
        config
      )
      .then(loginSuccess)
      .catch((error) => {
        console.log(error);
        // 임시 에러 처리
        // setError("password", {
        //   message: "*로그인이 잘못되었습니다.",
        // });
      });
  };
  //jwt 받아오는 decode
  const jwtDecode = (token: any) => {
    const decoded: any = jwt_decode(token);

    console.log(decoded?.exp);
    var nowTime = Date.now();
    var reTime = decoded.exp * 1000;
    console.log(Date.now());
    console.log(reTime);
    // setInterval(nowTime,1000)
    if (Date.now() < reTime) {
      onSilentRefresh();
    }
  };
  async function onSilentRefresh() {
    console.log("엑세스 토큰 시간 만료");
    const data = await localStorage.getItem("refreshToken");
    console.log(data);
    axios
      .post("/api/v1/accessToken", {
        headers: { Authorization_refresh: `Bearer ${data}` },
      })
      .then((response) => {
        // axios.defaults.headers.common[
        //   //   "Authorization_refresh"
        //   // ] = `Bearer ${data}`;
        //   "aaa"
        // ] = `123`;
        console.log(response);
        // jwtDecode(response.data);
      })
      .catch((error) => {});
  }
  //로그인 성공 시
  async function loginSuccess(response: any) {
    function sleep(ms: any) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    const { authorization, authorization_refresh } = response.headers;
    // axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
    // axios.defaults.headers.common[
    //   "Authorization-refresh"
    // ] = `Bearer ${authorization_refresh}`;
    localStorage.setItem("accessToken", authorization);
    localStorage.setItem("refreshToken", authorization_refresh);
    console.log(response);
    await sleep(3000);
    jwtDecode(authorization);
    // setTimeout(onSilentRefresh);
  }

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(setSignUpToggle(false));
  };
  return (
    <Container>
      <Header>GG.GG</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input {...register("email")} type="email"></Input>
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input {...register("password")} type="password"></Input>
          </div>
          <Error>{errors?.password?.message}</Error>
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Button2 onClick={toggleHandler}>회원가입 하러가기</Button2>
        {/* <Button2 onClick={jwtDecode}>jwtjwt</Button2> */}
      </LinkContainer>
    </Container>
  );
}

export default LogIn;
