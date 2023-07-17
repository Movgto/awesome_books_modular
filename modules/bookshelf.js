export const bookCtr = document.getElementById('book-ctr');

export default class Bookshelf {
  static shelf = [];

  static someBooks = [
    {
      name: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes Saavedra'
    },
    {
      name: 'La ilitada',
      author: 'Homero'
    }
  ];

  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  static addNewBook = (name, author) => {
    const newBook = new Bookshelf(name, author);
    Bookshelf.shelf.push(newBook);
    Bookshelf.updateData();

    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.innerHTML = `<p>"${name}" by ${author}</p>
                            <button>Remove</button>`;
    bookElement.querySelector('button').addEventListener('click', () => {
      Bookshelf.removeBook(name);
      bookElement.remove();
      Bookshelf.updateData();
    });

    bookCtr.appendChild(bookElement);
  }

  static removeBook = (name) => {
    Bookshelf.shelf = Bookshelf.shelf.filter((item) => item.name !== name);
  }

  static updateData = () => {
    localStorage.setItem('books', JSON.stringify(Bookshelf.shelf));
  }
}