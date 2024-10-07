let fSize = 10;
let sizeFormat = 'px';
let exampleT = document.getElementById('exampleText');

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