

const div = document.createElement("div");
div.textContent="SCORE: ";
const div1 = document.createElement("div");
const div2 = document.createElement("div");




const player = document.createElement("div");
const cpu = document.createElement("div");
const results = document.createElement("div");
results.textContent="";
player.textContent="YOUR SCORE: ";
cpu.textContent="COMPUTER SCORE: ";

player.style.border='10px solid black';
// player.setAttribute('style', 'align-self:flex-start');

cpu.style.border='10px solid black';
cpu.setAttribute('style', 'margin-left:auto;');
results.style.border='10px solid black';




results.setAttribute('style', 'align-self:center; background:purple; width: 500px; height: 50px;text-align:center;font-size:16px;padding:50px;font-Size:26px;');




const btn1 = document.createElement("button");
btn1.textContent = "ROCK";
const btn2 = document.createElement("button");
btn2.textContent = "PAPER";

const btn3 = document.createElement("button");
btn3.textContent = "SCISSORS";
const btn4 = document.createElement("button");

document.querySelector('body').setAttribute('style','background:#f2f2f2; height: 100vh;width: 100vw;margin:0;text-align:center;');
div.setAttribute('style', 'display:flex; flex-direction:column;align-content:center;gap:50px;');  
div1.setAttribute('style', 'display:flex; justify-content:space-between;gap:10px;');
div2.setAttribute('style', 'display:flex; align:center;justify-content:center;gap:30px;flex-wrap:wrap;');

player.style.background = 'yellow';  
player.style.padding = '25px'; 

cpu.style.background = 'red';  
cpu.style.padding = '25px'; 


document.body.appendChild(div);   
div.appendChild(div1);  
div.appendChild(div2);   


div2.appendChild(btn1);   
div2.appendChild(btn2);   
div2.appendChild(btn3);   
div1.appendChild(player); 
div1.appendChild(cpu); 
div.appendChild(results); 
 


const buttons=document.querySelectorAll('button');
buttons.forEach(btn=>{

btn.style.color = 'white';  
btn.style.background = '#3882f6';
btn.style.textAlign='center';
btn.style.fontSize='18px';

btn.style.padding='20px'; 

btn.style.flexBasis='200px';
btn.style.borderRadius='10px';
});


btn4.textContent = "Play Again!";
btn4.setAttribute('style',  'align-self:flex-end; color: white; background: #3882f6;margin:0 auto;border-radius:10px;text-align:center;font-size:18px;padding:20px;');
div.appendChild(btn4);  
btn4.addEventListener('click', ()=>location.reload());

// Initial stat Variables
let result="";
let win = 0;
let lose = 0;

buttons.forEach(btn=>{btn.addEventListener('click',play)});


/* This function play() will run until the Player or Computer reach 5 points
-Call the playerselection(e) with e is the event being clicked on
then store it's results on  Var playerSelection
.Run PlaRound() with PlayerSlection
-Visualize the result of each round points and  both Player and Computer choices.
-Once reach 5 points: remove the Addlistner event from buttons.*/

function play(e){
 playerselection(e);
 const playerSelection=playerselection(e);
 playRound(playerSelection); 

 if (win<5 && lose<5){
  if ( result == `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} `)
  {
    results.textContent="Round result " + result;
    player.textContent="Your Score: " + win;
  }
  else if ( result==`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} `)
  {
    results.textContent="Round result= " + result;
    cpu.textContent="Computer Score: " + lose;
  }
  
  else if (result=== "Its a Tie!")
   {results.textContent="Round result "+ result;}
   }
 
 else {
  if(win>lose) {
    results.textContent="You are the Champion!";
    player.textContent= "Your Score: " + win;
              }
  else {
    results.textContent="You are the loser! Can you beat me?!";
    cpu.textContent="Computer Score: " + lose;
      }
  buttons.forEach(btn=>{btn.removeEventListener('click',play)});
     }
}




/* getComputerChoice() it choose a random between the 3 choices
 */
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // get random item
    const item = arr[randomIndex];
    return item;
  }
  
  //Array of 3 items (possible choice)
  const ar1 = ["Rock", "Paper", "Scissors"];

  const computerSelection = getComputerChoice(ar1).toLocaleLowerCase();
  
  
  /*playerselection() return the player selection 
   */
  function playerselection(e){
    const ps=e.target.textContent.toLocaleLowerCase();
    return ps;
  }
  
  
// playRound() Will Check for a single round who the winner! 

  function playRound(playerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      result = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} `;
      lose++;                                 
      return result;
    } 
    else if (playerSelection === computerSelection) {
      result = "Its a Tie!";
      return result;
    } 
    else {
      result = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} `;
      win++;
      return result;
    }
  }
  