const modal = document.querySelector('.modal')
const header = document.querySelector('header')
const adBtn = header.children[1]

adBtn.addEventListener ('click', () => {    
    modal.classList.toggle('visible')
})