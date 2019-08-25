//create the book class
class Book{
    constructor(title,author,isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;
    }
}

//creating the interface class
class Interface{

}

//get the form and add event listener
const form = document.querySelector('#form').addEventListener('submit', 
function(e){
    let title = document.querySelector('#title').value;
        author = document.querySelector('#author').value;
        isbn = document.querySelector('#isbn').value;
console.log(title, author, isbn);
e.preventDefault();        
});
