import { DateTime } from './modules/luxon.js';
import displayPage from './modules/displaypage.js';
import activatePage from './modules/activatePage.js';

const date = document.querySelector('.date');
date.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

activatePage();
displayPage();