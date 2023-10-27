function rockPaperScissors(User) {
    var computerChoice = Math.ceil(Math.random()*3);
    var rpsComputerChoice;
    if(computerChoice = 1){
        rpsComputerChoice = "rock";
        console.log("Computer Choice: " + rpsComputerChoice);}
    else if(computerChoice = 2){
        rpsComputerChoice = "paper";
        console.log("Computer Choice: " + rpsComputerChoice);}
    else if(computerChoice = 3){
        rpsComputerChoice = "scissors";
        console.log("Computer Choice: " + rpsComputerChoice);}
    if(User == "rock" && rpsComputerChoice == "rock"){
        console.log("Nobody Wins!");}
    else if(User == "rock" && rpsComputerChoice == "scissors"){
        console.log("User Wins!")}
    else if(User == "rock" && rpsComputerChoice == "paper"){
        console.log("Computer Wins!")}
    else if(User == "scissors" && rpsComputerChoice == "rock"){
        console.log("Computer Wins!")}
    else if(User == "scissors" && rpsComputerChoice == "scissors"){
        console.log("Nobody Wins!")}
    else if(User == "scissors" && rpsComputerChoice == "paper"){
        console.log("User Wins!")}
    else if(User == "paper" && rpsComputerChoice == "rock"){
        console.log("User Wins!")}
    else if(User == "paper" && rpsComputerChoice == "scissors"){
        console.log("Computer Wins!")}
    else if(User == "paper" && rpsComputerChoice == "paper"){
        console.log("Nobody Wins!")}    
}
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
