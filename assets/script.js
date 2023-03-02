var res = document.getElementById('print')

//Linkando todos os (inputs) da página
const inputs = document.querySelectorAll('.numeros');

let i = 0

var array1 = []



//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os inputs da página e adiciona um ouvinte que vai capturar o clique. 

inputs.forEach(input => {
    input.addEventListener('click', (event) => {
    
        //Se houver de fato um clique, o valor do botão é armazenando na variável (botao) e em seguinda o valor desta variável é printado no console

        const botao = event.target.value
        console.log(`O botão clicado é ${botao}`)


        //Inserindo o valor do botão em um indice do array
        array1[i] = botao;
        

        //Printando o valor do botão para que o usuário possa visualizar
        res.innerHTML += `${botao}`


        //Printando o valor do indice do array (printando a casinha que o dado está sendo armazenado)
        console.log(`O valor do indice é ${i}`)


        //Printando o dado que foi armazenado no array, que no caso é o mesmo valor do botão
        console.log(`O valor armazenado no array é ${array1[i]}`)
        i++


        //Printando todos os dados do array por meio da repetição (for).

        //Variável (j) é igual a zero, enquanto o valor de (j) for menor que a quantidade de dados do array, faça o print no console e (j) 
        for (let j = 0; j < array1.length; j++) {
            console.log(array1[j]);
        }



        //Os valores do array serão concatenados e armazenados na variável (valor1)

        // O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
        var valor1 = array1.join("")
        console.log(`O valor total é ${valor1}`)
    });

  });

