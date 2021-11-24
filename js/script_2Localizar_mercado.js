document.addEventListener('DOMContentLoaded', function() {

    nomes = document.querySelectorAll(".nome")
    botoes = document.querySelectorAll(".botao")
    estrela = document.querySelectorAll(".linha3 li")

    botoes[0].addEventListener('click', function(event){
        value = nomes[0].innerHTML
        value2 = estrela[0].innerHTML
        localStorage.setItem('texto', value)
        localStorage.setItem('text', value2)
    })
    botoes[1].addEventListener('click', function(event){
        value = nomes[1].innerHTML
        value2 = estrela[2].innerHTML
        localStorage.setItem('texto', value)
        localStorage.setItem('text', value2)
    })
    botoes[2].addEventListener('click', function(event){
        value = nomes[2].innerHTML
        value2 = estrela[4].innerHTML
        localStorage.setItem('texto', value)
        localStorage.setItem('text', value2)
    })
    botoes[3].addEventListener('click', function(event){
        value = nomes[3].innerHTML
        value2 = estrela[6].innerHTML
        localStorage.setItem('texto', value)
        localStorage.setItem('text', value2)
    })
})