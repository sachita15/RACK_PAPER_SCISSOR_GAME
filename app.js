let userScore=0;
const userscorepara= document.querySelector('#user-score');
let compScore=0;
const compscorepara= document.querySelector('#comp-score');
// sari choices select karenge
const choices= document.querySelectorAll('.choice');
// msg
const msg= document.querySelector("#msg");
// generate comp choice
const gencompChoice=()=>{
    const options=["rock", "paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

// DRAW GAME
const drawGame=()=>{
    msg.innerText="DRAW :):";
    msg.style.backgroundColor='#6F7D8C';
}
// SHOW WINNER
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#77A0A9";
        userScore++;
        userscorepara.innerText= userScore;
    }
    else{
        msg.innerText=`YOU LOSE :( ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="#32021F";
        compScore++;
        compscorepara.innerText= compScore;
    }
}


// after user has selected thier choice, game will begin
const playGame=(userChoice)=>{
    const compChoice= gencompChoice();
    console.log("user choice= ", userChoice);
    console.log("comp choice= ",compChoice);
    // find score
    if(userChoice===compChoice){
        // draw
        drawGame();
    }
    else{
        // to see if userwins
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});
