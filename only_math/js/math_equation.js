let equationForm = document.getElementById('equation-form');
let btnGetEvaquation = document.getElementById('get-equation');
let btnSendAnswer = document.getElementById('send-answer');
let message=document.getElementById('message');
let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let question = document.getElementById('question');
let answer = document.getElementById('answer');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a;
let b;
let action;
let result;

function getEquation() {
    a = getRandomInt(-10, 10);
    b = getRandomInt(-10, 10);
    if (a < 0) {
        let str = '(' + a + ')';
        x1.innerHTML = str;
    }
    else {
        x1.innerHTML = a;
    }
    if (b < 0) {
        let str = '(' + b + ')';
        x2.innerHTML = str;
    }
    else {
        x2.innerHTML = b;
    }
    action = getRandomInt(0, 3);
    switch (action) {
        case 0:
            question.innerHTML = '+';
            result = a + b;
            break;
        case 1:
            question.innerHTML = '-';
            result = a - b;
            break;
        case 2:
            question.innerHTML = '*';
            result = a * b;
            break;
        case 3:
            question.innerHTML = '/';
            result = a / b;
            break;
    }
}

btnGetEvaquation.onclick = getEquation;
equationForm.addEventListener('submit',function(e){
    e.preventDefault();
    if (checkAnswer()) {
        message.innerHTML='Правильно!';
        document.getElementById("answer").value='';
        getEquation();
    }
    else {
        message.innerHTML='Неправильно, попробуй ещё!';
        document.getElementById("answer").value='';
    }
    setTimeout(function(){
        message.innerHTML='';
    },2000);
})

function checkAnswer() {
    let formData = new FormData(equationForm);
    let temp = formData.get('answer');
    if (temp == result) {
        return true;
    }
    else {
        return false;
    }
}