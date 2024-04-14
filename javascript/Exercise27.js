// Book class
class Book {
    constructor(title) {
        this.title = title;
        this.read = false;
    }
}

// UI class
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('bookList');
        const item = document.createElement('li');
        item.innerHTML = `
            ${book.title} 
            <button class="delete" onclick="UI.deleteBook('${book.title}')">Delete</button>
            <button class="read" onclick="UI.toggleReadStatus('${book.title}')">${book.read ? 'Mark Unread' : 'Mark Read'}</button>
        `;
        list.appendChild(item);
    }

    static deleteBook(title) {
        const books = Store.getBooks();
        const filteredBooks = books.filter((book) => book.title !== title);
        localStorage.setItem('books', JSON.stringify(filteredBooks));
        UI.clearBookList();
        UI.displayBooks();
    }

    static toggleReadStatus(title) {
        const books = Store.getBooks();
        const bookIndex = books.findIndex((book) => book.title === title);
        books[bookIndex].read = !books[bookIndex].read;
        localStorage.setItem('books', JSON.stringify(books));
        UI.clearBookList();
        UI.displayBooks();
    }

    static clearBookList() {
        const list = document.getElementById('bookList');
        list.innerHTML = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.form');
        container.insertBefore(div, form);
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Store class
class Store {
    static getBooks() {
        return JSON.parse(localStorage.getItem('books')) || [];
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.getElementById('addBookBtn').addEventListener('click', () => {
    const title = document.getElementById('bookInput').value.trim();
    if (title === '') {
        UI.showAlert('Please enter a book title', 'error');
        return;
    }
    const book = new Book(title);
    Store.addBook(book);
    UI.addBookToList(book);
    UI.showAlert('Book added successfully', 'success');
    document.getElementById('bookInput').value = '';
});
