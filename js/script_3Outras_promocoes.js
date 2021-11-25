document.addEventListener('DOMContentLoaded', function() {
    
    value = localStorage.getItem('texto1')
    value2 = localStorage.getItem('texto2')
    produto = document.querySelector('.produto1')
    preco = document.querySelector('.preco1')
    produto.innerHTML = value
    preco.innerHTML = value2

    botao = document.querySelector("button")

    botao.addEventListener("click", function(event) {

        if (botao.innerText === "Adicionar à lista"){
            botao.innerText = "Remover da lista";
        } else{
            botao.innerText= "Adicionar à lista";
        }
    })
})