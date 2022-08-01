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
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  // withCredentials: 쿠키 생성 → post에서는 세번째 매개변수로, get에서는 두번째 매개변수로
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          "/api/users/login",
          { email, password },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          // response.data를 data에 저장함 (서버에 재요청하지 않고!!) + 두번째 변수에 false를 넣어주어야 함!!!!
          // revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.data);
        });
    },
    [email, password]
  );

  return (
    <Container>
      <Header>GG.GG</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
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
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </Container>
  );
}
