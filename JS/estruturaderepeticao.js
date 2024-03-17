// For:

//A estrutura de repetição for tem a seguinte sintaxe:

//For(inicialização de uma variável; condição de continuação para o loop; expressão final)


for(let i = 1; i <= 10; i++) {
  console.log(i)
}




 for(let a = 100; a > 0; a--) {
    if(a === 60){
        break;
    }
    console.log(a)
 }



  // While (enquanto):

   let y= 1000
    while(y > 5 ) {
        console.log(y)
        y /= 2
    }


    // For of:

    let name = 'Carol'
    let names = ['Marelo', 'veneranda', 'nelio']


     /* for(let char of name) {
        console.log(char)
     }*/


     for(let name of names) {
         console.log(name)
     }


     // For in:

     let person = {
        name: 'Carol',
        age: 25,
        weight:67
     }
      
     for(let property in person) {
        console.log(property)
        console.log(person[property])
     }