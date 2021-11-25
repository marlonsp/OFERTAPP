document.addEventListener('DOMContentLoaded', function() {
    
    value = localStorage.getItem('texto1')
    value2 = localStorage.getItem('texto2')
    value3 = localStorage.getItem('texto3')
    value4 = localStorage.getItem('texto4')
    span = document.querySelector('span')
    estrel = document.querySelector('.linha li')
    dist = document.querySelectorAll('p')
    span.innerHTML = value
    estrel.innerHTML = value2
    dist[0].innerHTML = value3
    dist[1].innerHTML = value4
    
    botao = document.querySelectorAll("button")
    botao[0].addEventListener("click", function(event) {
        if (botao[0].innerText === "Adicionar à lista"){
            botao[0].innerText = "Remover da lista";
        } else{
            botao[0].innerText= "Adicionar à lista";
        }
    })
    botao[1].addEventListener("click", function(event) {
        if (botao[1].innerText === "Adicionar à lista"){
            botao[1].innerText = "Remover da lista";
        } else{
            botao[1].innerText= "Adicionar à lista";
        }
    })
    botao[2].addEventListener("click", function(event) {
        if (botao[2].innerText === "Adicionar à lista"){
            botao[2].innerText = "Remover da lista";
        } else{
            botao[2].innerText= "Adicionar à lista";
        }
    })
    botao[3].addEventListener("click", function(event) {
        if (botao[3].innerText === "Adicionar à lista"){
            botao[3].innerText = "Remover da lista";
        } else{
            botao[3].innerText= "Adicionar à lista";
        }
    })
})