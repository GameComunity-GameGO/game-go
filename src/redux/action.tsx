export const test = (TEST: Object) => ({
  type: "TEST",
  payload: TEST,
});

export const setLogInToggle = (toggle: boolean) => ({
  type: "SET_LOGINTOGGLE",
  data: toggle,
});
export const setSignUpToggle = (toggle: boolean) => ({
  type: "SET_SIGNUPTOGGLE",
  data: toggle,
});
// export function loginUser(dataToSubmit) {
//   const request = axios
//     .post("/api/users/login", dataToSubmit)
//     .then((response) => response.data);
//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// }
