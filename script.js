//Basic Functions in the calculator
function add(a,b) {
    return Math.round((a+b)*(10**10))/(10**10);
}

function subtract(a,b) {
    return Math.round((a-b)*(10**10))/(10**10);
}

function multiply(a,b) {
    return Math.round((a*b)*(10**10))/(10**10);
}

function divide(a,b) {
    return Math.round((a/b)*(10**10))/(10**10);
}

//Function tha operate with two numbers
function operate(a,operator,b){
    if (operator === '+')
    {
       return add(a,b);
    }
    if (operator === '-')
    {
        return subtract(a,b);
    }
    if (operator === '*')
    {
       return multiply(a,b);
    } 
    if (operator === '/')
    {
       return divide(a,b);
    }
}

//Stores the variable in a array when pressed
var numberStorage = [];

const zero = document.querySelector('#zero')
    zero.addEventListener('click',()=> numberStorage.push(0))

const one = document.querySelector('#one')
    one.addEventListener('click',()=> numberStorage.push(1))

const two = document.querySelector('#two')
    two.addEventListener('click',()=> numberStorage.push(2))

const three = document.querySelector('#three')
    three.addEventListener('click',()=> numberStorage.push(3))

const four = document.querySelector('#four')
    four.addEventListener('click',()=> numberStorage.push(4))

const five = document.querySelector('#five')
    five.addEventListener('click',()=> numberStorage.push(5))

const six = document.querySelector('#six')
    six.addEventListener('click',()=> numberStorage.push(6))

const seven = document.querySelector('#seven')
    seven.addEventListener('click',()=> numberStorage.push(7))

const eight = document.querySelector('#eight')
    eight.addEventListener('click',()=> numberStorage.push(8))

const nine = document.querySelector('#nine')
    nine.addEventListener('click',()=> numberStorage.push(9))

//Displays number in calculator Bottom instantly
window.setInterval(showItBottom,10)

function showItBottom(){
    document.querySelector('#displayBottom').innerHTML = numberStorage.join('');
}

//Displays number in calculator Top instantly
window.setInterval(showItTop,10)

function showItTop(){
    document.querySelector('#displayTop').innerHTML = firstNumber;
}

var firstNumber = '';
var operator = '';
//Makes the operators symbols work
const plus = document.querySelector('#plus')
    plus.addEventListener('click',function() { 
        switchToTop();
        operator = '+';
    })

const minus = document.querySelector('#minus')
    minus.addEventListener('click',function() { 
        switchToTop();
        operator = '-';
})

const multi = document.querySelector('#multi')
    multi.addEventListener('click',function() { 
        switchToTop();
        operator = '*';
})

const division = document.querySelector('#division')
    division.addEventListener('click',function() { 
        switchToTop();
        operator = '/';
})

//Change the first number from bottom to Top
function switchToTop() {
    firstNumber = parseInt(numberStorage.join(''));}
    numberStorage = [''];
    document.querySelector('#displayTop').innerHTML = firstNumber;
}

//Display the final result
const equal = document.querySelector('#equal')
equal.addEventListener('click',function() { 
    numberStorage = [operate(parseInt(firstNumber),operator,parseInt(numberStorage.join('')))]
    firstNumber = numberStorage.join('');
})

//Clear button refres everthing
const clear = document.querySelector('#clear')

clear.addEventListener('click', function () {
    window.location.reload();
  });