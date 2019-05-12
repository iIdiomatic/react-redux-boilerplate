export function createServiceSuccessResponse(data){
    let response = new ServiceResponse();
    response.isSuccess=true;
    response.data=data;
    response.error="";
    return response;
}

export function createServiceFailureResponse(error){
    let response = new ServiceResponse();
    response.isSuccess=false;
    response.data=null;
    response.error=error;
    return response;
}

function ServiceResponse(){
    return {
        isSuccess:true,
        data:{},
        error:""
    }
}