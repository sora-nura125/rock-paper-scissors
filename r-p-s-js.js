
const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");
const div = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const br = document.createElement('br');
const br2 = document.createElement('br');

document.body.appendChild(rockbtn);
document.body.appendChild(paperbtn);
document.body.appendChild(scissorsbtn);
document.body.appendChild(div);
div.append(br);
div.appendChild(span1);
div.append(br2);
div.appendChild(span2);
div.setAttribute("id","display");
div.setAttribute("id","score")
rockbtn.setAttribute("id","rock")
paperbtn.setAttribute("id","paper")
scissorsbtn.setAttribute("id","scissors")
rockbtn.textContent = "Rock"
paperbtn.textContent = "Paper"
scissorsbtn.textContent = "Scissors"



const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");
const divdiplay = document.querySelector("#results");


let humanScore = 0;
let computerScore = 0;
let humanChoice = '';


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

function playRound(humanChoice,computerChoice){


    if(humanChoice === computerChoice){
        span1.textContent = `${humanChoice} ties ${computerChoice}, It's a Tie!`;
    }
    // win condition for human
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        span1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        span1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        humanScore++;
        span1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;

    }
    // win condition for computer
    else{
        computerScore++;
        span1.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    span2.textContent = `human score = ${humanScore}, computer score = ${computerScore}.`;
};


rockbutton.addEventListener("click", () =>{

    humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});

paperbutton.addEventListener("click", () =>{

    humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});

scissorsbutton.addEventListener("click", () =>{

    humanChoice = 'scissors';
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});







