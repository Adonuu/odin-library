// variable to keep track of what is in the library
const myLibrary = [];

// container where books are displayed
const libraryContainer = document.querySelector('#libraryContainer');

// book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get title () {
        return this._title;
    }

    set title(value) {
        if (typeof value == "string") {
            this._title = value;
        } else {
            console.log('please pass in a string as title');
        }
    }

    get author () {
        return this._author;
    }

    set author(value) {
        if (typeof value == "string") {
            this._author = value;
        } else {
            console.log('please pass in a string as author');
        }
    }

    get pages () {
        return this._pages;
    }

    set pages(value) {
        if (typeof value == "number") {
            this._pages = value;
        } else {
            console.log('please pass in a number as pages');
        }
    }

    get read () {
        return this._read;
    }

    set read(value) {
        if (typeof value == "boolean") {
            this._read = value;
        } else {
            console.log('please pass in a boolean as read');
        }
    }

    info() {
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