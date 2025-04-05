function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
  
    return options[index];
  }
  console.log(getRandomComputerResult());

  function hasPlayerWonTheRound(player, computer) {
    // if()
  }
  
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 