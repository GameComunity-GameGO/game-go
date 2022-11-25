import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import User from "./UserReducer";
import Trigger from "./TriggerReducer";
import Board from "./BoardReducer";
import Chat from "./ChatReducer";
const rootReducer = combineReducers({
  User,
  Trigger,
  Board,
  Chat,
});
export default rootReducer;
