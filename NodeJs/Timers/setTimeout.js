 
/*Também conhecido como função de retorno, o Callback cria regras dentro de outras funções
para que sejam utilizadas no futuro. Normalmente, ele age de forma assíncrona, ou seja, 
não é executado imediatamente. A aplicação continuará rodando enquanto espera 
o momento certo da sua execução*/

// setTimeout rodar uma função depois de x milissegundos

const timeOut = 4000
const finished = () => console.log('olaaa depois de 4 segundos')


setTimeout(finished, timeOut)
console.log('Mostrar') 