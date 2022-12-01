console.log("tab1");


    /*Tab 1:
    description: restaurant
    hours
    location
    */

    /*Tab 2:
    menu
    */

    /*Tab 3:
    contact us
     = document.getElementById("content");
        tab1JS.innerHTML =
    */



        export function tab1JS() {
            const element = document.createElement('div');
          
            
            element.innerHTML = "<h1>Pizza Italiano</h1>" 
         
            + "<p>Our small Italian restaurant is located in the small village of York.</p>"
            + "<p>Customers praise our wonderful pasta and appreciate our legendary pizza.</p>"
       
            + "<button>Order now</button>"
            + "<h2>opening</h2>"

            +"<p>MON - FRI  12:30 - 23:00</p>"
            +"<p>SAT - SUN  12:30 - 23:00</p>"


            + "<h2>location</h2>"
            + "<p>548 Middleway Street</p>" 
            + "<p>York</p>"
            + "<p>054 5166 455 666</p>"
            + "<button>Call now</button>"
            
            + "<p>cash or card</p>";

            element.id = "tab1Content";
            element.className = "content";
          
            return element;
          }
          
         



