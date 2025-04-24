class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`;
    }
}

// Instanciando o carro
const carro = new Veiculo("Toyota", "Corolla", 2022);

// Instanciando a motocicleta
const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);

// Exibindo as informações
console.log("Detalhes do Carro:\n", carro.exibirDetalhes());
console.log("\nDetalhes da Motocicleta:\n", motocicleta.exibirDetalhes());
