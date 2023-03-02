var res = document.getElementById('print')

//Linkando todos os (numeros) da página
const numeros = document.querySelectorAll('.numeros');


//Linkando todos os operadores da página
const operadores = document.querySelectorAll('.operador');

//Contador
let i = 0

var array1 = []
var array2 = []




let aux



let valor1








//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os numeros da página e adiciona um ouvinte que vai capturar o clique. 
numeros.forEach(input => {
    input.addEventListener('click', (event) => {
    
        //Se houver de fato um clique, o valor do botão é armazenando na variável (botaonum) e em seguinda o valor desta variável é printado no console

        const botaonum = event.target.value
        console.log(`O botão clicado é ${botaonum}`)
        console.clear()

        //Inserindo o valor do botão em um indice do array
        array1[i] = botaonum;
        

        //Printando o valor do botão para que o usuário possa visualizar
        res.innerHTML += `${botaonum}`


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
        aux = array1.join("")

        //Convertendo os valores concatenados para number
        valor1 = Number(aux)
        


       























        
                        
        





        
    });
  
});











    















function PegarOperador () {
    operadores.forEach(input => {
        input.addEventListener('click', (event) => {
        
            //Se houver de fato um clique, o valor do botão é armazenando na variável (botaonum) e em seguinda o valor desta variável é printado no console

            const botaooper = event.target.value
            console.log(`O botão clicado é ${botaooper}`)
            



            


            res.innerHTML += `${botaooper}`

            

        });

    });
}

