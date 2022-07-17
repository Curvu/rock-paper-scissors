const choices = ['rock', 'paper', 'scissors'];

const btns = document.querySelectorAll('.btns');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let choice = e.target.id
        console.log(choice);
        let computer = getComputerChoice();
        console.log(computer)
        console.log('-----')
    });
});


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}