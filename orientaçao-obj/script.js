// Estrutural 

let altura = 50 
let largura = 60 

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

 // Orientando a Objetos 

  class Poligno {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
  }

   // Criar o objeto 

   let poligono = new Poligono(50, 60)
   console.log(poligono)


   // Estruturado 

   var valorHora = 50 
   var tempoEstimado = 20 
   var desconto = valorHora * tempoEstimado * (10 / 100)
   var custoEstimado = valorHora * tempoEstimado - desconto 
   console.log(custoEstimado)

   // Orientação OBJ

   const job = new Job()
   job.valorHora = 50
   job.tempoEstimado = 20
   job.desconto = 10 
   const custoEstimado = job.calcularEstimativa()
   console.log(custoEstimado)

