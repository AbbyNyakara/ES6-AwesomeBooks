import BookClass from "./bookClass.js";

const title = document.querySelector('.title_input');
const author = document.querySelector('.author_input');
const registeredBooks = document.querySelector('.registered_books');
const addbook = document.querySelector('.add-book ');

let books = [];

const displayPage = () => {
  const book = new BookClass();
  registeredBooks.innerHTML = '';
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  const removeBook = (index) => {
    book.removeBook(index, books);
  };
  for (let i = 0; i < books.length; i += 1) {
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const removeBookBtn = document.createElement('button');
    bookDiv.className = 'container';
    removeBookBtn.className = 'button';
    bookTitle.textContent = `${books[i].title} by ${books[i].author}`;
    bookTitle.classList.add('title');
    removeBookBtn.textContent = 'remove';
    removeBookBtn.classList.add('button');

    bookDiv.append(bookTitle, removeBookBtn);
    registeredBooks.appendChild(bookDiv);
    removeBookBtn.addEventListener('click', () => {
      bookDiv.remove();
      removeBook(i);
    });
  }
};

addbook.addEventListener('click', () => {
  const book = new BookClass(title.value, author.value);
  book.addbook(book, books);
  displayPage();
  title.value = '';
  author.value = '';
});

window.onload = () => {
  displayPage();
};

export default displayPage;