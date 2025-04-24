// Criação do objeto apartamento
let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
  };
  
  // Criação da frase utilizando as propriedades do objeto
  let frase = "Apartamento com " + apartamento.quartos + " quartos, localizado no " + apartamento.andar + "º andar da " + apartamento.endereco + ".";
  
  // Exibição da frase no console
  console.log(frase);
  