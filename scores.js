
var highscoresEl = document.getElementById("highscores")
var highscoresArray = JSON.parse(window.localStorage.getItem('scores'));


//CREATES LI ELEMENTS GENERATE HIGHSCORE BOARD 

function highscores() {
    console.log(highscoresArray);

    for (var i = 0;i < highscoresArray.length; i++) {

        document.getElementById('highscores').innerHTML += "<li>" +"User: "+ highscoresArray[i].user + " ," + " Score: " +highscoresArray[i].score + "</li>";
    }
}


//FUNCTION TO CLEAR LOCAL STORAGE

function clearStorage() {
    localStorage.clear()


}


highscores()

