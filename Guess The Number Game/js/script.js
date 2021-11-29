let computreGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;
function updateRange(){
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText =  `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100 - high + "%";
    rangeOutput.classList.add('flash');

    const lowValue = document.getElementById('low');
    lowValue.style.flex = low + "%";
    lowValue.style.background = "#ef7b54";
    const space = document.getElementById('space');
    space.style.flex = high - low + "%";
    space.style.background = "#83e1d0";
    const highValue = document.getElementById('high');
    highValue.style.flex = 100 - high + "%";
    highValue.style.background = "#ef7b54";
}
function gameEnded() {
    document.getElementById('newGameButton').style.display ='inline'
    document.getElementById('inputBox').setAttribute('readonly', 'readonly')
}
function newGame(){
    window.location.reload();
}
function init(){
    computreGuess = Math.floor(Math.random() * 100 +1);
    document.getElementById('newGameButton').style.display ='none'
    document.getElementById('gameArea').style.display =' none'
    document.querySelector('hr').style.display = 'none';
    console.log(computreGuess)
}
function stateGameVeiw() {
    document.getElementById('welcomeScreen').style.display ='none'
    document.getElementById('gameArea').style.display =' block'
    document.querySelector('hr').style.display = 'block';
}
function easyMode(){
    document.getElementById('gameMode').innerHTML = "You're Playing The Easy Mode!";
    maxGuesses = 10;
    stateGameVeiw();
}
function hardMode(){
    document.getElementById('gameMode').innerHTML = "You're Playing The Hard Mode!";
    maxGuesses = 10;
    maxGuesses = 5;
    stateGameVeiw();
}
function compareGuess(){
    const userGuess = Number(document.getElementById('inputBox').value);
    userGuesses.push(" " + userGuess);
    document.getElementById('guesses').innerHTML= userGuesses;
    attempts++;
    document.getElementById('attempts').innerText = attempts;
    if(attempts < maxGuesses) {
        if(userGuess > computreGuess){
            if(userGuess < high) high = userGuess;
            document.getElementById('textOutput').innerHTML = "Less than that";
            document.getElementById('inputBox').value= "";
        }else if(userGuess < computreGuess){
            if(userGuess > low)low = userGuess;
            document.getElementById('textOutput').innerHTML = "Greater than that";
            document.getElementById('inputBox').value= "";
        }else{
            if(userGuesses.length === 1){
            document.getElementById('textOutput').innerHTML ="congrats! <br>"+ "You Won In " + attempts + " Try!";
            gameEnded();
            }else{
            document.getElementById('textOutput').innerHTML = "congrats! <br>"+"You Won In " + attempts + " Tries!";
            gameEnded();
            }
        }
    }else{
        if(userGuess > computreGuess){
            document.getElementById('textOutput').innerHTML = "The Number was <br>"+ computreGuess + "<br>" + "You Lost!";
            gameEnded();
        }else if(userGuess < computreGuess){
            document.getElementById('textOutput').innerHTML ="The Number was <br>"+ computreGuess + "<br>" + "You Lost!";
            gameEnded();
        }else{
            if(userGuesses.length === 1){
            document.getElementById('textOutput').innerHTML ="congrats! <br>"+ "You Won In " + attempts + " Try!";
            }else{
            document.getElementById('textOutput').innerHTML ="congrats! <br>"+ "You Won In " + attempts + " Tries!";
            gameEnded();}
        }
    }
    updateRange()
}


