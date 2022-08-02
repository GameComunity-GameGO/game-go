import React, { useCallback, useState } from "react";
import {
  Container,
  Form,
  Error,
  Label,
  Input,
  LinkContainer,
  Button,
  Header,
} from "./styles";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const [logInError, setLogInError] = useState(false);
  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          "/api/v1/login",
          JSON.stringify({
            username: username,
            // nickname,
            password: password,
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
          setLogInError(error.response?.data);
        });
    },
    [username, password]
  );

  return (
    <Container>
      <Header>GG.GG</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          {logInError && <Error>{logInError}</Error>}
        </Label>
        <br></br>
        <Button type="submit">로그인</Button>
        <Button type="submit">네이버</Button>
        <Button type="submit">카카오</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/회원가입">회원가입 하러가기</Link>
      </LinkContainer>
    </Container>
  );
}
