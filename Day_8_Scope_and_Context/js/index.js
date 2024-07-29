//1ª Parte - Escopo
let myName = "Edward"

function amazingFunction() {
    if (2 + 2 ==4){
        let myName = "Edward Ackerman"
    }
}

amazingFunction()
console.log("Dentro do escopo global temos", myName)

//2ª Parte - Contexto

let edward = {
    nome: "Edward",
    sobrenome: "Manzambi",
    Carros(){
        function funcaoNumMetodo() {
            console.log(this)
        }
        funcaoNumMetodo()
        console.log(this.nome + " " + this.sobrenome + " está dirigindo o seu carro.")
    }
}

edward.Carros()

function respirar() {
    console.log(this.nome + " " + this.sobrenome + " está respirando.")
}

respirar.call(edward)