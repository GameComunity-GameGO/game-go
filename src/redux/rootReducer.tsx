const rootReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SET_LOGINTOGGLE":
      return { ...state, action: action.data };
    case "SET_SIGNUPTOGGLE":
      return { ...state, action: action.data };
    default:
      return state;
  }
};

export default rootReducer;
