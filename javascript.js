const choices = ["Rock" , "Paper" , "Scissors"];

const getComputerChoice = Math.floor(Math.random() * choices.length);

const comChoice = (choices[getComputerChoice]);



function round() {

    const pChoice = document.getElementById("pChoice").value;
    document.getElementById("result").innerHTML = comChoice + " " + pChoice;
}