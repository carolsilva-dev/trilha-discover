// Operadores Aritimeticos:

// multiplicação *

/*console.log(3.2 * 5.5)

// divisão /

 console.log(12 / 2 )


 // soma +

  console.log(34 + 67)

  // subtração - 

  console.log(34 - 23)

  // resto da divisão % 
  let remainder 
   remainder = 11 % 3 
   console.log(remainder)


   // incremento ++ 
   let increment = 0 
   increment++
   increment++
   increment++
   console.log(increment)

   // decremento 
   let decrement = 0
   console.log(--decrement)

   // exponencial **
   console.log(3 ** 3)
   

  // Grouping operator () operador que agrupa expressões, os parênteses.

   let total = 2 + 3 * 5
   console.log(total)
  //com essa precedência, nosso resultado é 17.

   let total1 = (2 + 3) * 5
  console.log(total1)
 // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.


 // operadores de comparação :

 // ira comparar valores e retornar um boolean como resposta a comparação 

  let one = 1 
  let two = 2

   // == igual a

   console.log( two == 1)
   console.log (one == "1")

   // != diferente de

   console.log(one != two)
   console.log(one != 1)
   console.log(one != "1")
   console.log(one != 2)


   // operadores de comparação estritamente igual e estritamente diferente

   let number = 3
   let number1 = 2

   console.log( number1 === "2")
   console.log( number1 === 2 )

   // estritamente diferente

   console.log( number !== "3")
   console.log(number !== 3)*/




   // operadores de comparação maior e menor (igual)

   let valor = 1 
   let value = 2

   // > maior que
   console.log(valor > value)

   // >= Maior igual a 
   console.log(valor >= 1)
   console.log(value >= 1)

   // < menor que 
    console.log(valor < value)
    console.log(value < valor)

   // <= menor igual a 

   console.log( valor <= value)
   console.log( valor <= 1)
   console.log(valor <= 0)
   console.log(value <= 1)



 //  operadores de atribuição :


 // Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 4

// addition assignment (adição):
// x = x + 2
x += 2
 console.log(x)

// subtraction assignment (subtração):
 //x = = - 1
x -= 1
console.log(x)
// multiplication assignment (multiplacação):
// x = x * 2
x *= 2
console.log(x)
// division assignment (divisão):
// x = x /2 
x /= 2
console.log(x)

// exponetiation assignment (exponenciação):
x **= 2
console.log(x)

// remainder assignment (resto de divisão):
x %= 2
console.log(x)




// operadores logicos

 // - 2 valores booleanos, quando verificados,
 // resultara em verdadeiro ou falso 

 let pao = true 
 let queijo = false

 // AND &&
 console.log(pao && queijo)

  //   OR ||

 console.log( pao || queijo )

 // NOT !

  console.log(!pao)




 // Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições 
 // e podem entregar valores diferentes com base nelas.


 // condição ? valor1 : valor2
 // Exemplo de uso:
  
  // café da manhã top ou ruim

  let torrada = false
  let cafe = true
  
  const niceBreakfast = torrada || cafe ? 'Café top' : 'Café ruim'
  
  console.log(niceBreakfast)



  // Maior 18 

  let age = 16

  const canDrive = age >= 18 ?  'can drive' : "can't drive"

  console.log(canDrive)

 // Operadores para string

 // comparasion (comparação)

 console.log('a' == 'a') // true
 console.log('b' == 'd') // false 





 // concatenation (concatenação)

 // Retorna a união de duas Strings 
 console.log('BA' + 'TA' + 'TA')

 let tempero = 'cebola'
 tempero += ' e ' + 'alho'   // outra forma de concatenar usando +=
 
 console.log(tempero)





 // Falsy e truthy:

// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

   console.log( NaN ? 'verdadeiro' : 'falso' )


  // já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como true em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

   console.log( Infinity ? 'verdadeiro' : 'falso' )



  // Precedência dos operadores: ou seja, a ordem de importância de cada um deles.

 /*
 
  * grouping                      ( )
  * negação e incremento          ! ++ --
  * multiplicação e divisão       * /
  * adição e subtração            + -
  * relacional                    < <= > >=
  * igualdade                     == != === !==
  * AND                           && 
  * OR                            ||
  * condicional                   ?:
  * assignment (atribuição)       = += -= *= %= 
   
  */

   // Exemplos

  console.log(2 + 5 * 10) // 52
  console.log( (2 + 5) * 10) // 70
  console.log(true == 1)  // true
  console.log(false == 0) // true
  console.log(true === 1) // false
  console.log(false === 0) // false 
  console.log(1 === 1)  //  true





  
