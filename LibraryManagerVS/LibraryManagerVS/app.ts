function GetAllBooks() {
    let books = [
        { title: "The Hobbit", author: "J.R.R. Tolkein", available: true },
        { title: "Of Mice and Men", author: "John Steinbeck", available: false },
        { title: "Dune", author: "Frank Herbert", available: true },
        { title: "The Gunslinger", author: "Stephen King", available: false }
    ];

    return books;
}

function LogFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for (let currentBook of books) {


        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total books: " + numberOfBooks);
    console.log("First available: " + firstAvailable);
}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);







