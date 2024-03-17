 // Aqui eu tenho um comentario em linha 

 /* Aqui eu tenho um comentario multi linha
 o cód: abaixo escreve uma mensagem*/

 /* String 
 * cadeia de caractres p/ escrever textos 

     " "// aspas duplas
     console.log("meu teste 'assim' ")  para utilizar aspas para dar enfase na escrita por exemplo
     dentro de aspas duplas use aspas simples.


     '' // aspas simples 
       
     console.log('meu teste "assim" ')


     `` // template literals ou template strings  (para utilizar interligado com variaveis) 
     /*
        nome = carol
        console.log('meu nome é ${nome}'),
        meu nome é: carol
    */

/* números 

33 // inteiros 
12.5 // reais - float
Nan // Not a number 
Infinity // infinito 
*/


/* 
 Boolean (tem apenas 2 valores)

 true // verdadeiro 
 false // falso 
 */


 /* 
   No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos.
   A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.

  undefined // indefinido  (não existe)

  null // nulo, objeto que não possui nada dentro , diferente de indefinido (existe mas não tem valor algum ).
  */
 
   
  /* Object:O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { },
   atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.
  * Objeto
  * propriedades / Atributos 
  * Funcionalidades / Métodos
   
   { propriedade: "valor" }
   */

   const person = {
    name: "Nelio",
    age: 53,
    weight:88.6,
    isAdmin: true
   }

   console.log(`${person.name} tem ${person.age} anos`)
   
  /* console.log({
    name: "name",
    idade: 36
   })*/


   /* O tipo de dados Array:ou vetor
     também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] ,
    por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .


   Array (vetores)
   *uma lista 
   *agrupamento de dados 
  */

   /* console.log([
        "Leite",
        "Ovos",
        "Batatas"
    ])*/

    const animals =[
        'Lion',
        'Monkey',
        'cat'
    ]
     
    console.log(animals)


    /* Conforme o ECMAScript standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados:
     
     Data types 

    * Primitive / primitive value 
    * Structural 
    * Structural Primitive
     
     ## Primitivos ( valores imutaveis, não sofrem alteração)

     * String 
     * Number 
     * Boolean
     * undefined 
     * Symbol
     * Bignt 
      
     ## Estruturais 

     * Object 
      * Array 
      * Map
      * Set
      * Date 
      * ... 
     *Function 

     ## Primitivo Estrutural / Strutural Root Primitive 

     * null 
     
     */



  


 