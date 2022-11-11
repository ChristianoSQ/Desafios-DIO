/*
1 Crie uma class para representar pessoas;
Pessoas possuem nome, peso e altura;
Criar método para calcular IMC (IMC = peso /(altura*altura))

*/

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  nome;
  peso;
  altura;

  calculaIMC(peso, altura) {
    return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
  }

  informaIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso normal!";
    } else if (imc <= 24.9) {
      return "Peso normal!";
    } else if (imc <= 29.9) {
      return "Excesso de peso!";
    } else if (imc <= 34.9) {
      return "Obesidade classe I.";
    } else if (imc <= 39.9) {
      return "Obesidade classe II.";
    } else if (imc >= 40) {
      return "Obesidade classe III.";
    }
  }
}

const pessoa = new Pessoa("Chris", 85, 1.69);
const pessoa2 = new Pessoa("Fá", 60, 1.56);

const pessoa3 = { nome: "jao", peso: 90, altura: 1.7 };
console.log(pessoa3);

console.log(`${pessoa.nome} o seu Imc é: ${pessoa.calculaIMC()}`);
console.log(pessoa.informaIMC(pessoa.calculaIMC()));
console.log(`${pessoa2.nome} o seu Imc é: ${pessoa2.calculaIMC()}`);
console.log(pessoa2.informaIMC(pessoa2.calculaIMC()));
