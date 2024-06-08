import { combineReducers } from "redux";
import usersReducer from "./Users/User.reducer";

const rootReducer = combineReducers ({
    users: usersReducer
});
export default rootReducer;
