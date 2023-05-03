const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.body.children[1]
const startAddMovieButton = document.querySelector('header button')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const backdrop = document.getElementById('backdrop')
// const backdrop = document.body.firstElementChild
// const cancelAddMovieButton = document.querySelector('.modal__actions').firstElementChild
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
}

const cancelAddMovieHandler = () => {
    toggleMovieModal()
}

// const addMovieHandler = () => {

// }

const backdropClickHandler = () => {
    toggleMovieModal()
    // backdrop.classList.toggle('backdrop')
}

startAddMovieButton.addEventListener('click', toggleMovieModal) 
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)
// confirmAddMovieButton.addEventListener('click',)

// startAddMovieButton.addEventListener('click', toggleBackdrop)     