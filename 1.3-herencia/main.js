// class pet {
//     constructor(name, favoritefood) {
//         this.name = name
//         this.favoritefood = favoritefood
//     }
//     eat(food) {
//         return `Aca echando un emparedado de ${food}`
//     }


// }

// const gunter = new pet('gunter', 'sausages')

// class dog extends pet {
//     constructor(name, favoritefood, color) {
//         super(name, favoritefood)
//         this.color = color   
//     }
//     ladrar() {
//         return `no pos guauu!`
//     }
// }
// const milo = new dog('milo', 'banana', 'black')


// const feedpet = dog(pet, food = `acelgas`) => {
//     console.log(pet.eat(food))
// }


// feedpet(gunter, 'croquetas')

//------------------>CHALLENGE<------------------//

//------------------->CINE.JS
class cine {
    constructor(filmName, runtime) {
        this.runtime = runtime
        this.filmName =filmName
    }
    getfilmName(){
        return this.getfilmName
    }
    getruntime(){
        return this.getruntime
    }
}
//---------->documentary.js
class documentary extends cine {
    constructor(documentaryName, runtime, subGenre){
        super(documentaryName, runtime)
        this.subGenre = subGenre
    }
}
//------->largometraje.js
class largometraje {
    constructor(largoMetrajeName, Time){
        this.largoMetrajeName = largoMetrajeName
        this.Time = Time
    }
    getname(){
        return this.largoMetrajeName
    }
    filmProjection(cine){
        return `you have watching ${cine.getfilmName} with a ${cine.getruntime()} hours running time. Enjoy the movie`
    
    }
}

//----->INDEX
const Joker = new cine('Joker', 180)
console.log(Joker)

const Earth = new documentary('= El Gran tiempo', 50, 'nature')
console.log(Earth)

const tiempoencasa = new largometraje('Jackie en casa', 32)
console.log(tiempoencasa)