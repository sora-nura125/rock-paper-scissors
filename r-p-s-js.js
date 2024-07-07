
function cl(x){
    console.log(x);
};

function getComputerChoice(){
    let x = Math.floor(Math.random() * (3 - 0) + 0);
    cl(x);
    let computerChoice = '';
    switch(x){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;

    }
    return computerChoice;

};

function getHumanChoice(){
    let inp = prompt("what is your choice?(rock, paper, scissors)")
    return inp;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){


    if(humanChoice === computerChoice){
        cl(`${humanChoice} ties ${computerChoice}, It's a Tie!`);
    }
    // win condition for human
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        cl(`You win! ${humanChoice} beats ${computerChoice}`);

    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        cl(`You win! ${humanChoice} beats ${computerChoice}`);

    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        humanScore++;
        cl(`You win! ${humanChoice} beats ${computerChoice}`);

    }
    // win condition for computer
    else{
        computerScore++;
        cl(`You lose! ${computerChoice} beats ${humanChoice}`);
    }


};




function playGame(){
    let counter = 0
    while(counter < 5){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        counter++;
        cl(`human score = ${humanScore}, computer score = ${computerScore}`);
    }
}

playGame();

