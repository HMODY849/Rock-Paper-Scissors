let x = "rock";
let y = "paper";
let z = "scissor";
let humanScore = 0;
let computerScore =0;
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
        console.log("it's Draw, rock and rock")
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === y &&computerChoice === y){
        console.log("It's Draw, paper and paper")
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === z && computerChoice === z){
        console.log("It's Draw, scisser and scisser")
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === x && computerChoice === y){
        console.log("You Lose, paper defeat rock");
        computerScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === x && computerChoice === z){
        console.log("You Win, rock defeat scisser")
        humanScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === y && computerChoice === x){
        console.log("You Win, paper defeat rock")
        humanScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === y && computerChoice === z){
        console.log("You Lose, scisser defeat paper")
        computerScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === z && computerChoice === x){
        console.log("You Lose, rock defeat scisser")
        computerScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    else if(humanChoice === z && computerChoice === y){
        console.log("You Win, scisser defeat paper")
        humanScore ++;
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
}


function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore > computerScore){
        console.log("Congratulation You Win your score is : " + humanScore + " computer score is : " + computerScore)
    }
    else if(computerScore > humanScore){
        console.log("Game over, you lose your score is : " + humanScore + " computer score is : " + computerScore)
    }
    else{
        console.log("It's Draw your score is : " + humanScore + " computer score is : " + computerScore)
    }
}
playGame();