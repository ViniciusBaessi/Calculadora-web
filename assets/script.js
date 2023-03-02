var res = document.getElementById('print')

//Linkando todos os (inputs) da página
const inputs = document.querySelectorAll('input');


//Criando uma função que captura os eventos da página, no caso o clique. 


//O (foreach) percorre todos os inputs da página e adiciona um ouvinte que vai capturar o clique. Se houver de fato um clique, aparecerá uma mensagem no console mostrando o valor do input que foi clicado, que se refere ao botão da calculadora.

inputs.forEach(input => {
    input.addEventListener('click', (event) => {
    
        var botão = event.target.value
        console.log(`${botão}`)

        


        res.innerHTML += botão

        
    });

  });

