const header = document.querySelector('header')
const adBtn = header.children[1]
const modal = document.querySelector('.modal')

adBtn.addEventListener ('click', () => {    
    modal.classList.toggle('visible')
})