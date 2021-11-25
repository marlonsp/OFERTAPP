document.addEventListener('DOMContentLoaded', function() {

    text = document.querySelector('input[type="text"]')
    img = document.querySelector('.raster')
    main = document.querySelector('main')

    img.addEventListener('click', function(event) {
        event.preventDefault()
        produto = document.querySelectorAll('.produto')
        if (text.value != ""){
            document.querySelector('h2').innerHTML = "Resultados para: " + text.value
            j = 1
            for (i of produto){
                i.innerHTML = text.value + " " + j
                j += 1    
            }
        value = text.value
        localStorage.setItem('texto', value)
        detalhes = document.querySelector('.detalhes')
        detalhes.classList.add('visible')
        }
    })

    botoes = document.querySelectorAll(".botao")
    h3 = document.querySelectorAll("h3")
    preco = document.querySelectorAll(".preco p")
    rua = document.querySelectorAll(".rua p")

    botoes[0].addEventListener('click', function(event){
        value = h3[0].innerHTML
        value2 = preco[0].innerHTML
        value3 = rua[0].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })
    botoes[1].addEventListener('click', function(event){
        value = h3[1].innerHTML
        value2 = preco[1].innerHTML
        value3 = rua[1].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })
    botoes[2].addEventListener('click', function(event){
        value = h3[2].innerHTML
        value2 = preco[2].innerHTML
        value3 = rua[2].innerHTML
        localStorage.setItem('texto1', value)
        localStorage.setItem('texto2', value2)
        localStorage.setItem('texto3', value3)
    })

})