const registeredBooks = document.querySelector('.registered_books');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const contactInfo = document.querySelector('.contact-info');
const list = document.querySelector('.list');
const addForm = document.querySelector('.add-form ');
const updateHeading = document.getElementById('heading');

const activatePage = () => {
  list.addEventListener('click', () => {
    registeredBooks.style.display = 'block';
    addForm.style.display = 'none';
    contactInfo.style.display = 'none';
    updateHeading.innerHTML = 'List of Books';
  });

  addNew.addEventListener('click', () => {
    addForm.style.display = 'block';
    registeredBooks.style.display = 'none';
    contactInfo.style.display = 'none';
    updateHeading.innerHTML = 'Add Book';
  });

  contact.addEventListener('click', () => {
    contactInfo.style.display = 'flex';
    registeredBooks.style.display = 'none';
    addForm.style.display = 'none';
    updateHeading.innerHTML = 'Contact Information';
  });
};

export default activatePage;