import { call, put, takeLatest } from 'redux-saga/effects';
import {   GET_SOME_DETAILS   } from "../actions/actionTypes";
import { fetchDoSomething } from '../services/doSomethingService';
import { getSomeDetailsSuccess, getSomeDetailsFailure } from '../actions/someActions';

export function* doSomethingSagaWatcher() {
    yield takeLatest(GET_SOME_DETAILS, doSomethingSaga);
}

export function* doSomethingSaga(action) {
    try {
        var {id} = action;
        console.log("[doSomethingSaga ]  Saga called!! "+JSON.stringify(action)); 
        var response = yield call(fetchDoSomething, id ); 
        if (response.isSuccess) {
            console.log("[doSomethingSaga] saga was success!! "+JSON.stringify(response));
            yield put(getSomeDetailsSuccess(response.data));
        } else {
            console.log("[doSomethingSaga] saga was failure!!");
            yield put(getSomeDetailsFailure(response.error));
        }
    } catch (err) {
        console.log("[doSomethingSaga]  Error is: " + err);
        yield put(getSomeDetailsFailure(err));
    }

}