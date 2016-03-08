class Book {
    constructor(title: string, author: string, genre: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = false;
    }

    title: string;
    author: string;
    genre: string;
    read: boolean;
}

var book1 = new Book("The Hobbit", "J.R.R. Tolkein", "Fantasy");

console.log(book1.title, book1.author, book1.genre, book1.read);