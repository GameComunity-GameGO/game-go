const init = {
  loginToggle: false,
  signupToggle: true,
  game: "",
  isOutClick: false,
};
export default function (state = init, action: any) {
  switch (action.type) {
    case "SET_GAME":
      return { ...state, game: action.data };
    case "SET_LOGINTOGGLE":
      return { ...state, loginToggle: action.data };
    case "SET_SIGNUPTOGGLE":
      return { ...state, signupToggle: action.data };
    case "SET_ISOUTCLICK":
      return { ...state, isOutClick: action.data };
    default:
      return state;
  }
}
