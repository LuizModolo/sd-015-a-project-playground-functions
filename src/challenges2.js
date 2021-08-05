// Desafio 10
function techList(array, nome) {
  let resposta = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i += 1) {
      let obj = {tech: array[i], name: nome};
      resposta.push(obj);
    }
    resposta.sort(function (a, b) {
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
      return 0;
    });
  } else { resposta = 'Vazio!'; }
  return resposta
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))

// Desafio 11
function generatePhoneNumber(array) {
//   let myNum;
//   if (array.length === 11) {
//     for (let i = 0; i < array.length; i += 1) {
//       myNum = '(' + array[0] + array[1] + ')' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
//     }
//   } else {
//     myNum = "Array com tamanho incorreto."
//   }
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
