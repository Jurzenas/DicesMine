var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var diceR1 = "images/dice" + randomNumber1 + ".png";  //images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", diceR1);

var diceR = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6);
diceR2 = diceR[randomNumber2];

document.querySelectorAll("img")[1].setAttribute("src", diceR2);

document.getElementsByTagName("h1")[0].innerHTML = PlayerRefresh();

function PlayerRefresh() {
  if(randomNumber1 > randomNumber2) {
return "🚩Player 1 Wings!";
  } else if(randomNumber1 < randomNumber2) {
return "Player 2 Wings!🚩";
  } else  {
return "Draw!";
}
}
