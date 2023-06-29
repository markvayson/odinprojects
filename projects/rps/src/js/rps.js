document.addEventListener('DOMContentLoaded', function() {
const words = ["rock","paper","scissor"];
let prw = 0;
let crw = 0;
var round = 1;

// GET
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const resultDiv = document.getElementById("result");
 
// Create Elements

// Append

// Event Listeners
rockBtn.addEventListener('click', handleBtnClick);
paperBtn.addEventListener('click', handleBtnClick);
scissorBtn.addEventListener('click', handleBtnClick);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    return randomWord;
}

function handleBtnClick(event) {
    computerSelection = getComputerChoice();
    let playerSelection = event.target.id;
    var p = document.createElement("p");
    var h1 =document.createElement("h1");
    if(crw <= 5 || prw <= 5){
    p.textContent = playRound(playerSelection, computerSelection, round);
    
    resultDiv.appendChild(p);
    }
    if(crw === 5 || prw === 5){
    h1.textContent = `You got ${prw} win over the comp's ${crw}!`;
    resultDiv.appendChild(h1);
    }
    round++;

}

function playRound(playerSelection, computerSelection, round){
    console.log(round)
    const you = playerSelection;
    const comp = computerSelection;
    const rbs = "Rock beats Scissor";
    const sbp = "Scissor beats Paper";
    const pbr = "Paper beats Rock";
    const win ="You win! You Chose ";
    const lose = "You lose! You Chose";
    if(you === comp){
        return `round ${round}: It's a Draw!`;
    }

    switch (you) {
        case 'rock':
            if(comp === 'scissor') {
                prw += 1
                return `round ${round}:  you beat ${comp} by choosing ${you}`;
            } else {
                crw += 1;
                return `round ${round}: you lose to ${comp} by choosing ${you}`;
             }
            break;
        case 'paper':
            if(comp === 'rock') {
                prw += 1
                return win + pbr
            } else {
                crw += 1;
                return lose + sbp
            }
            break;
        case 'scissor':
            if(comp === 'paper') {
                prw += 1
                return win + sbp
            } else {
                crw += 1;
                return lose + rbs
            }
            break;    

    }
}


function winner(){
    const score = " Scores ( Me: " + prw + " vs Comp: " + crw + " )";
    
        if(prw > crw){
            return "Congratulations!, You won the game." + score;
        } else if(prw < crw) {
            return "Sorry, You lose the game!" + score;
        } else if(prw === crw) {
            return "Draw!, Try Again?" + score;
        }

}

   
});