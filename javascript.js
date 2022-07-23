//This randomizes the computers choice//
const choices = ["Rock" , "Paper" , "Scissors"];

const getComputerChoice = Math.floor(Math.random() * choices.length);

const comChoice = (choices[getComputerChoice]);
//End//
const rock = "ROCK"
const paper = "PAPER"
const Scissors = "SCISSORS"

function round() {
    
    let playerChoice = document.getElementById("pChoice").value;
    playerChoice = playerChoice.toUpperCase();

    if (playerChoice == rock) {
        
        document.getElementById("result").innerHTML = comChoice + " " + playerChoice;

    }
    else {
        document.getElementById("result").innerHTML = comChoice + " nope"; 
    }
}