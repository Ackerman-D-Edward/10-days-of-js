function greet(theName, favColor){
    alert("Hello, my name is " + theName + " and my favourite color is " + favColor + ".")
}

// greet('Edward', 'Yellowgreen')
// greet('Ackerman', 'Gray')

function tripleMe(x){
    return 3 * x
}

let myFavouriteNumber = tripleMe(12)
// alert(myFavouriteNumber)

function pessoa(nome, sobrenome, idade) {
    return "Eu sou " + nome + " " + sobrenome + ", e tenho " + idade + " de idade."

}
let alguem = pessoa('Eduardo', 'Manzambi', "22")
console.log(alguem)
