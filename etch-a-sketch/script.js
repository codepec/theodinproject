//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");






function createSquareField() {
  
  monitor.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    
    createSquare();

  }
 
}





function createSquare() {

  const square = document.createElement("div");

  square.innerHTML = "";
    square.className = "squareBox square";
    square.id = "square";
    //square.style.cssText = "animation: shake 1s; background-color:l" + yellow + ";";

  monitor.appendChild(square);

}

createSquareButton.addEventListener("click", createSquareField);