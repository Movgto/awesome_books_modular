// Sections
const list = document.querySelector('#List');
const add = document.querySelector('#New');
const contact = document.querySelector('#Contact');

// Navigation links array
const links = document.querySelectorAll('#myLinks a');

export default function navigation() {
  add.classList.add('hidden');
  contact.classList.add('hidden');

  // Function for showing the chosen section when a link gets clicked
  function GoToSection(e) {
    list.classList.add('hidden');
    add.classList.add('hidden');
    contact.classList.contact('hidden');
    e.target.classList.remove('hidden');
  }

  // Click event listener added for each navigation link
  links.forEach((section) => {
    section.addEventListener('click', GoToSection);
  });
}