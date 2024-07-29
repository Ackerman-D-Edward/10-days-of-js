let pets = [
    {name: "Lancelot", species: "Cat", age: 2},
    {name: "Gawain", species: "Dog", age: 3},
    {name: "Merlin", species: "Cat", age: 8}
]


console.log(pets.push({name: "Modred", species: "Dog", age: 1}))
let ourTest = pets.map(nameOnly)

function nameOnly(x) {
    return x.name
}

let dogs = pets.filter(onlyDogs)

function onlyDogs(x){
    return x.species == "Dog"
}

function onlyBabies(x) {
    return x.age < 3  
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)
console.log(babyDogNames)