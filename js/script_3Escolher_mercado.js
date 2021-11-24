document.addEventListener('DOMContentLoaded', function() {
    
    value = localStorage.getItem('texto')
    value2 = localStorage.getItem('text')
    span = document.querySelector('span')
    estrel = document.querySelector('.linha li')
    span.innerHTML = value
    estrel.innerHTML = value2
    
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