// Herança

/* Pais e filhos 
Objetos podem herdar, ou estender, caracteristicas bases
Uma cópia de atributos e métodos de outa classe */ 

class Veiculo {
  rodas = 4

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e métodos do pai 
        this.rodas = 2
    }
}