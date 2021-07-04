/* initialize only once so that we can keep track of a pending request */
const xhr = new XMLHttpRequest();

export const sendHttpRequest = (method, url, data, successCb, errorCb) => {
    if(xhr && xhr.readyState != 4){
        /* aborts the previous request if it is still pending */
        xhr.abort();
    }

    /* initializes a newly-created request, or re-initializes an existing one */
    xhr.open(method, url);

    xhr.responseType = 'json';
    if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.send(JSON.stringify(data));

    /* event that fires when xhr request completes */
    xhr.onload = () => {
        if(xhr.status >= 400) {
            errorCb && errorCb(xhr.response);
            return xhr.response;
        } else {
            successCb && successCb(xhr.response);
            return xhr.response;
        }
    }

    /* event that fires when xhr request aborts */
    xhr.onabort = () => {
        console.log('Request aborted!');
    }

    /* event that fires when xhr request ends with an error */
    xhr.onerror = () => {
        errorCb && errorCb();
    }
}
