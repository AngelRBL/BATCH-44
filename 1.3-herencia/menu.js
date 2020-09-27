class menu {
    constructor(Menu, Precio, Tiempo,Nombre) {
        this.Menu = Menu
        this.Precio = Precio
        this.Tiempo = Tiempo
        this.Nombre = Nombre
    }
    getmenu(){
        return this.Menu
    }
    getprecio(){
        return this.Precio
    }
    gettiempo(){
        return this.Tiempo
    }
    getnombre(){
        return this.Nombre
    }
}
class pedido extends menu{
    constructor(Menu, Precio, Tiempo, Nombre, Entrega){
        super(Menu, Precio, Tiempo, Nombre)
        this.Entrega = Entrega

    }
    Info(){
        return `su entrega ha sido confirmada`
    }
}
const pedido1 = new menu('costillas', '$178', '55 min', 'Andres')
console.log(pedido1)

const info1 = new pedido('paquete familiar', '$358', '45 min', 'Adrian', 'el conductor es Alonso')
console.log(info1)

class Professor {
    constructor(subject){
        this.subject = subject
    }
    getSubject(){
        return `I teach ${this.subject}.`
    }
    getAverageGroupGrade(grades){
        const sum = grades.reduce((accumulator, currentGrade) => accumulator + currentGrade)
        const result = sum / grades.length
        return `The average perform of my students is ${result}`
    }
}
class PhysicsProfessor extends Professor {
    constructor(experience, subject = "Physics", ){
        super(subject)
        this.experience = experience
    }
    getExperience(){
        return `I have ${this.experience} years of experience.`
    }
}
class MusicProfessor extends Professor {
    constructor(age, subject = "Music"){
        super(subject)
        this.age = age
    }
    getAge(){
        return `I'm ${this.age} years old.`
    }
}
// const new1 = new Professor('Spanish')
// console.log(new1)

// const new2 = new PhysicsProfessor('2',)
// console.log(new2)
// const new3 = new MusicProfessor('24')
// console.log(new3)