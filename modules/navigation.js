// Sections
const list = document.getElementById('List');
const add = document.getElementById('Add');
const contact = document.getElementById('Contact');
const sections = [list, add, contact];

// Navigation links array
const links = document.querySelectorAll('#myLinks a');

export default function navigation() {
  add.classList.add('hidden');
  contact.classList.add('hidden');

  // Function for showing the chosen section when a link gets clicked
  function GoToSection(e) {
    sections.forEach((item) => {
      if(item.id === e.target.textContent) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  // Click event listener added for each navigation link
  links.forEach((section) => {
    section.addEventListener('click', GoToSection);
  });
}