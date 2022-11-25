const init = {
  messageData: [],
  currentMessageData: [],
};
export default function (state = init, action: any) {
  switch (action.type) {
    case "SET_MESSAGE_DATA":
      return { ...state, messageData: action.data };
    case "SET_CURRENT_MESSAGE_DATA":
      return {
        ...state,
        currentMessageData: state.currentMessageData.concat(action.data),
      };
    default:
      return state;
  }
}
