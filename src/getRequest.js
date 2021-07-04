import { sendHttpRequest } from "./core/xhr";

const getRequest = (url) => {
    sendHttpRequest('GET', url).then(responseData => {
        console.log(responseData);
        return responseData;
    }).catch(err => {
        console.log(err);
    });
}

export default getRequest;
