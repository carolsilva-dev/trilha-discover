/*Funções: são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } 
e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.*/



// criar um aplicativo de frases motivacionais 

// declaration - declaração da função 
// function statement

  function criandoFrases () {
    console.log ('Estudar é muito bom')
    console.log ('Paciencia e persistência')
    console.log ('Revisão é a mãe do aprendizado')
  }

  // executar a função 
  // rodar, chamar, invocar
  // execute, run, call, invoke 

  criandoFrases()
  criandoFrases()
  criandoFrases()
  criandoFrases()

  console.log('fim do programa')


  function primeiraFunção() {
    console.log("Hello World das funções")
  }
  
  primeiraFunção();

  function dizerNome (nome) {
  console.log("o nome é: " + nome);
  }

  dizerNome("Carol")
  dizerNome("Marcelo")
  dizerNome("Veneranda")


  //Declarando a função dentro da variavel 
  // OBS: sum = somar 
  // function anonymous
  let total = 25

  // parâmetros:
  /*Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. 
  Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, 
  eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.*/

  const sum = function(number1, number2) {
   let total = number1 + number2
   return total
  }

  let number1 = 34
  let number2 = 25 

  console.log(`o numero 1 é ${number1}`)
  console.log(`o numero 2 é ${number2}`)
  console.log(`a soma é ${sum (number1, number2)}`)

  console.log(total)


  

  function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
  } 
   
  /*Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado,
   parando assim a execução da função e mandando o valor para onde a função foi chamada.*/

   
  const copo = fazerSuco ('banana e ', 'maça')
  console.log(copo)

  /*função scope:
  (Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função)
  */

  let subject = 'create video'

  function createThink(subject) {
    subject = 'study'
    return subject
  }

  
   console.log(createThink(subject))
   console.log(subject)

   /* function hoisting:
   (O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, 
   pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.)
   */
   
   /* sayMyName()

    function sayMyName() {
    console.log('Mayk')
    }*/

     /*arrow function:
      (Também podemos escrever funções expression de uma maneira mais compacta, desta maneira:
     () => { código a ser executado }, chamada de Arrow Function.)*/

     /* const sayMyName = () => {
      console.log('Mayk')
      }

     sayMyName()*/

    //callback function ( função que esta sendo passada para outra funão como parametro)
    
    /* function sayMyName(name) {
      console.log('antes de executar a função callback')

      name()

      console.log('depois de executar a callback')
    }

     sayMyName(
      () => {
        console.log('estou em uma callback')
      }
     )*/

     /*funções construtoras:
     Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, 
     todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, 
     por exemplo:*/

      /* Function() constructor

      *expressão new
      *criar um novo objeto
      *this keyword
      */

       function person(name) {
       this.name = name
       }

        const mayk = new Person ("Mayk")
        const joão = new Person ("João")

        console.log(mayk)

        console.log(joão)

       