
const compScore = document.getElementById('cp');
const yScore = document.getElementById('yp');
let cp = parseInt(compScore.textContent);
let yp = parseInt(yScore.textContent);

const winner = document.getElementById('winner');

winner.style.display = 'none'

const btns = document.querySelectorAll('.btns');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let choice = e.target.id
        let computer = getComputerChoice();
        calculateWinner(choice, computer);
        renderChoices(choice, computer);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function calculateWinner(choice, computer) {
    if(choice === computer);
    else if(choice === 'rock' && computer === 'paper' || choice === 'paper' && computer === 'scissors' || choice === 'scissors' && computer === 'rock') cp++;
    else yp++;

    if (cp === 10) {
        cp = 0;
        yp = 0;
        document.body.innerHTML = (
            '<p>You lost! Noob 🤓</p><button onclick="window.location.reload()">Play again</button>'
        );
        document.body.style.fontSize = '42px';
    } else if (yp === 10) {
        yp = 0;
        cp = 0;
        document.body.innerHTML = (
            'You won! Pro 😎<button onclick="window.location.reload()">Play again</button>'
        );
        document.body.style.fontSize = '42px';
    }
    renderScore();
    whosLoosing();
}

function renderScore() {
    try {
        document.getElementById('cp').textContent = cp;
        document.getElementById('yp').textContent = yp;
    } catch (err) {
        // console.log('');
        // Não precisa de nada aqui
    }
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


const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');

function renderChoices(playerC, computerC) {
    playerChoice.innerHTML = textToEmote(playerC);
    computerChoice.innerHTML = textToEmote(computerC);
    winner.style.display = 'block';
}

function textToEmote(txt) {
    if (txt === 'rock') return '✊'
    else if (txt === 'paper') return '🖐️'
    else if (txt === 'scissors') return '✌️'
}