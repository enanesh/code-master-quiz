
var highscoresEl = document.getElementById("highscores")


function highscores() {
    
    var highscoresEl = JSON.parse(window.localStorage.getItem('scores'));
    
    console.log(highscoresEl);



}

highscores();