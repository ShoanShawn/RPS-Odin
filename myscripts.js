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
  
  
  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"

  for(var i=0; i<5; i++){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }

if(computerScore > userScore){
    console.log("Computer Wins")
} else if (userScore > computerScore){
    console.log("You win")
} else if (computerScore = userScore) {
    console.log("Tie game")
}

