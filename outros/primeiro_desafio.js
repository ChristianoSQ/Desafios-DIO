//Usando o git atraves do console do VScode
//Logando a extensão do github no VScode
//Fazendo varios commits para ver o funcionamento e ver com o se comporta e ou é mostrado no site.
console.log("Hello DIO");

let kmRodado = 100;
const precoCombustivel = 4.87;
let kmPorLitro = 10;
let valorViagem = (kmRodado / kmPorLitro) * precoCombustivel;

console.log(
  `O valor de uma viagem rodando ${kmRodado}km com preço do combustível de: R$${precoCombustivel} é de: R$${valorViagem.toFixed(
    2
  )}.`
);
const num = 10;
const numText = "10";
console.log(num === numText);
