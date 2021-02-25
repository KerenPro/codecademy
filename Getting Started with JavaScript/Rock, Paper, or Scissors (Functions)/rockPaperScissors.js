const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please choose rock, paper or scissors');
    }
};

const getComputerChoice = () => {
    let choice = (Math.floor(Math.random()*3));
    switch (choice){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return console.log ('Computer broke');
    }
};

const determineWinner = (userChoice , computerChoice) => {
    if (userChoice === computerChoice){
        return console.log('Tie!');
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return console.log ('User got Rock and Computer got Paper - Computer Won!'); } else {
            return console.log('User got Rock and Computer got Scissors - User won!'); }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return console.log ('User got Paper and Computer got Scissors - Computer Won!'); } else {
            return console.log('User got Paper and Computer got Rock - User won!'); }
    } else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return console.log ('User got Scissors and Computer got Rock - Computer Won!'); } else {
            return console.log('User got Scissors and Computer got Paper - User won!'); }
    } else {
        console.log('No choice made');
    }
};

function playGame (){
    userChoice = getUserChoice('paper');
    computerChoice = getComputerChoice();
    console.log(`User Choice is: ${userChoice}`);
    console.log(`Computer Choice is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();