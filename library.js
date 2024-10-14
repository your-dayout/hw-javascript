class book {
    #title;
    #author;
    #availability;
}
constructor(title, author) {
    this.#title=title;
    this.#author=author;
    this.#availability=true;
}
    getTitle() {
        return this.#title;
    }
    getAuthor() {
        return this.#author;
    }
    getAvailability() {
        return this.#availability;
    }

    CheckoutBook() {
        if (this.#availability) {
            this.#availability = false;
        } else {
            console.log (`Sorry "${this.#title" is not available.`});
        }
    }
}
class Library {
    constructor() {
        this.books = [];
        } 
    addBook(book){
        this.books.push(book);
    }
    CheckoutBook(title) {
        const book = this.books.find(book => book.getTitle() === title);
        if (book) {
        if (book.getAvailability()) {
            book.CheckoutBook();
            console.log(`You have checked out "${book.getTitle()}` by ${book.getAuthor()}.");
    } else {
        console.log(`Sorry, `${title}" is currently not available.`);
    } else {
    console.log(`Book titled "${title}" not found in the library.`);
    }
}
viewAvailableBooks() {
    const availableBooks = this.books.filter(book => book.getAvailability());
    if (availableBooks.length > 0) {
        console.log("Available books:");
        availableBooks.forEach(book => {
            console.log(`${book.getTitle()}" by ${book.getAuthor()}`);
        });
        } else {
         console.log("No books are currently available.");
    }
}
const myLibrary = new Library();
const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
const book2 = new Book("1984", "Джордж Орвелл");
const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");