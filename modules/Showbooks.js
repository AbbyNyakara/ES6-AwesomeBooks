const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
const addButton = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
const form = document.querySelector('form');
const currentDate = document.querySelector('.date');
const pageHeading = document.querySelector('main-heading');

let books = [];

let activateBooks = () => {
    function showBook () {
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


    // Remove book
    let removeBook = (index) => {
      books.splice(index, 1);
      showBook();
      localStorage.setItem('books', JSON.stringify(books));
    }

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
}

export default activateBooks;
export {loggedBooks, contact, form};