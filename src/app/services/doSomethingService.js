import axios from "axios";
import { createServiceSuccessResponse, createServiceFailureResponse } from "../lib/responseUtil";
import {FETCH_SOMETHING_URL} from "../constants/URL";
export function fetchDoSomething(id){
    return new Promise(function(resolve,reject){
        console.log("recieved id: "+id);
        try{
            axios.get(FETCH_SOMETHING_URL+id).then(function(response){
                resolve(createServiceSuccessResponse(response.data));
            }).catch(function(err){
                resolve(createServiceFailureResponse(err));
            });
        }catch(err){
            resolve(createServiceFailureResponse(err));
        }
        
    });
}