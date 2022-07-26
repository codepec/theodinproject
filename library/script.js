//set DOM Javascript to HTML

window.onload = function () {
  // DOM to HTML

  let showWindow = document.getElementById("showWindow");
  let hiddenWindow = document.getElementById("hiddenWindow");
  let window = document.getElementById("window");
  let card = document.getElementById("card");
  //let deleteButton = document.getElementById("deleteButton");

  // my library array

  let myLibrary = [
    ["J. R. R. Tolkien", "The hobbit", 305, "already read"],
    [
      "J. K. Rowling",
      "Harry Potter and the Philosopher's Stone",
      223,
      "not read yet",
    ],
    [
      "J. K. Rowling",
      "Harry Potter and the Chamber of Secrets",
      251,
      "not read yet",
    ],
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
  let checkboxStatus = document.getElementById("checkboxStatus");
  let addButton = document.getElementById("addButton");

  function checkCheckboxStatus() {
    if (checkboxStatus.checked == true) {
      newReadStatus = "already read";
    } else {
      newReadStatus = "not read yet";
    }
  }

  checkCheckboxStatus();

  checkboxStatus.addEventListener("change", () => {
    checkCheckboxStatus();
  });

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

      let deleteButton = document.createElement("div");
      deleteButton.setAttribute("class", "deleteButton");
      deleteButton.innerText = "delete";

      card.addEventListener("mouseenter", () => {
        card.innerText =
          "Number of pages: " +
          "\n" +
          myLibrary[i][2] +
          "\n\n" +
          " Read status: " +
          "\n" +
          myLibrary[i][3] +
          "\n\n";

        card.appendChild(deleteButton);
      });

      // remove cards from the Library

      deleteButton.addEventListener("click", () => {
        // remove in HTML
        card.parentNode.removeChild(card);

        // remove from array
        let deletedBook = myLibrary.splice(i, 1);
        createCard();
      });

      card.addEventListener("mouseleave", () => {
        card.innerText =
          myLibrary[i][1] + "\n\n" + " written by " + "\n" + myLibrary[i][0];
      });
      monitor.appendChild(card);
    }
  }

  createCard();

  // library array, constructor, etc

  function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  function addBookToLibrary() {
    if (newTitle.value == "" || newAuthor.value == "") {
      alert("Please insert new book information");
    } else {
      let book = new Book(
        newAuthor.value,
        newTitle.value,
        newPages.value,
        newReadStatus
      );

      const propertyValues = Object.values(book);

      myLibrary.push(propertyValues);
      createCard();
    }
  }

  addButton.addEventListener("click", () => {
    addBookToLibrary();
  });
};
