 // Sistema de notas escolares 

//Desafio:

/*Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C D F

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

 

 function notasFinais(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC= nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0
   
     let notaFinal;
   
     if(notaA) {
       notaFinal = 'A'
     } else if (notaB){
       notaFinal = 'B'
     }
     else if (notaC){
       notaFinal = 'C'
     }
     else if (notaD){
       notaFinal = 'D'
     }
     else if (notaF){
       notaFinal = 'F'
     } else {
       notaFinal = "Nota inválida"
     }

     return notaFinal
   
 }

 console.log(notasFinais(101))
 console.log(notasFinais(-2))
 console.log(notasFinais(56))
 console.log(notasFinais(85))
 console.log(notasFinais(70))
 console.log(notasFinais(95))
 console.log(notasFinais(66))

 // Fluxo de caixa familiar
 
  /* Esse desafio envolve a criação de dois arrays e uma função que calculará o resultado desses valores, 
  dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/

 let familia = {
  receitas: [2500, 5000, 412.49, 600],
  despesas: [1850, 300, 125.50]
 }


   function sum(array) {
    let total = 0


    console.log("inicio for sum");
    for( let value of array) {
      console.log("value: " + value);
       total += value 
    }
    console.log("fim for sum");

    return total
   }



  function calculateBalance() { 
    const calculateReceitas = sum(familia.receitas)
    const calculateDespesas = sum(familia.despesas)
    console.log("valor total receitas: " + calculateReceitas)
    console.log("valor total despesas: " + calculateDespesas)

    const total = calculateReceitas - calculateDespesas
    const itsOK = total >= 0

    let balanceText = "negativo"

    if (itsOK) {
      balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}:
    ${total.toFixed(2)}R$`) // toFixed quandas casas decimais ira mostrar

  }

  calculateBalance()




  