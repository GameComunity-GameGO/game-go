const init = {
  loginToggle: false,
  signupToggle: true,
  board: [],
  username: "",
  comment: [],
  game: "",
};

const rootReducer = (state = init, action: any) => {
  switch (action.type) {
    case "SET_LOGINTOGGLE":
      return { ...state, loginToggle: action.data };
    case "SET_SIGNUPTOGGLE":
      return { ...state, signupToggle: action.data };
    case "SET_CONTENT":
      return { ...state, content: action.data };
    case "SET_BOARDINFO":
      return { ...state, board: action.data };
    case "SET_USERNAME":
      return { ...state, username: action.data };
    case "SET_COMMENT":
      return { ...state, comment: action.data };
    case "SET_GAME":
      return { ...state, game: action.data };
    default:
      return state;
  }
};

export default rootReducer;
