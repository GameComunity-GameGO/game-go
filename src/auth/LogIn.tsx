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
} from "./styles";
import { setSignUpToggle } from "../redux/action";
interface IForm {
  id: string;
  pw: string;
}
function LogIn() {
  const config = {
    headers: {
      "Content-Type": "/application/json",
    },
    withCredentials: true,
  };
  const [logInError, setLogInError] = useState(false);
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit = ({ id, pw }: IForm) => {
    getLogin(id, pw);
  };

  //API 호충
  const getLogin = (id: string, pw: string) => {
    setLogInError(false);
    axios
      .post(
        "/api/v1/login",
        JSON.stringify({
          username: id,
          password: pw,
        }),
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
        setLogInError(error);
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
            <Input {...register("id")} type="email"></Input>
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input {...register("pw")} type="password"></Input>
          </div>
          {logInError && <Error>{logInError}</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <button onClick={toggleHandler}>회원가입 하러가기</button>
      </LinkContainer>
    </Container>
  );
}

export default LogIn;
