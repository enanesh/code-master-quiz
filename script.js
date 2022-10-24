//DOM HOOKS 
var timerEl = document.getElementById("timer");
var timerButtonEl = document.getElementById("startTimer");
var questionEl = document.getElementById("question");
var scoresEl = document.getElementById("score");
var submitFormEl = document.getElementById("submitForm");
var submitTextEl = document.getElementById("fname")

//VARIABLES 
var positionQuestion = 0;
var positionAnswer = 0;
var timeLeft = 1000;
var wins = 0;
var todos = [];



/*EVENT LISTENER START BUTTON*/
timerButtonEl.addEventListener("click", countdown);



//TIMER FUNCTION Took this from activity 
function countdown(e) {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second ';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'No more time';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            changeClass1();


        }
    }, 1000);

    showquestion(positionQuestion);
    changeClass()


}

// CHANGES THE CLASS STATUS DISPLAY FROM STARTBOX TO QUESTION MODULE
function changeClass() {
    var startBoxEl = document.getElementById("startBox");
    startBoxEl.className = "hide";

    var setQuestionsEl = document.getElementById("setQuestions");
    setQuestionsEl.className = "active";


}


// CHANGES THE CLASS DISPLAY FROM QUESTION MODULE TO  INITIALS FORM
function changeClass1() {
    textScore();
    var setQuestionsEl = document.getElementById("setQuestions");
    setQuestionsEl.className = "hide";

    var finalQuizEl = document.getElementById("finalQuiz");
    finalQuizEl.className = "active";

}


// CHANGES THE CLASS DISPLAY FROM INITIALS FORM TO SCORE BOARD 

function changeClass2() {

    var finalQuizEl = document.getElementById("finalQuiz");
    finalQuizEl.className = "hide";

    var scoreBoardEl = document.getElementById("scoreBoard");
    scoreBoardEl.className = "active";


}




// GENERATES DE QUESTIONS AND ADDS THE BUTTONS 


function showquestion(position) {

    if (position >= questionLibrary.length) {


        changeClass1()

        return;


    }

    questionEl.textContent = questionLibrary[position].questionsId;

    var respuestas = questionLibrary[position].answerList;
    shuffle(respuestas);




    for (var i = 1; i <= respuestas.length; i++) {
        var answersEL = document.getElementById("answer" + i.toString());

        var answerButton = document.createElement('button');
        answerButton.textContent = respuestas[i - 1].answer;

        answersEL.innerHTML = ''; // got this part from stack-overflow,

        answersEL.appendChild(answerButton);

        answerButton.classList.add("buttonAns");


        //Adds the event listener to the buttons 

        var rightAnswer = respuestas[i - 1].correct;

        if (rightAnswer === true) {

            answerButton.addEventListener("click", win);

        } else {

            answerButton.addEventListener("click", loose);
        }

    };

}



// GETS EXECUTED IF THE ANSWER CLICKED IS TRUE
function win() {
    var textEl = document.getElementById('text');
    textEl.textContent = "RIGHT ANSWER";
    wins = wins + 10;
    localStorage.setItem("score", wins);
    positionQuestion++;
    showquestion(positionQuestion);




}


// GETS EXECUTED IF THE ANSWER CLICKED IS FALSE

function loose() {
    var textEl = document.getElementById('text');
    textEl.textContent = "WRONG ANSWER";
    timeLeft = timeLeft - 1000;
    positionQuestion++;
    showquestion(positionQuestion);




}




function textScore() {

    var textscoreEl = document.getElementById("textScore");
    textscoreEl.textContent = "Your score is " + (wins);

}



function Highscores() {

    var scoreBoard = localStorage.getItem(todos);

    console.log(scoreBoard);

}






//STORES THE FORM USER INPUT IN LOCALSTORAGE 

function storeTodos(toadd) {


    // Stringify and set key in localStorage to todos array
    // {USUARIO: toadd, SCORE, SCORE}
    var userScore = { "user": toadd, "score": wins };
    var item = JSON.parse(localStorage.getItem("scores"));
    if (item == null) {
        item = [userScore]
    }
    else { item.push(userScore); }

    localStorage.setItem("scores", JSON.stringify(item));



}




// QUESTIONS DICTIONARY 

var questionLibrary = [
    {//it has  to have brakets so it identifies as an elemnt on the array 
        questionsId: " JavaScript is the programming language of the _____.",
        answerList: [
            { answer: 'Web CORRECTA', correct: true },
            { answer: 'Mobile', correct: false },
            { answer: 'Desktop', correct: false },
            { answer: 'Server', correct: false },
        ]

    },
    {
        questionsId: '  Which type of JavaScript language is _____?',
        answerList: [
            { answer: 'Object-oriented CORRECTA', correct: true },
            { answer: 'Functional programming', correct: false },
            { answer: 'Object-based', correct: false },
            { answer: 'Procedural', correct: false },
        ]
    },

    {
        questionsId: 'In which HTML element, we put the JavaScript code?',
        answerList: [
            { answer: '<script>...</script> CORRECTA', correct: true },
            { answer: '<javascript>...</javascript>', correct: false },
            { answer: '<js>...</js>', correct: false },
            { answer: '<css>...</css>', correct: false },
        ]
    },

];




// SHUFFLE ARRAY TO GENERATE RANDOM QUESTIONS AND RANDOM ANSWERS
//(got this part from stack - overflow)


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


submitFormEl.addEventListener("submit", function (event) {
    // since it is a form, we want to prevent the default handler
    // from trying to submit to a non-existent server side script
    // We want to handle the form submission right here
    event.preventDefault();

    // prepare data for storage
    var todoText = submitTextEl.value.trim();



    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }


    // UPDATE STATE
    // Add new todoText to todos array, clear the input
    todos.push(todoText);

    // Store updated todos in localStorage, re-render the list
    storeTodos(todoText);

    window.location.href = "./scores.html";

});















