// variable to keep track of what is in the library
const myLibrary = [];

// constructor function to create a book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        if (this.read) {
            return this.title + " by " + this.author + ", " + this.pages + " pages, read this book";
        } else {
            return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
        }
    }
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function displayLibrary () {
    myLibrary.forEach((item) => {
        console.log(item.info());
    })
}

// create a book
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

// add book to library
addBookToLibrary(theHobbit);

// display library
displayLibrary();