const choices = ["Rock" , "Paper" , "Scissors"];

const getComputerChoice = Math.floor(Math.random() * choices.length);

const comChoice = (choices[getComputerChoice]);

function round() {
    document.write(comChoice);
}