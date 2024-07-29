/* Funções anônimas
document.addEventListener("click", function () {
    alert("Obrigado por clicar")
})
*/

/* ARROW functions
document.addEventListener("click", ()=> {
    alert("Obrigado por clicar")
})*/

/* => permite que o nosso código esteja mais limpo
document.addEventListener("click", ()=> alert("Obrigado por clicar"))
*/

/* Esse metodo deixa ainda mais limpo

let meusNumeros = [10, 500, 2000]
let numerosDuplicados = meusNumeros.map(x => x * 2)

console.log(numerosDuplicados)*/

/* Functions hoisting
cool()
function cool() {
    console.log("This iss super cool.")
}*/

// Template literals & Semicolons -> sçao os ponto e vírgulas(;), permite mpostrar ao js o termíno de uma linha de codigo

let meuNome = "Edward";console.log(`Olá, o meu nome é ${meuNome} e o céu está azul`)



