//-------->Express es un framework que se usa en javascript<----------//
//--->Sirve para api, app movil, app web.


const express = require('express')
const { request, response } = require('express')

const app = express()

const PORT = 3000
// EL .get solo recibe informacion
//Esto se llama endpoints
//los endpoints solo activan funciones
app.get('/api/saludo' , (request, response)=> {
    response.send({saludo: 'Hola'})
}) 
app.get('/api/despedida' , (request, response)=> {
    response.send({despedida: 'Adios'})
}) 
//Parametro en URL

app.get('/mascota/:name', (req, res) => { 
    const { name } = req.params
    res.send(name)
})

//Otro ejemplo de Parametro en URL

app.get('/mascota/:name', (req, res) => { 
    const { namen, owner } = req.params
    res.send(`Dueno de ${name} es ${owner}`)
})

//Query en URL
//es un comando que sirve solo para consultar cosas
app.get('/pet/search', (req, res) => { 
    res.send(search)
})

//Otro ejemplo de Query

app.get('/pet/search', (req, res) => { 
    const { search_query } = req.query
    res.send(search_query)
})


//CRUID
//Create post
//Read get
//Update put y patch
//Delete delete

//Este crea un host para poder checarla en el navegador
app.listen(PORT, () => {
    console.log(`Aplicacion inicializada en el puerto: ${PORT}`);
})

//-----objeto dividodo por array
const perro = {
    name: 'milo',
    age: 2
}
console.log(object.entries(perro))
// se vuenve un amatriz
//--.forEach 

