function GetAllBooks() {
    var books = [
        { title: "The Hobbit", author: "J.R.R. Tolkein", available: true, category: Category.Fantasy },
        { title: "Of Mice and Men", author: "John Steinbeck", available: false, category: Category.Fiction },
        { title: "Dune", author: "Frank Herbert", available: true, category: Category.ScienceFiction },
        { title: "The Gunslinger", author: "Stephen King", available: false, category: Category.Fantasy }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable;
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
var Category;
(function (Category) {
    Category[Category["Fiction"] = 0] = "Fiction";
    Category[Category["NonFiction"] = 1] = "NonFiction";
    Category[Category["Fantasy"] = 2] = "Fantasy";
    Category[Category["ScienceFiction"] = 3] = "ScienceFiction";
    Category[Category["History"] = 4] = "History";
    Category[Category["Biography"] = 5] = "Biography";
    Category[Category["Poetry"] = 6] = "Poetry";
})(Category || (Category = {}));
;
function GetBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: " + Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log("Title: " + title);
    }
}
var fantasyBooks = GetBookTitlesByCategory(Category.Fantasy);
LogBookTitles(fantasyBooks);
//# sourceMappingURL=app.js.map