import "./style.css";

window.onload = () => {
  document.getElementById("number").innerHTML = randomNumber;
  document.getElementById("icono").innerHTML = randomSymbol;
  document.getElementById("Segundoicono").innerHTML = randomSymbol;
};

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

let symbol = ["♦", "♥", "♠", "♣"];
let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

if (randomSymbol == "♥" || randomSymbol == "♦") {
  document.getElementById("icono").style.color = "red";
  document.getElementById("Segundoicono").style.color = "red";
} else {
  document.getElementById("icono").style.color = "black";
  document.getElementById("Segundoicono").style.color = "black";
}
