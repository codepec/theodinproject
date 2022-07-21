//set DOM Javascript to HTML

window.onload = function () {
  // buttons HTML

  const clearButton = document.getElementById("clearButton");

  const plusMinusButton = document.getElementById("plusMinusButton");
  const percentButton = document.getElementById("percentButton");
  const divideButton = document.getElementById("divideButton");
  const sevenButton = document.getElementById("sevenButton");
  const eightButton = document.getElementById("eightButton");
  const nineButton = document.getElementById("nineButton");
  const multiplyButton = document.getElementById("multiplyButton");
  const fourButton = document.getElementById("fourButton");
  const fiveButton = document.getElementById("fiveButton");
  const sixButton = document.getElementById("sixButton");
  const minusButton = document.getElementById("minusButton");
  const oneButton = document.getElementById("oneButton");
  const twoButton = document.getElementById("twoButton");
  const threeButton = document.getElementById("threeButton");
  const plusButton = document.getElementById("plusButton");
  const zeroButton = document.getElementById("zeroButton");
  const pointButton = document.getElementById("pointButton");
  const equalButton = document.getElementById("equalButton");

  // numbers

  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let result = "";
  let number = "";
  let equal = "";

  function clear() {
    firstNumber = "";
    secondNumber = "";
    number = "";
    operator = "";
    result = "";
    equal = "";
    monitor.innerText = "";
  }

  clearButton.addEventListener("click", () => {
    clear();
  });

  //equal
  //}else if(firstNumber != undefined && secondNumber != undefined ){

  function checkFirstNumber() {
    if (firstNumber === "") {
      monitor.innerText = number;
    } else {
      monitor.innerText = firstNumber + operator + number;
    }
  }

  function zero() {
    number = number + "0";
    checkFirstNumber();
  }

  function one() {
    number = number + "1";
    checkFirstNumber();
  }

  function two() {
    number = number + "2";
    checkFirstNumber();
  }

  function three() {
    number = number + "3";
    checkFirstNumber();
  }

  function four() {
    number = number + "4";
    checkFirstNumber();
  }

  function five() {
    number = number + "5";
    checkFirstNumber();
  }

  function six() {
    number = number + "6";
    checkFirstNumber();
  }

  function seven() {
    number = number + "7";
    checkFirstNumber();
  }

  function eight() {
    number = number + "8";
    checkFirstNumber();
  }

  function nine() {
    number = number + "9";
    checkFirstNumber();
  }

  document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (keyName === "Enter") {
      equalFunction();
      pointButtonClicked = false;
    } else if (keyName === "0") {
      zero();
    } else if (keyName === "1") {
      one();
    } else if (keyName === "2") {
      two();
    } else if (keyName === "3") {
      three();
    } else if (keyName === "4") {
      four();
    } else if (keyName === "5") {
      five();
    } else if (keyName === "6") {
      six();
    } else if (keyName === "7") {
      seven();
    } else if (keyName === "8") {
      eight();
    } else if (keyName === "9") {
      nine();
    } else if (keyName === "+") {
      plus();
    } else if (keyName === "-") {
      minus();
    } else if (keyName === "/") {
      divide();
    } else if (keyName === "*") {
      multiply();
    } else if (keyName === "%") {
      percent();
    } else if (keyName === ".") {
      point();
    } else if (keyName === ",") {
      point();
    }
  });

  // mouse click buttons

  // mouse click buttons numbers

  zeroButton.addEventListener("click", () => {
    zero();
  });

  oneButton.addEventListener("click", () => {
    one();
  });

  twoButton.addEventListener("click", () => {
    two();
  });

  threeButton.addEventListener("click", () => {
    three();
  });

  fourButton.addEventListener("click", () => {
    four();
  });

  fiveButton.addEventListener("click", () => {
    five();
  });

  sixButton.addEventListener("click", () => {
    six();
  });

  sevenButton.addEventListener("click", () => {
    seven();
  });

  eightButton.addEventListener("click", () => {
    eight();
  });

  nineButton.addEventListener("click", () => {
    nine();
  });

  // mouse click buttons operator plus

  function plus() {
    if (typeof number === "") {
      console.log("do nothing" + firstNumber + secondNumber);

      // else if fehlt... kein rücksprung auf 0 +...
    } else {
      operator = " + ";
      firstNumber = number;
      monitor.innerText = firstNumber + operator;
      number = "";
      console.log(firstNumber + operator);
      pointButtonClicked = false;
    }
  }

  plusButton.addEventListener("click", () => {
    plus();
  });

  // mouse click buttons operator minus

  // minus muss auch bei firstNumber funktionieren...!!!

  function minus() {
    if (typeof number === "") {
      console.log("error minus");
    } else {
      operator = " - ";
      firstNumber = number;
      monitor.innerText = firstNumber + operator;
      number = "";
      pointButtonClicked = false;
    }
  }

  minusButton.addEventListener("click", () => {
    minus();
  });

  // mouse click buttons operator multiply

  function multiply() {
    if (typeof number === "") {
      console.log("error multiply");
    } else {
      operator = " * ";
      firstNumber = number;
      monitor.innerText = firstNumber + operator;
      number = "";
      console.log(firstNumber + operator);
      pointButtonClicked = false;
    }
  }

  multiplyButton.addEventListener("click", () => {
    multiply();
  });

  // mouse click buttons operator divide

  function divide() {
    if (typeof number === "") {
      console.log("error divide");
    } else {
      operator = " / ";
      firstNumber = number;
      monitor.innerText = firstNumber + operator;
      number = "";
      console.log(firstNumber + operator);
      pointButtonClicked = false;
    }
  }

  divideButton.addEventListener("click", () => {
    divide();
  });

  // mouse click buttons operator point

  let pointButtonClicked = false;

  function point() {
    if (pointButtonClicked == false) {
      pointButtonClicked = true;
      number = number + ".";
    } else {
      console.log("error point");
    }
  }

  pointButton.addEventListener("click", () => {
    point();
  });

  // mouse click buttons operator equal

  function equalFunction() {
    equal = " = ";

    if (firstNumber === "") {
      //do nothing
    } else {
      secondNumber = number;
      if (operator == " + ") {
        result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
      } else if (operator == " - ") {
        result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
      } else if (operator == " * ") {
        result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
      } else if (operator == " / ") {
        if (parseInt(firstNumber) == 0) {
          alert("You can't divide by zero!");
          clear();
        } else {
          result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
        }
      } else {
        console.log("error");
      }

      monitor.innerText =
        firstNumber + operator + secondNumber + equal + result;
      number = result;
      firstNumber = "";
    }
  }

  equalButton.addEventListener("click", () => {
    pointButtonClicked = false;
    equalFunction();
  });

  // mouse click buttons operator plus or minus

  plusMinusButton.addEventListener("click", () => {
    number = parseInt(number, 10);

    if (number < 0) {
      number = -number;
      monitor.innerText = number;
    } else if (number > 0) {
      number = -number;
      monitor.innerText = number;
    } else if ((number = 0)) {
      monitor.innerText = number;
    } else {
      //do nothing
    }

    number = number.toString();
  });

  // 0 / x = nicht erlaubt

  // zahl muss mittels click in variable gespeichert werden var 1 und var 2,
  // operator muss mittels click in variable gespeichert werden op
  // result muss mittels click in result gespeichert werden

  percentButton.addEventListener("click", () => {
    percent();
  });

  function percent() {
    number = parseInt(number, 10);
    number = number * 0.01;
    number = number.toString();
    monitor.innerText = number;
  }

  // error NaN fehlt, bei Eingabe ohne number....
};
