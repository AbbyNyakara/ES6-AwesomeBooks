/* eslint-disable no-unused-vars */

// Import modules
import showBook from "./modules/Showbooks.js";
import removeBook from "./modules/remove.js";


// Define constants
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
const addButton = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
const form = document.querySelector('form');
const currentDate = document.querySelector('.date');
const pageHeading = document.querySelector('main-heading');

// Select the Links to the pages
const bookLink = document.querySelector('nav ul li .book-link');
const formLink = document.querySelector('nav ul li .form-link');
const contactLink = document.querySelector('nav ul li .contact-link');

let books = [];

// function showBook() {
//   loggedBooks.innerHTML = '';
//   for (let i = 0; i < books.length; i += 1) {
//     loggedBooks.innerHTML += `
//         <div class="card">
//             <p class="title">${books[i].title} by ${books[i].author}</p>
//             <button class="button" onclick="removeBook(${i})">Remove</button>
//         </div>
//    `;

//     // Reset the values to null to allow the user to input again
//     title.value = '';
//     author.value = '';
//   }
// }


// Remove book
// function removeBook(index) {
//   books.splice(index, 1);
//   showBook();
//   localStorage.setItem('books', JSON.stringify(books));
// }

window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }

  showBook();
};

addButton.addEventListener('click', () => {
  const book = {
    title: title.value,
    author: author.value,
  };
  books.push(book);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
});

// date module

const today = new Date().toLocaleDateString('en-us', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

currentDate.innerHTML = `
  <p>${today}</p>
`;

// Add Event listeners for one page website

formLink.addEventListener('click', () => {
  loggedBooks.style.display = 'none';
  form.style.display = 'grid';
  contact.style.display = 'none';
  // pageHeading.innerHTML = 'Add book';
});

bookLink.addEventListener('click', () => {
  loggedBooks.classList.remove('hide');
  form.style.display = 'none';
  loggedBooks.style.display = 'block';
  // pageHeading.innerHTML = 'Display all books';
});

contactLink.addEventListener('click', () => {
  contact.style.display = 'grid';
  contact.classList.remove('hide');
  form.style.display = 'none';
  loggedBooks.style.display = 'none';
  // pageHeading.innerHTML = 'Contact Information';
});