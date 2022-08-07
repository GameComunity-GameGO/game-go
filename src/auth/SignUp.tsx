import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

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
  Button3,
} from "./styles";
import { setSignUpToggle } from "../redux/action";

interface ISignUp {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

function SignUp() {
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm<ISignUp>();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const onSubmit = ({ email, password, nickname, passwordCheck }: ISignUp) => {
    console.log(email, nickname, password, passwordCheck);
    console.log("서버로 회원가입하기");
    setSignUpError("");
    setSignUpSuccess(false);
    // 요청 보내기 직전 값 초기화 ( 요청 연달아 날릴때 첫번째 요청 때 남아있던 결과가 두 번째에 또 표시될 수 있음)
    getSignUp(email, password, nickname, passwordCheck);
  };
  const getSignUp = (
    email: String,
    password: String,
    nickname: String,
    passwordCheck: String
  ) => {
    axios
      .post(
        "/api/v1/member",
        JSON.stringify({
          username: email,
          nickname: nickname,
          password: password,
          repassword: passwordCheck,
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
        setSignUpError(error.response.data);
      });
  };
  //아이디 중복 여부 !val
  const idMatch = (val: any) => {
    if (val) {
      setError("email", { message: "사용가능한 이메일입니다." });
    } else {
      setError("email", { message: "이메일 중복입니다." });
    }
  };
  // 아이디 중복 검사
  async function IdSendAuth(e: any) {
    e.preventDefault();
    const val = watch().email;
    console.log(val);
    axios
      .post(
        `/api/v1/SignUp/existUsername`,
        JSON.stringify({
          username: val,
        }),
        config
      )
      .then((response) => {
        idMatch(response.data); //없으면 true 있으면(중복이면) false
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(setSignUpToggle(true));
    console.log(1);
  };
  //비밀번호 확인
  const pwMatch = (val: any) => {
    if (val) {
      setError("passwordCheck", { message: "" });
    } else {
      setError("passwordCheck", { message: "비밀번호가 일치하지 않습니다." });
    }
  };
  //비밀번호 확인 검사
  async function pwSendAuth(e: any) {
    e.preventDefault();
    const val = watch().password;
    const val2 = watch().passwordCheck;
    axios
      .post(
        `/api/v1/SignUp/samePassword`,
        JSON.stringify({
          password: val,
          repassword: val2,
        }),
        config
      )
      .then((response) => {
        pwMatch(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //닉네임 중복 여부
  const nickMatch = (val: any) => {
    if (val) {
      setError("nickname", { message: "사용가능한 닉네임입니다." });
    } else {
      setError("nickname", { message: "닉네임 중복입니다." });
    }
  };
  // 닉네임 중복 검사
  async function nickSendAuth(e: any) {
    e.preventDefault();
    const val = watch().nickname;
    console.log(val);
    axios
      .post(
        `/api/v1/SignUp/existNickname`,
        JSON.stringify({
          nickname: val,
        }),
        config
      )
      .then((response) => {
        nickMatch(response.data); //없으면 true 있으면(중복이면) false
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Container>
      <Header>GG.GG</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input {...register("email")} type="email" />
          </div>
          <Button3 onClick={IdSendAuth}>중복</Button3>
          <Error>{errors?.email?.message}</Error>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input {...register("nickname")} type="nickname" />
          </div>
          <Button3 onClick={nickSendAuth}>중복</Button3>
          <Error>{errors?.nickname?.message}</Error>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input {...register("password")} type="password" />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              {...register("passwordCheck", {
                required: "비밀번호 재입력은 필수입니다.",
                validate: (value) =>
                  value === watch("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
              // placeholder="비밀번호를 재입력하세요"
              type="password"
            />
          </div>
          <Error>{errors?.passwordCheck?.message}</Error>
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && (
            <Success>회원가입 되었습니다! 로그인 해주세요.</Success>
          )}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Button2 onClick={toggleHandler}>로그인 하러가기</Button2>
      </LinkContainer>
    </Container>
  );
}

export default SignUp;
