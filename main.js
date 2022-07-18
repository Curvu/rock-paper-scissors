const btns = document.querySelectorAll('.btns');


const compScore = document.getElementById('cp');
const yScore = document.getElementById('yp');
let cp = parseInt(compScore.textContent);
let yp = parseInt(yScore.textContent);

const winner = document.getElementById('winner');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let choice = e.target.id
        console.log(choice);
        let computer = getComputerChoice();
        console.log(computer);
        calculateWinner(choice, computer);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function calculateWinner(choice, computer) {
    if(choice === computer) winner.innerText = 'Draw!'
    else if(choice === 'rock' && computer === 'paper' || choice === 'paper' && computer === 'scissors' || choice === 'scissors' && computer === 'rock') {
        cp++;
        winner.innerText = 'Computer Won the point!'
    }
    else {
        yp++;
        winner.innerText = 'You won the point!'
    }
    renderScore();
}

function renderScore() {
    document.getElementById('cp').textContent = cp;
    document.getElementById('yp').textContent = yp;
    whosLoosing();
}

function whosLoosing() {
    if (cp > yp) {
        compScore.style.color = 'green';
        yScore.style.color = 'red';
    } else if (yp > cp) {
        yScore.style.color = 'green';
        compScore.style.color = 'red';
    } else {
        compScore.style.color = 'black';
        yScore.style.color = 'black';
    }
}