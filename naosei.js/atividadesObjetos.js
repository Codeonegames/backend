//01
let ap = {
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    Andar: 7
}

console.log (ap);
console.log (`${ap.tipo} com ${ap.quartos} quartos, localizado no ${ap.andar}º andar da ${ap.endereco}`)

//02
let prodEmb = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3.500
}

console.log(`O produto${prodEmb.nome}, da categoria ${prodEmb.categoria}, pesando ${prodEmb.peso}, Está a venda por R$${prodEmb.preco.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}.`)

//03
class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado na ${this.endereco}`
    }
}
let casa = new Imovel(3,'sobrado', 'Rua SEI NÃO, nº 7070');
//casa.quartos = 3;
//casa.tipo = 'sobrado';
//casa.endereco = 'Rua SEI NÃO, nº 7070'
//console.log ('Tipo do imóvel: ${casa.tipo} \nQuartos: ${casa.quartos} \n Endereço:{casa.endereco}')
let apt = new Imovel(2, 'apartamento', 'Rua Amélia, nº 1010, bairro centro');
console.log(apt.exibirInformacoes);

//04
class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirDetalhes() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
  }
  const carro = new Veiculo("Toyota", "Corolla", 2022);
  const motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);
  console.log("Carro:");
  console.log(carro.exibirDetalhes());
  
  console.log("\nMotocicleta:");
  console.log(motocicleta.exibirDetalhes());
import entraadados from 'readline-sync';

console.log()
let nome =entraadados.question('Informe seu nome: ');
console.log(`ola ${nome}, seja bem vindo`);