
const R = "ROCK"
const P = "PAPER"
const S = "SCISSORS"

function round() {

    //This randomizes the computers choice//
const choices = ["ROCK" , "PAPER" , "SCISSORS"];

const getComputerChoice = Math.floor(Math.random() * choices.length);

const comChoice = (choices[getComputerChoice]);
   

   //Captures and converts player input// 
    let playerChoice = document.getElementById("pChoice").value;
    playerChoice = playerChoice.toUpperCase();
  

    console.log(playerChoice)
    console.log(comChoice)

    if (playerChoice == comChoice) {
        
        document.getElementById("result").innerHTML = "Draw no points scored";

    }
    else if (playerChoice == R && comChoice == S || playerChoice == P && comChoice == R || playerChoice == S && comChoice == P)  {
        document.getElementById("result").innerHTML = "You Win This Round"; 
    }

    else if (playerChoice == R && comChoice == P || playerChoice == P && comChoice == S || playerChoice == S && comChoice == R) {
        document.getElementById("result").innerHTML = "You Lose This Round";
    }

    else {
        document.getElementById("result").innerHTML = "Not a Valid Choice";
    }
}