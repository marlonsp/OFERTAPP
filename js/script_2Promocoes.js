document.addEventListener('DOMContentLoaded', function() {

    info = document.querySelectorAll(".precos")
    botoes = document.querySelectorAll(".botao")
    console.log(info)

    botoes[0].addEventListener('click', function(event){
        value = info[0].innerHTML
        value2 = info[1].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
    })
    botoes[1].addEventListener('click', function(event){
        value = info[2].innerHTML
        value2 = info[3].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
    })
    botoes[2].addEventListener('click', function(event){
        value = info[4].innerHTML
        value2 = info[5].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
    })
})