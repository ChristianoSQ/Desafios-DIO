/*
1 Crie uma class para representar carros
Os carros possuem marca, cor, gasto médio p km rodado.
Criar método para calcular gasto a partir de quilometro, preço e valor do percursso

*/

class Carro {
  constructor(marca, cor, gastoMédioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMédioPorKm = gastoMédioPorKm;
  }

  marca;
  cor;
  gastoMédioPorKm;

  calcularG(distance, precoCombustivel) {
    return distance * this.gastoMédioPorKm * precoCombustivel;
  }
}

const carro = new Carro("uno", "vermelho", 1 / 12);
const carro1 = new Carro("gol", "cinza", 1 / 10);

/*

console.log(carro);
console.log(carro1);
*/
console.log(carro.calcularG(20, 4.78));
console.log(carro1.calcularG(25, 4.78));
