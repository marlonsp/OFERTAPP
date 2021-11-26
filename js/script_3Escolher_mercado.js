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
    janela = document.querySelectorAll(".janela")
    
    botao = document.querySelectorAll("button")
    botao[0].addEventListener("click", function(event) {
        if (botao[0].innerText === "Adicionar à lista"){
            botao[0].innerText = "Remover da lista";
            janela[0].innerHTML = "O ítem foi adicionado à lista"
            janela[0].style.display = 'block'
            janela[0].style.top = "43%"
            setTimeout(function(){janela[0].style.display = 'none'; }, 3000);
        } else{
            botao[0].innerText= "Adicionar à lista";
            janela[0].innerHTML = "O ítem foi removido da lista"
            janela[0].style.display = 'block'
            setTimeout(function(){janela[0].style.display = 'none'; }, 3000);
        }
    })
    botao[1].addEventListener("click", function(event) {
        if (botao[1].innerText === "Adicionar à lista"){
            botao[1].innerText = "Remover da lista";
            janela[1].innerHTML = "O ítem foi adicionado à lista"
            janela[1].style.display = 'block'
            janela[1].style.top = "60%"
            setTimeout(function(){janela[1].style.display = 'none'; }, 3000);
        } else{
            botao[1].innerText= "Adicionar à lista";
            janela[1].innerHTML = "O ítem foi removido da lista"
            janela[1].style.display = 'block'
            setTimeout(function(){janela[1].style.display = 'none'; }, 3000);
        }
    })
    botao[2].addEventListener("click", function(event) {
        if (botao[2].innerText === "Adicionar à lista"){
            botao[2].innerText = "Remover da lista";
            janela[2].innerHTML = "O ítem foi adicionado à lista"
            janela[2].style.display = 'block'
            janela[2].style.top = "77%"
            setTimeout(function(){janela[2].style.display = 'none'; }, 3000);
        } else{
            botao[2].innerText= "Adicionar à lista";
            janela[2].innerHTML = "O ítem foi removido da lista"
            janela[2].style.display = 'block'
            setTimeout(function(){janela[2].style.display = 'none'; }, 3000);
        }
    })
    botao[3].addEventListener("click", function(event) {
        if (botao[3].innerText === "Adicionar à lista"){
            botao[3].innerText = "Remover da lista";
            janela[3].innerHTML = "O ítem foi adicionado à lista"
            janela[3].style.display = 'block'
            janela[3].style.top = "94%"
            setTimeout(function(){janela[3].style.display = 'none'; }, 3000);
        } else{
            botao[3].innerText= "Adicionar à lista";
            janela[3].innerHTML = "O ítem foi removido da lista"
            janela[3].style.display = 'block'
            setTimeout(function(){janela[3].style.display = 'none'; }, 3000);
        }
    })
})