let animals = [
    {
      name: 'Gunter',
      age: 7,
      favoriteFood: 'Sausages'
    },
    {
      name: 'Robin',
      age: 4,
      favoriteFood: 'Fishes'
    },
    {
      name: 'Misha',
      age: 3,
      favoriteFood: 'Banana'
    },
    {
      name: 'Misha',
      age: 3,
      favoriteFood: 'Banana'
    }
  ] 
  //-------Este sirver para filtar por cierta area a palabra
  const fileteredAnimals = animals.filter((EachObject) => EachObject.age === 3 )
  console.log(fileteredAnimals)
//-----------------------//
const mappedAnimals = animals.map(animal =>{
    if(animals.age > 3){
        return animal
    }else{
        return 'hola'
    }
})
