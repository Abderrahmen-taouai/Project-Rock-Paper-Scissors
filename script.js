function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  const item = arr[randomIndex];

  return item;
}

const ar1 = ["Rock", "Paper", "Scissors"];

//console.log(getComputerChoice(ar1));

function playRound(playerSelection, computerSelection) {
  // your code here!
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  if (ps == cs) {
    return "Draw!";
  } else if (cs == "paper") {
    return "You lose!";
  } else {
    return "You Win!";
  }
}

let playerSelection = prompt("Your choice: Rock, Scissors or Paper!");
let test = true;
while (test) {
  if (
    playerSelection.toLocaleLowerCase() == "rock" ||
    playerSelection.toLocaleLowerCase() == "scissors" ||
    playerSelection.toLocaleLowerCase() == "paper"
  )
    test = false;
  else playerSelection = prompt("Your choice: Rock, Scissors or Paper!");
}
const computerSelection = getComputerChoice(ar1);
console.log(playRound(playerSelection, computerSelection));
console.log(
  "Your choice is: ",
  playerSelection,
  "\nComputer choice is: ",
  computerSelection
);
