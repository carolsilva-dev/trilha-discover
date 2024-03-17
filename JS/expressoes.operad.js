  // Expressoes e Operadores

  //expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:

  // let number 

  //Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.


  /* - Expressions 
   - Operators

     binary 
     unary
     ternary


     Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

     let number; = 1

      (function(){
    console.log('alo')
     })()

     Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, 
      passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.*/


    


      /*  new 

      A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto 
      usando as funções construtoras que temos por padrão no JavaScript.*/



       let namee = new String('Mayk')
       namee.surName - "Brito"
       let age = new Number(23)
       console.log(namee.surName, age)
      

      /*let name = new Date('2020=')
      console.log(date._proto_)*/


      
        

      /* operadores unarios :
        typeof 
        delete*/ 

        /*Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, 
        e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.*/

        const person = {
         name: 'Mayk',
         age: 25,
        }

        delete person.age

        console.log(person)








 