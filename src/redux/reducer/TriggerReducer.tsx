const init = {
  loginToggle: false,
  signupToggle: true,
  game: "",
};
export default function (state = init, action: any) {
  switch (action.type) {
    case "SET_GAME":
      return { ...state, game: action.data };
    case "SET_LOGINTOGGLE":
      return { ...state, loginToggle: action.data };
    case "SET_SIGNUPTOGGLE":
      return { ...state, signupToggle: action.data };
    default:
      return state;
  }
}
