let menu = document.querySelector('.menu')
let menuHamburguerFora = document.querySelector('.fora')
let menuHamburguerDentro = document.querySelector('.dentro')

menuHamburguerFora.addEventListener('click', abrirMenu)
menuHamburguerDentro.addEventListener('click', fecharMenu)

function abrirMenu () {
    menu.style.display = 'flex';
    menuHamburguerFora.style.display = 'flex';
}

function fecharMenu () {
    menu.style.display = 'none';
    menuHamburguerFora.style.display = 'block';
}