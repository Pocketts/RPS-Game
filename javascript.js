const choices = ["Rock" , "Paper" , "Scissors"];

const getComputerChoice = Math.floor(Math.random() * choices.length);

console.log(choices[getComputerChoice]);