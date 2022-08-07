import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
interface IForm {
  email: string;
  password: string;
}
function LogIn() {
  const config = {
    headers: {
      "Content-Type": "/application/json",
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
    console.log(email, password);
    getLogin(email, password);
  };

  //API 호출
  const getLogin = (email: String, password: String) => {
    axios
      .post(
        `/api/v1/login`,
        // JSON.stringify({
        //   username: email,
        //   password: password,
        // }),
        config
      )
      .then((response) => {
        console.log(response);
        const { authorization, authorization_refresh } = response.headers;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${authorization}`;
        axios.defaults.headers.common[
          "Authorization-refresh"
        ] = `Bearer ${authorization_refresh}`;
      })
      .catch((error) => {
        console.log(error);
        // 임시 에러 처리
        // setError("password", {
        //   message: "*로그인이 잘못되었습니다.",
        // });
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
      </LinkContainer>
    </Container>
  );
}

export default LogIn;
