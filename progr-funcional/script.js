// Programação Imperativa vs Declarativa

// função que eleva o numero ao quadrado 

//Imperativo: faça da seguinte forma 


let number = 2 

function square() {
    return number * number
}

 number = square()

 /* O código é pensado e gerado em sequençia 
 O código é pensado como um passo-a-passo, como uma receita de bolo 
 Uma coisa depende da outra 
 O estado de um dado é alterado constantemente causando mutações nas variáveis
 Orientaçao a Objetos é um tipo de paradigma imperativo 
 */


 
 // Declarativa:  O que é para fazer e não como fazer 

 const square = n => n * n
  
 /*
  O código é gerado para fazer algo, não importa como 
  O que fazer e não como fazer 
  Não há nescessidade de um passo a passo no código 
  Programação funcional é um tipo dr paradigma declarativo
  */