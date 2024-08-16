import { takeEvery,put } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "./Constant";

function* USERLIST() {
    const url = "https://dummyjson.com/users";
    const response = yield fetch(url);
    const result = yield response.json();
    console.warn(result);
    yield put({type:SET_USER_DATA,data:result})
    

}


function* sagaData() {
    yield takeEvery(USER_LIST, USERLIST);
}

export default sagaData
