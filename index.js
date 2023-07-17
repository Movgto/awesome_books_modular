import { initiateShelf, addEventListeners } from "./modules/books.js";
import navigation from "./modules/navigation.js";
import showDate from "./modules/date.js";

initiateShelf();
addEventListeners();
navigation();
showDate();