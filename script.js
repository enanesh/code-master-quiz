//DOM HOOKS 

var time = document.getElementById("timer");//has to keep track of this
var scoreBoard = 0;// Have to keep track of this
var questions = 0;//has to be an  objet 
var answers = 0;// has to be random sort choice.Validate 

//add event listener to startButton
//Present a question
// if answerwrong  (-) time,next question
//if answer is right save answer ,next question
//when timer =0 finish
//at the end of the game  user iinput initial and show score sorted















// Timmer 


function setTime() {
    var timerInterval = setInterval(function () {
       // var time = document.getElementById("grid-item2");
        time.textContent = secondsLeft;


        if (secondsLeft === 0) {
            losses = losses + 1;
            perdedor.textContent = "Losses: " + losses;

            clearInterval(timerInterval);

        }
        secondsLeft--;



    }, 1000);

}