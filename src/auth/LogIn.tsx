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
export const client = axios.create({});
export const accessClient = axios.create({
  timeout: 180000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
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
    // var nowTime = Date.now();
    // var reTime = decoded.exp * 1000;
    // console.log(Date.now());
    // console.log(reTime);
    // // setInterval(nowTime,1000)
    // if (Date.now() < reTime) {
    onSilentRefresh();
    // }
  };
  async function onSilentRefresh() {
    console.log("엑세스 토큰 시간 만료");
    const data = localStorage.getItem("refreshToken");
    console.log("리프레쉬:" + data);
    axios
      .post(
        "/api/v1/accessToken",
        (axios.defaults.headers.common[
          "Authorization_refresh"
        ] = `Bearer ${data}`)
      )
      // , {
      //   headers: { Authorization_refresh: `Bearer ${data}` },
      // })
      .then((response) => {
        const { authorization } = response.headers;
        localStorage.setItem("accessToken", authorization);
        console.log(response);
        // jwtDecode(response.data);
      })
      .catch((error) => {});
  }
  //유저정보 요청
  async function onUser() {
    console.log("유저정보요청 AccessToken");
    const data = localStorage.getItem("accessToken");
    console.log(data);
    axios
      .get("/api/v1/members", { headers: { Authorization: `Bearer ${data}` } })
      .then((response) => {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${data}`;
        console.log(response);
      })
      .catch((error) => {});
  }
  //로그인 성공 시
  async function loginSuccess(response: any) {
    console.log("로그인 성공");
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
    // await sleep(8000);
    // console.log("8초");
    // jwtDecode(authorization);
  }
  const logoutSuccess = (val: any) => {
    console.log("로그아웃 성공");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    if (val) {
      setError("email", { message: "로그아웃에 성공하였습니다." });
    } else {
      setError("email", { message: "" });
    }
  };
  const getLogOut = () => {
    const data = localStorage.getItem("accessToken");
    console.log(data);
    axios
      .post(
        "/api/v1/logout",
        (axios.defaults.headers.common["Authorization"] = `Bearer ${data}`)
      )
      .then((response) => {
        // 성공시
        console.log(response);
        logoutSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        <Button2 onClick={onUser}>jwtjwt</Button2>
        <Button2 onClick={getLogOut}>logout</Button2>
      </LinkContainer>
    </Container>
  );
}

export default LogIn;
