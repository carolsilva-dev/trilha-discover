// clearTimeout cancelar um timeOut, cancela a função timeOut da aplicação

const timeOut = 4000
const finished = () => console.log('olaaa depois de 4 segundos')


let timer = setTimeout(finished, timeOut)
clearTimeout(timer)