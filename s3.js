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
const btnHistory = document.getElementById('history');

btn0.addEventListener('click',()=>{displayInput('0')});
btn1.addEventListener('click',()=>{displayInput('1')});
btn2.addEventListener('click',()=>{displayInput('2')});
btn3.addEventListener('click',()=>{displayInput('3')});
btn4.addEventListener('click',()=>{displayInput('4')});
btn5.addEventListener('click',()=>{displayInput('5')});
btn6.addEventListener('click',()=>{displayInput('6')});
btn7.addEventListener('click',()=>{displayInput('7')});
btn8.addEventListener('click',()=>{displayInput('8')});
btn9.addEventListener('click',()=>{displayInput('9')});

btnMulti.addEventListener('click',()=>{displayInput('*')});
btnDiv.addEventListener('click',()=>{displayInput('/')});
btnRemain.addEventListener('click',()=>{displayInput('%')});
btnPlus.addEventListener('click',()=>{displayInput('+')});
btnMinus.addEventListener('click',()=>{displayInput('-')});

btnEq.addEventListener('click',calculateResult);
btnC.addEventListener('click',clearEntry);
btnAC.addEventListener('click',allClear);
btnHistory.addEventListener('click',toggleHistoryDisplay);

let calculationsHistory = [];
let storedInputs = "";

function displayInput(input){

    if (storedInputs.length <= 22){
        document.getElementById('displayedInput').textContent += input; 
        storeInput(input);
    }
}


function storeInput(input, code = 0){

    if(code){
        storedInputs = Number(input);
    }
    else{
        storedInputs += input;
    }
}


function calculateResult(){

    let result = evaluateExpression(storedInputs);

    calculationsHistory.push({'inputs' : storedInputs, 'output' : result})
    document.getElementById('displayedOutput').textContent = result;
    document.getElementById('displayedInput').textContent = result;


    if(result){
        appendHistory();
    }

    storedInputs = "";
    storedInputs += result;
}

function evaluateExpression(expression) {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
    };

    function parseExpression(expr) {
        const values = [];
        const opsStack = [];
        let i = 0;

        while (i < expr.length) {
            if (isDigit(expr[i])) {
                let num = 0;
                while (i < expr.length && isDigit(expr[i])) {
                    num = num * 10 + parseInt(expr[i]);
                    i++;
                }
                values.push(num);
            } else if (expr[i] in ops) {
                while (opsStack.length && precedence(opsStack[opsStack.length - 1]) >= precedence(expr[i])) {
                    applyOperator(opsStack, values);
                }
                opsStack.push(expr[i]);
                i++;
            } else {
                console.log('invalid expression');
            }
        }

        while (opsStack.length) {
            applyOperator(opsStack, values);
        }

        return values[0];
    }

    function precedence(op) {
        if (op === '+' || op === '-') {
            return 1;
        }
        if (op === '*' || op === '/' || op === '%') {
            return 2;
        }
        return 0;
    }

    function applyOperator(opsStack, values) {
        const op = opsStack.pop();
        const right = values.pop();
        const left = values.pop();
        values.push(ops[op](left, right));
    }

    function isDigit(char) {
        return /\d/.test(char);
    }

    return parseExpression(expression);
}

function allClear(){

    storedInputs = "";

    document.getElementById('displayedOutput').textContent = "";
    document.getElementById('displayedInput').textContent = "";
}

function clearEntry(){

    if (storedInputs.length > 0){
        storedInputs = storedInputs.slice(0, -1);
    }
    document.getElementById('displayedInput').textContent = storedInputs;
}

let i = 1;
function appendHistory(){
    const ele = document.getElementById('displayHistory');
    const newLi = document.createElement('li');
    
        newLi.innerText +=  `input: ${calculationsHistory[i].inputs} \noutput: ${calculationsHistory[i].output}`;
    i+=1;
    ele.appendChild(newLi);
}

let historyIsHidden = true;
function toggleHistoryDisplay(){
    let historyDiv = document.getElementById("historyDiv");
    console.log(historyIsHidden);
    if(historyIsHidden){
        historyIsHidden = false;
        historyDiv.style.visibility = 'visible';
    }
    else{
        historyIsHidden = true;
        historyDiv.style.visibility = 'hidden';
    }
}  

document.getElementById("historyDiv").style.visibility = 'hidden';