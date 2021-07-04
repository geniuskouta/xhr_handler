import { sendHttpRequest } from "./core/xhr";

const getRequest = (url, successCb, errorCb) => {
    sendHttpRequest('GET', url, successCb && successCb, errorCb && errorCb);
}

export default getRequest;
