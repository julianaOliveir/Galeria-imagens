"use strict"

// a href="#img1" class="galeria-itens">
// <img src="./img/img1.png" alt="">
// </a>

const imagens = [
    "./img/img1.png",
    "./img/img2.jpg",
    "./img/img3.png",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img9.png",
    "./img/img8.png"
]

const filtrarId = (urlImagem) => {
    const ultimaBarra = urlImagem.lastIndexOf("/") + 1
    const ultimoPonto = urlImagem.lastIndexOf(".")
    return urlImagem.substring(ultimaBarra, ultimoPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${filtrarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
    
    // container.innerHTML += `
    //     <a href="#img1" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>`
}


const criarSlide = (urlImagem, indice, array) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = filtrarId(urlImagem)

    const indiceAnterior = indice == 0 ? array.length - 1 : indice - 1
    const slideAnterior = filtrarId(array[indiceAnterior])
    
    const indiceSeguinte = indice == array.length - 1 ? 0 : indice + 1
    const slideSeguinte = filtrarId(array[indiceSeguinte])

    novaDiv.innerHTML = `
        <div class="imagem-container">
            <a href="" class="fechar">&#10006;</a>
            <a href="#${slideAnterior}" class="navegacao anterior">&#171;</a>
            <img src="${urlImagem}" alt="">
            <a href="#${slideSeguinte}" class="navegacao proximo">&#187;</a>
        </div>`

    container.appendChild(novaDiv)
}

const carregarGaleria = (img) => img.forEach(criarItem)
const carregarSlide = (img) => img.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)