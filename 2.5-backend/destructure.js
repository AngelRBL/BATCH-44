//Archivo con proposito academico.

//El codigo para instalar la carpeta de express es el sig:
// npm i express

//---> ESTO ES DESTRUCTURACION<--//

//PRINCIPALMENTE SIRVE PARA:
//-1. Importa modulos de JS
//-2. Escribir codigo simple y corto
//--> ejemplo<--//
const perro = {
    name: 'Gunter',
    age: 2,
    bark() {
        return 'ladrando ando'
    }
}
perro.name

perro['name']

const {name} = perro

console.log(name)

const name2 = perro.name
const age = perro.age
const bark = perro.bark

const frutas = ['mange', 'kiwi', 'platano']

const [fruta1, fruta2, fruta3]

