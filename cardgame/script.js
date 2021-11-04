let chars = ["snake", "wolves", "tiger", "eagle", "mouse"]

monitor = document.querySelector('.monitor');
box = document.querySelector('.box');
newGame = document.querySelector('.newGame');


// card "snake"

function createSnakeCard(){


  const snakeCard = document.createElement('div');
  
  snakeCard.innerHTML = 'Attack: 2hp <br><br> snake Card <br><br> Life: 2hp' ;
  snakeCard.className = 'cardBox card1';
  snakeCard.id = 'card1';
  snakeCard.style.cssText = "animation: shake 1s;";
  


  monitor.appendChild(snakeCard);

  //<div class="cardBox card1" id="card1">
  //<p>Life: 1hp</p>
  //<img src="mouse.jpg" width="60px" />
  //<p>Attack: 3</p>
  //</div>


}


function createtigerCard(){


  const tigerCard = document.createElement('div');
  
  tigerCard.innerHTML = 'Attack: 2hp <br><br> snake Card <br><br> Life: 2hp' ;
  tigerCard.className = 'cardBox card1';
  tigerCard.id = 'card1';
  tigerCard.style.cssText = "animation: shake 1s;";
  


  monitor.appendChild(tigerCard);
}

//mix cards

function cardSet() {
let cardSet = [];
for (let i = 0; i < 5; i++) {
  
  x = Math.floor(Math.random() * 5);
  cardSet.push(x);

  }
  return cardSet;
}

//console.log(cardSet());



function createDeck(){
  let deck = [];
  
  const arr = cardSet();
  
  
    var length = arr.length;
    for (var i = 0; i < length; i++) {

    deck.push(chars[arr[i]]);

}

monitor.innerHTML = deck;
}




mixCards.addEventListener("click", showDeck);

function showDeck(){

  createDeck();

}









//create HTML card design





function addCardDeck() {

  createSnakeCard();

}


// attach onclick event handler to add button
document.getElementById('addCards').addEventListener('click', addCardDeck);


















// add cards (push method not implemented)

newGame.addEventListener("click", showNewCards);

function showNewCards(){
let x = Math.floor(Math.random() * 5);
  if (x == 0) {
    console.log(chars[0]);
    monitor.innerHTML+=chars[0];
      
  }
  else if (x==1){
    console.log(chars[1]);
    monitor.innerHTML+=chars[1];
      
    }

    else if (x==2){
      console.log(chars[2]);
      monitor.innerHTML+=chars[2];
        
      }

      else if (x==3){
        console.log(chars[3]);
        monitor.innerHTML+=chars[3];
          
        }

  else {
    console.log(chars[4]);
    monitor.innerHTML+=chars[4];
  }

  var div = document.getElementById('hobby');

function addHobby() {
  var input = document.createElement('input'),
    button = document.createElement('button');
  
  input.placeholder = "More hobbies";
  button.innerHTML = 'X';
  // attach onlick event handler to remove button
  button.onclick = removeHobby;
  
  div.appendChild(input);
  div.appendChild(button);
}

function removeHobby() {
  // remove this button and its input
  div.removeChild(this.previousElementSibling);
  div.removeChild(this);
}

// attach onclick event handler to add button
document.getElementById('add').addEventListener('click', addHobby);
// attach onclick event handler to 1st remove button
document.getElementById('remove').addEventListener('click', removeHobby);



 
   
  }





card1.addEventListener("click", showToggle);

function showToggle(){
  card1.style.cssText = "animation: attack 1s";
  cardCPU.style.cssText = "animation: shake 1s;"; 
  

}








//Random I Random II, III, IV, V



var div = document.getElementById('hobby');

function addHobby() {
  var input = document.createElement('input'),
    button = document.createElement('button');
  
  input.placeholder = "More hobbies";
  button.innerHTML = 'X';
  // attach onlick event handler to remove button
  button.onclick = removeHobby;
  
  div.appendChild(input);
  div.appendChild(button);
}

function removeHobby() {
  // remove this button and its input
  div.removeChild(this.previousElementSibling);
  div.removeChild(this);
}

// attach onclick event handler to add button
document.getElementById('add').addEventListener('click', addHobby);
// attach onclick event handler to 1st remove button
document.getElementById('remove').addEventListener('click', removeHobby);

