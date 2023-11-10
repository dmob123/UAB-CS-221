const rpsText = document.querySelector("#rpsText");
const rpsButtons = document.querySelectorAll(".rpsButton");
let computer;
let player;
rpsButtons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    rockPaperScissorsComputerTurn();
    rpsText.textContent = playerVScomputer();
}))
function rockPaperScissorsComputerTurn() {
    var computerChoice = Math.ceil(Math.random()*3);
    switch(computerChoice){
        case 1:
            computer = "SCISSORS";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "ROCK";
            break;
    }
    }
    function playerVScomputer(){
        if(player == "ROCK" && computer == "ROCK"){
            return "You and the computer both chose ROCK. It's a tie!";}
        else if(player == "ROCK" && computer == "SCISSORS"){
            return "You chose ROCK and the computer chose SCISSORS. You won!";}
        else if(player == "ROCK" && computer == "PAPER"){
            return "You chose ROCK and the computer chose PAPER. You lost!";}
        else if(player == "SCISSORS" && computer == "ROCK"){
            return "You chose SCISSORS and the computer chose ROCK. You lost!";}
        else if(player == "SCISSORS" && computer == "SCISSORS"){
            return "You and the computer both chose SCISSORS. It's a tie!";}
        else if(player == "SCISSORS" && computer == "PAPER"){
            return "You chose SCISSORS and the computer chose PAPER. You won!";}
        else if(player == "PAPER" && computer == "ROCK"){
            return "You chose PAPER and the computer chose ROCK. You won!";}
        else if(player == "PAPER" && computer == "SCISSORS"){
            return "You chose PAPER and the computer chose SCISSORS. You lost!";}
        else if(player == "PAPER" && computer == "PAPER"){
            return "You and the computer both chose PAPER. It's a tie!";}
    }
/*
    var rpsUser = prompt("Enter rock, paper, or scissors: ");
    let rpsUserLowerCase = rpsUser.toLowerCase();
    if(rpsUserLowerCase == "rock" || rpsUserLowerCase == "paper" || rpsUserLowerCase == "scissors"){
        console.log("User Choice: " + rpsUserLowerCase);
    rockPaperScissors(rpsUserLowerCase);
    var again = prompt("Would you like to play again? Type Y for yes or N for no: ");
    if(again == "Y"){
        var rpsUser2 = prompt("Enter rock, paper, or scissors: ");
        let rpsUserLowerCase2 = rpsUser2.toLowerCase();
        if(rpsUserLowerCase2 != "rock" || rpsUserLowerCase2 != "paper" || rpsUserLowerCase2 != "scissors"){
            console.log("Since you didn't enter rock, paper, or scissors, the game has ended");}
        else{console.log("User Choice: " + rpsUserLowerCase2);
        rockPaperScissors(rpsUserLowerCase2);}
    }else if(again == "N"){ 
        console.log("I respect your decision");}
    }
    else if(rpsUserLowerCase != "rock" || rpsUserLowerCase != "paper" || rpsUserLowerCase != "scissors"){
            var incorrect = prompt("Error! Please only enter rock, paper, or scissors: ");
            let rpsUserLowerCase2 = incorrect.toLowerCase();
            if(rpsUserLowerCase2 == "rock" || rpsUserLowerCase2 == "paper" || rpsUserLowerCase2 == "scissors"){
                console.log("User Choice: " + rpsUserLowerCase2);
            rockPaperScissors(rpsUserLowerCase2);
            var again = prompt("Would you like to play again? Type Y for yes or N for no: ");
            if(again == "Y"){
                var rpsUser2 = prompt("Enter rock, paper, or scissors: ");
                let rpsUserLowerCase = rpsUser2.toLowerCase();
                console.log("User Choice: " + rpsUserLowerCase)
                rockPaperScissors(rpsUserLowerCase);
            }else if(again == "N"){
                console.log("I respect your decision");
            }
            }else if(rpsUserLowerCase2 != "rock" || rpsUserLowerCase2 != "paper" || rpsUserLowerCase2 != "scissors"){
                console.log("Since you didn't enter rock, paper, or scissors, the game has ended.");
            }
        }
*/
