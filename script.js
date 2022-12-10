/*getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
   We’ll use this function in the game to make the computer’s play*/
function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];
  return item;
}

//Array of 3 itmes (possible choice)
const ar1 = ["Rock", "Paper", "Scissors"];

/*function that plays a single round of Rock Paper Scissors
 */
function playRound(playerSelection, computerSelection) {
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  if (ps == cs) return "Draw!";

  switch (cs) {
    case "rock":
      if (ps == "scissors") return "You lose! rock beats scissors";
      else return "You win ! paper beats rock";
      break;
    case "paper":
      if (ps == "rock") return "You lose! paper beats rock";
      else return "You win! scissors beats paper";
      break;

    case "scissors":
      if (ps == "paper") return "You lose! scissors beats paper ";
      else return "You win! rock beats scissors";
      break;
  }
}

function playerValidInput(s) {
  let test = true;
  while (test) {
    if (
      s.toLocaleLowerCase() == "rock" ||
      s.toLocaleLowerCase() == "scissors" ||
      s.toLocaleLowerCase() == "paper"
    ) {
      test = false;
      return s.toLocaleLowerCase();
    } else s = prompt("Your choice: Rock, Scissors or Paper!");
  }
}
computerSelection = getComputerChoice(ar1);

/* This function called game(). Call the playRound function inside of this one
      to play a 5 round game that keeps score and reports a winner or loser at the end. */
function game() {
  let win = 0;
  let lose = 0;

  for (let i = 1; i <= 5; i++) {
    console.log("Round number: ", i);
    computerSelection = getComputerChoice(ar1);
    playerSelection = playerValidInput(
      prompt("Choose one: Rock, Scissors or Paper!")
    );

    let result = playRound(playerSelection, computerSelection);
    if (
      result == "You win! scissors beats paper" ||
      result == "You win ! paper beats rock" ||
      result == "You win! rock beats scissors"
    )
      win++;
    else if (
      result == "You lose! rock beats scissors" ||
      result == "You lose! paper beats rock" ||
      result == "You lose! scissors beats paper "
    )
      lose++;

    console.log(
      "Your choice is: ",
      playerSelection,
      "\nComputer choice is: ",
      computerSelection,
      "\n Round result: ",
      result
    );
  }
  if (win > lose) console.log("YOU WON THE GAME! ");
  else if (win < lose) console.log("YOU LOSS THE GAME!");
  else console.log("IT'S A DRAW! ");
}

game();
