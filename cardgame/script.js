
// set card attributes

const snakeCardAttributes = {
  name: "snake",
  attack: 2,
  health: 2,
  color: "green",
  specialAttack: "poisonous attack",
};

const wolfCardAttributes = {
  name: "wolf",
  attack: 3,
  health: 2,
  color: "gray",
  specialAttack: "rabies",
};

const tigerCardAttributes = {
  name: "tiger",
  attack: 5,
  health: 6,
  color: "orange",
  specialAttack: "claw attack",
};


const eagleCardAttributes = {
  name: "eagle",
  attack: 2,
  health: 3,
  color: "white",
  specialAttack: "air attack",
};

const mouseCardAttributes = {
  name: "mouse",
  attack: 2,
  health: 1,
  color: "lightgray",
  specialAttack: "bite",
};


//set array Player and Enemy

let chars = [
  snakeCardAttributes.name, wolfCardAttributes.name, tigerCardAttributes.name, eagleCardAttributes.name, mouseCardAttributes.name
];


//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");
card3 = document.getElementById("card3");
card4 = document.getElementById("card4");
card5 = document.getElementById("card5");



//mix cards Player

function cardSet() {
  let cardSet = [];
  for (let i = 0; i < 5; i++) {
    x = Math.floor(Math.random() * 5);
    cardSet.push(x);
  }
  return cardSet;
}

//create card deck Player

let deck = [];

function createDeck() {
 
  
  
  const arr = cardSet();

  var length = arr.length;
  for (var i = 0; i < length; i++) {
    deck.push(chars[arr[i]]);
  }

  card1.innerHTML = deck[0]
  card2.innerHTML = deck[1]
  card3.innerHTML = deck[2]
  card4.innerHTML = deck[3]
  card5.innerHTML = deck[4]

  //let card1 = deck[0]
 
  return deck;





  /*
  let b;
  for (b = 0; b < 5; b++) {
    // iterate
    switch (deck[b]) {
      case "snake":
        createSnakeCard();
        break;
      case "wolf":
        createWolfCard();
        break;
      case "tiger":
        createTigerCard();
        break;
      case "eagle":
        createEagleCard();
        break;
      case "mouse":
        createMouseCard();
        break;
      default:
        console.log("Error");
    }
  }

  

*/
}  





mixCards.addEventListener("click", showDeck);

function showDeck() {
  createDeck();
  createDeckCPU();
  
  
  mixCards.disabled = true;
}

//create HTML card design

function addCardDeck() {
  createSnakeCard();
 
}

// attach onclick event handler to add button
//document.getElementById("addCards").addEventListener("click", addCardDeck);

// add cards (push method not implemented)


// new game

newGameButton.addEventListener("click", showNewCards);

function showNewCards() {
  card1.innerText = "";
  card2.innerText = "";
  card3.innerText = "";
  card4.innerText = "";
  card5.innerText = "";
  monitorCPU.innerText = "";
  mixCards.disabled = false;
  deck = [];
  deckCPU = [];
 
}


// create Enemy card deck

const CPUCard = document.createElement("div");

function createDeckCPU() {

  createDeckCPUnew();

  CPUCard.innerHTML = deckCPU[0];


    CPUCard.className = "cardBox card4";
    CPUCard.id = "cardCPU4";
    CPUCard.style.cssText = "animation: shake 1s; background-color:lightgray;";

  monitorCPU.appendChild(CPUCard);

}



//mix cards

function cardSetCPUnew() {
  let cardSet = [];
  for (let i = 0; i < 5; i++) {
    x = Math.floor(Math.random() * 5);
    cardSet.push(x);
  }
  return cardSet;
}

//console.log(cardSet());

let deckCPU = [];

function createDeckCPUnew() {
 
  
  
  const arr = cardSetCPUnew();

  var length = arr.length;
  for (var i = 0; i < length; i++) {
    deckCPU.push(chars[arr[i]]);
  }


  //let card1 = deck[0]
  console.log(deckCPU);
  return deckCPU;

 

}  




























/*
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




}*/

/*
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

*/





let attackE = snakeCardAttributes.attack;
let healthE = snakeCardAttributes.health;

let attackP;
let healthP;

function attackAttack() {

 
  compareArray();
  let healthPlayer = healthP - attackE;
  let healthEnemy = healthE - attackP;



    if(healthPlayer <= 0) {
      
      alert("card is dead");
      console.log(deck);
      deck.splice(1, 1, 'Empty');
      card2.innerHTML = deck[1];

      console.log("Health left Player: " + healthPlayer 
      + " Health left CPU: " + healthEnemy)

    }
    else if (healthPlayer > 0 & deckCPU.length > 1) {
      alert("card is still alive")
      
      deckCPU.shift();
      CPUCard.innerHTML = deckCPU[0];

      console.log("Health left Player: " + healthPlayer 
      + " Health left CPU: " + healthEnemy);

    }

    else {
      CPUCard.innerHTML = "no more cards";
      alert("Player wins");
      //scorePlayer =+ 1;
    }
    
}


card2.addEventListener("click", attackAttack);






function compareArray(){
 

  if (deck[1] == chars[0]){
    console.log("aaaahhhh its a snake");
    attackP = snakeCardAttributes.attack;
    healthP = snakeCardAttributes.health;
  }else if (deck[1] == chars[1]){
    console.log("aaaahhhh its a wolf");
    attackP = wolfCardAttributes.attack;
    healthP = wolfCardAttributes.health;
  }else if (deck[1] == chars[2]){
    console.log("aaaahhhh its a tiger");
    attackP = tigerCardAttributes.attack;
    healthP = tigerCardAttributes.health;
  }else if (deck[1] == chars[3]){
    console.log("aaaahhhh its an eagle");
    attackP = eagleCardAttributes.attack;
    healthP = eagleCardAttributes.health;
  }else if (deck[1] == chars[4]){
    console.log("aaaahhhh its a mouse");
    attackP = mouseCardAttributes.attack;
    healthP = mouseCardAttributes.health;
  }else{
    console.log("aaaahhhh its an error");
  }






/*

  let b;
  for (b = 0; b < 5; b++) {
    // iterate
    switch (deck[b]) {
      case "snake":
        createSnakeCard();
        break;
      case "wolf":
        createWolfCard();
        break;
      case "tiger":
        createTigerCard();
        break;
      case "eagle":
        createEagleCard();
        break;
      case "mouse":
        createMouseCard();
        break;
      default:
        console.log("Error");
    }
  }
*/

}