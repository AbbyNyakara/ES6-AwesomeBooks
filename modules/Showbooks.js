import removeBook from './remove.js'

let books = [];
const loggedBooks = document.querySelector('.logged-books');

function showBook() {
  loggedBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    loggedBooks.innerHTML += `
        <div class="card">
            <p class="title">${books[i].title} by ${books[i].author}</p>
            <button class="button" onclick="removeBook(${i})">Remove</button>
        </div>
   `;

    // Reset the values to null to allow the user to input again
    title.value = '';
    author.value = '';
  }
}

// New intro
window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
}

export default showBook;
export {books};