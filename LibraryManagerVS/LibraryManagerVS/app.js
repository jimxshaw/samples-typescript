function GetAllBooks() {
    var books = [
        { id: 1, title: "The Hobbit", author: "J.R.R. Tolkein", available: true, category: Category.Fantasy },
        { id: 2, title: "Of Mice and Men", author: "John Steinbeck", available: true, category: Category.Fiction },
        { id: 3, title: "Dune", author: "Frank Herbert", available: true, category: Category.ScienceFiction },
        { id: 4, title: "The Gunslinger", author: "Stephen King", available: true, category: Category.Fantasy },
        { id: 5, title: "Democracy in America", author: "Alexis de Tocqueville", available: false, category: Category.History }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
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
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
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
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log("Creating customer: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for: " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty === "string") {
        // Get all books by a particular author.
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty === "boolean") {
        // Get all books by a particular author.
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(function (title) { return console.log(title); });
//let myBooks: string[] = CheckoutBooks("Jon", 4, 3, 2, 1);
//myBooks.forEach(title => console.log(title));
//LogFirstAvailable();
//let fictionBooks = GetBookTitlesByCategory();
//fictionBooks.forEach(bookTitle => console.log(bookTitle));
//CreateCustomer("Barack");
//CreateCustomer("Barack", 43);
//CreateCustomer("Barack", 43, "Washington DC");
//let x: number;
//x = 9;
//let IdGenerator: (chars: string, nums: number) => string;
//IdGenerator = (name: string, id: number) => { return name + id };
//console.log(IdGenerator("Sam", 28));
//let myID: string = CreateCustomerID("John", 88);
//console.log(myID);
//const fantasyBooks = GetBookTitlesByCategory(Category.Fantasy);
//fantasyBooks.forEach((val, idx, arr) => console.log(++idx + " - " + val));
//# sourceMappingURL=app.js.map