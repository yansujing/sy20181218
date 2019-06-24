

// var obj = {
//     method: 'POST',
//     url: 'url',
//     async: false,
//     data: 'page=1',
//     dataType: 'json',
//     callback: function (data) {

//     }
// }



function ajaxPromise(obj) {
    const p = new Promise((resolve, reject) => {

        var request = new XMLHttpRequest()

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                }
            }
        }

        if (obj.method === 'GET') {
            request.open(obj.method, obj.url + '?' + obj.data, obj.async);
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

            request.send(obj.data);
        }

    });

    return p;
}