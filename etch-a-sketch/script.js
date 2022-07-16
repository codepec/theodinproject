//set DOM Javascript to HTML

window.onload = function () {
  const monitor = document.querySelector(".monitor");
  const box = document.querySelector(".box");
  //const newGameButton = document.querySelector(".newGameButton");
  const squareJS = document.getElementById("square");
  const squareBox = document.querySelector(".squareBox");

  // buttons HTML
  const createSquaresB = document.getElementById("createSquareButton");
  const blueButton = document.getElementById("blueButton");
  const blackButton = document.getElementById("blackButton");
  const greenButton = document.getElementById("greenButton");
  const redButton = document.getElementById("redButton");
  const rainbowButton = document.getElementById("rainbowButton");
  const clearButton = document.getElementById("clearButton");
  const holdButton = document.getElementById("holdButton");
  const printButton = document.getElementById("printButton");
  const oneHundretBlocks = document.getElementById("oneHundretBlocks");
  const twoHundretBlocks = document.getElementById("twoHundretBlocks");
  const threeHundretBlocks = document.getElementById("threeHundretBlocks");

  clearButton.addEventListener("click", () => {
    monitor.innerHTML = "";
  });

  let num = 2;

  function createSquareField() {
    let sum = num * num;

    monitor.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    monitor.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    monitor.innerHTML = "";

    for (let i = 0; i < sum; i++) {
      monitor.appendChild(createSquares()); //+ i
    }
  }

  const send = document.getElementById("send");

  send.addEventListener("click", () => {
    const input = document.getElementById("number").value;

    if (isNaN(input) || input < 1 || input > 15) {
      alert("The input must be a number between 1 and 100");
    } else {
      num = input;
      createSquareField(num);
    }
  });

  //let children = monitor.square;

  // change color by clicking buttons
  let changeColor = "black";

  blueButton.addEventListener("click", () => {
    changeColor = "blue";
  });

  blackButton.addEventListener("click", () => {
    changeColor = "black";
  });

  greenButton.addEventListener("click", () => {
    changeColor = "limegreen";
  });

  redButton.addEventListener("click", () => {
    changeColor = "crimson";
  });

  let rainbow = false;

  rainbowButton.addEventListener("click", () => {
    if (rainbow == false) {
      rainbow = true;
      let redRandomColor = Math.floor(Math.random() * 256);
      let greenRandomColor = Math.floor(Math.random() * 256);
      let blueRandomColor = Math.floor(Math.random() * 256);
      console.log("clicked true");
      changeColor =
        "rgb(" +
        redRandomColor +
        "," +
        greenRandomColor +
        "," +
        blueRandomColor +
        ")";
    } else {
      rainbow = false;
      console.log("clicked false");
      changeColor = "black";
    }
  });

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

  // draw automatically or manually

  let changeMouse = "mouseover";

  // hold button print manual
  holdButton.addEventListener("click", () => {
    monitor.innerHTML = "";

    if (changeMouse == "mouseover") {
      changeMouse = "mousedown";
      console.log("mousedown");
    } else {
      changeMouse = "mouseover";
      console.log("mouseover");
    }
  });

  // create squares

  function createSquares() {
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
    num = 5;
    createSquareField();
  });

  quicklinkBlock2.addEventListener("click", () => {
    num = 10;
    createSquareField();
  });

  quicklinkBlock3.addEventListener("click", () => {
    num = 15;
    createSquareField();
  });

  //promise example

  const getSomething = () => {
    return new Promise((resolve, reject) => {
      // fetch something

      resolve("just some data");
      //reject('some error');
    });
  };

  getSomething().then((data) => {
    console.log(data);
  });
};
