let x = document.getElementById('enterNumberfirst');
let y = document.getElementById('enterNumberSecond');
// let result = document.getElementById('place-for-result');
// console.log(result);

function calcAddition() {
    let result;
    result = +x.value + +y.value;
    document.getElementById('result').innerHTML = result;
}

function calcSubtraction() {
    result = +x.value - +y.value;
    document.getElementById('result').innerHTML = result;
}

function calcMultiplication() {
    result = +x.value * +y.value;
    document.getElementById('result').innerHTML = result;
}

function calcDivision() {
    result = +x.value / +y.value;
    document.getElementById('result').innerHTML = result;
}
// function calcAddition() {
//     let x = document.getElementById('enterNumberfirst');
//     let y = document.getElementById('enterNumberSecond');
//     return (x + y);
// }

// function calcSubtraction() {
//     let x = Number(prompt('Введите первое число:'));
//     let y = Number(prompt('Введите второе число:'));
//     return (x - y);
// }

// function calcMultiplication() {
//     let x = Number(prompt('Введите первое число:'));
//     let y = Number(prompt('Введите второе число:'));
//     return (x * y);    
// }

// function calcDivision() {
//     let x = Number(prompt('Введите первое число:'));
//     let y = Number(prompt('Введите второе число:'));
//     return (x / y);
// }