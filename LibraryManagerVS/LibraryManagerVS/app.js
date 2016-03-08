var Book = (function () {
    function Book(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = false;
    }
    return Book;
}());
var book1 = new Book("The Hobbit", "J.R.R. Tolkein", "Fantasy");
console.log(book1.title, book1.author, book1.genre, book1.read);
//# sourceMappingURL=app.js.map