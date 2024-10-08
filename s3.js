const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnEq = document.getElementById('equal');
const btnPlus = document.getElementById('+');
const btnMinus = document.getElementById('-');
const btnMulti = document.getElementById('X');
const btnDiv = document.getElementById('/');
const btnRemain = document.getElementById('%');
const btnAC = document.getElementById('AC');
const btnC = document.getElementById('C');

btn0.addEventListener('click',()=>{displayInput('0')});
btn1.addEventListener('click',()=>{displayInput('1')});
btn2.addEventListener('click',()=>{displayInput('2')});

btnMulti.addEventListener('click',()=>{displayInput('*')});
btnEq.addEventListener('click',calculateResult);


let storedInputs = "";

function displayInput(input){
    if (storedInputs.length <= 22){
        document.getElementById('displayedInput').textContent += input; 
        storeInput(input);
    }
}


function storeInput(input){
    storedInputs += input;
}


function calculateResult(){

}