let chars = [
  "<br>snake<br><br><br> Attack: 2hp <br> Life: 2hp", 
  "<br>wolf<br><br><br> Attack: 3hp <br> Life: 2hp", 
  "<br>tiger<br><br><br> Attack: 5hp <br> Life: 6hp", 
  "<br>eagle<br><br><br> Attack: 2hp <br> Life: 3hp", 
  "<br>mouse<br><br><br> Attack: 2hp <br> Life: 1hp"
];

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");
card1 = document.getElementById("card1");
card2 = document.getElementById("card2");
card3 = document.getElementById("card3");
card4 = document.getElementById("card4");
card5 = document.getElementById("card5");



// card "snake"





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

function createDeck() {
  let deck = [];

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



  
  console.log(deck);






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

newGameButton.addEventListener("click", showNewCards);

function showNewCards() {
  card1.innerText = "";
  card2.innerText = "";
  card3.innerText = "";
  card4.innerText = "";
  card5.innerText = "";
  monitorCPU.innerText = "";
  mixCards.disabled = false;
 
}





function createDeckCPU() {
 
  const mouseCard = document.createElement("div");

  mouseCard.innerHTML =
    "<br>mouse card <br><br><br> Attack: 1hp <br> Life: 3hp";
  mouseCard.className = "cardBox card4";
  mouseCard.id = "cardCPU4";
  mouseCard.style.cssText = "animation: shake 1s; background-color:lightgray;";
  const attack = 1;
  const life = 3;
  monitorCPU.appendChild(mouseCard);

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


let health = []


const snakeCardAttributes = {
  attack: 2,
  health: 2,
  color: "green",
  specialAttack: "poisonous attack",
};

const wolfCardAttributes = {
  attack: 3,
  health: 2,
  color: "gray",
  specialAttack: "rabies",
};

const tigerCardAttributes = {
  attack: 5,
  health: 6,
  color: "orange",
  specialAttack: "claw attack",
};


const eagleCardAttributes = {
  attack: 2,
  health: 3,
  color: "white",
  specialAttack: "air attack",
};

const mouseCardAttributes = {
  attack: 2,
  health: 1,
  color: "lightgray",
  specialAttack: "bite",
};



function attackAttack() {

    let Player = tigerCardAttributes.health - mouseCardAttributes.attack;

    if(Player <= 0) {
      alert("player is dead");
    }
    else{
      alert("player is still alive")
    }

}

card1.addEventListener("click", showAlert);


function showAlert(){
  alert("Achtung");
}

card2.addEventListener("click", attackAttack);


