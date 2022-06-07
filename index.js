/* eslint-disable no-unused-vars */

// Import modules
import activateBooks from './modules/Showbooks.js';
import { DateTime } from './modules/luxon.js';
import displayPages from './modules/displaypage.js';

// Define constants
const currentDate = document.querySelector('.date');

// To add and delete the books;
activateBooks();

// Create responsive one page website
displayPages();

// Populate the date using the luxon library
const today = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

currentDate.innerHTML = `
  <p>${today}</p>
`;