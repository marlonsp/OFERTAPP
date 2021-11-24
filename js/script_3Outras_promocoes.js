document.addEventListener('DOMContentLoaded', function() {
    botao = document.querySelector("button")

    botao.addEventListener("click", function(event) {

        if (botao.innerText === "Adicionar à lista"){
            botao.innerText = "Remover da lista";
        } else{
            botao.innerText= "Adicionar à lista";
        }
    })
})