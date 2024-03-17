// const events = require('events')  para olhar o que tem no events  
// console.log(events)
// on = serve para ouvir eventos sempre, use once para ouvir uma unica vez 


const { EventEmitter } = require('events')
const eventos = new EventEmitter()

eventos.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

eventos.emit('saySomething', "Carol")
eventos.emit('saySomething', "Marcelo")
eventos.emit('saySomething', "Nelio")



