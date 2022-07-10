const rootReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "TEST":
      return { ...state, action: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
