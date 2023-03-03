var res = document.getElementById('print')

//Linkando todos os (numeros) da página
const numeros = document.querySelectorAll('.numeros');


//Linkando todos os operadores da página
const operadores = document.querySelectorAll('.operador');

//Contador
let i = 0
let aux

var array1 = []
var array2 = []

let valor1
let valorGlobal;

//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os numeros da página e adiciona um ouvinte que vai capturar o clique. 

function PegarNumero () {


    numeros.forEach(input => {
        input.addEventListener('click', (event) => {
        
            //Se houver de fato um clique, o valor do botão é armazenando na variável (botaonum)
            const botaonum = event.target.value

            //Inserindo o valor do botão em um indice do array
            array1[i] = botaonum;
            
            //Linpando o console
            console.clear()

            //Printando o valor do botão para que o usuário possa visualizar
            res.innerHTML += `${botaonum}`


           //Atualizando o contador
            i++



            //Os valores do array serão concatenados e armazenados na variável (valor1)

            // O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
            aux = array1.join("")
            
            valor1 = Number(aux)

                          
            console.log(valor1)
        });

    });
    
}









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

PegarNumero ()
PegarOperador ()
