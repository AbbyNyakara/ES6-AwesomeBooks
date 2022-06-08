class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addbook = (book, books) => {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  };

  removeBook = (index, books) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  };
}

export default BookClass;