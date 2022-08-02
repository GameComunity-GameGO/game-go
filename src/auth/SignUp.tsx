import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
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

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, onChangeUsername] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const onSubmit = () => {
    console.log(username, nickname, password, passwordCheck);
    console.log("서버로 회원가입하기");

    axios
      .post(
        "/api/v1/member",
        JSON.stringify({
          username: username,
          // nickname,
          password: password,
        }),
        config
      )
      .then((response) => {
        // 성공시
        console.log(response);
        setSignUpSuccess(true);
      })
      .catch((error) => {
        // 실패시
        console.log(error.response);
      });
  };
  const toggleHandler = () => {
    dispatch(setSignUpToggle(true));
    console.log(1);
  };
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
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
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
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && (
            <Success>회원가입 되었습니다! 로그인 해주세요.</Success>
          )}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Button onClick={toggleHandler}>로그인 하러가기</Button>
      </LinkContainer>
    </Container>
  );
};

export default SignUp;
