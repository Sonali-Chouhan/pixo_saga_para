import { all } from "redux-saga/effects";
import UsersSaga from "./Users/User.saga";

export default function* rootSaga(){
    yield all([
      UsersSaga()
    ])
}