let chars = ["snake", "wolves", "tiger", "eagle", "mouse"]

monitor = document.querySelector('.monitor');
box = document.querySelector('.box');
newGame = document.querySelector('.newGame');

newGame.addEventListener("click", showCards);


function showCards(){
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

