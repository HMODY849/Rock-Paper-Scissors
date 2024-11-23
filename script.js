let x = "rock";
let y = "paper";
let z = "scissor";
let humanScore = 0;
let computerScore = 0;
function getComputerChoice (){
    let RandoM = Math.floor(Math.random()*3);
    if (RandoM === 0){
        return x;
    }
    else if(RandoM === 1){
        return y;
    }
    else{
        return z;
    }
}
 
function getHumanChoice(){
   let human = prompt("chosee your item rock/paper/scissor", "");
    if (human === "rock"){
        return x;
    }
    else if(human === "paper"){
        return y;
    }
    else if( human === "scissor"){
        return z;
    }
}

 
function playRound (humanChoice,computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if(humanChoice === x && computerChoice === x){
        return "it's Draw, rock and rock Your Score: " +  humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === y &&computerChoice === y){
        return "it's Draw, paper and paper Your Score: " +  humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === z && computerChoice === z){
        return "it's Draw, scisser and scisser Your Score: " +  humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === x && computerChoice === y){
        computerScore++;
        return "You Lose, paper defeat rock Your Score: " + humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === x && computerChoice === z){
        humanScore++;
        return "You Win, rock defeat scisser Your Score: " + humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === y && computerChoice === x){
        humanScore++;
        return "You Win, paper defeat rock Your Score: " + humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === y && computerChoice === z){
        computerScore++;
        return "You Lose, scisser defeat paper Your Score: " + humanScore 
        + "Computer Score: " + computerScore
    }
    else if(humanChoice === z && computerChoice === x){
        computerScore++;
        return "You Lose, rock defeat scisser Your Score: " + humanScore 
        + "Computer Score: " + computerScore;
    }
    else if(humanChoice === z && computerChoice === y){
        humanScore++;
        return "You Win, scisser defeat paper Your Score: " + humanScore 
        + "Computer Score: " + computerScore;
    }
}


function playGame(){
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    if(humanScore > computerScore){
        console.log("Congratulation You Win your score is : " + humanScore 
            + " computer score is : " + computerScore);
    }
    else if(computerScore > humanScore){
        console.log("Game over, you lose your score is : " + humanScore 
            + " computer score is : " + computerScore)
    }
    else{
        console.log("It's Draw your score is : " + humanScore 
            + " computer score is : " + computerScore)
    }
}
playGame();