let timerIsStopped = true;
let storedTime = "";

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
        
        document.getElementById('displayedTime').innerText=`${minsDisplay}:${secsDisplay}:${cmSec}`;
        console.log(cmSecDisplay);
        if (timerIsStopped) {
            storedTime = `${minsDisplay}:${secsDisplay}:${cmSecDisplay}`;
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


function start(){
    if(timerIsStopped){
        timerIsStopped = false;
        timer(); 
    }
    
}

function stop(){
    if(!timerIsStopped){
        timerIsStopped = true;
    }
}