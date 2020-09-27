const express = require('express')

const { request, response } = require('express')

const app = express()

const PORT = 5000

app.get('api/saludo', (request, response) => {
    response.send({saludo: 'Hola'})
})

app.get('api/despedida' , (request, response) => {
    response.send({despedida: 'Adios'})
})

app.get('/pet:name/:owner', (req, res) => {
    const { name, owner } = req.params
    res.send(`Soy ${name} y soy Dueño de ${owner}`)
})


app.listen(PORT, () => {
    console.log(`Aplicacion inicializada en el puerto ${PORT}`)
})
