// class livingPlace {
//     constructor(floors, bathrooms, rooms) {
//         this.floors = floors
//         this.bathrooms = bathrooms
//         this.rooms = rooms
//     }
//     autodestruir() {
//         this.floors = 0
//         this.bathrooms = 0
//         this.rooms = 0
//     }
//     setnewfloor() {
//         this.floors +=1
//     }
//     getfloors() {
//         return this.floors
//     }
// }
// const casa = new livingPlace(2, 2, 2)
// // const depto = new livingPlace(1, 2, 3)
// // casa.autodestruir()

// casa.floors
// console.log(casa, getfloors())

//---------CHALLENGE---------------//
// class bankaccount {
//     constructor(){
//         this.balance = 0
//     }
//     addfunds(money) {
//         this.balance =+ money
//     }
// }

// const perro {
//     name: 'gunter',
//     come() {
//         return 'estoy comiendo'
//     }
// }
//NUEVO EJEMPLO
// class perro {
//     constructor(name, age= 3, legs= 4) {
//         this.name = name
//         this.age = 3,
//         this.legs = 4
//     }
// }

// class perro {
//     constructor(name, age= 3, legs= 4) {
//         this.name = name
//         this.age = 3,
//         this.legs = 4
//     }
// }
// const gunter = new perro('gunter')
// const prro1 = new perro('misha')
// const prro2 = new perro('lulu')
// const prro3 = new perro('ernesto')


//------------------>EJEMPLO<--------------------//
//----ejemplos echos por angel
// function factorial(numero) {
//     if (numero === 0) {
//         return 1;
//     } else {
//         return factorial(numero - 1) * numero;
//     }
// }
// console.log(factorial(8));
//--> debe de dar 40320.


//----------->EJEMPLO<---------------//
//---> aqui debe de dar 'ligero'

// let humor = 'liegro';
// console.log(humor);

// //-->aqui debe de dar oscuro
// humor = 'oscuro';
// console.log(humor)

//------->EJEMPLO<----------//
// let deudaluigi = 140;
// deudaluigi = deudaluigi -35;
// console.log(deudaluigi)
//-->te debe de dar 105

//------->EJEMPLO<----------//
// let uno =1, dos = 2;
// console.log(uno + dos)
//----> es igual a tres

//------->EJEMPLO<----------//
// let nombre = 'ayda'
// const saludo = 'Hola '
// console.log(saludo + nombre)
//----> Hola ayda

//------->EJEMPLO<----------//
// function trapecio(B, b, h) {
//     var area = ((B + b) / 2) *h;
//     return area;
// }
// console.log(trapecio(15, 12, 6));


//---------->CHALLENGE DE CUENTA DE BANCO Y TRANSFERENCIA<----------//
// class BankAccount {
//     constructor(name, initialAmount) {
//         this.userName = name
//         this.balance = initialAmount
//     }
//     // Get,  Set
//     getUserName(){
//       return this.userName
//     }
//     getBalance(){
//       console.log(`Your total amount is $ ${this.balance}.`)
//     }
//     //Operations
//     increaseBalance(amount){
//         this.balance += amount
//         console.log(this.balance)
//     }
//     makeTransfer(amount, userAccount){
//         const validation = this.helperBalance(amount)
//         if (validation) {
//           this.balance -= amount
//             const userName = userAccount.getUserName()
//             userAccount.increaseBalance(amount)
//             return `You now have $ ${this.balance}. Due to a deposit to ${userName}.`
//         } else {
//             return `You haven't enough resources.`
//         }
//     }
//     buy(concept, price){
//       const validation = this.helperBalance(price)
//       if (validation) {
//         this.balance -= price
//         return `You now have $ ${this.balance}. Due to a purchase of ${concept}.`
//       } else {
//         return `You have not enough money to continue with the operation.`
//       }
//     }
//     //Helper
//     helperBalance(amount){
//         if (this.balance < amount) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// const GunterBankAccount = new BankAccount('Gunter', 4005)

// const MiloBankAccount = new BankAccount('Milo', 5)

// GunterBankAccount.makeTransfer(2000, MiloBankAccount)
//----------->DE RECOMENDACION UTILIZAR PURAS CONSTANTES<----------------//
//------->seter's es para cambiar el nombre de la cuenta<--------------//


// const GunterBankAccount = new BancAccount('Gunter', 4005)
// const AngelBankAccount = new BancAccount('Angel', 10)

// GunterBankAccount.makeTransfer(3000, AngelBankAccount)

// console.log(GunterBankAccount.getBalance)
// console.log(GunterBankAccount)

// AngelBankAccount.buy('Gastos en General', 10)
// console.log(AngelBankAccount);

// console.log(AngelBankAccount.getBalance)

// let x = 500
// x = x + 300
//-------->FORMA MAS FACIL DE ESCRIBIRLO<-------------------//
// x += 300

//--------------->ejercicios<---------------//
//---------->EJERCICIO 1<-------------//
// const myPenguin = {
//     character: "Captain Cook",
//     origin: "Mr. Popper's Penguins",
//     author: "Richard and Florence Atwater",
//     presentation: function(){ return `Hola soy un pinguino y mi nombre es ${this.character}`}
// }

// console.log(`Hola soy un pinguino y mi nombre es ${myPenguin.character}`)

// myPenguin.puedeVolar = false

// console.log(myPenguin.puedeVolar)






//-------->EJERCICIO 2<------------//
class Human {
    constructor(name, lastName, maidenName, birthdate, age, gender, weight, height) {
      this.name = name;
      this.lastName = lastName
      this.maidenName = maidenName
      this.birthdate = birthdate
      this.age = age
      this.gender = gender
      this.weight = weight
      this.height = height
      this.RFC = ""
    }
    validateAge() {
      const ageValidation = this.edad >= 18
      const userName = this.name
      if (ageValidation) {
        return `Eres mayor de edad ${userName}`
      } else {
        return `No eres mayor de edad ${userName}, eres chavito.`
      }
    }
  
    setName(newName) {
      this.name = newName
    }
    getName() {
      console.log(this.name);
      return this.name
    }
  
    createRFC() {
      const lastNameFirst2 = this.vowelSlice(this.lastName, 2)
      const maidenNameFisrtLetter = this.maidenName[0]
      const nameFisrtLetter= this.name[0]
      const birthdateArray = this.birthdate.split("/")
      console.log(birthdateArray);
      this.RFC += (lastNameFirst2 + maidenNameFisrtLetter + nameFisrtLetter + birthdateArray[0] + birthdateArray[1] + birthdateArray[2]).toUpperCase()
  
      return this.RFC
    }
  
    //Takes the first two bowels in the given string
    vowelSlice(nameString, sliceLimit) {
      const upperString = nameString.toUpperCase()
      let payload = ''
      for (let i = 0; i < nameString.length ; i++) {
        if (
          upperString[i] === 'A' ||
          upperString[i] === 'R' ||
          upperString[i] === 'I' ||
          upperString[i] === 'O' ||
          upperString[i] === 'U'
        ) {
          payload += nameString[i]
        }
      }
      return payload.slice(0, sliceLimit)
    }
  
    getIMC() {
      this.weight / this.height
    }
  }
  
  const Human1 = new Human('Angel', 'Robles', 'Castañon', '96/08/06' ,24, 'M', 102, 1.89)
  
  Human1.getName()
  
  console.log(Human1.createRFC(), Human1)













// class cuenta {
//     constructor(titular, cantidad, estado, ingresar, retirar){
//         this.titular = titular
//         this.cantidad = cantidad
//         this.estado = estado
//         this.ingresar = ingresar
//         this.retirar = retirar
//     }

// }



