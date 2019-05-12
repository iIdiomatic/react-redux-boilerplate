import { GET_SOME_DETAILS, GET_SOME_DETAILS_SUCCESS, GET_SOME_DETAILS_FAILURE } from "./actionTypes";

export function getSomeDetails(id){
    console.log("[someActions]: "+id);
    return {
        type: GET_SOME_DETAILS,
        id
    }
}

export function getSomeDetailsSuccess(data){
    console.log("")
    return {
        type: GET_SOME_DETAILS_SUCCESS,
        data
    }
}

export function getSomeDetailsFailure(err){
    return {
        type: GET_SOME_DETAILS_FAILURE,
        err
    }
}