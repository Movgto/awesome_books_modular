import { DateTime } from './luxon.js';
const date = document.getElementById('date');

export default function showDate() {
    date.textContent = DateTime.toLocaleString(DateTime.DATETIME_SHORT);
}