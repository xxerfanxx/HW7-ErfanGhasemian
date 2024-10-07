let activeColor = 'rgb(78, 104, 170)';
let deactiveColor = 'rgb(116, 153, 247)';

const btnT1 = document.getElementById('btnTab1');
const btnT2 = document.getElementById('btnTab2');
const btnT3 = document.getElementById('btnTab3');

btnT1.addEventListener('click', ()=>{displayTab('tab1')});
btnT2.addEventListener('click', ()=>{displayTab('tab2')});
btnT3.addEventListener('click', ()=>{displayTab('tab3')});

function displayTab(tabName){
    let tabsArray = document.getElementsByClassName('tab-container');
    let buttonsArray = document.getElementsByClassName('button-tab');

    for(i=0;i<tabsArray.length;i++){
            tabsArray[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "block";

    for(i=0;i<buttonsArray.length;i++){
        buttonsArray[i].style.backgroundColor = deactiveColor;
    }

    switch(tabName){
        case 'tab1':
            document.getElementById('btnTab1').style.backgroundColor = activeColor;
            break;
        case 'tab2':
            document.getElementById('btnTab2').style.backgroundColor = activeColor;
            break;
        case 'tab3':
            document.getElementById('btnTab3').style.backgroundColor = activeColor;
            break;
    }


}