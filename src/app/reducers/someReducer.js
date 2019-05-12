import {
 GET_SOME_DETAILS,
 GET_SOME_DETAILS_SUCCESS,
 GET_SOME_DETAILS_FAILURE
}  from '../actions/actionTypes';

var initialState = {
    isLoading:false,
    somethings:[]
}


export default function someReducer(state = initialState, action = {}) {
    console.log("action called: "+action.type);
    switch (action.type) {
     case GET_SOME_DETAILS:
       let id = action.id;
       return { ...state, isLoading: true ,id };
     case GET_SOME_DETAILS_FAILURE:
       return { ...state, isLoading: false, error: action.error};
     case GET_SOME_DETAILS_SUCCESS:
       return { ...state, isLoading: false, somethings: action.data};
     default:
       return state;
    }
}