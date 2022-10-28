const init = {
  username: "",
};
export default function (state = init, action: any) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.data };
    default:
      return state;
  }
}
