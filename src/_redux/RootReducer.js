import { combineReducers } from "redux";
import GlobalReducer from "../_globalRedux/reducer/GlobalReducer";

const RootReducer = combineReducers({
    GlobalReducer  : GlobalReducer,
})

export default RootReducer;