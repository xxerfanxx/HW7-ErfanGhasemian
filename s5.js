let questionBank = [
    {
        'question' : 'بزرگترین سیاره منظومه شمسی کدام است ؟',
        'option1' : 'زحل',
        'option2' : 'مریخ',
        'option3' : 'مشتری',
        'option4' : 'زمین',
        'answer' : 'مشتری'
},
{
    'question' : 'پایتخت ایران کجاست ؟',
    'option1' : 'شیراز',
    'option2' : 'تهران',
    'option3' : 'اصفهان',
    'option4' : 'تبریز',
    'answer' : 'تهران'
},
{
    'question' : 'تعداد روز های سال کبیسه چنداست ؟',
    'option1' : '365',
    'option2' : '366',
    'option3' : '364',
    'option4' : '367',
    'answer' : '365'
}
]

let storedAnswers = [];

for(i=0;i<questionBank.length;i++){
    storedAnswers.push('');
}

let qIndex = 0;

const opt1Btn = document.getElementById('opt1');
const opt2Btn = document.getElementById('opt2');
const opt3Btn = document.getElementById('opt3');
const opt4Btn = document.getElementById('opt4');

const backBtn = document.getElementById('backButton');
const nextBtn = document.getElementById('nextButton');
const endBtn = document.getElementById('endButton');

opt1Btn.addEventListener('click',()=>selectOption(opt1Btn));
opt2Btn.addEventListener('click',()=>selectOption(opt2Btn));
opt3Btn.addEventListener('click',()=>selectOption(opt3Btn));
opt4Btn.addEventListener('click',()=>selectOption(opt4Btn));

backBtn.addEventListener('click',()=>{displayQuestion(qIndex - 1); displaySelectedOption()});
nextBtn.addEventListener('click',()=>{displayQuestion(qIndex + 1); displaySelectedOption()});
endBtn.addEventListener('click',calculateResult);

function displayQuestion(index = 0){

    if(index < 0){
        index = 0;
    }
    else if(index >= questionBank.length){
        index = questionBank.length - 1;
    }

    qIndex = index;

    document.getElementById('displayedQuestion').innerText = questionBank[index].question;
    opt1Btn.innerText = questionBank[index].option1;
    opt2Btn.innerText = questionBank[index].option2;
    opt3Btn.innerText = questionBank[index].option3;
    opt4Btn.innerText = questionBank[index].option4;
}

function selectOption(element, code = 0){

    opt1Btn.style.backgroundColor = 'rgb(28, 130, 232)';
    opt2Btn.style.backgroundColor = 'rgb(28, 130, 232)';
    opt3Btn.style.backgroundColor = 'rgb(28, 130, 232)';
    opt4Btn.style.backgroundColor = 'rgb(28, 130, 232)';

    if(element){
        if(storedAnswers[qIndex] != element.innerText && storedAnswers[qIndex] != "" || code != 0){
            element.style.backgroundColor = 'rgb(28, 189, 28)';
            storedAnswers[qIndex] = element.innerText;
        }
        else if(storedAnswers[qIndex] == ""){
            element.style.backgroundColor = 'rgb(28, 189, 28)';
            storedAnswers[qIndex] = element.innerText;
        }
        else{
            storedAnswers[qIndex] = '';
        }
    }

    console.log(storedAnswers)
}

function displaySelectedOption(){

    if(storedAnswers[qIndex] == opt1Btn.innerText){
        selectOption(opt1Btn,1);
    }
    else if(storedAnswers[qIndex] == opt2Btn.innerText){
        selectOption(opt2Btn,1);
    }
    else if(storedAnswers[qIndex] == opt3Btn.innerText){
        selectOption(opt3Btn,1);
    }
    else if(storedAnswers[qIndex] == opt4Btn.innerText){
        selectOption(opt4Btn,1);
    }
    else{
        selectOption("");
    }
}

function calculateResult(){
    let result = 0;

    for(i=0;i<questionBank.length;i++){
        if(storedAnswers[i] == questionBank[i].answer){
            result++;
        }
    }

    displayResult(result);
}

function displayResult(result){
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('questionBox').style.display = 'none'
    document.getElementById('displayedResult').innerText = 'امتیاز نهایی شما : ' + result + ' از' + questionBank.length;
}

displayQuestion();