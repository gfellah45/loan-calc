//create the book class
// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

//creating the interface class
// class Interface {}

//get the form and add event listener
const form = document.querySelector("#form");
const tBody = document.querySelector("#t-body");
const output = document.querySelector("#output");
form.addEventListener("submit", addBooks);

function addBooks(e) {
  e.preventDefault();
  let ul = document.createElement("ul");
  ul.className = "output-list list-inline";
  let attr = ["#title", "#author", "#isbn"];
  attr.forEach(each => {
    let li = document.createElement("li");
    li.className = "list-inline-item";
    li.textContent = document.querySelector(each).value;
    ul.appendChild(li);
    output.appendChild(ul);
    console.log(ul);
  });
}
