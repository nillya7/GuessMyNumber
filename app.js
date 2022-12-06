'use sctirct';



// get all html elements
const againBtn = document.getElementById('againBtn');
const randomNum = document.getElementById('guessBtn');
const checkBtn = document.getElementById('checkBtn');
const guessTxt = document.getElementById('guessTxt');
const scoreSpan = document.getElementById('score');
const highScoreSpan = document.getElementById('highScore')
const numberInp = document.getElementById('numberInp')

console.log(randomNum)

// variables 
let randomNumber;
let userGuess;
let score;
let highScore = 0;

// highScoreSpan.innerText = highScore;

// begining
window.onload = startFnc


againBtn.addEventListener('click', startFnc)
checkBtn.addEventListener('click', checkFnc)



function startFnc() {
    console.log("START function")
    document.body.style.background = "black";       
    guessTxt.innerText = 'Start guessing...';
    randomNum.innerText = "?";
    numberInp.value = "";                           // reset the input value
    checkBtn.disabled = false;
    score = 20;
    scoreSpan.innerText = score;
    highScoreSpan.innerText = highScore;

    randomNumber = Number(Math.floor((Math.random() * 19) + 1))
    console.log("randomNumber: " + randomNumber)


}




function checkFnc() {
    console.log("check function")
    
    
    userGuess = Number(numberInp.value);
    
    if (score === 0) {
        console.log("game over")
        guessTxt.innerText = "You lost the game!"
    } else {
        // correct number
        if (userGuess === randomNumber) {
            guessTxt.innerText = "Correct number!"
            document.body.style.background = "green";
            highScore += score;
            highScoreSpan.innerText = highScore
            checkBtn.disabled = true;
            randomNum.innerText = randomNumber
            

        // wrong guess
        }  else if (userGuess !== randomNumber) {
            if(userGuess > randomNumber) {
                guessTxt.innerText = "Too high!"
                
            } else if(userGuess < randomNumber) {
                guessTxt.innerText = "Too low!"
        
            }
            score --
            scoreSpan.innerText = score;

        }
    }


    
}