//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");






function createSquareField() {
  
  monitor.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    
    monitor.appendChild(createSquare("square" + i));

  }

  
}





function createSquare(idSquare) {

  const square = document.createElement("div");

  square.innerHTML = "";
    square.className = "squareBox";
    square.id = idSquare;
    //square.style.cssText = "animation: shake 1s; background-color:l" + yellow + ";";

    

  
  
  

  return square;

}



createSquareButton.addEventListener("click", createSquareField);


//square color
function colorSquare(){
  squareBox.style.cssText = "background-color:yellow;";

}



