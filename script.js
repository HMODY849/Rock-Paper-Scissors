let x = "rock";
let y = "paper";
let z = "scissor";
let humanScore = 0;
let computerScore = 0;
let human="";
let itemComputer=document.querySelector(".itemComputer");
let itemHuman=document.querySelector(".itemHuman");
let paper1= document.querySelector(".item1");
let rock1= document.querySelector(".item2");
let scissor1= document.querySelector(".item3");
let roundResult = document.getElementsByTagName("h1")[0];
let resultRound1 = document.querySelector(".yourScore");
let resultRound2 = document.querySelector(".computerScore");
let playgRound = document.querySelector(".playground");
let father = document.querySelector("body");
let finalresult = document.querySelector(".choicePic");
let Congratulation = document.querySelector(".finalResult");
let buttonPlayAgain = document.querySelector(".playagin");

rock1.addEventListener("click",function(){
    human=x;
    playRound();
    resultRound1.innerHTML=`${humanScore}`
    resultRound2.innerHTML=`${computerScore}`
    winOrlose();
    });

paper1.addEventListener("click",function(){
        human=y;
        playRound();
        resultRound1.innerHTML=`${humanScore}`
        resultRound2.innerHTML=`${computerScore}`
        winOrlose();
        }); 

scissor1.addEventListener("click",function(){
        human=z;
        playRound();
        resultRound1.innerHTML=`${humanScore}`
        resultRound2.innerHTML=`${computerScore}`
        winOrlose();
        });

function getHumanChoice(human){
    if (human === "rock"){
        itemHuman.innerHTML='<img src="./images/rock.png">'
        return x;
    }
    else if(human === "paper"){
        itemHuman.innerHTML='<img src="./images/paper.png">'
        return y;
    }
    else if( human === "scissor"){
        itemHuman.innerHTML='<img src="./images/scissor.png">'
        return z;
    }
    }

function getComputerChoice (){
        let RandoM = Math.floor(Math.random()*3);
        if (RandoM === 0){
            itemComputer.innerHTML='<img src="./images/rock.png">'
            return x;
        }
        else if(RandoM === 1){
            itemComputer.innerHTML='<img src="./images/paper.png">'
            return y;
        }
        else{
            itemComputer.innerHTML='<img src="./images/scissor.png">'
            return z;
        }
    }

 function playRound (humanChoice,computerChoice){
                humanChoice = getHumanChoice(human);
                computerChoice = getComputerChoice();
                if(humanChoice === x && computerChoice === x){
                    roundResult.style.color="gray"
                    return roundResult.innerHTML="Draw";
                }
                else if(humanChoice === y &&computerChoice === y){
                    roundResult.style.color="gray"
                    return roundResult.innerHTML="Draw";
                }
                else if(humanChoice === z && computerChoice === z){
                    roundResult.style.color="gray"
                    return roundResult.innerHTML="Draw";
                }
                else if(humanChoice === x && computerChoice === y){
                    computerScore++;
                    roundResult.style.color="red"
                    return roundResult.innerHTML="You Lose";
                }
                else if(humanChoice === x && computerChoice === z){
                    humanScore++;
                    roundResult.style.color="green"
                    return roundResult.innerHTML="You Win";
                }
                else if(humanChoice === y && computerChoice === x){
                    humanScore++;
                    roundResult.style.color="green"
                    return roundResult.innerHTML="You Win";
                }
                else if(humanChoice === y && computerChoice === z){
                    computerScore++;
                    roundResult.style.color="red"
                    return roundResult.innerHTML="You Lose";
                }
                else if(humanChoice === z && computerChoice === x){
                    computerScore++;
                    roundResult.style.color="red"
                    return roundResult.innerHTML="You Lose";
                }
                else if(humanChoice === z && computerChoice === y){
                    humanScore++;
                    roundResult.style.color="green"
                    return roundResult.innerHTML="You Win";
                }
    }

    function playAgain(){
        let playagain1 = document.querySelector(".playagin");
        playagain1.addEventListener("click", function(){
            humanScore=0;
            computerScore=0;
            resultRound1.innerHTML=`${humanScore}`
            resultRound2.innerHTML=`${computerScore}`
            itemHuman.innerHTML=``
            itemComputer.innerHTML=``
            Congratulation.classList.add("Gameover");
            buttonPlayAgain.classList.add("Gameover");
            finalresult.classList.remove("Gameover")
            paper1.classList.remove("Gameover");
            rock1.classList.remove("Gameover");
            scissor1.classList.remove("Gameover");
        })
    }
    
    function winOrlose (){
        if(humanScore ==5){
            roundResult.innerHTML=" "
            Congratulation.innerHTML='Congratulation you win';
            Congratulation.classList.remove("Gameover");
            buttonPlayAgain.classList.remove("Gameover");
            finalresult.classList.add("Gameover");
            paper1.classList.add("Gameover");
            rock1.classList.add("Gameover");
            scissor1.classList.add("Gameover");
            playAgain();
           
        }else if(computerScore==5){
            roundResult.innerHTML=" "
            Congratulation.innerHTML='Game over you lose ';
            Congratulation.classList.remove("Gameover");
            buttonPlayAgain.classList.remove("Gameover");
            finalresult.classList.add("Gameover");
            paper1.classList.add("Gameover");
            rock1.classList.add("Gameover");
            scissor1.classList.add("Gameover");
            playAgain();
        }
    }
    