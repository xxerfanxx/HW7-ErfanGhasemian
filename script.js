let fSize = 20;
let sizeFormat = 'px';
let exampleT = document.getElementById('exampleText');

const btnLower = document.getElementById('buttonSmaller');
const btnBigger = document.getElementById('buttonBigger');

btnLower.addEventListener('click', lowerFont);
btnBigger.addEventListener('click', biggerFont);

function biggerFont(){

    fSize += 1;

    exampleT.style.fontSize = fSize + sizeFormat;
}

function lowerFont(){

    if (fSize > 1){
        fSize -= 1;
    }

    exampleT.style.fontSize = fSize + sizeFormat;
}