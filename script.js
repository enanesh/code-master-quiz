//DOM HOOKS 
var timerEl = document.getElementById("timer");
var timerButtonEl = document.getElementById("startTimer");
var questionEl = document.getElementById("question");
var answersEL = document.getElementById("answers");
var scoresEl = document.getElementById("score");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var answerEl = document.getElementById("answer");



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

// QUESTIONS DICTIONARY 



var questionLibrary = [
    {//it hasa to have brakets so it identifies as an elemnt on the array 
        questionsId: " JavaScript is the programming language of the _____.",
        answerList: [
            { answer: 'Web', correct: true },
            { answer: 'Mobile', correct: false },
            { answer: 'Desktop', correct: false },
            { answer: 'Server', correct: false },
        ]

    },
    {
        questionsId: '  Which type of JavaScript language is _____?',
        answerList: [
            { answer: 'Object-oriented', correct: true },
            { answer: 'Functional programming', correct: false },
            { answer: 'Object-based', correct: false },
            { answer: 'Procedural', correct: false },
        ]
    },

    {
        questionsId: 'In which HTML element, we put the JavaScript code?',
        answerList: [
            { answer: '<script>...</script>', correct: true },
            { answer: '<javascript>...</javascript>', correct: false },
            { answer: '<js>...</js>', correct: false },
            { answer: '<css>...</css>', correct: false },
        ]
    },

];


// SHUFFLE ARRAY TO GENERATE RANDOM QUESTION (got this part from stack-overflow)


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};


shuffle(questionLibrary);




console.log(questionLibrary);

//asignar mi pregunta
//crear bottones para la respuesta
//tratar de iterar las respuestas 


console.log(questionLibrary[0].questionsId);


//Creates <h2>question<h2>

questionEl.textContent = JSON.stringify(questionLibrary[0].questionsId);



/// Creates the answer buttons FIND A WAY TO MAKE THIS AUTOMATIC GENERATED 


answerbutton1 = document.createElement('button');
answerbutton1.textContent = JSON.stringify(questionLibrary[0].answerList[0].answer);
answer1El.appendChild(answerbutton1);

answerbutton2 = document.createElement('button');
answerbutton2.textContent = JSON.stringify(questionLibrary[0].answerList[1].answer);
answer2El.appendChild(answerbutton2);


answerbutton3 = document.createElement('button');
answerbutton3.textContent = JSON.stringify(questionLibrary[0].answerList[2].answer);
answer3El.appendChild(answerbutton3);















//Present a question
// if answerwrong  (-) time,next question
//if answer is right save answer ,next question
//when timer =0 finish
//at the end of the game  user iinput initial and show score sorted











