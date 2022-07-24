//set DOM Javascript to HTML

window.onload = function () {
  // DOM to HTML

  let card1 = document.getElementById("card1");
  let showWindow = document.getElementById("showWindow"); // |||
  let hiddenWindow = document.getElementById("hiddenWindow"); // X
  let window = document.getElementById("window");
  let card = document.getElementById("card");

  // my library

  let myLibrary = [
    ["J. R. R. Tolkien", "The hobbit", 305, false],
    ["J. K. Rowling", "Harry Potter and the Philosopher's Stone", 223, false],
    ["J. K. Rowling", "Harry Potter and the Chamber of Secrets", 251, true],
  ];

  // navbar + add new books container

  hiddenWindow.style.display = "none";
  window.style.display = "none";

  showWindow.addEventListener("click", () => {
    showWindow.style.display = "none";
    hiddenWindow.style.display = "block";
    show();
  });

  hiddenWindow.addEventListener("click", () => {
    showWindow.style.display = "block";
    hiddenWindow.style.display = "none";
    hide();
  });

  function hide() {
    window.style.display = "none";
  }

  function show() {
    window.style.display = "flex";
  }

  // send data and save data to variable

  let newTitle = document.getElementById("newTitle");
  let newAuthor = document.getElementById("newAuthor");
  let newPages = document.getElementById("newPages");
  let newReadStatus = document.getElementById("newReadStatus");
  let addButton = document.getElementById("addButton");

  function clearFunction() {
    let allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => card.parentNode.removeChild(card));
  }

  function createCard() {
    let monitor = document.querySelector(".monitor"); //monitor
    clearFunction();
    //remove old cards first....

    for (let i = 0; i < myLibrary.length; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.innerText = myLibrary[i][1] + "\n\n\n\n\n" + myLibrary[i][0];

      card.innerText =
        myLibrary[i][1] + "\n\n" + " written by " + "\n" + myLibrary[i][0];

      card.addEventListener("mouseover", () => {
        card.innerText =
          "Number of pages: " +
          "\n" +
          myLibrary[i][2] +
          "\n\n" +
          " Already read: " +
          "\n" +
          myLibrary[i][3] +
          "\n\n" +
          "delete book";
      });

      card.addEventListener("mouseout", () => {
        card.innerText =
          myLibrary[i][1] + "\n\n" + " written by " + "\n" + myLibrary[i][0];
      });

      monitor.appendChild(card);
    }
  }

  createCard();

  function newBookInput() {
    if (newTitle.value == "" || newAuthor.value == "") {
      alert("Please insert new book information");
    } else {
      myLibrary.push([newTitle.value, newAuthor.value, newPages.value]);

      createCard();
    }
  }

  function deleteFunction() {
    let deleteButton = document.createElement("button");
    card.append(deleteButton);
  }

  addButton.addEventListener("click", () => {
    newBookInput();
  });

  // library array, constructor, etc

  function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  function addBookToLibrary() {}

  /*

let cardX = document.getElementById("cardx");

const books = ["book1", "book2", "book3"];

let text = "<ul>";
books.forEach(myFunction);
text += "</ul>";

function myFunction(value){
  text += "<li>" + value + "</li>";
}

cardX.innerHTML = text;


*/
};
