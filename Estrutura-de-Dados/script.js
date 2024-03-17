// O que é estrutura de dados 

/* Uma maneira de organizar e ordenar informações como textos, numeros, booleanos, etc e registrá-los na 
 memoria do computador
 Organizar dados (informações) textos, números, booleanos 
 Como estão registrados na memória  */

 // Gerenciamento de dados 

 /* Estrutura de dados tem aver com a gestão das informações da aplicação 

 Para esse gerenciamento, podemos dividir em 3 etapas 

 1: Modelar a estrutura 
 2: Dar vida a estrutura (instanciar essa estrutura)
 3: Criar as funcionalidades dessa estrutura 
 EX: inserir, excluir, buscar, exibir, contar */

// Arrays :

/*
Acesso pelo index
Respeita a ordem de inserção dos elementos 
Aceitas valores duplicados 
Dependendo do tamanho do array, para encontrar e/ou deletar um elemento, será necessário um uso 
maior de performance. */ 




// A indexação (index) começa pelo número 0
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]

console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// Acessar o tamnho do array
console.log(pilotos.length);

// iterável
for (let piloto of pilotos) {
 console.log(piloto)
}


// Adicionar elemento 
pilotos.push("Alonso");
console.log(pilotos)

// Encontar elementos 

const senna = pilotos.find( piloto => piloto === "Senna")
console.log(senna) 

// deletar um elemento 

pilotos.splice(1, 1)
console.log(pilotos)


// Matriz 

// significa um Array, dentro de outro Array, podemos ter muitos níveis 

const students = [["Joseph", 23,"MG" ], ["Carol", "25", "RS"], ["Marcelo", "24", "RS"]]
console.log(students[0] [1])
console.log(students [1] [0])


// Stack a tradução é = pilha

// linear, u, após o outro 
// o último a entrar é o primeiro a sair 

// Métodos fundamentais

/* 
- push(): adicionar um elemento à pilha 
- pop(): remover o elemento do topo da pilha
- peek(): obter o elemento do topo da pilha
-size(): obter o elemento do topo da pilha
*/

// Passo 1: Modelando 

class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }


 push(value) {
    this.top++
    this.data[this.top] = value
    return this.data;
 }

 pop () {
    if(this.top < 0) return undefined
    const poppedTop = this.data[this.pop]
    delete this.data[this.top]
    return poppedTop;
 }


 peek () { 
    return this.top >= 0 ? this.data[this.top] :
    undefined
 }
}

// Passo 2: Utilizando 
const stack = new Stack 

// adicionar dados 
stack.push("learning")
stack.push("data")
console.log(stack.pushstru("structures"))
console.log(stack.peek())

// remover 

stack.pop()
console.log(stack.pop())

console.log(stack.peek())



