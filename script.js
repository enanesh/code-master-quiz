//DOM HOOKS 
var timerEl = document.getElementById("timer");
var timerButtonEl = document.getElementById("startTimer");
var questionEl = document.getElementById("question");
var scoresEl = document.getElementById("score");
var submitFormEl = document.getElementById("submitForm");
var submitTextEl = document.getElementById("fname")
var positionQuestion = 0;
var positionAnswer = 0;
var timeLeft = 10000;
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
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function

        }
    }, 1000);

    showquestion(positionQuestion);
    changeClass()

}

// CHANGES THE CLASS STATUS DISPLAY FROM STARTBOX TO QUESTION MODULE
function changeClass() {
    var startBoxEl = document.getElementById("startBox");
    startBoxEl.classList.add("hide");

    var setQuestionsEl = document.getElementById("setQuestions");
    setQuestionsEl.classList.add("active");

   
}


// CHANGES THE CLASS DISPLAY FROM QUESTION MODULE TO  INITIALS FORM
function changeclass1() {
    var setQuestionsEl = document.getElementById("setQuestions");
    setQuestionsEl.classList.add("hide");

    var finalQuizEl = document.getElementById("finalQuiz");
    finalQuizEl.classList.add("active");

}


// CHANGES THE CLASS DISPLAY FROM INITIALS FORM TO SCORE BOARD 

function changeclass2() {
    var finalQuizEl = document.getElementById("finalQuiz");
    finalQuizEl.classList.add("hide");

    var scoreBoardEl = document.getElementById("scoreBoard");
    scoreBoardEl.classList.add("active");

 }






function showquestion(position) {

    if (position >= questionLibrary.length) {
        console.log("perro");
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



        var rightAnswer = respuestas[i - 1].correct;

        if (rightAnswer === true) {

            answersEL.addEventListener("click", win);

        } else {

            answersEL.addEventListener("click", loose);
        }

    }

}


function win() {
    var textEl = document.getElementById('text');
    textEl.textContent = "RIGHT ANSWER";
    wins = wins + 10;
    localStorage.setItem("score", wins);
    positionQuestion++;
    showquestion(positionQuestion);


}


function loose() {
    var textEl = document.getElementById('text');
    textEl.textContent = "WRONG ANSWER";
    timeLeft = timeLeft - 1000;
    positionQuestion++;
    showquestion(positionQuestion);


}



function Highscores() {

    var scoreBoard = localStorage.getItem(todos);

    console.log(scoreBoard);

}


function textScore(){

    var textscoreEl = document.getElementById("textScore");
    textscoreEl.textContent = "Your score is " + wins;

}







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

});



function storeTodos(toadd) {
    // Stringify and set key in localStorage to todos array
    var item = JSON.parse(localStorage.getItem("todos"));
    if (item == null) {
        item = [toadd]
    }
    else { item.push(toadd); }
    
    localStorage.setItem("todos", JSON.stringify(item));
}



// QUESTIONS DICTIONARY 

var questionLibrary = [
    {//it has  to have brakets so it identifies as an elemnt on the array 
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









//Present a question
// if answerwrong  (-) time,next question
//if answer is right save answer ,next question
//when timer =0 finish
//at the end of the game  user iinput initial and show score sorted











