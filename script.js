let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let x = Math.floor(Math.random()*9.99);
    return x;
}
//console.log(generateTarget());
//console.log('Yeah!');

const compareGuesses = (userG,compG,secTarget) => {
    let userD = Math.abs (secTarget - userG);
    let compD = Math.abs (secTarget - compG);
    return (compD >= userD) ? true : false;
}
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    else computerScore++;
}

const advanceRound = () => currentRoundNumber++;