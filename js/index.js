function startGame() {
var firstNumber = Math.floor(Math.random() * 6) + 1;
var secondNumber = Math.floor(Math.random() * 6) + 1;

var firstDice = "images/dice" + firstNumber + ".png";
var secondDice = "images/dice" + secondNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDice);
document.querySelectorAll("img")[1].setAttribute("src", secondDice);

if(firstNumber> secondNumber) {
    document.querySelector("h1").innerHTML = "👑 Player 1 Wins!";
} else if (secondNumber > firstNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 👑";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
}