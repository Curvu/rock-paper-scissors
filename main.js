const btns = document.querySelectorAll('.btns');

let cp = parseInt(document.getElementById('cp').textContent);
let yp = parseInt(document.getElementById('yp').textContent);

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let choice = e.target.id
        console.log(choice);
        let computer = getComputerChoice();
        console.log(computer);
        calculateWinner(choice, computer)
        console.log('-----');
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function calculateWinner(choice, computer) {
    if(choice === computer) console.log('Draw')
    else if(choice === 'rock' && computer === 'paper' || choice === 'paper' && computer === 'scissors' || choice === 'scissors' && computer === 'rock') {
        cp++;
        console.log('Computer won!');
    }
    else {
        yp++;
        console.log('You won!');
    }
}