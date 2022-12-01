console.log("tab3");


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
    */

    export function tab3JS() {
        const element = document.createElement('div');
      
        
        element.innerHTML = "<h1>Pizza Italiano</h1>" 
        
        + "<h2>Contact us</h2>" 
        + "<p>548 Middleway Street</p>" 
        + "<p>054 5166 455 666</p>"
   

        element.id = "tab3Content";
        element.className = "content";
      
        return element;
      }

    








