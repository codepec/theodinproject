//set DOM Javascript to HTML

window.onload = function () {
  // DOM to HTML

  let showWindow = document.getElementById("showWindow");
  let hiddenWindow = document.getElementById("hiddenWindow");
  let window = document.getElementById("window");
  let card = document.getElementById("card");


  const date = new Date()

  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  const dateFormat = yyyy + "-" + mm + "-" + dd

  //let deleteButton = document.getElementById("deleteButton");

  /*title
  description
  dueDate
  priority
  notes
  checklist
  */

  // my todolist array


  let myToDoList = 
  '[[{"title" : "homework", "description" : "hahaha", "project" : "1"},{"title" : "homework2", "description" : "hahaha2", "project" : "1"}] , [{"title" : "homework", "description" : "hahaha", "project" : "2"},{"title" : "homework2", "description" : "hahaha2", "project" : "2"}],  [{"title" : "homework", "description" : "hahaha", "project" : "3"},{"title" : "homework2", "description" : "hahaha2", "project" : "3"}]]';
  
  //'{"project 1" : [{"title" : "homework", "description" : "work", "dueDate" : "dateFormat", "priority" : "false", "notes" : "none", "checklist" : "true"   }],    "project 2" : [{      "title" : "homework3",      "description" : "phone",      "dueDate" : "dateFormat",      "priority" : "false",      "notes" : "none",      "checklist" : "true"    }  ]}';
 
  console.log(myToDoList);
  const obj = JSON.parse(myToDoList);
  console.log(obj);


  //console.log(obj[2][1].title)
/*

  let myToDoList = [
      
    [
    {
        "title":"homework", 
        "description":"work", 
        "dueDate":"dateFormat", 
        "priority": false,
        "notes" : "none",
        "checklist" : true,
        "project" : 1
      },
      {
        "title":"call Chester", 
        "description":"phone", 
        "dueDate":"dateFormat", 
        "priority":false,
        "notes" :"notes",
        "checklist" : true,
        "project" : 1
      },
    ],
    [
      {
        "title": "Read work emails", 
        "description":"email", 
        "dueDate":"dateFormat", 
        "priority":false,
        "notes" :"notes",
        "checklist":true,
        "project" : 2
      }
    
    ],
  ];

  */

  const todolist = (title, description, dueDate, priority, notes, checklist) => {
    const deleteButton = () => console.log('deleted!');
    return { title, description, dueDate, priority, notes, checklist, deleteButton };
  };
  
  const point1 = todolist('homework', 'doing some weird stuff', dateFormat, 'no comments', 'high', true);
  
  //console.log("title: " + point1.title, " description: " + point1.description,  " date: " +  point1.dueDate,  " prio: " + point1.priority,  " done: " + point1.checklist); 
  
  //point1.deleteButton();

  let taskContent = document.querySelector(".taskContent");

  let i = 0;

  function createContainer(){
      container = document.createElement("div");
      container.setAttribute("class", "container");
      taskContent.appendChild(container);
  };

// choose project
// variable x = choose
// filtern nach variable


let projectButton = document.querySelector(".projectButton");
//let projectButton = document.querySelector("projectButton");

function chooseProject(){
  projectButton.addEventListener("click", () => {
  
    console.log("projectButton");

    console.log(this.projectButton.projectButton);
  });
}




  let container = document.querySelector(".container");

  function createTask(){
    task = document.createElement("div");
    task.setAttribute("class", "task");
    task.innerText = obj[1][i].title;
    


    if (obj[0][i].description == "phone") {
      task.style.background = "lightseagreen";
    } else {
      //do nothing
    };


    if (obj[0][i].description == "email") {
      task.style.background = "lightcoral";
    } else {
      //do nothing
    };

    // high priority
    if (obj[0][i].description == true) {
      task.style.background = "crimson";
    } else {
      //do nothing
    };


    
    container.appendChild(task);
  }



  let deleteButton = document.querySelector(".deleteButton");


  function deleteTask(){
    deleteButton.addEventListener("click", () => {
      // remove in HTML
      console.log("löschen");
      //container.parentNode.removeChild(container);
      // remove from array
      //let deletedBook = myLibrary.splice(i, 1);
      //checkMobile(); //createCard();
    });
  }

  let editButton = document.querySelector(".editButton");

  function editTask(){
    editButton.addEventListener("click", () => {
      // remove in HTML
      console.log("edit");
      //container.parentNode.removeChild(container);
      // remove from array
      //let deletedBook = myLibrary.splice(i, 1);
      //checkMobile(); //createCard();
    });
  }




  function deleteTaskButton(){
    deleteButton = document.createElement("div");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.innerText = "delete";
    container.appendChild(deleteButton);
  }

  function editTaskButton(){
    editButton = document.createElement("div");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("id", "editButton");
    editButton.innerText = "edit";
    container.appendChild(editButton);
  }

  function createCheckbox(){
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    container.appendChild(checkbox);

  }

//create Sidebar
  let sidebar = document.querySelector(".sidebar");
  let j = 0;



  function createProjectSidebar(){
    for (j = 0; j < obj.length; j++) {
    projectButton = document.createElement("div");
    projectButton.setAttribute("class", "projectButton");
    projectButton.setAttribute("id", "projectButton");
    num = j + 1;
    projectButton.innerText = "Project " + num;
    sidebar.appendChild(projectButton);
  }

  };

  createProjectSidebar();
  chooseProject();
// end create Sidebar


//create todolist
  function createNewToDo(){
    for (i = 0; i < obj[i].length; i++) {

      createContainer();
      createCheckbox();
      createTask();
      editTaskButton();
      deleteTaskButton();
      deleteTask();
      editTask();
      

    };
  }

  createNewToDo();

//end create todolist

  function settingToDoComplete(){
    
  }

  function changingToDoPriority(){
    if (checkboxStatus.checked == true) {
      newPriorityStatus = 'high';
    } else {
      newPriorityStatus = '';
    }
  }



  function changingToDoChecklist(){
    if (checkboxStatus.checked == true) {
      newChecklistStatus = true;
    } else {
      newChecklistStatus = false;
    }
  }
  



  function editingToDoTitle(){  }






  function createProject(){
    
  }



};