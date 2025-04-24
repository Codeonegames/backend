class Imovel {
    constructor(quartos, tipo, endereco) {
      this.quartos = quartos;
      this.tipo = tipo;
      this.endereco = endereco;
    }
  
    exibirInformacoes() {
      return `Tipo: ${this.tipo}
  Quartos: ${this.quartos}
  Endereço: ${this.endereco}`;
    }
  }
  
  // Instanciando a casa
  const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
  
  // Instanciando o apartamento
  const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
  
  // Exibindo as informações
  console.log("Informações da Casa:\n", casa.exibirInformacoes());
  console.log("\nInformações do Apartamento:\n", apartamento.exibirInformacoes());
  