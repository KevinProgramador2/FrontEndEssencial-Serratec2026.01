let hora = 14;

if (hora < 12) {
    console.log("bom dia")
} else if (hora < 18) {
    console.log("boa tarde")
} else {
    console.log("Boa noite")
}

function teste() {

}

const multiplicar = (a, b) => {
    return a * b
}

multiplicar(5, 5)
console.log(multiplicar(4, 4))


const carro = {
    marca: "toyota",
    modelo: "Corolla",
    ano: 2024,
    buzinar: function () {
        console.log("bibi")
    }
}


let alunos = [
    {
        nome: "João",
        nota: 8.5,
        bolsista: false
    },
    {
        nome: "Ana",
        nota: 7.5,
        bolsista: false
    },
    {
        nome: "Beto",
        nota: 9.0,
        bolsista: false
    },
    {
        nome: "Carla",
        nota: 6.5,
        bolsista: true
    }
]


// Map (Criar um novo array de nomes)
const nomes = alunos.map(aluno => aluno.nome.toUpperCase())
console.log("Nomes: ", nomes)

// Filter (Cria um novo array apenas com quem passou)
const aprovados = alunos.filter(aluno => aluno.nota >= 7)
console.log("Aprovados: ", aprovados)

// Reduce (Reduzir os valores do array em um único valor)
const soma = alunos.reduce((acc, atual) => acc + atual.nota, 0)
const media = soma / alunos.length
console.log("Média: ", media)


