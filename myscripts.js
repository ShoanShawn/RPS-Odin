let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You Win";
let lose = "You Lose";
let tie = "Tie Game";



game();


    function computerPlay() {
        let random = Math.random();
        if (random <= 0.3333) {
        return "paper";
        } else if (random >= 0.6666) {
        return "rock";
        } else {
        return "scissors";
        }
    }
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock") {
          if (computerSelection === "paper") {
            computerScore++;
            return lose;
          } else if (computerSelection === "rock") {
            return tie;
          } else {
            userScore++;
            return win;
          }
        }
      
        if (playerSelection.toLowerCase() === "scissors") {
          if (computerSelection === "paper") {
            userScore++;
            return win;
          } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
          } else {
            return tie;
          }
        }
      
        if (playerSelection.toLowerCase() === "paper") {
          if (computerSelection === "paper") {
            return tie;
          } else if (computerSelection === "rock") {
            userScore++;
            return win;
          } else {
            computerScore++;
            return lose;
          }
        }
      }
      function game(){
        for(var i=0; i<5; i++){
            let playerSelection = prompt("Rock, Paper, or Scissors?");
            
            
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
            console.log("Your Score = " + userScore);
            console.log("compute's Score =" + computerScore);
            
        }
        if(computerScore > userScore && i===5){
            console.log("Computer wins the match")
            
        } else if (userScore > computerScore && i===5){
            console.log("You win the match")
            
        } else if(userScore = computerScore && i===5){
            console.log("Tie Game")
            
        }
      }
      
