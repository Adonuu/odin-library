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
}

// getter functions for the Book prototype
Book.prototype.getTitle = function () {
    return this.title;
}

Book.prototype.getAuthor = function () {
    return this.author;
}

Book.prototype.getPages = function () {
    return this.pages;
}

Book.prototype.getRead = function () {
    return this.read;
}

// setter functions for the Book prototype
Book.prototype.setTitle = function (title) {
    this.title = title;
}

Book.prototype.setAuthor = function (author) {
    this.author = author;
}

Book.prototype.setPages = function (pages) {
    this.pages = pages;
}

Book.prototype.setRead = function (read) {
    this.read = read;
}


function addBookToLibrary (book) {
    myLibrary.push(book);
}

function displayLibrary () {
    myLibrary.forEach((item) => {
        // create element for each book
        let newDiv = bookDisplay(item);
        // add a class to the new element for styling
        newDiv.classList.add('book');
        // append element to libraryContainer
        libraryContainer.append(newDiv);
    })
}

// function to create a div for displaying a book's information
function bookDisplay (book) {
    // node to contain all information
    let parentDiv = document.createElement('div');
    // create node for title
    let titleDiv = document.createElement('div');
    // create text node for title
    let titleInfo = document.createTextNode('Title: ' + book.getTitle());
    // append text node to title node
    titleDiv.appendChild(titleInfo);
    // append titleDiv to parentDiv
    parentDiv.appendChild(titleDiv);
    // create node for author
    let authorDiv = document.createElement('div');
    // create text node for author
    let authorInfo = document.createTextNode('Author: ' + book.getAuthor());
    // append text node to author node
    authorDiv.appendChild(authorInfo);
    // append authorDiv to parentDiv
    parentDiv.appendChild(authorDiv);
    // create node for pages
    let pagesDiv = document.createElement('div');
    // create text node for pages
    let pagesInfo = document.createTextNode('Number of Pages: ' + book.getPages());
    // append text node to pages node
    pagesDiv.appendChild(pagesInfo);
    // append pagesDiv to parentDiv
    parentDiv.appendChild(pagesDiv);

    let readDiv = document.createElement('div');
    // depending on if the book is read or not want to display different information
    let readInfo;
    if (book.getRead()) {
        readInfo = document.createTextNode('Status: Read');
    } else {
        readInfo = document.createTextNode('Status: Not Read Yet');
    }
    readDiv.appendChild(readInfo);
    parentDiv.appendChild(readDiv);

    return parentDiv;
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