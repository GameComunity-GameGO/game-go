export const setLogInToggle = (toggle: boolean) => ({
  type: "SET_LOGINTOGGLE",
  data: toggle,
});
export const setSignUpToggle = (toggle: boolean) => ({
  type: "SET_SIGNUPTOGGLE",
  data: toggle,
});
export const setBoardInfo = (boardInfo: any) => ({
  type: "SET_BOARDINFO",
  data: boardInfo,
});
export const setUserName = (username: any) => ({
  type: "SET_USERNAME",
  data: username,
});
export const setComment = (comment: any) => ({
  type: "SET_COMMENT",
  data: comment,
});
// export function onUser(dataToSubmit) {
//   const request = axios
//     .post("/api/users/login", dataToSubmit)
//     .then((response) => response.data);
//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// }
