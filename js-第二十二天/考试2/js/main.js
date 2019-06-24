

const inputEle = document.getElementById('input');
const hEle = document.getElementById('h1');

inputEle.oninput = function () {

    console.log(Number(this.value).toFixed(2));

    let money = Number(this.value).toFixed(2);

    let integralPart = money.split('.')[0];
    let decimalPart = money.split('.')[1];

    console.log(integralPart);

    let integralTemp = integralPart.split('').reverse().join('').match(/\d{1,3}/g);

    let integralResult = integralTemp.join(',').split('').reverse().join('');

    console.log(integralResult);

    const result = `${integralResult}.${decimalPart}`;

    hEle.innerText = result;

}