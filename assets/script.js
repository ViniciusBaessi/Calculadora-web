let res = document.getElementById('print')

//Linkando todos os (numeros) da página
const input = document.querySelectorAll('input');


//Linkando todos os operadores da página
const operadores = document.querySelectorAll('.operador');

//Contador
let i = 0

let aux
let aux2

let operador

let array1 = []
let array2 = []

let valor1
let valor2



//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os numeros da página e adiciona um ouvinte que vai capturar o clique. 

function Clique () {


    input.forEach(input => {
        input.addEventListener('click', (event) => {
        
            //Se houver de fato um clique, o valor do botão é armazenando na letiável (botaonum)
            let botaonum = event.target.value

            
            val1 (botaonum)





            //COMEÇAR DAQUI
            if (operador) {
               
                val2 (botaonum);
              }




        
            console.log(`Esse é o valor1 ${valor1}`)
            console.log(`Esse é o operador ${operador}`)
            
            console.log(`Esse é o aux ${aux}`)

            console.log(`Esse é o i ${i}`)

            console.log(`Esse é o valor2 ${valor2}`)


    
           

        });

    });
    
}






function val1  (a) {
    
    //Se o botão (ac) for clicado, a página será recarregada, fazendo com que os dados sejam limpos
        if (a == "ac") {
            a = a.replace("ac", "")
            location.reload()
    }

    //Inserindo o valor do botão em um indice do array
    array1[i] = a;
    

    //Atualizando o contador
    i++

    //Linpando o console
    console.clear()


    //Se o usuário clicar no botão del, será excluido dois valores do array. O del prórpiamente que foi alocado de forma automática e o valor que já estava lá. 

    if (a == "del") {
        array1.splice(array1.length - 2, 2);
        i = i-2
    }


    //Os valores do array serão concatenados e armazenados na letiável (valor1)

    // O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
    aux = array1.join("")


    valor1 = aux


    //Printando o valor do botão para que o usuário possa visualizar
    res.innerHTML = `${valor1}`





    //Pegando os operadores ------------------------


    if (a == "÷" || a == "+" || a == "-" || a == "*") {
        valor1 = aux.slice(0, -1)
        operador = aux.slice(-1)

    }


  //Converte os valores para number pois estavam como string
    valor1 = Number(valor1)
    


}









function val2 (b) {
        //Se o botão (ac) for clicado, a página será recarregada, fazendo com que os dados sejam limpos
        if (b == "ac") {
            b = b.replace("ac", "")
            location.reload()
    }

    //Inserindo o valor do botão em um indice do array
    array2[i] = b;
    

    //Atualizando o contador
    i++

    //Linpando o console
    //console.clear()


    //Se o usuário clicar no botão del, será excluido dois valores do array. O del prórpiamente que foi alocado de forma automática e o valor que já estava lá. 

    if (b == "del") {
        array2.splice(array2.length - 2, 2);
        i = i-2
    }


    //Os valores do array serão concatenados e armazenados na letiável (valor1)

    // O comando .join("") faz a concatenação e as ("") indica que não haverá espaços durante a concatenação.
    aux2 = array2.join("")


    valor2 = aux2


    //Printando o valor do botão para que o usuário possa visualizar
    res.innerHTML += `${valor2}`



    //Pegando os operadores ------------------------
    if (b == "÷" || b == "+" || b == "-" || b == "*") {
        res.innerHTML = `Erro: Não pode executar mais de um operador`

    }


  //Converte os valores para number pois estavam como string
    valor2 = Number(valor2)
    
}










Clique ()






















