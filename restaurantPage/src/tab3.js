console.log("tab3");

export function tab3JS() {
  const element = document.createElement("div");

  element.innerHTML =
    "<h1>Pizza Italiano</h1>" +
    "<h2>Contact us</h2>" +
    "<p>548 Middleway Street</p>" +
    "<p>054 5166 455 666</p>";

  element.id = "tab3Content";
  element.className = "content";

  return element;
}
