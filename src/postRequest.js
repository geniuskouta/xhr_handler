import { sendHttpRequest } from "./core/xhr";

const postRequest = (url, data) => {
    sendHttpRequest('POST', url, data).then(responseData => {
        console.log(responseData);
        return responseData;
    }).catch(err => {
        console.log(err);
    });
}

export default postRequest;
