const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
//funcao para gerar numero aleatorio

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
//gerando uma letra maiuscula randomica

const geraMinuscula = () => String.fromCharCode(rand(97, 123));
//gerando uma letra minuscula randomica

const geraNumero = () => String.fromCharCode(rand(48, 58));
//gerando um numero aleatorio

const simbolos = ",.;~^[]!@#$%*()¨_+=-";

const geraSimbolo = () => simbolos[rand(0, simbolos.length)];
//gerando um simbolo random

function gerSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  quantidade = Number(quantidade);

  //a cada iteraç]ao do laço imbutivos um elemento random no array l.19
  for (let i = 0; i < quantidade; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  console.log(senhaArray);
}

