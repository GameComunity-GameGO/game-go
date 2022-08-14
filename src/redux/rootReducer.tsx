const init = {
  loginToggle: false,
  signupToggle: true,
  content: "",
};

const rootReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_LOGINTOGGLE":
      return { ...state, loginToggle: action.data };
    case "SET_SIGNUPTOGGLE":
      return { ...state, signupToggle: action.data };
    case "SET_CONTENT":
      return { ...state, content: action.data };
    default:
      return state;
  }
};

export default rootReducer;
