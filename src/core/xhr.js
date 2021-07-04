/* initialize only once so that we can keep track of a pending request */
const xhr = new XMLHttpRequest();

export const sendHttpRequest = (method, url, data, successCb, errorCb) => {
    /*
        for more details about xhr.readyState:
        https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    */ 
    if(xhr.readyState === 1) {
        xhr.abort();
        return ;
    }

    if(xhr.readyState > 0 && xhr.readyState < 4){
        /* after data is sent to the server */
        console.log('Current request aborted!');
        return ;
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
        console.log('Previous request aborted!');
    }

    /* event that fires when xhr request ends with an error */
    xhr.onerror = () => {
        errorCb && errorCb();
    }
}
