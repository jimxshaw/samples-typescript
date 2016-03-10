function GetAllBooks() {
    let books = [
        { title: "The Hobbit", author: "J.R.R. Tolkein", available: true, category: Category.Fantasy },
        { title: "Of Mice and Men", author: "John Steinbeck", available: false, category: Category.Fiction },
        { title: "Dune", author: "Frank Herbert", available: true, category: Category.ScienceFiction },
        { title: "The Gunslinger", author: "Stephen King", available: false, category: Category.Fantasy }
    ];

    return books;
}

function LogFirstAvailable(books): void {
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

enum Category { Fiction, NonFiction, Fantasy, ScienceFiction, History, Biography, Poetry };

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

const fantasyBooks = GetBookTitlesByCategory(Category.Fantasy);
LogBookTitles(fantasyBooks);







