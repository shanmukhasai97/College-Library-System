// script.js

// Define array to store books
let books = [];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("card", "mb-2");
        bookItem.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}

// Function to add a new book
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    const newBook = {
        title,
        author
    };

    books.push(newBook);
    displayBooks();
    document.getElementById("add-book-form").style.display = "none";
}

// Function to show the add book form
function showAddBookForm() {
    document.getElementById("add-book-form").style.display = "block";
}

// Initial books
books = [
    { title: "Psychology of Money", author: "Morgan Housel" },
    { title: "Fire", author: "Abdul Kalam" },
    { title: "Books of Subhash Chendrabos", author: "Subhash Chendrabos" }
];

// Call displayBooks() when the page loads
window.onload = function() {
    displayBooks();
};
