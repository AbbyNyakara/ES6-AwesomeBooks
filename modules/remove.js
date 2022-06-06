import showBook, {books} from './Showbooks.js'

let removeBook = (index) => {
  books.splice(index, 1);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
}

export default removeBook;