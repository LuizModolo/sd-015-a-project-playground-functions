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
//   let array = [];
//   array.push(num1, num2, num3)
//   function numeros(array) {
//     let menorNum = array[0];
//     for (let index = 0; index < array.length; index += 1) {
//       if (menorNum > array[index]) {
//         menorNum = array[index];
//       }
//     return menorNum;
//   }
//   if ()
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
