// Desafio 10
function techList(array, nome) {
  array.sort();
  let resposta = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i += 1) {
      let obj = { tech: array[i], name: nome };
      resposta.push(obj);
    }
  } else { resposta = 'Vazio!'; }
  return resposta;
}

// Desafio 11
function ehTamanho11(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function testNumb(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}

function testRepeat(array) {
  let repeat = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        repeat += 1;
      }
    }
    if (repeat > 2) {
      return false;
    }
    repeat = 0;
  }
  return true;
}

function generatePhoneNumber(array) {
  let resultado;
  if (!ehTamanho11(array)) {
    resultado = 'Array com tamanho incorreto.';
  } else if (!testNumb(array)) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else if (!testRepeat(array)) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    resultado = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  }
  return resultado;
}

// Desafio 12
function triangleCheck(num1, num2, num3) {
  let num1Ab = Math.abs(num1);
  let num2Ab = Math.abs(num2);
  let num3Ab = Math.abs(num3);
  return !(num1Ab >= num2Ab + num3Ab || num2Ab >= num1Ab + num3Ab || num3Ab >= num1Ab + num2Ab);
}

// Desafio 13
function hydrate(string) {
  // let sum = 0;
  let result;
  let numero = 0;
  let umCopo = ' copo de água';
  let maisCopo = ' copos de água';
  let matchArray = string.match(/[1-9]/gi);
  for (let i = 0; i < matchArray.length; i += 1) {
    numero += parseInt(matchArray[i], 10);
  }
  if (numero === 1) {
    result = numero + umCopo;
  } else {
    result = numero + maisCopo;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
