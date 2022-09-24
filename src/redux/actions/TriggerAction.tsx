export const setGmae = (game: string | undefined) => ({
  type: "SET_GAME",
  data: game,
});
export const setLogInToggle = (toggle: boolean) => ({
  type: "SET_LOGINTOGGLE",
  data: toggle,
});
export const setSignUpToggle = (toggle: boolean) => ({
  type: "SET_SIGNUPTOGGLE",
  data: toggle,
});
