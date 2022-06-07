import {loggedBooks, contact, form} from './Showbooks.js';

const bookLink = document.querySelector('nav ul li .book-link');
const formLink = document.querySelector('nav ul li .form-link');
const contactLink = document.querySelector('nav ul li .contact-link');

let displayPages = ()=> {
  formLink.addEventListener('click', () => {
    loggedBooks.style.display = 'none';
    form.style.display = 'grid';
    contact.style.display = 'none';
  });
  
  bookLink.addEventListener('click', () => {
    loggedBooks.classList.remove('hide');
    form.style.display = 'none';
    loggedBooks.style.display = 'block';
    contact.style.display = 'none';
  });
  
  contactLink.addEventListener('click', () => {
    contact.style.display = 'grid';
    contact.classList.remove('hide');
    form.style.display = 'none';
    loggedBooks.style.display = 'none';
  });
}

export default displayPages;