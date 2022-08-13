import axios from "axios";
import { useForm } from "react-hook-form";

interface IForm {
  id: string;
  pw: string;
}
function Login() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const { register, handleSubmit } = useForm<IForm>();

  const onsubmit = ({ id, pw }: IForm) => {
    getLogin(id, pw);
  };

  const getLogin = (id: string, pw: string) => {
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
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register("id")} type="text"></input>
        <input {...register("pw")} type="password"></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
