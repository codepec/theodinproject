//set DOM Javascript to HTML

monitor = document.querySelector(".monitor");
box = document.querySelector(".box");
newGameButton = document.querySelector(".newGameButton");
square = document.getElementById("square");
squareBox = document.querySelector(".squareBox");




function createSquareField() {
  
  monitor.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    
    monitor.appendChild(createSquare("square"));//+ i
    
  }

  
}


//let children = monitor.square;  



function createSquare(idSquare) {
  const square = document.createElement("div"); 
  //const square = document.createElement("div");

  square.innerHTML = "";
    square.className = "squareBox";
    square.id = idSquare;
    //square.style.cssText = "animation: shake 1s; background-color:l" + yellow + ";";

    
    return square;


}

//children.addEventListener("click", colorSquare);

square.addEventListener("click", colorSquare);


function colorSquare(){
  square.style.cssText = "background-color:yellow;";

}


  createSquareButton.addEventListener("click", createSquareField);
  
  
  function clickEventSquare(){

   }
  

//square color
function colorSquare2(){
  squareBox.style.cssText = "background-color:yellow;";

}


