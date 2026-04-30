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