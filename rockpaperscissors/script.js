window.onload = function() {

let cpu = 0;
let player = 0;
let points = 0;
let rounds = 0;
let level = 1;
let playerName = "unknown";

//const monitor = document.querySelector('.monitor');
//const rockbutton = document.getElementById("rockbutton");
//const scorePlayer = document.getElementById("scorePlayer");
//const scoreCPU = document.getElementById("scoreCPU");
//const txtPlayer = document.getElementById("txtPlayer");
//const txtCPU = document.getElementById("txtCPU");
//const box = document.querySelector('.box');
 


  monitor = document.querySelector('.monitor');
  box = document.querySelector('.box');
 


playerButton.addEventListener("click", inputPlayerName);

function inputPlayerName(){

    playerName = prompt("Please enter your name", "Player One");

    if (playerName != null) {
      monitor.innerText =
      "Hello " + playerName + "\nDon't f*ck it up.";
    } 
  }

rockbutton.addEventListener("click", showRock);

function showRock(){
  monitor.innerText = "You will burn";
  
  winLooseRock();
  
  gameFinished();
}

function startCoundown(){
  
  monitor.style.transition = "5s";
  monitor.innerText = "You will burn";

}

function winLooseRock(){


  // 0 = Rock
  // 1 = Paper
  // 2 = Scissors
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Rock beats Rock\nDraw";
      monitor.style.color = "black";
      txtPlayer.innerText = "Rock";
      txtCPU.innerText = "Rock";
      
      
      box.style.background = "linear-gradient(90deg, rgb(135, 165, 52) 0%, rgb(181, 219, 75) 30%, rgb(181, 219, 75) 70%, rgb(135, 165, 52) 100%)";
   
    }
    else if (y === 1) {
      monitor.innerText = "Paper beats Rock\nComputer wins";
      monitor.style.color = "red";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Rock";
      txtCPU.innerText = "Paper";

      box.style.background = "linear-gradient(90deg, rgb(192, 23, 23) 0%, rgb(236, 48, 48) 30%, rgb(108, 236, 48) 70%, rgb(77, 192, 23) 100%)";

    }
    else {
      monitor.innerText = "Rock beats Scissors\nYou win";
      monitor.style.color = "green";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Rock";
      txtCPU.innerText = "Scissors";

      box.style.background = "linear-gradient(90deg, rgb(77, 192, 23) 0%, rgb(108, 236, 48) 30%, rgb(236, 48, 48) 70%, rgb(192, 23, 23) 100%)";
    
    }

}

function winLoosePaper(){


  // 0 = Rock
  // 1 = Paper
  // 2 = Scissors
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Paper beats Rock\nYou win";
      monitor.style.cssText = "color:green; box-shadow: 0px;";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Paper";
      txtCPU.innerText = "Rock";
      box.style.background = "linear-gradient(90deg, rgb(77, 192, 23) 0%, rgb(108, 236, 48) 30%, rgb(236, 48, 48) 70%, rgb(192, 23, 23) 100%)";
    }
    else if (y === 1) {
      monitor.innerText = "Paper beats Paper\nDraw";
      monitor.style.cssText = "color:black; box-shadow: 0px;";
      txtPlayer.innerText = "Paper";
      txtCPU.innerText = "Paper";

      box.style.background = "linear-gradient(90deg, rgb(135, 165, 52) 0%, rgb(181, 219, 75) 30%, rgb(181, 219, 75) 70%, rgb(135, 165, 52) 100%)";
      
    }
    else {
      monitor.innerText = "Scissors beats Paper\nComputer wins";
      monitor.style.cssText = "color:red; box-shadow: 0px;";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Paper";
      txtCPU.innerText = "Scissors";
    
      box.style.background = "linear-gradient(90deg, rgb(192, 23, 23) 0%, rgb(236, 48, 48) 30%, rgb(108, 236, 48) 70%, rgb(77, 192, 23) 100%)";

    }

}

function winLooseScissors(){

  // 0 = Rock
  // 1 = Paper
  // 2 = Scissors
  let y = cpuRandom();
    if (y === 0) {
      monitor.innerText = "Rock beats Scissors\nComputer wins";
      monitor.style.cssText = "color:red; box-shadow: 0px;";
      cpu = cpu + 1;
      scoreCPU.innerText = cpu;
      txtPlayer.innerText = "Scissors";
      txtCPU.innerText = "Rock";
      box.style.background = "linear-gradient(90deg, rgb(192, 23, 23) 0%, rgb(236, 48, 48) 30%, rgb(108, 236, 48) 70%, rgb(77, 192, 23) 100%)";

    }
    else if (y === 1) {
      monitor.innerText = "Scissors beats Paper\nYou win";
      monitor.style.cssText = "color:green; box-shadow: 0px;";
      player = player + 1;
      scorePlayer.innerText = player;
      txtPlayer.innerText = "Scissors";
      txtCPU.innerText = "Paper";

      box.style.background = "linear-gradient(90deg, rgb(77, 192, 23) 0%, rgb(108, 236, 48) 30%, rgb(236, 48, 48) 70%, rgb(192, 23, 23) 100%)";


    }
    else {
      monitor.innerText = "Scissors beats Scissors\nDraw";
      monitor.style.cssText = "color:black; box-shadow: 0px;";
      txtPlayer.innerText = "Scissors";
      txtCPU.innerText = "Scissors";
      box.style.background = "linear-gradient(90deg, rgb(135, 165, 52) 0%, rgb(181, 219, 75) 30%, rgb(181, 219, 75) 70%, rgb(135, 165, 52) 100%)";
      
      
    
    }

}



buttonNewGame.addEventListener("click", setReset);

function gameFinished() {
  
  if (cpu === 5) {
    monitor.innerText = "GAME OVER\n" + "Try again"
    
    rockbutton.disabled = true;
    paperbutton.disabled = true;
    scissorsbutton.disabled = true;
    randombutton.disabled = true;
    points--;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:red; box-shadow:inset 0px 0px 15px 5px;";
    
  }

  else if (player === 5) {
    monitor.innerText = "WINNER\n" + "Try again"
    
    rockbutton.disabled = true;
    paperbutton.disabled = true;
    scissorsbutton.disabled = true;
    randombutton.disabled = true;
    points++;
    rounds++;
    monitor.addEventListener("click", setZero);
    monitor.style.cssText = "color:green; box-shadow:inset 0px 0px 15px 5px;";
    
  }



  else {

  }
  saveScore();
 
  
  
}



paperbutton.addEventListener("click", showPaper);

function showPaper(){
  monitor.innerText = "The wave is coming";
  winLoosePaper()
  gameFinished();
}

scissorsbutton.addEventListener("click", showScissors);

function showScissors(){
  monitor.innerText = "Accept the force of scissors";
  winLooseScissors();
  gameFinished();
}

randombutton.addEventListener("click", showRandom);

gameFinished();

function showRandom(){
let x = Math.floor(Math.random() * 3);
  if (x < 1) {
    showRock();
      
  }
  else if (x>1){
    showPaper();
      
    }

  else {
    showScissors();
  }
   
  }

function cpuRandom(){
  let y = Math.floor(Math.random() * 3);
    if (y < 1) {
      
      return y;
        
    }
    else if (y>1){
      
      return y;
        
      }

    else {
      
      return y;
    }
   
  


}  


reset.addEventListener("click", setReset);


function setReset() {

  cpu = 0;
  player = 0;
  rounds = 0;
  points = 0;
  monitor.innerText = "Round: " + rounds + "\n" + "Points: " + points;
  monitor.style.cssText = "color:black; box-shadow: 0px;";
  txtPlayer.innerText = "-";
  txtCPU.innerText = "-";
  box.style.background = "rgb(202, 202, 202)";

  scoreCPU.innerText = cpu;
  scorePlayer.innerText = player;
  rockbutton.disabled = false;
  paperbutton.disabled = false;
  scissorsbutton.disabled = false;
  randombutton.disabled = false;
  gameScoring();


  return;



}


function setZero() {
  monitor.innerText = "Round: " + rounds + "\n" + "Points: " + points;
  monitor.style.cssText = "color:black; box-shadow: 0px;";
  txtPlayer.innerText = "-";
  txtCPU.innerText = "-";
  box.style.background = "rgb(202, 202, 202)";
  cpu = 0;
  player = 0;

  scoreCPU.innerText = cpu;
  scorePlayer.innerText = player;
  rockbutton.disabled = false;
  paperbutton.disabled = false;
  scissorsbutton.disabled = false;
  randombutton.disabled = false;
  gameScoring();


  return;



}


//Highscore - localStorage

function saveScore() {
  localStorage.setItem("points", points);
  localStorage.setItem("rounds", rounds);
  localStorage.setItem("level", level);
}

function getScore() {
  if(localStorage.getItem("rounds") != null){
    points = parseInt (localStorage.getItem("points"));
    rounds = parseInt (localStorage.getItem("rounds"));
    level = parseInt (localStorage.getItem("level"));
  }
}



highscore.addEventListener("click", showHighscore);

function showHighscore() {
  monitor.innerText = playerName + ": " + points + " points";
}




function gameScoring() {
  
  if (points === 1) {

    monitor.style.cssText = "box-shadow: inset 0px 0px 10px 5px green;";
  }

  else if (points === 2) {

    monitor.style.cssText = "box-shadow: inset 0px 0px 20px 10px green;";
  }

  else if (points === 3) {
    monitor.innerText = "You win the game";
    monitor.style.cssText = "box-shadow: inset 0px 0px 30px 20px green;";
    rockbutton.disabled = true;
    paperbutton.disabled = true;
    scissorsbutton.disabled = true;
    randombutton.disabled = true;

    
    
  }

  else if (points === -1) {
    
    monitor.style.cssText = "box-shadow: inset 0px 0px 10px 5px red;";
  }

  else if (points === -2) {
    
    monitor.style.cssText = "box-shadow: inset 0px 0px 20px 10px red;";
  }
  
  else if (points === -3) {
    monitor.innerText = "You've lost the game";
    monitor.style.cssText = "box-shadow: inset 0px 0px 30px 20px red;";
    rockbutton.disabled = true;
    paperbutton.disabled = true;
    scissorsbutton.disabled = true;
    randombutton.disabled = true;
  
    
    
  }


  else {

  }
 
  
  
}








}


