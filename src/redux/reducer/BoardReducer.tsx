const init = {
  // board: [],
  // popularBoard: [],
  comment: [],
};
export default function (state = init, action: any) {
  switch (action.type) {
    // case "SET_BOARDINFO":
    //   return { ...state, board: action.data };
    // case "SET_BOARD_POPULAR":
    //   return { ...state, popularBoard: action.data };
    case "SET_COMMENT":
      return { ...state, comment: action.data };
    default:
      return state;
  }
}
