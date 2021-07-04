import { sendHttpRequest } from "./core/xhr";

const postRequest = (url, data, successCb, errorCb) => {
    sendHttpRequest(
        'POST',
        url,
        data,
        successCb && successCb,
        errorCb && errorCb
    );
}

export default postRequest;
