document.addEventListener('DOMContentLoaded', function() {
    
    value = localStorage.getItem('texto1')
    value2 = localStorage.getItem('texto2')
    value3 = localStorage.getItem('texto3')
    nome = document.querySelector("h2")
    preco = document.querySelector(".p")
    rua = document.querySelector("p")
    nome.innerHTML = value
    preco.innerHTML = value2
    rua.innerHTML = value3
    janela = document.querySelector(".janela")
    
    botao = document.querySelector("button")

    botao.addEventListener("click", function(event) {
        if (botao.innerText === "Adicionar à lista"){
            botao.innerText = "Remover da lista";
            janela.innerHTML = "O ítem foi adicionado à lista"
            janela.style.display = 'block'
            setTimeout(function(){janela.style.display = 'none'; }, 3000);
        } else{
            botao.innerText= "Adicionar à lista";
            janela.innerHTML = "O ítem foi removido da lista"
            janela.style.display = 'block'
            setTimeout(function(){janela.style.display = 'none'; }, 3000);
        }
    })

    value = localStorage.getItem('texto')
    if (value != null) {
        span = document.querySelector('span')
        span.innerHTML = value
    }
})