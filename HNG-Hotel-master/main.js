

const ham =  document.querySelector('#hamb')
const { body } = document

ham.addEventListener('click', e =>{ 
    body.classList.toggle('show-nav')
})


