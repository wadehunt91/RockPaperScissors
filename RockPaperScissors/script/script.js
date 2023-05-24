
const updateScores = () =>{ 
    document.getElementById("scoreOne").innerHTML = scoreOne;
    document.getElementById("scoreTwo").innerHTML = scoreTwo;
}
const CreateNewGame = () => {
    scoreOne = 0;
    scoreTwo = 0;
    updateScores();
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("outcome").innerHTML = "";
}

CreateNewGame();

const randomGenerator = () => {
    const choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex])
    return choices[randomIndex]
}

const chose  = (choice) => {
    let computerChoice = randomGenerator();
    if (choice === computerChoice) {
      document.getElementById("computerChoice").innerHTML = computerChoice;
      document.getElementById("outcome").innerHTML = "It is a tie!"
      } else if (
        (choice === "rock" && computerChoice === "scissors") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissors" && computerChoice === "paper")
      ) {
        document.getElementById("computerChoice").innerHTML = computerChoice;
        document.getElementById("outcome").innerHTML = "You Win!"
        scoreOne +=1;
        updateScores();
      } else {
        document.getElementById("computerChoice").innerHTML = computerChoice;
        document.getElementById("outcome").innerHTML = "You Lose!"
        scoreTwo +=1;
        updateScores();
      }
      if(scoreOne == 5 || scoreTwo == 5){
        if(scoreOne == 5 ){
        alert("Game Over! You Win!");
        CreateNewGame();
      }
        else if(scoreTwo == 5){
        alert("Game Over! You Lose!")
        CreateNewGame();
      }
}
}