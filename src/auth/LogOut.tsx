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
interface IForm {
  email: string;
}
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
// const {
//   register,
//   formState: { errors },
//   handleSubmit,
//   setError,
//   watch,
// } = useForm<IForm>();
const LogOut = () => {
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

  const logoutSuccess = (val: any) => {
    console.log("로그아웃 성공");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // if (val) {
    //   setError("email", { message: "로그아웃에 성공하였습니다." });
    // } else {
    //   setError("email", { message: "" });
    // }
  };
  // const getLogOut = () => {
  //   const data = localStorage.getItem("accessToken");
  //   console.log(data);
  //   axios
  //     .post(
  //       "/api/v1/logout",
  //       (axios.defaults.headers.common["Authorization"] = `Bearer ${data}`)
  //     )
  //     .then((response) => {
  //       // 성공시
  //       console.log(response);
  //       logoutSuccess(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
export default LogOut;
