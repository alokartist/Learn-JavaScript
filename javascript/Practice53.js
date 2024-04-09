document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Text changed successfully!';
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    addBookToList(bookTitle, author, price);
    this.reset();
});

function addBookToList(title, author, price) {
    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    li.innerHTML = `<strong>Title:</strong> ${title}<br><strong>Author:</strong> ${author}<br><strong>Price:</strong> $${price}`;
    bookList.appendChild(li);
}
