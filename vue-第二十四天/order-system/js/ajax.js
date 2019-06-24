


export default function ajaxPromise(obj) {

    return new Promise((resolve, reject) => {

        var request = new XMLHttpRequest()

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        }

        if (obj.method === 'GET') {
            if (obj.data) {
                request.open(obj.method, obj.url + '?' + obj.data, obj.async);
            } else {
                request.open(obj.method, obj.url, obj.async);
            }
            request.send();
        }

        if (obj.method === 'POST') {
            request.open(obj.method, obj.url, obj.async);

            if (obj.dataType === 'form') {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            if (obj.dataType === 'json') {
                request.setRequestHeader('Content-Type', 'application/json');
            }
            if (obj.data) {
                request.send(obj.data);
            } else {
                request.send();
            }
        }

    });

}