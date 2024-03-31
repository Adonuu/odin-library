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

Book.prototype.toggleRead = function () {
    if (this.read) {
        this.read = false;
    } else {
        this.read = true;
    }
}


function addBookToLibrary (book) {
    myLibrary.push(book);
}

function removeBookFromLibrary (book) {
    // search my library for index to remove
    myLibrary.forEach((item, index) => {
        if (item.title === book.title && item.author === book.author) {
            myLibrary.splice(index, 1);
        }
    })
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
    // add button for removing book
    let buttonDiv = document.createElement('button');
    // add class to button for styling
    buttonDiv.classList.add('removeButton');
    // add text to button
    let buttonInfo = document.createTextNode('✕');
    buttonDiv.appendChild(buttonInfo);
    parentDiv.appendChild(buttonDiv);

    // add function to button to remove book
    buttonDiv.addEventListener('click', () => {

        // get book information in order to remove book
        let parentDiv = buttonDiv.parentElement;

        let title = parentDiv.childNodes[1].textContent.split(':')[1].trim();
        let author = parentDiv.childNodes[2].textContent.split(':')[1].trim();
        let pages = parentDiv.childNodes[3].textContent.split(':')[1].trim();
        let read = parentDiv.childNodes[4].textContent.split(':')[1].trim();

        let bookToRemove = new Book(title, author, pages, read);

        removeBookFromLibrary(bookToRemove);

        // remove book from page display
        parentDiv.remove();
        
    })
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

    // add button for toggling read status
    let buttonRead = document.createElement('button');
    buttonRead.classList.add('readButton');
    let buttonReadInfo = document.createTextNode('Toggle Read Status');
    buttonRead.appendChild(buttonReadInfo);

    buttonRead.addEventListener('click', () => {
        // get book information in order to remove book
        let parentDiv = buttonDiv.parentElement;

        let title = parentDiv.childNodes[1].textContent.split(':')[1].trim();
        let author = parentDiv.childNodes[2].textContent.split(':')[1].trim();

        // find book to toggle status on
        myLibrary.forEach((item) => {
            if (item.title === title && item.author === author) {
                item.toggleRead();

                // update display on book
                if (item.read) {
                    parentDiv.childNodes[4].textContent = 'Status: Read';
                } else {
                    parentDiv.childNodes[4].textContent = 'Status: Not Read Yet';
                }
            }
        });
    })

    parentDiv.appendChild(buttonRead);

    return parentDiv;
}

// event listener to open dialog with form when addBook button is clicked
document.querySelector('#addBook').addEventListener('click', () => {
    document.querySelector('#BookEntry').showModal();
});

// event listener to close dialog when closeForm is clicked
document.querySelector('#closeForm').addEventListener('click', () => {
    document.querySelector('#BookEntry').close();
});

// event listener to create book when form is submitted
document.querySelector('#bookForm').addEventListener("submit", (event) => {
    
    // grab form data
    let title = document.querySelector('#bookTitle').value;
    let author = document.querySelector('#bookAuthor').value;
    let pages = document.querySelector('#bookPages').value;
    let read = document.querySelector('#bookRead').value;

    // create book with form data
    let newBook = new Book(title, author, pages, read);

    // add book to libaray
    addBookToLibrary(newBook);

    // create element for each book
    let newDiv = bookDisplay(newBook);
    // add a class to the new element for styling
    newDiv.classList.add('book');
    // append element to libraryContainer
    libraryContainer.append(newDiv);

    event.preventDefault();
});

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