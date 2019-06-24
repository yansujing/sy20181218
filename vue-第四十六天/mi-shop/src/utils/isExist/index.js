export default function (id, arr) {
    let i = arr.length;
    while (i--) {
        if (arr[i].id === id) {
            return {
                isExist: true,
                index: i
            }
        }
    }
    return {
        isExist: false
    }
}