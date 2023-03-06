let res = document.getElementById('print')

//Linkando todos os (numeros) da página
const input = document.querySelectorAll('input');


//Linkando todos os operadores da página
const operadores = document.querySelectorAll('.operador');



let aux = ""
let aux2 = ""

let operador



let valor1
let valor2

let resultado 






//Criando uma função que captura os eventos da página, no caso o clique. 

//O (foreach) percorre todos os numeros da página e adiciona um ouvinte que vai capturar o clique. 

function Clique () {


    input.forEach(input => {
        input.addEventListener('click', (event) => {
        
           

            //Se houver de fato um clique, o valor do botão é armazenando na letiável (botaonum)
            let botaonum = event.target.value


            //Se já houver um cálculo anterior, os dados serão limpos para um novo cálculo

            if(resultado != undefined) {
                valor1 = undefined;
                valor2 = undefined;
                resultado = undefined;
                operador = undefined;
                aux = "";
                aux2 = ""
                res.innerHTML = ""
            }




            //Se o usuário não clicar no operador, continue preenchendo o valor1, do contrário, preencha o valor2
            if (operador != undefined) {

               
                val2 (botaonum);
              } 
              
              
              else {
                val1 (botaonum)
              }



              //Se o usuário clicar primeiro no operador ao invés de selecionar um número, aparece um erro na tela
              if(operador != undefined && valor1 == 0) {
                
                window.alert("Primeiro selecione um número ao invés do operador");

                location.reload()
            }





               //Converte os valores para number pois estavam como string
                valor1 = Number(valor1)

                //Converte os valores para number pois estavam como string
                valor2 = Number(valor2)
           



            // Operações
            if (botaonum == "=" && operador == "+") {

                resultado = valor1 + valor2
                res.innerHTML = `${resultado}`
              }
              if (botaonum == "=" && operador == "-") {

                resultado = valor1 - valor2
                res.innerHTML = `${resultado}`
              }
              if (botaonum == "=" && operador == "÷") {

                resultado = valor1 / valor2
                res.innerHTML = `${resultado}`
              }
              if (botaonum == "=" && operador == "*") {

                resultado = valor1 * valor2
                res.innerHTML = `${resultado}`
              }

             
              
           


            // APresentando valores no console, útil quando utiliza a ferramenta de desenvolvedor no navegador
            console.log(valor1)
            console.log(`Esse é o aux ${aux}`)
            console.log(operador)
            console.log(valor2)
            console.log(resultado)

            
    
           

        });

    });
    
}



function val1  (a) {
    
    //Se o botão (ac) for clicado, a página será recarregada, fazendo com que os dados sejam limpos
        if (a == "ac") {
            a = a.replace("ac", "")
            location.reload()
    }

   // Inserindo os botões que o usuário clica na variável (aux)
    aux += a

    //Linpando o console
    console.clear()


    //Se o usuário clicar no botão del, será excluido dois valores do array. O del prórpiamente que foi alocado de forma automática e o valor que já estava lá. 

    if (a == "del") {
    aux = aux.slice(0, -4)
    }

    //Se o usuário clicar no botão (=), o mesmo será excluido na tela, é apenas uma questão visual
    if (a == "=") {
        aux = aux.slice(0, -1)
        }


    //A variável valor1 recebe os dados inputados pelo usuário
    valor1 = aux


    //Printando o valor do botão para que o usuário possa visualizar
    res.innerHTML = `${aux}`


     //Se o usuário clicar nos operadores, o valor será alocado para a variável (operador)
    if (a == "÷" || a == "+" || a == "-" || a == "*") {
        valor1 = aux.slice(0, -1)
        operador = aux.slice(-1)

    }

    //Convertendo a variável (valor1) para dado numérico
    valor1 = Number(valor1)
}





function val2 (b) {

  //Se o botão (ac) for clicado, a página será recarregada, fazendo com que os dados sejam limpos
  if (b == "ac") {
    b = b.replace("ac", "")
    location.reload()
}
    // Inserindo os botões que o usuário clica na variável (aux) apenas para print na tela
    aux += b
    // Inserindo os botões que o usuário clica na variável (aux2) para futuramente, obter-se o (valor2)
    aux2 += b

    //Linpando o console
    console.clear()


    //Se o usuário clicar no botão del, será excluido dois valores do array. O del prórpiamente que foi alocado de forma automática e o valor que já estava lá. 

    if (b == "del") {
    aux = aux.slice(0, -4)
    aux2 = aux2.slice(0, -4)
    }


    //Se o usuário clicar no botão (=), o mesmo será excluido na tela, é apenas uma questão visual
    if (b == "=") {
        aux = aux.slice(0, -1)
        aux2 = aux2.slice(0, -1)
        }

    //Colocando o valor da variável (aux2) na variável (valor2)
    valor2 = aux2

    //Printando o valor do botão para que o usuário possa visualizar
    res.innerHTML = `${aux}`

    
    //Se o usuário clicar em algum operador, aparece um erro na tela e a página é recarregada
    if (b == "÷" || b == "+" || b == "-" || b == "*") {

        window.alert("ERRO: Função para cálculo de multiplos operadores ou equações avançadas está indisponível");

        res.innerHTML = `Erro`
        location.reload()
    }
    //Convertendo a variável (valor2) para dado numérico
    valor2 = Number(valor2)
}

//Chamando a função clique que executará toda a linha de código para o funcionamento da calculadora
Clique ()

