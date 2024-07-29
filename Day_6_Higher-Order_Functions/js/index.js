/* Part 1
document.addEventListener("click", ourAmazingFunction)


function ourAmazingFunction() {
    alert("Obrigado por clicar.")
}*/

/* funcão simples de multiplicação
function doubleMe(x){
    return x * 2
}
*/

/* Part 2
function createMultiplier(multiplier){
    return function (x) {
        return x * multiplier
    }
}

let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3)
let quadrupleMe = createMultiplier(4)

document.write(quadrupleMe(45))
*/

// Part 3
let myColors = ['vermelha', 'laranja', 'amarela', 'Verde']

myColors.forEach(saySomethingNice)

function saySomethingNice(color) {
    document.write("Essa cor " + color + " é uma boa cor.<br>")
}