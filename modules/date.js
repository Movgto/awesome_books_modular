import { DateTime } from './luxon.js';

const date = document.getElementById('date');

const showDate = () => {
  date.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
};

export default showDate;