/*getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
   We’ll use this function in the game to make the computer’s play*/

const div = document.createElement("div");
div.textContent="SCORE: ";
const player = document.createElement("div");
const cpu = document.createElement("div");
const res = document.createElement("div");
res.textContent="";
res.style.background = 'purple';  
res.style.width='400px';
res.style.height='200px';




const btn1 = document.createElement("button");
btn1.textContent = "ROCK";
const btn2 = document.createElement("button");
btn2.textContent = "PAPER";

const btn3 = document.createElement("button");
btn3.textContent = "SCISSORS";
player.style.background = 'yellow';  
cpu.style.background = 'red';  

document.body.appendChild(div);   
div.appendChild(btn1);   
div.appendChild(btn2);   
div.appendChild(btn3);   
div.appendChild(player); 
div.appendChild(cpu); 
div.appendChild(res); 
let result="";
let win = 0;
let lose = 0;

const buttons=document.querySelectorAll('button');

buttons.forEach(btn=>{btn.addEventListener('click',play);



btn.style.color = 'blue';  
btn.style.background = 'grey';
btn.style.border='5px solid blue'
btn.style.padding='20px'; 
 } 

);
function play(e){
if (win<5 && lose<5){
  playRound(e);
  if (
    result == "You win! scissors beats paper" ||
    result == "You win ! paper beats rock" ||
    result == "You win! rock beats scissors"
  )
    {
      res.textContent=result;
    player.textContent=win;}
  else if (
    result == "You lose! rock beats scissors" ||
    result == "You lose! paper beats rock" ||
    result == "You lose! scissors beats paper "
  )
  {
   res.textContent=result; 
  cpu.textContent=lose;}
  
  else if (result== "Draw!") {res.textContent=result;}}
 
 else {buttons.forEach(btn=>{btn.removeEventListener('click',play)});}
}


function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];
  return item;
}

//Array of 3 itmes (possible choice)
const ar1 = ["Rock", "Paper", "Scissors"];
computerSelection = getComputerChoice(ar1);


/*function that plays a single round of Rock Paper Scissors
 */

function playRound(e) {
  console.log(e.target.textContent.toLocaleLowerCase());
  const cs = computerSelection.toLowerCase();
  const playerselection=e.target.textContent.toLocaleLowerCase();
  breakme: if (playerselection == cs) {result= "Draw!";return result;break breakme;}

  switch (cs) {
    case "rock":
      if (e.target.textContent.toLocaleLowerCase() == "scissors") {lose++;result= "You lose! rock beats scissors";console.log(result);return result;}
      else {win++;result= "You win ! paper beats rock";return result;}
      
      break;
    case "paper":
      if (e.target.textContent.toLocaleLowerCase() == "rock") {lose++;result= "You lose! paper beats rock";return result;}
      else {win++;result="You win! scissors beats paper";return result;} 
      
      break;

    case "scissors":
      if (e.target.textContent.toLocaleLowerCase() == "paper") {lose++;result="You lose! scissors beats paper ";return result;} 
      else {win++;result="You win! rock beats scissors";return result;} 
      
      break;
  }
}




/* This function called game(). Call the playRound function inside of this one
      to play a 5 round game that keeps score and reports a winner or loser at the end. */

// function game() {
  
 
//   let roundNumber=1;
  
//   while(win<5 ||lose<5){
//     console.log("Round number: ", roundNumber);
//     roundNumber++;
    
   
    
//     if (
//       result == "You win! scissors beats paper" ||
//       result == "You win ! paper beats rock" ||
//       result == "You win! rock beats scissors"
//     )
//       {win++;
//       dev.textContent+=win;}
//     else if (
//       result == "You lose! rock beats scissors" ||
//       result == "You lose! paper beats rock" ||
//       result == "You lose! scissors beats paper "
//     )
//     {lose++;
//       dev.textContent+=win;}

//     if(win==5 ||lose==5) {test=false;break;}
    
//   }
//   if (win > lose) console.log("YOU WON THE GAME! ");
//   else if (win < lose) console.log("YOU LOSS THE GAME!");
//   else console.log("IT'S A DRAW! ");
// }

