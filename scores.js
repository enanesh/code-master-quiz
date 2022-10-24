
var highscoresEl = document.getElementById("highscores")
var highscoresArray = JSON.parse(window.localStorage.getItem('scores'));




function highscores() {
    console.log(highscoresArray);

    for (var i = 0;i < highscoresArray.length; i++) {

        document.getElementById('highscores').innerHTML += "<li>" +"User: "+ highscoresArray[i].user + " ," + " Score: " +highscoresArray[i].score + "</li>";
    }
}



function clearStorage() {
    localStorage.clear()


}


highscores()

