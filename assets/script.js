var res = document.getElementById('print')

//Linkando todos os (numeros) da página
const input = document.querySelectorAll('input');


//Linkando todos os operadores da página
const operadores = document.querySelectorAll('.operador');

//Contador
let i = 0
let aux

let operador

var array1 = []
var array2 = []

let valor1
let valor2

let valorGlobal;

//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os numeros da página e adiciona um ouvinte que vai capturar o clique. 

function Clique () {


    input.forEach(input => {
        input.addEventListener('click', (event) => {
        
            //Se houver de fato um clique, o valor do botão é armazenando na variável (botaonum)
            let botaonum = event.target.value

            
            val1 (botaonum)

            


            
            if (isNaN(valor1)) {
            

                valor1 = aux.slice(0, -1)
                operador = aux.slice(-1)
            }
            


            

            
            console.log(valor1)
            console.log(operador)
            console.log(valor2)
            console.log(aux)

            
            
            









        });

    });
    
}




function validar (a) {

        valor1 = aux.slice(0, -1)
        operador = aux.slice(-1)
        
}

















function val1  (a) {



    if (a == "ac") {
        a = a.replace("ac", "")
        location.reload()
}



//Inserindo o valor do botão em um indice do array
array1[i] = a;
            
//Linpando o console
console.clear()

//Printando o valor do botão para que o usuário possa visualizar
res.innerHTML += `${a}`


//Atualizando o contador
i++


//Os valores do array serão concatenados e armazenados na variável (valor1)

// O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
aux = array1.join("")

//Converte os valores para number pois estavam como string
valor1 = Number(aux)




}







function val2  (a) {
    //Inserindo o valor do botão em um indice do array
array2[i] = a;
            
//Linpando o console
console.clear()

//Printando o valor do botão para que o usuário possa visualizar
res.innerHTML += `${a}`


//Atualizando o contador
i++


//Os valores do array serão concatenados e armazenados na variável (valor1)

// O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
aux = array2.join("")

//Converte os valores para number pois estavam como string
valor2 = Number(aux)
}



Clique ()































/*function PegarOperador () {
    operadores.forEach(input => {
        input.addEventListener('click', (event) => {
        
            //Se houver de fato um clique, o valor do botão é armazenando na variável (botaonum) e em seguinda o valor desta variável é printado no console

            const botaooper = event.target.value
            console.log(`O botão clicado é ${botaooper}`)




            


            res.innerHTML += `${botaooper}`

            

        });

    });
}*/



