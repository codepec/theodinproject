//set DOM Javascript to HTML

window.onload = function () {
  // buttons HTML
  const blueButton = document.getElementById("blueButton");
  const blackButton = document.getElementById("blackButton");
  const greenButton = document.getElementById("greenButton");
  const redButton = document.getElementById("redButton");
  const rainbowButton = document.getElementById("rainbowButton");
  const clearButton = document.getElementById("clearButton");
  const holdButton = document.getElementById("holdButton");
  const printButton = document.getElementById("printButton");

  // variables
  let rainbow = false;

  // draw automatically or manually

  let changeMouse = "mouseover";

  // hold button print manual
  holdButton.addEventListener("click", () => {
    if (changeMouse == "mouseover") {
      changeMouse = "mousedown";
      holdButton.innerText = "auto";
    } else {
      changeMouse = "mouseover";
      holdButton.innerText = "hold";
    }

    clearFunction();
    createSquareField(10);
  });

  function createSquareField(num) {
    let monitor = document.querySelector(".monitor"); //monitor

    let sum = num * num;

    monitor.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    monitor.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < sum; i++) {
      let squareJS = document.createElement("div");
      squareJS.setAttribute("class", "squareBox");
      squareJS.addEventListener(changeMouse, () => {
        squareJS.style.backgroundColor = changeColor;
        changeEachTime();
      });

      monitor.appendChild(squareJS);
    }
  }

  createSquareField(3);

  clearButton.addEventListener("click", () => {
    clearFunction();
    createSquareField(10);
  });

  function clearFunction() {
    let allSquares = document.querySelectorAll(".squareBox");
    allSquares.forEach((squareJS) => squareJS.parentNode.removeChild(squareJS));
  }

  const send = document.getElementById("send");

  send.addEventListener("click", () => {
    clearFunction();

    const input = document.getElementById("number").value;

    if (isNaN(input) || input < 1 || input > 15) {
      alert("The input must be a number between 1 and 15");
    } else {
      num = input;
      createSquareField(num);
    }
  });

  //let children = monitor.square;

  // change color by clicking buttons
  let changeColor = "black";

  blueButton.addEventListener("click", () => {
    rainbow = false;
    changeColor = "blue";
  });

  blackButton.addEventListener("click", () => {
    rainbow = false;
    changeColor = "black";
  });

  greenButton.addEventListener("click", () => {
    rainbow = false;
    changeColor = "limegreen";
  });

  redButton.addEventListener("click", () => {
    rainbow = false;
    changeColor = "crimson";
  });

  rainbowButton.addEventListener("click", () => {
    rainbow = true;
    let redRandomColor = Math.floor(Math.random() * 256);
    let greenRandomColor = Math.floor(Math.random() * 256);
    let blueRandomColor = Math.floor(Math.random() * 256);
    changeColor =
      "rgb(" +
      redRandomColor +
      "," +
      greenRandomColor +
      "," +
      blueRandomColor +
      ")";
  });

  function changeEachTime() {
    if (rainbow == true) {
      let redRandomColor = Math.floor(Math.random() * 256);
      let greenRandomColor = Math.floor(Math.random() * 256);
      let blueRandomColor = Math.floor(Math.random() * 256);
      changeColor =
        "rgb(" +
        redRandomColor +
        "," +
        greenRandomColor +
        "," +
        blueRandomColor +
        ")";
    } else {
      // do nothing...
    }
  }

  // create square

  function createSquare() {
    let squareJS = document.createElement("div");

    // mousedown
    squareJS.addEventListener(changeMouse, () => {
      squareJS.style.backgroundColor = changeColor;
    });

    squareJS.className = "squareBox";
    //squareJS.id = "square";
    monitor.insertAdjacentElement("beforeend", squareJS);

    return squareJS;
  }

  //create blocks fast

  quicklinkBlock1.addEventListener("click", () => {
    clearFunction();
    createSquareField(5);
  });

  quicklinkBlock2.addEventListener("click", () => {
    clearFunction();
    createSquareField(10);
  });

  quicklinkBlock3.addEventListener("click", () => {
    clearFunction();
    createSquareField(15);
  });

  /*

//promise example

const getSomething = () => {

  return new Promise((resolve, reject) => {
    // fetch something

    resolve("just some data");
    //reject('some error');
  });

};

getSomething().then(data => {
  //console.log(data);
});



*/

  // create screenshot

  printButton.addEventListener("click", () => {
    // screenshot example
    html2canvas(document.body).then((canvas) => {
      let a = document.createElement("a");
      a.download = "screenshot.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    });
  });
};
