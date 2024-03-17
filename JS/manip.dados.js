/*Prototype:
O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos
que já existem nativamente em diversos tipos de dados, que são lidados como objetos*/

/*
 * prototype-based language
 * prototype chain
 * _prtoo_
 */




/* Type conversion (typecasting) vs Type coersion :

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras,
por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente,
por exemplo quando você tenta somar um número na forma string com um número do tipo número.

* Alteração de um tipo de dado para outro */

console.log(Number('9')+ 5 )

// transformando assim em:

console.log(Number('9')+ '5')



// Manipulando Strings e Números:

//É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().
// Transformar String em Número e Número em String 

let string = "123"
console.log(Number(string))

let number = 321
console.log(String (number))



/*Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade
 de algarismos em um número transformando o número em string e usando o mesmo método.*/

 let word = "paralelepipedo"
 console.log(word.length)

 let number1 = 1234
 console.log(String(number1).length)


 //Transformar um número quebrado com 2 casas decimais e trocar por ponto e virgula :

 /*Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. 
 Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ",").
  O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.*/

let number3 = 345.356489
console.log(number3.toFixed(2).replace(".", ","))




// Transforme letras maisculas em maiusculas e vice versa:

/*Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, 
também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.*/

let word1 = "programar é muito bom!"
console.log(word1.toUpperCase())

let word2 = "BATATA FRITA" 
console.log(word2.toLowerCase())



// Encontrando palavras especificas em frases:

/* Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, 
que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.*/

let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor"))




// Manipulando Strings e Arrays :

/* Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. 
  Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador,
  porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador. */


 // Separe um texto que contem espaços em, em um novo array onde cada texto é uma posição do arry. Depois disso, transforme o array em um texto e onde eram espaços, coloque_

 let frase = "Eu quero viver o Amor"
 let myArray = frase.split(" ")
 console.log(myArray)


 let fraseWithUnderscore = myArray.join("_")
 console.log(fraseWithUnderscore)

   

 // Criar Array com construtor:

 /* Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c"). */

  let myArray1 = new Array ('a', 'b', 'c')
  console.log(myArray1)



 // Contar elementos do Array 

 //Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

 console.log(["a", "b", "c"].length)

 // Transformar uma cadeia de caracteres em elementos de um array 

 let word3 = "manipulação"
 console.log(Array.from(word3))


  //Manipulando-Arrays :

 /*Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, 
 o método unshift(),que adiciona um elemento no começo do array, 
 o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, 
 o método slice(),que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, 
 o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o 
 método indexOff(), que encontra o index do valor que recebe como argumento em um array.*/


    let techs = ["html", "css", "js"]

   // adicionar um item no fim
    techs.push("nodejs")

   // adicionar no começo
    techs.unshift("sql")

   //remover no fim 
    techs.pop()


   //remover no começo 
    techs.shift()

   // pegar somentes alguns elementos no Array 
    console.log(techs.slice(1,3))

   // remover 1 ou mais itens em qualquer posição no array
    techs.splice(1, 2)

   // encontrar a posição de um elemento no array 
    let index = techs.indexOf('html')
     techs.splice(index, 1)

     console.log(techs)
   

  // console.log(techs)






