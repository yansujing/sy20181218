

localStorage.setItem('name', 'Bao');
localStorage.setItem('age', '28');
localStorage.setItem('sex', 'Man');

console.log(localStorage.getItem('name'));

localStorage.removeItem('name');

console.log(localStorage);

// localStorage.clear();

console.log(localStorage);


var obj = {
    name: 'Bao',
    agte: 28
};


localStorage.setItem('obj', JSON.stringify(obj));

console.log(JSON.parse(localStorage.getItem('obj')));