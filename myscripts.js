let playGame = confirm("RPS?");
if(playGame) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    if(playerSelection) {
        let playerOne = playerSelection.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

            let computerSelection = Math.floor(Math.random() *3 + 1);
            let computer = computerSelection === 1 ? "rock"
                : computerSelection === 2 ? "paper"
                : "scissors";

            let result = 
            playerOne === computer
                ? "Tie Game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer} \nplayerOne wins!`
                alert(result);
        } else {
            alert("STOP WASTING MY TIME MAN!");
        }
    } else {
        alert("STOP WASTING MY TIME MAN!");
    }
    
} else {
    alert("STOP WASTING MY TIME MAN!");
}




