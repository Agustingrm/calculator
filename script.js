//Basic Functions in the calculator
function add(a,b) {
    return Math.round((a+b)*(10**4))/(10**4);
}

function subtract(a,b) {
    return Math.round((a-b)*(10**4))/(10**4);
}

function multiply(a,b) {
    return Math.round((a*b)*(10**4))/(10**4);
}

function divide(a,b) {
    if (b==0){
    alert('If you divide by 0 you get and infinit number')
    window.location.reload();}
    return Math.round((a/b)*(10**4))/(10**4);
}

//Function that operate with two numbers
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
var control = [];

const zero = document.querySelector('#zero')
    zero.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else {
        numberStorage.push(0);
        control.push(0)}})

const one = document.querySelector('#one')
    one.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(1);
        control.push(1)}})

const two = document.querySelector('#two')
    two.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(2);
        control.push(2)}})

const three = document.querySelector('#three')
    three.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(3);
        control.push(3)}})

const four = document.querySelector('#four')
    four.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(4);
        control.push(4)}})

const five = document.querySelector('#five')
    five.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(5);
        control.push(5)}})

const six = document.querySelector('#six')
    six.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(6);
        control.push(6)}})

const seven = document.querySelector('#seven')
    seven.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(7);
        control.push(7)}})

const eight = document.querySelector('#eight')
    eight.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(8);
        control.push(8)}})

const nine = document.querySelector('#nine')
    nine.addEventListener('click',()=> {
        if (control[control.length-1] == 'equal'){
        }
        else { numberStorage.push(9);
        control.push(9)}})

const coma = document.querySelector('#coma')
    coma.addEventListener('click',()=> {
        if (numberStorage.includes('.')==false){
        numberStorage.push('.')}
    });
    

//Displays number in calculator Bottom instantly
window.setInterval(ShowItTop,10)

function ShowItTop(){
    document.querySelector('#displayTop').innerHTML = numberStorage.join('');
}

//Displays number in calculator Top instantly
window.setInterval(ShowItBottom,10)

function ShowItBottom(){
    document.querySelector('#displayBottom').innerHTML = firstNumber+' '+operator+' '+numberStorage.join('');
}

var firstNumber = '';
var operator = '';
//Makes the operators symbols work
const plus = document.querySelector('#plus')
    plus.addEventListener('click',function() {
        if (control[control.length-1] == 'operator'){

        }
        else {
        control.push('operator');
        switchToBottom();
        operator = '+';
        }
    })

const minus = document.querySelector('#minus')
    minus.addEventListener('click',function() { 
        if (control[control.length-1] == 'operator'){

        }
        else {
        control.push('operator');
        switchToBottom();
        operator = '-';
        }
})

const multi = document.querySelector('#multi')
    multi.addEventListener('click',function() { 
        if (control[control.length-1] == 'operator'){

        }
        else {
        control.push('operator');
        switchToBottom();
        operator = '*';
        }
})

const division = document.querySelector('#division')
    division.addEventListener('click',function() { 
        if (control[control.length-1] == 'operator'){

        }
        else {
        control.push('operator');
        switchToBottom();
        operator = '/';
        }
})

//Change the first number from bottom to Top and make the operation end from the third number introduced ahead
function switchToBottom() {
    if (firstNumber == '') {
    firstNumber = parseFloat(numberStorage.join(''));
    numberStorage = [''];
    document.querySelector('#displayTop').innerHTML = firstNumber;
    }
    else { 
            numberStorage = [operate(parseFloat(firstNumber),operator,parseFloat(numberStorage.join('')))]
            if (previousResult){
            firstNumber = previousResult;
            previousResult = '';
            operator='';
            }
            else if (numberStorage)
            firstNumber = numberStorage.join('');
            numberStorage = [];
            operator='';
        }
    }

var previousResult = ''
//Display the final result
const equal = document.querySelector('#equal')
equal.addEventListener('click',function() {
    if (control[control.length-1] == 'equal'){

    }
    else if (firstNumber == false || numberStorage.join('') == false){
    return parseFloat(numberStorage.join(''));
    }
    else {
    control.push('equal');
    numberStorage = [operate(parseFloat(firstNumber),operator,parseFloat(numberStorage.join('')))]
    firstNumber = numberStorage.join('');
    previousResult = numberStorage.join('');
    numberStorage = [];
    operator='';
    }
})

//Clear button refres everthing
const clear = document.querySelector('#clear')

clear.addEventListener('click', function () {
    window.location.reload();
  });

//Allows to erase the last number
const erase = document.getElementById('erase')

erase.addEventListener('click',()=> {
    numberStorage.pop()
});

//Stop giving erros when you double press the operator

