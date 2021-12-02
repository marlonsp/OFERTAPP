document.addEventListener('DOMContentLoaded', function() {

    info = document.querySelectorAll(".precos")
    botoes = document.querySelectorAll(".botao")
    mercado = document.querySelectorAll("li")

    botoes[0].addEventListener('click', function(event){
        value = info[0].innerHTML
        value2 = info[1].innerHTML
        value3 = mercado[4].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })
    botoes[1].addEventListener('click', function(event){
        value = info[2].innerHTML
        value2 = info[3].innerHTML
        value3 = mercado[11].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })
    botoes[2].addEventListener('click', function(event){
        value = info[4].innerHTML
        value2 = info[5].innerHTML
        value3 = mercado[18].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })
})