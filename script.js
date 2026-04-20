const login = document.querySelector("#login")
const senha = document.querySelector("#senha")
const button = document.querySelector("button")
const mensagem = document.querySelector(".incorreto")

localStorage.setItem('Login', 'italocleones08@gmail.com')
localStorage.setItem('Senha', '123456')

function Entrar() {
    if ((login.value === localStorage.getItem('Login')) && (senha.value === localStorage.getItem('Senha'))) {
        window.location.href = './Perfil/perfil.html'
    } else {
        mensagem.innerHTML = 'Login e Senha incorretos!'
    }
}

button.addEventListener('click', Entrar)