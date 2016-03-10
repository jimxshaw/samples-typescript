function GetAllBooks() {
    var books = [
        { title: "The Hobbit", author: "J.R.R. Tolkein", available: true },
        { title: "Of Mice and Men", author: "John Steinbeck", available: false },
        { title: "Dune", author: "Frank Herbert", available: true },
        { title: "The Gunslinger", author: "Stephen King", available: false }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total books: " + numberOfBooks);
    console.log("First available: " + firstAvailable);
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map