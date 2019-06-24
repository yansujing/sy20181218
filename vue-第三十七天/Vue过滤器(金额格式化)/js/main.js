


// 金额格式化过滤器函数
function moneyFormat(value) {
    if (!value || !Number(value)) {
        return '0.00';
    }

    // 转换为字符串
    let money = String(Number(value).toFixed(2));

    // 分别获取整数和小数部分
    let parts = money.split('.');
    // 获取整数部分
    let integralPart = parts[0];

    // 处理整数部分
    let integralTemp = integralPart.split('').reverse().join('').match(/(\d{1,3})/g);
    let integralResult = integralTemp.join(',').split('').reverse().join('');
    console.log(integralResult);

    // 小数部分
    let decimalResult = parts[1];

    // 最后将整数与小数部分拼接起来，得到最终结果
    let result = `${integralResult}.${decimalResult}`;
    console.log(result);

    return result;
}


const vm = new Vue({
    el: '#app',
    data: {
        money: ''
    },
    filters: {
        moneyFormat
    }
});

