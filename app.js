let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
// console.log(choices);
const msg = document.querySelector('#msg');
const userScoreBoard = document.querySelector('#user-score');
const compScoreBoard = document.querySelector('#computer-score');

const genCompChoice = () => {
    // rock paper scissors
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("game is draw !")
    msg.innerText = "Game is draw. Play again !";
    msg.style.backgroundColor = 'rgb(231, 233, 114)';
    msg.style.color = 'black';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        // console.log("User Wins !");
        msg.innerText = `You Wins 😄! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'rgb(110, 249, 136)';
        msg.style.color = 'black';
    }else{
        // console.log("Computer Wins !");
        computerScore++;
        compScoreBoard.innerText = computerScore;
        msg.innerText = `You Loss 😞 ! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'rgb(239, 111, 104)';
        msg.style.color = 'black';
    }
}

const playGame = (userChoice) => {
    // console.log("User Choice =",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    // console.log("Comp Choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin =   compChoice === 'paper' ? userWin = false : userWin = true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? userWin = false : userWin = true;
        }else{
            userWin = compChoice === 'rock' ? userWin = false : userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})

