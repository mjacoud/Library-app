/***********DOM**** */

const loginBtn = document.querySelector('.login')
const addBook = document.querySelector('.add-book')
const colorMode = document.querySelector('.switch')
const modal = document.querySelector('form')
const modal_close_btn = document.querySelector('.close-btn')
const incomplete_book = document.querySelector('.incompleted')
const complete_book = document.querySelector('.completed')
const totalpages = document.querySelector('.totalpages')
const book_name = document.querySelector('#book-name')
const book_author = document.querySelector('#book-author')
const book_pages = document.querySelector('#book-pages')
const book_read = document.querySelector('#book-read')
/**********Library******** */
const library = []

let got = {
  book_name: 'Game of Thrones',
  book_author: 'G.G. R Martin',
  book_pages: '980',
  book_read: true
}

/************LOGIN******* */
loginBtn.addEventListener('click', () => {
  console.log('funcinou')
})

/*************ADD BOOK******* */

/*Modal Display*/

addBook.addEventListener('click', () => {
  modal.style.display = 'flex' // Display the modal with Click on '+'
})

modal_close_btn.addEventListener('click', () => {
  modal.style.display = 'none' //Closes the Modal with X button
})

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none' // closes the modal with clock on window
  }
}
/* Add Book */

modal.addEventListener('submit', e => {
  if (
    book_name.value.length === '' ||
    book_author.value.length === '' ||
    book_pages.value.length === ''
  ) {
    e.preventDefault()
    console.log('if')
  } else {
    e.preventDefault()
    book_library()
    modal.style.display = 'none'
  }
})

function book_library() {
  const newBook = new Book(
    book_name.value,
    book_author.value,
    book_pages.value,
    book_read.value
  )
  library.push(newBook)
  render(newBook)
}

const grid = document.querySelector('.books-container')

function render(newBook) {
  const b_block = document.createElement('div')
  const b_name = document.createElement('div')
  const b_author = document.createElement('div')
  const b_pages = document.createElement('div')
  const b_read = document.createElement('button')
  const b_remove = document.createElement('button')

  b_block.classList.add('add-book')

  b_name.textContent = newBook['book_name']
  b_name.classList.add('book-title')
  grid.appendChild(b_block)
  b_block.appendChild(b_name)
  b_author.textContent = newBook['book_author']
  b_author.classList.add('book-author')
  b_block.appendChild(b_author)
  b_pages.textContent = newBook['book_pages']
  b_pages.classList.add('book-pages')
  b_block.appendChild(b_pages)
  b_read.classList.add('book-btn')
  b_read.textContent = newBook['book_read']
  b_block.appendChild(b_read)
  b_remove.textContent = 'delete'
  b_remove.classList.add('book-btn')
  b_block.appendChild(b_remove)
}

/*****Book Creator**** */
class Book {
  constructor(book_name, book_author, book_pages, book_read) {
    this.book_name = book_name
    this.book_author = book_author
    this.book_pages = book_pages
    this.book_read = book_read
  }
}

/*Render*/

/*****COLOR MODE ******* */

colorMode.addEventListener('click', () => {
  console.log('funcinou-3')
})
