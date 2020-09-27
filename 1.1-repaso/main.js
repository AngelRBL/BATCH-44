// const texto = "este es un texto guardado en la constante texto"
// var number = 9807
// let boolean = true

// let variable2 = number

// const user1 = {
//     name: "angel",
//     age: 24,
//     eat: () => 'Estoy comiendo',
//     addyear: function () {
//         this.age += 1
//         return 'hola'
//     }
    
// }
// console.log(user1.eat());
// console.log(user1.addyear());
// console.log(user1.addyear());
// console.log(user1.addyear());
// console.log(user1.addyear());
// console.log(user1.age);


// // console.log(variable2 - 9000)
// // console.log(typeof (2 + "2"))

// user1.active = true
// console.log(typeof user1);
// const arr1 = [1,2,3,4,5]

// let hello = 'helo'
// {
// let scopedVariable = 'hola soy una variable'

// console.log(hello);
// console.log(scopedVariable);

// }
// let arr1 = [1,2,3,4,5]

//-------OPERADORES LOGICOS------------------//
// console.log('1' === '1');
// console.log('1' !== '1');


// console.log('1' <= '1');
// console.log('1' >= '1');
// console.log('1' < '1');
// console.log('1' > '1');

// let var1 = 100
// let var2 = 200
// let var3 = 500

// console.log(var1 === var2 && var2 > var3) //ampersand
// console.log(var1 === var1 || var2 > var3) //pipe

// let saludo = prompt('Ingresa un saludo')

// //----SALUDO POR DE FECTO SIN PONER NADA EN EL PROMPT
// const customMsg = saludo || 'saludo por defecto'

// console.log(customMsg)

// console.log(var1 === var1 && var3 > var2 || (var1 === var2 && var2 > var3))

// let var1 = 100
// var1 * 3

// console.log(var1)


// let var1 = 100
// let var2 = 200
// console.log(var1 + var2)
// var1 = var1 + var2
// var1 += var2
// console.log(var1;)

// i = 0
// i += 1
// i += 1
// i += 1
// i += 1
// // i++ //---solamente cuando estamos haciendolo por 1
// i--
// console.log(i);


// let var1 = 2
// var1 *= 2
// var1 /=4

// console.log(var1);

// let number = arr1[0], number1 = arr1[1], number2 = arr1[2] number3 = arr1[3]
// console.log(number);


// let arr1 = [1, 2, 3, 4, 5]
// let i = 0
// i++
// i++
// i++
// i++
// i++
// console.log(arr1[i]);
// let animals = [
//   {
//     name: 'gunter',
//     age: 1,
//     favoritefood: 'sausages',
//   },
//   {
//       name: 'robin',
//       age: '1',
//       favoritefood: 'fishes'
//   },
//   {
//       name: 'misha',
//       age: 3,
//       favoritefood: 'bannana'
//   },
// ]


// for (let i = 0; i < 5; i++){
//     console.log(animals[i]);
// }

//---------este modifica el array original
// animals.forEach(animal => console.log(animal))

// animals.map(animal => console.log(animal))

// animals.reduce

// //----Este hace un filtrado por nombre
// const filteredAnimals = animals.filter(animal => animal.name === 'robin')
// console.log(filteredAnimals);

// let animals = [
//     1,
//     2,
//     3
// ],
// console.log(typeof animals);


// //---En un espacio de memoria guarda una llave que son cada valor
// //----Un hash table es una estructura de dato
// const obj1 = {
//     name: 'gunter',
//     age: 1,
//     favoritefood: 'sausages'
// }

//---Estas son dos formas de accerder a un array
// console.log(obj1['name holas'])
// console.log(obj1.name)
//----------

// const arr2 = {
//  '0': {
//         name: 'gunter',
//         age: 3,
//         favoritefood:'sausages'
//       },
//  '1': {
//      name:'robin',
//      age: 1,
//      favoritefood:'BANNANA'
//     },
// }
// let animals = [
//   {
//     name: 'gunter',
//     age: 1,
//     favoritefood: 'sausages',
//   },
//   {
//       name: 'robin',
//       age: 1,
//       favoritefood: 'fishes'
//   },
//   {
//       name: 'misha',
//       age: 3,
//       favoritefood: 'bannana'
//   },
// ]

// console.log(animals);
// animals.push({
//     name: 'misha2',
//     age: 1,
//     favoritefood: 'bannana'
// }
// )


//----Este es para rellenar el lugar vacio
// const emptyobj ={}
// emptyobj.age =23
// console.log(emptyobj);

// function fun1(_ , parametro2, parametro3) {
//     // return parametro1;
//     console.log(parametro2)

// }

// function fun2(_ , parametro2, parametro3) {
//     // return parametro1;
//     console.log(parametro2)

// }
// function fun3(_ , parametro2, parametro3) =>  {
    
// }
// fun1(null, 234523 , null, [1, 2, 3, 4, 5])

// const perro ={
//     name: 'gunter',
//     age: 1,
//     favoritefood: 'sausages',
//     fetch(){
//         return
//         console.log('traje la bola')

//     }
// }
// console.log(perro.fetch())

const saludar =(parametro1 = 'saludo default')  => {
    return parametro1
}
console.log(saludar('hola'))

//--------ESTE ES SALUDO POR DEFAULT
saludar()

//-----ESTE OBJETO ES PARA VARIAS FUNCIONES
//--Math
