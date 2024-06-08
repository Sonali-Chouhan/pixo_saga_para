import { call, put, takeEvery } from 'redux-saga/effects';
import instance from '../../Sevices/Apiconfig';
import { ERROR, GET_USERS, GET_USERS_SUCCESS } from './User.type';

function* usersData(action){
    try {
        const res = yield call(instance.get,"/posts");
        yield put({
            type:GET_USERS_SUCCESS,
            payload:res
        });
      } catch (error) {
        yield put({ 
            type:ERROR,
            payload:error
        });
      }
}

export default function* UsersSaga(){
    yield takeEvery(GET_USERS,usersData);
}