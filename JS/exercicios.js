 // 1. Declare umna variavel de nome Weight

 let weight = 60
 
 // 2. Que tipo de dado é variavel acima? number

 // para descobrir use 
 console.log(typeof weight)


 /*
  3. Declare uma variavel e atribua valores para cada um dos dados:
 
  * name: String 
  * age: Number (integer)
  * weight: Number (float)
  * isSubscribed: Boolean 
  
*/

 let name = "Veneranda"
 let age = 57
 let Weight = 70.5
 let isSubscribed = true 

 /* 
 4. A variavel student abaixo é de que tipo de dados ? 

 4.1 Atribua a ela as mesmas proprieades e valores do exercicio 3.

 4.2 Mostre no console a seguinte mensagem:
  
 <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weigh> pelos valores de cada propriedade do objeto 
 
 */

  let student = {
    name:"Veneranda",
    age: 57,
    Weight:70.5,
    isSubscribed: true
  }; 

  console.log(student)

  console.log(`${student.name} com idade ${student.age} anos, pesa ${student.Weight} kg.`)

  /*
   5. Declare uma variavel do tipo Array, de nome students2 e atribua a ela nenhum valor, ou seja, somente o Array vazio.*/

   // let student2 = []

    /* 6 .Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. 
    (não copiar e colar objeto, mas usar o objeto criado e inserir ele no Array)*/

     student2 = [
       student
    ]

    console.log(student2)

    // 7. coloque no console o valor da posição zero do Array acima 

   // console.log(student2 [0])

    // 8. crie um novo student e coloque na posição 1 do Array student2
    
    const Carol = {
      name: "carol",
      age: 25,
      weight: 66.5,
      isSubscribed: true
    }


    student3 = [
      student,
      Carol
    ]
      
   // essa outra forma de fazer = student2 [1] = Carol

   console.log(student3)

   // Responda a quetão abaixo sem rodar o código 
   // console log 
   //var a = 1

   console.log(a)
   var a = 1 
  
   //undefined pq não foi atribudi valor 