
// Process: é um objeto que esta falando sobre o processo que esta rodando no Node
// // Lista de argumentos
 //console.log(process.argv)

// console.log('Seu nome é', process.argv[2] + ' ' + process.argv[3])

const firstName= process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)