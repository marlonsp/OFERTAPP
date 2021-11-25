document.addEventListener('DOMContentLoaded', function() {

    nomes = document.querySelectorAll(".nome")
    botoes = document.querySelectorAll(".botao")
    estrela = document.querySelectorAll(".linha3 li")
    dist = document.querySelectorAll("li p")

    botoes[0].addEventListener('click', function(event){
        value = nomes[0].innerHTML
        value2 = estrela[0].innerHTML
        value3 = dist[0].innerHTML
        value4 = dist[1].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
        localStorage.setItem('texto4', value4)
    })
    botoes[1].addEventListener('click', function(event){
        value = nomes[1].innerHTML
        value2 = estrela[2].innerHTML
        value3 = dist[2].innerHTML
        value4 = dist[3].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
        localStorage.setItem('texto4', value4)
    })
    botoes[2].addEventListener('click', function(event){
        value = nomes[2].innerHTML
        value2 = estrela[4].innerHTML
        value3 = dist[4].innerHTML
        value4 = dist[5].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
        localStorage.setItem('texto4', value4)
    })
    botoes[3].addEventListener('click', function(event){
        value = nomes[3].innerHTML
        value2 = estrela[6].innerHTML
        value3 = dist[6].innerHTML
        value4 = dist[7].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
        localStorage.setItem('texto4', value4)
    })
})