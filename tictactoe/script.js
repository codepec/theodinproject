//set DOM Javascript to HTML

window.onload = function () {
  // array winner

  let winnerCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  /*  

  function checkMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      createCardMobile();
    } else {
      createCard();
    }
  }

  checkMobile();

  */

  let newGameButton = document.getElementById("newGameButton");
  let squareBox = document.getElementById(".squareBox");

  newGameButton.addEventListener("click", () => {
    clearFunction();
    createSquareField(3);
  });

  let clicked = true;

  function createSquareField(num) {
    let monitor = document.querySelector(".monitor"); //monitor

    let sum = num * num;

    monitor.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    monitor.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < sum; i++) {
      let squareJS = document.createElement("div");
      squareJS.setAttribute("class", "squareBox");
      squareJS.setAttribute("id", "square" + i);
      squareJS.addEventListener("click", () => {
        if (clicked == true) {
          clicked = false;
          squareJS.setAttribute("class", "squareBlack");
        } else {
          clicked = true;
          squareJS.setAttribute("class", "squareWhite");
        }

        // array add x, x, x - compare solution
        // place symbol X O booooooold
      });
      monitor.appendChild(squareJS);
    }
  }

  createSquareField(3);

  function clearFunction() {
    let allSquares = document.querySelectorAll(".squareBox");
    allSquares.forEach((squareJS) => squareJS.parentNode.removeChild(squareJS));
  }
};
