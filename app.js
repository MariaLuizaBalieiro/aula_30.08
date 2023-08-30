'use strict'

//JSON
const funcionarios = [
    {
        nome: 'Maria Sousa',
        cargo: 'designer',
        img: 'maria.jpg'
    },
    {
        nome: 'Maria Sousa',
        cargo: 'designer',
        img: 'maria.jpg'
    },
    {
        nome: 'Maria Sousa',
        cargo: 'designer',
        img: 'maria.jpg'
    },
    {
        nome: 'Maria Sousa',
        cargo: 'designer',
        img: 'maria.jpg'
    },

]
function mostrarCards (funcionario){
    const cardContainer = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElementById('div')
    imagem.scr = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.nome 

    const cardDescreption = document.createElement('div')
    cardDescreption.classList.add('card-description')
    
    const nome = document.createElement('h2')
    nome.textContent = funcionario.cargo

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    cardDescreption.replaceChild(nome, cargo)
    card.replaceChildren(imagem, cardDescreption)
    cardContainer.appendChild(card)


}
funcionarios.forEach(mostrarCards)