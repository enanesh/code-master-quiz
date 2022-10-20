

var time = document.getElementById("grid-item2");







// Timmer 


function setTime() {
    var timerInterval = setInterval(function () {
        var time = document.getElementById("grid-item2");
        time.textContent = secondsLeft;


        if (secondsLeft === 0) {
            losses = losses + 1;
            perdedor.textContent = "Losses: " + losses;

            clearInterval(timerInterval);

        }
        secondsLeft--;



    }, 1000);

}