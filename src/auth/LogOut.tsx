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
interface IForm {
  email: string;
}
function LogOut() {
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
  const logoutSuccess = (val: any) => {
    console.log("로그아웃 성공");
    if (val) {
      setError("email", { message: "로그아웃에 성공하였습니다." });
    } else {
      setError("email", { message: "" });
    }
  };
  //API 호출
  const getLogOut = (email: string) => {
    axios
      .post(
        `/api/v1/logout`,
        JSON.stringify({
          username: "aa@gmail.com",
        }),
        config
      )
      .then(logoutSuccess)
      .catch((error) => {
        console.log(error);
      });
  };
  //jwt 받아오는 decode
  const jwtDecode = (token: any) => {
    // const decoded: any = jwt_decode(token);
    // console.log(decoded?.);
    // var nowTime = Date.now();
    // var reTime = decoded.exp * 1000;
    // console.log(Date.now());
    // console.log(reTime);
    // // setInterval(nowTime,1000)
    // if (Date.now() < reTime) {
    // }
  };
}
export default LogOut;
