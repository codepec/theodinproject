console.log("tab2");

export function tab2JS() {
  const element = document.createElement("div");

  element.innerHTML =
    "<h1>Pizza Italiano</h1>" +
    "<h2>Menu</h2>" +
    '<p class="bold">COLD STARTERS</p>' +
    "<p>Prawn Cocktail      6.00 $</p>" +
    "<p>Melon               4.00 $</p>" +
    '<p class="bold">HOT STARTERS</p>' +
    "<p>Soup of the day     5.00 $</p>" +
    "<p>Garlic Mushrooms    5.00 $</p>" +
    '<p class="bold">FISH DISH</p>' +
    "<p>Catch of the day   29.50 $</p>" +
    "<p>Baby Calamari      19.50 $</p>" +
    "<p>King Prawns        29.50 $</p>" +
    '<p class="bold">SALADS</p>' +
    "<p>Green Salad         5.50 $</p>" +
    "<p>Mixed Salad         6.50 $</p>" +
    "<p>King Prawns        29.50 $</p>" +
    '<p class="bold">MAIN DISHES</p>' +
    '<p class="bold">DRINKS</p>' +
    '<p class="bold">DESERTS</p>';

  element.id = "tab2Content";
  element.className = "content";

  return element;
}
