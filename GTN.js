var input = document.getElementById('input')
var wl = document.getElementById('decision')
var score = document.getElementById('src')
var point = 10
var random = Math.floor(Math.random() * 10) + 1
var error = document.getElementById('error')
var pop = document.getElementById('pop-up')

function guess() {
    var guessing = input.value
    if (guessing < 1 || guessing > 10) {
        error.textContent = "!!enter only 1 to 10 numbers!!"
        input.value = ""


    } else if (isNaN(guessing)) {
        error.textContent = "!!enter only numbers!!"
        input.value = ""


    } else if (guessing != random) {
        wl.textContent = "YOU LOSS"
        input.value = ""
        point = point - 1
        score.textContent = "SCORE : " + point
        error.textContent = ""
        score.style.color = "red"
        wl.style.color = "red"

    } else {
        console.log("you won!")
        wl.textContent = "YOUR THE WINNER!!!"
        wl.style.color = "green"
        score.style.color = "green"
        input.value = ""
        alert("won the game")
    }
}