// Criação do objeto produtoEmbalado
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
  };
  
  // Criação da frase utilizando as propriedades do objeto
  let frase = "O produto " + produtoEmbalado.nome + ", da categoria " + produtoEmbalado.categoria + ", pesando " + produtoEmbalado.peso + " kg, está à venda por R$ " + produtoEmbalado.preco.toFixed(2) + ".";
  
  // Exibição da frase no console
  console.log(frase);
  