
function fn1(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 2000) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

function fn2(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 2000) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

var arr1 = [1500, 1200, 2000, 2100, 1800, 3500, 1265, 800, 4230, 1500, 4600, 2000, 5040, 3012, 1200, 1850, 1560, 1250, 2000, 1520, 3470, 4120]

console.log(fn1(arr1));
console.log(fn2(arr1));

function fn3(arr) {

    var counts = 0;

    var obj = {};

    for (var i = 0; i < arr.length; i++) {

        // 不等于 -1 说明未被比较过
        if (arr[i] !== -1) {

            counts++;

            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    counts++;
                    // 比较过的元素置为 -1 作为标志
                    arr[j] = -1;
                }
            }

            console.log(arr[i]);

            obj[arr[i]] = counts;

            counts = 0;
        }

    }
    return obj;
}

console.log(fn3(["c", "a", "z", "a", "a", "e", "c"]));