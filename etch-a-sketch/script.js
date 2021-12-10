//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");


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


// create Enemy card deck

const square = document.createElement("div");

function createSquare() {


  square.innerHTML = "square";


    square.className = "squareBox squareX";
    square.id = "squareX";
    //square.style.cssText = "animation: shake 1s; background-color:l" + yellow + ";";

  monitor.appendChild(square);

}

createSquareButton.addEventListener("click", createSquare);