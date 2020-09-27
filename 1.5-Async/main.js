
// const callstack = []
// const oredenSuperior = (callback) => {
//     return callback()
// }
// const funX = () => {
//     return 'hola'
// }
// setTimeout(() => {
//     return 'hola'
// },4000);
//------>
// oredenSuperior(funX)
// funX()
// console.log(1)
// heap | oredenSuperior

//------------>EJEMPLO<--------------//


// const warn = (msg) => {
//     console.log(callback)
//     console.log(msg)
// }
// const log = (msg) => {
//     console.log(callback)
//     console.log(msg)
// }
// const error = (msg) => {
//     console.log(callback)
//     console.log(msg)
// }

//---->high Order function o funcion de orden superior
// const HOF = (callback, msg) => {
//     console.log(ordenSuperior)
//     return callback(msg)
// }

//----->ESTO SIRVE PARA CREAR UN BUCLE O CICLO INFINITO<-----------//
// HOF(error, 'esto es un mensaje de orden superior')
// for(let i= 0; i < 9999; i ++);

//------------------->EJERCICIOS<--------------//
//EJERCICIO 1 

// const value = (value) => {
//     console.log(value)

// }

// const HOF = (callback,value) => {
//     return callback(value)
// }
// HOF(value)



// EJERCICIO 2
// const typeofVariable=(variable)=>{
//     console.log(typeof(variable))
// }
// const HOF2 = (callback, variable) =>{
//     return callback(variable)
// }
// HOF2(typeofVariable,35)

// EJERCICIO 3
// const  suma= (a,b) =>{
//     console.log(a+b)
// }
// const  resta= (a,b) =>{
//     console.log(a-b)
// }
// const  multiplicacion= (a,b) =>{
//     console.log(a*b)
// }
// const HOF3 = (callback, a, b) =>{
//     return callback(a,b)
// }
// HOF3(suma, 3,6)

// EJERCICIO 4
// const  Upper= (msg) =>{
//     console.log(msg.toUpperCase() )
// }
// const  Lower= (msg) =>{
//     console.log(msg.toLowerCase())
// }
// const HOF4 = (callback, msg) =>{
//     return callback(msg)
// }
// HOF4(Lower, "HOLA A TODOS")

//-----------------------------------//
//------------->CHALLENGE<------------//
const animalitos = [
    { nombre: 'carlitos'  , especie: 'conejo' },    // 0
    { nombre: 'esteban'   , especie: 'perro' },     // 1
    { nombre: 'fabiruchis', especie: 'tortuga'},   // 2
    { nombre: 'anita'     , especie: 'gato' },      // 3
    { nombre: 'miranda'   , especie: 'conejo' },    // 4
    { nombre: 'lucas'     , especie: 'conejo' },    // 5
    { nombre: 'Horacia'   , especie: 'tortuga' }
]
// const filteredAnimals = animalitos.filter(animalitos => animalitos.especie === 'conejo')
// console.log(filteredAnimals)


const mascotas = [
    { nombre: 'Bimbo',    especie: 'Hamster', comidasFavoritas: ['Semillas', 'Nueces'] },
    { nombre: 'Ludovico', especie: 'Perro',   comidasFavoritas: ['Huesos', 'Jamon'] },
    { nombre: 'Pavlov',   especie: 'Perro',   comidasFavoritas: ['Croquetas', 'Pollo'] },
    { nombre: 'Chancla',  especie: 'Gato',    comidasFavoritas: ['Atun', 'Pescado'] },
    { nombre: 'Don Pepe', especie: 'Perico',  comidasFavoritas: ['Semillas'] }
];

const mascotasName = mascotas.map(mascotas => console.log(mascotas))