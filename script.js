const calc = document.querySelector('.calculator');
const screenDiv = document.getElementById('input-screen');
const resDiv = document.getElementById('screen-result');
let num1, num2, res, operator;
let inputString = '';
calc.addEventListener('click',inputButton);

function inputButton(e) {
    if(['0','1','2','3','4','5','6','7','8','9'].indexOf(e.target.innerText) >= 0) {
        inputString = inputString + e.target.innerText ;
    } else if (['+','-','÷','x'].indexOf(e.target.innerText) >= 0) {
        num1 = inputString;
        inputString = inputString + e.target.innerText ;
        operator = e.target.innerText;
    } else if (e.target.innerText === 'AC') {
        reset();
    } else  if(e.target.innerText === '=') {
        num2 = inputString.slice(inputString.indexOf(operator+1));
        res = operate(operator,num1, num2);
        resDiv.innerText = res;
    }
     screenDiv.innerText = inputString;
}

function reset() {
    num1 = null;
    num2 = null;
    operator = '';
    res = null;
    inputString = '';
    screenDiv.innerText = '';
    resDiv.innerText = '';
}

function add(a,b) {
    return ((a * 10**7 + b * 10**7) / 10**7);
}

function substract(a,b) {
    return ((a * 10**7 - b * 10**7) / 10**7);
}

function multiply(a,b) {
    return ((a * b).toString().length > 10) ? (a * b).toFixed(10) : (a * b);
}

function divide(a,b) {
    return ((a / b).toString().length > 10) ? (a / b).toFixed(10) : (a / b);
};

function operate(operator, num1, num2) {
    if (operator ==="+") return add(num1,num2);
    else if (operator === "-") return substract(num1, num2);
    else if (operator === "x") return multiply(num1, num2);
    else if (operator === "÷") return divide(num1, num2);
    else return 'ERROR';
}