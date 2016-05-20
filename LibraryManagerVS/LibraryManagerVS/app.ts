function GetAllBooks() {
    let books = [
        { id: 1, title: "The Hobbit", author: "J.R.R. Tolkein", available: true, category: Category.Fantasy },
        { id: 2, title: "Of Mice and Men", author: "John Steinbeck", available: true, category: Category.Fiction },
        { id: 3, title: "Dune", author: "Frank Herbert", available: true, category: Category.ScienceFiction },
        { id: 4, title: "The Gunslinger", author: "Stephen King", available: true, category: Category.Fantasy },
        { id: 5, title: "Democracy in America", author: "Alexis de Tocqueville", available: false, category: Category.History }
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailable: string;

    for (let currentBook of books) {


        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available: ${firstAvailable}`);
}

enum Category {
    Fiction, NonFiction, Fantasy, ScienceFiction, History, Biography, Poetry
};

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log(`Getting books in category: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(`Title: ${title}`);
    }
}

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();

    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer: ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for: ${customer}`);

    let booksCheckedOut: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);

        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty === "string") {
        // Get all books by a particular author.
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty === "boolean") {
        // Get all books by a particular author.
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(title => console.log(title));

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








