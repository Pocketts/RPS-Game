
const R = "ROCK"
const P = "PAPER"
const S = "SCISSORS"
let playerScore = 0
let computerScore = 0


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
          playerScore = playerScore + 1;
      }

      else if (playerChoice == R && comChoice == P || playerChoice == P && comChoice == S || playerChoice == S && comChoice == R) {
          document.getElementById("result").innerHTML = "You Lose This Round";
          computerScore = computerScore + 1;
        }

     else {
            document.getElementById("result").innerHTML = "Not a Valid Choice";
        }

      // playerScore = (playerScore).toString;
       //computerScore = (computerScore).toString;

        document.getElementById("pScore").innerHTML = "Player Score " + playerScore;
        document.getElementById("cScore").innerHTML = "Computer Score " + computerScore;
    
}

