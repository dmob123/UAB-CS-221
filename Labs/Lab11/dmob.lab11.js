function searchBooks() { //Function to make a request to the Google Books API
    const searchTerm = document.getElementById('userSearch').value;
    if (!searchTerm) {
        alert("Please enter a search term.");
        return;
    }
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`; 
    fetch(apiUrl) //Reference to Slide 26 from the Week 13 Lecture about Error Handling and Libraries
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                displayBooks(data.items);
            } else {
                alert("No books found for the given search term.");
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert("An error occurred while fetching data. Please try again.");
        });
}
function displayBooks(books) { //Displays books
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
            <h3>${book.volumeInfo.title}</h3>
            <p>${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Author not available'}</p>
            <button onclick="showDetails('${book.id}')">Details</button>
        `;
        bookListContainer.appendChild(bookItem);
    });
}
function showDetails(bookId) { //Displays details in the pop-screens for book details
    const modal = document.getElementById('bookDetailsModal');
    modal.style.display = 'block';
    const bookDetailsContainer = document.getElementById('bookDetails');
    bookDetailsContainer.innerHTML = '';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}`; //Gets more details for the pop up screen
    fetch(apiUrl) //Reference to Slide 26 from the Week 13 Lecture about Error Handling and Libraries
        .then(response => response.json())
        .then(data => {
            const bookInfo = data.volumeInfo;
            bookDetailsContainer.innerHTML = `
                <h2>${bookInfo.title}</h2>
                <p>ID: <span id="bookId">${bookId}</span></p>
                <p>Author(s): <span id="bookAuthor">${bookInfo.authors ? bookInfo.authors.join(', ') : 'Author not available'}</span></p>
                <p>Published Date: <span>${bookInfo.publishedDate ? bookInfo.publishedDate : 'Not available'}</span></p>
                <p>Description: ${bookInfo.description ? bookInfo.description : 'No description available'}</p>
                <button onclick="addToBookshelf()">Add to Bookshelf</button>
            `;
        })
        .catch(error => {
            console.error('Error fetching book details:', error);
            bookDetailsContainer.innerHTML = '<p>Error fetching book details. Please try again.</p>';
        });
}
// Function to close the modal
function closeModal() {
    document.getElementById('bookDetailsModal').style.display = 'none';
}
