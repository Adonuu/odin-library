// variable to keep track of what is in the library
const myLibrary = [];

// container where books are displayed
const libraryContainer = document.querySelector('#libraryContainer');

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
        // create element for each book
        let newDiv = document.createElement('div');
        // get the books information for display on the node
        let bookInfo = document.createTextNode(item.info());
        // append the book info to the new element
        newDiv.appendChild(bookInfo);
        // add a class to the new element for styling
        newDiv.classList.add('book');
        // append element to libraryContainer
        libraryContainer.append(newDiv);
    })
}

// create sample books
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
let FotR = new Book("Fellowship of the Ring", "J.R.R. Tolkien", 493, false);
let theTwoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 352, false);

// add sample books to library
addBookToLibrary(theHobbit);
addBookToLibrary(FotR);
addBookToLibrary(theTwoTowers);

// display sample books
displayLibrary();