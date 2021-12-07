
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
  snakeCardAttributes, wolfCardAttributes, 
  tigerCardAttributes, eagleCardAttributes, 
  mouseCardAttributes
];


//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");









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

const card1 = document.createElement("div");
const card2 = document.createElement("div");
const card3 = document.createElement("div");
const card4 = document.createElement("div");
const card5 = document.createElement("div");

let deck = [];


function createDeck() {
 
  
  
  const arr = cardSet();

  var length = arr.length;
  for (var i = 0; i < length; i++) {
    deck.push(chars[arr[i]]);
  }

 

  //let card1 = deck[0]





    card1.innerHTML = deck[0].name + "<br><br>attack: " + deck[0].attack + "<br>health: " + deck[0].health;
    card1.className = "cardBox card1";
    card1.id = "card1Player";
    card1.style.cssText = "animation: shake 1s; background-color:" + deck[0].color + ";";
    monitor.appendChild(card1);

    card2.innerHTML = deck[1].name + "<br><br>attack: " + deck[1].attack + "<br>health: " + deck[1].health;
    card2.className = "cardBox card2";
    card2.id = "card2Player";
    card2.style.cssText = "animation: shake 1s; background-color:" + deck[1].color + ";";
    monitor.appendChild(card2);

    card3.innerHTML = deck[2].name + "<br><br>attack: " + deck[2].attack + "<br>health: " + deck[2].health;
    card3.className = "cardBox card3";
    card3.id = "card3Player";
    card3.style.cssText = "animation: shake 1s; background-color:" + deck[2].color + ";";
    monitor.appendChild(card3);

    card4.innerHTML = deck[3].name + "<br><br>attack: " + deck[3].attack + "<br>health: " + deck[3].health;
    card4.className = "cardBox card4";
    card4.id = "card4Player";
    card4.style.cssText = "animation: shake 1s; background-color:" + deck[3].color + ";";
    monitor.appendChild(card4);

    card5.innerHTML = deck[4].name + "<br><br>attack: " + deck[4].attack + "<br>health: " + deck[4].health;
    card5.className = "cardBox card5";
    card5.id = "card5Player";
    card5.style.cssText = "animation: shake 1s; background-color:" + deck[4].color + ";";
    monitor.appendChild(card5);



 
  return deck;






}  







//create card deck in HTML

mixCards.addEventListener("click", showDeck);

function showDeck() {
  createDeck();
  createDeckCPU();
  
  
  mixCards.disabled = true;
}

//create HTML card design

// attach onclick event handler to add button
//document.getElementById("addCards").addEventListener("click", addCardDeck);

// add cards (push method not implemented)


// new game

newGameButton.addEventListener("click", showNewCards);

function showNewCards() {
  monitor.innerHTML = "";
  monitorCPU.innerText = "";
  mixCards.disabled = false;
  deck = [];
  deckCPU = [];

  healthPlayer = 0;
  healthEnemy = 0;
  console.log(healthPlayer);
  console.log(healthEnemy);
}


// create Enemy card deck

const CPUCard = document.createElement("div");

function createDeckCPU() {

  createDeckCPUnew();

  CPUCard.innerHTML = deckCPU[0].name + "<br><br>attack: " + deckCPU[0].attack + "<br>health: " + deckCPU[0].health;


    CPUCard.className = "cardBox card4";
    CPUCard.id = "cardCPU4";
    CPUCard.style.cssText = "animation: shake 1s; background-color:l" + deckCPU[0].color + ";";

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











//click event
let deckNumber;
let numberOne;
let numberTwo;
let cardX;

function clickEventCard1() {
  deckNumber = deck[0];
  numberOne = 0;
  numberTwo = 1;
  cardX = card1;

  attackAttack();
}

function clickEventCard2() {
  deckNumber = deck[1];
  numberOne = 1;
  numberTwo = 1;
  cardX = card2;

  attackAttack();
}

function clickEventCard3() {
  deckNumber = deck[2];
  numberOne = 2;
  numberTwo = 1; 
  cardX = card3;

  attackAttack();
}

function clickEventCard4() {
  deckNumber = deck[3];
  numberOne = 3;
  numberTwo = 1;
  cardX = card4;

  attackAttack();
}

function clickEventCard5() {
  deckNumber = deck[4];
  numberOne = 4;
  numberTwo = 1;
  cardX = card5;

  attackAttack();
}

card1.addEventListener("click", clickEventCard1);
card2.addEventListener("click", clickEventCard2);
card3.addEventListener("click", clickEventCard3);
card4.addEventListener("click", clickEventCard4);
card5.addEventListener("click", clickEventCard5);






/*
let attackE = 0;
let healthE;

let attackP;
let healthP;
*/

let scoreP = 0;

function attackAttack() {

  let healthPlayer = deckNumber.health - deckCPU[0].attack;
  let healthEnemy = deckCPU[0].health - deckNumber.attack;


  //compareArray();

  /*
  attackP = deckNumber.attack;
  healthP = deckNumber.health - attackE;
  attackE = deckCPU[0].attack;
  healthE = deckCPU[0].health;

console.log(attackE);
 
  let healthPlayer = healthP - attackE;
  let healthEnemy = healthE - attackP;

  */


  //healthEnemy = healthEnemy - deckNumber.attack;

//let counter = 0;


      /*
      if (counter = 0) {
          healthEnemy = healthEnemy - deckNumber.attack;
          counter =+ 1;
      }
      else if (counter = 1) {
          healthEnemy = healthEnemy - deckNumber.attack;
          counter =+ 1;
      }
      else {
          healthEnemy = healthEnemy - deckNumber.attack;
          counter =+ 1;
      }*/













  console.log(healthPlayer);

    if((healthPlayer <= 0) & (healthEnemy > 0) & (deckCPU.length > 1)){
      
      console.log("playercard is dead");
      console.log("enemycard is alive");
      console.log(deck);

      deck.splice(numberOne, numberTwo, 'Dead');
      cardX.innerHTML = deck.splice(numberOne, numberTwo, 'Dead');
      
           

  }

    else if ((healthPlayer > 0) & (healthEnemy <= 0) & (deckCPU.length > 1)){
      
      console.log("playercard is alive");
      console.log("enemycard is dead");
      
      deckCPU.shift();
      CPUCard.innerHTML = deckCPU[0].name + "<br><br>attack: " + deckCPU[0].attack + "<br>health: " + deckCPU[0].health;
      cardX.innerHTML = deckNumber.name + "<br><br>attack: " + deckNumber.attack + "<br>health: " + healthPlayer;


   

    }

    else if ((healthPlayer > 0) & (healthEnemy > 0) & (deckCPU.length > 1)){
      
      console.log("playercard is alive");
      console.log("enemycard is alive");

      cardX.innerHTML = deckNumber.name + "<br><br>attack: " + deckNumber.attack + "<br>health: " + healthPlayer;
      CPUCard.innerHTML = deckCPU[0].name + "<br><br>attack: " + deckCPU[0].attack + "<br>health: " + healthEnemy;
      }

    else if ((healthPlayer <= 0) & (healthEnemy <= 0) & (deckCPU.length > 1)){
      
      console.log("playercard is dead");
      console.log("enemycard is dead");

      deckCPU.shift();
      CPUCard.innerHTML = deckCPU[0].name + "<br><br>attack: " + deckCPU[0].attack + "<br>health: " + deckCPU[0].health;
      deck.splice(numberOne, numberTwo, 'Dead');
      cardX.innerHTML = deck.splice(numberOne, numberTwo, 'Dead');
    }


    else {
      CPUCard.innerHTML = "no more cards";
      alert("Player wins");
      return ++scoreP;
      
    }

    scorePlayer.innerHTML = scoreP;

    console.log("Health left Player: " + healthPlayer 
    + " Health left CPU: " + healthEnemy)
    
}


