// setInterval irá rodar uma função N vezes 
// depois de x milissegundos 

const timeout = 1000
const checking = () => console.log('OK')

setInterval(checking, timeout)