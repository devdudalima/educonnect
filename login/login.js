let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let btnEntrar = document.querySelector('.btn-entrar')

btnEntrar.addEventListener('click', entrar)

function verificar() {
    if (email.value != '' && senha.value != '') {
        return true
    } else {
        alert('Preencha todos os campos!')
        return false
    }
}

function entrar() {

    if (verificar()) {
        logar()
    }
}

function logar() {
    window.location.href = '../tela-inicial/tela-inicial.html'
}