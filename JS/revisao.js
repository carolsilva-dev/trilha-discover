

// console 

console.error("este é um erro")
console.warn("este é um aviso")
console.log("Revisao de js")

// variaveis (variaveis do tipo VAR podem ser atribuidos novos valores fora do  escopo)

var x = 10 
console.log(x)
var x = 30
console.log(x)


//maneiras modernas 
// variavel let só pode ser atribuido valor novamente em um novo escopo 


let y = 15   // escopo global 
const z = 20


if (1) {
    let y = 55 // escopo local 
    console.log(y)
}

console.log(y)