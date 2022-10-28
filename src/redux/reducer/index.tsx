import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import User from "./UserReducer";
import Trigger from "./TriggerReducer";
import Board from "./BoardReducer";

const rootReducer = combineReducers({
  User,
  Trigger,
  Board,
});
export default rootReducer;
