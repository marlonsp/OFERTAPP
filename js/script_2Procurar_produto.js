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
})