let timerIsStopped = true;
let storedMin;
let storedSec;
let storedcmSec;
let historyCollection = [];

const startBtn = document.getElementById('startButton');
const stopBtn = document.getElementById('captureButon');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop)

function timer(){
    let cmSecDisplay = "00"
    let cmSec = 0;
    let secsDisplay = "00";
    let secs = 0;
    let minsDisplay = "00";
    let mins = 0;
    

    let timer = setInterval(function(){
        
        document.getElementById('displayedTime').innerText=`${minsDisplay}:${secsDisplay}:${cmSec-1}`;
        storedMin = mins;
        storedSec = secs;
        storedcmSec = cmSec;

        if (timerIsStopped) {
            clearInterval(timer);
        }
        else{
            if(cmSec < 100){
                cmSec++;
                if(cmSec < 10 && cmSec > 0){
                    cmSecDisplay = '0' + cmSec;
                }
                else if(secs == 0){
                    cmSecDisplay = '00';
                }
                else{
                    cmSecDisplay = cmSec;
                }
            }
            else{
                cmSec = 0;
                if(secs < 60){
                    secs++;
                    if(secs < 10 && secs > 0){
                        secsDisplay = '0' + secs;
                    }
                    else if(secs == 0){
                        secsDisplay = '00';
                    }
                    else{
                        secsDisplay = secs;
                    }
                }
                else{
                    secs = 0;
                    secsDisplay = '00';
                    if(mins < 60){
                        mins++;
                        if(mins < 10 && mins > 0){
                            minsDisplay = '0' + mins;
                        }
                        else if(mins == 0){
                            minsDisplay = '00';
                        }
                        else{
                            minsDisplay = mins;
                        }
                    }
                    else{
                        mins = 0;
                    }
                }
            }
        }
    }, 10);
}

function appendHistory(){
    const ele = document.getElementById('captures');
    const newLi = document.createElement('li');

    let storedTime = "";

    if(storedMin < 10 && storedMin > 0){
        storedTime += '0' + storedMin;
    }
    else if (storedMin == 0){
        storedTime += '00'
    }
    else{
        storedTime += storedMin;
    }

    if(storedSec < 10 && storedSec > 0){
        storedTime += ':0' + storedSec;
    }
    else if (storedSec == 0){
        storedTime += ':00'
    }
    else{
        storedTime += ':' + storedSec;
    }

    if(storedcmSec < 10 && storedcmSec > 0){
        storedTime += ':0' + storedcmSec;
    }
    else if (storedcmSec == 0){
        storedTime += ':00'
    }
    else{
        storedTime += ':' + storedcmSec;
    }
    
        newLi.innerText +=  `${storedTime}`;
        historyCollection.push(storedTime);

    ele.appendChild(newLi);
}


function start(){
    if(timerIsStopped){
        timerIsStopped = false;
        timer(); 
    }
    
}

function stop(){
    if(!timerIsStopped){
        appendHistory();
        timerIsStopped = true;
    }
}