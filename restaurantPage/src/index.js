import _ from 'lodash';
import { tab1JS } from "./tab1.js";
import { tab2JS } from "./tab2.js";
import { tab3JS } from "./tab3.js";
import './style.css';


window.onload = function () {


  let headerTarget = document.getElementById("header");
  let target = document.getElementById("content");
  target.appendChild(tab1JS());

 // target.innerHTML = '<p>please hide</p>'

console.log("hello world");


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


   // const navbar = t  '<button id="button2" onclick="tab2">Tab2</button>' + '<button id="button3" onclick="tab3">Tab3</button>'




/*
    function showTab1(){ 
      let tab1 = document.querySelector("tab1");

      tab1.addEventListener("click", () => {
        tab1Function();
      })
    }
*/
    function createNavBar(){
   

      for (let i = 1; i < 4; i++) {
        let tab = document.createElement("div");
        
        tab.setAttribute("class", "tab");
        tab.setAttribute("id", "tab" + i);
        tab.addEventListener("click", () => {
          if (tab.id == "tab1") {
            //  tab1JS
            target.innerHTML = ""
            target.appendChild(tab1JS());
            
              console.log("Tab1 ausgewählt");
          }
          else if (tab.id == "tab2") {
            //  tab2JS
            target.innerHTML = ""
            target.appendChild(tab2JS());
              console.log("Tab2 ausgewählt");
          }
          else if (tab.id == "tab3") {
            //  tab3JS
            target.innerHTML = ""
            target.appendChild(tab3JS());
              console.log("Tab3 ausgewählt");
          } else {
              console.log("error: no tab available");
          }
        })
        
          
          headerTarget.appendChild(tab);
        }
        
       };
      

   createNavBar()

   document.getElementById("tab1").innerText = "Home";
   document.getElementById("tab2").innerText = "Menu";
   document.getElementById("tab3").innerText = "Contact us";


    };