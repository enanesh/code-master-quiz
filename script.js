//DOM HOOKS 
var timerEl = document.getElementById("timer");
var timerButtonEl = document.getElementById("startTimer");
var questionsEl = document.getElementById("questions");
var answersEL = document.getElementById("answers");
var scoresEl = document.getElementById("score");

/*EVENT LISTENER START BUTTON*/


timerButtonEl.addEventListener("click", countdown);



/* TIMER FUNCTION*/


function countdown(e) {
    var timeLeft = 10;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
           
        }
    }, 1000);
}




    







//Present a question
// if answerwrong  (-) time,next question
//if answer is right save answer ,next question
//when timer =0 finish
//at the end of the game  user iinput initial and show score sorted











