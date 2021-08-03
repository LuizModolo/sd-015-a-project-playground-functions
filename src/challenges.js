// Desafio 1
function compareTrue(a, b) {
  let status = false;
  if (a === true && b === true) {
    status = true;
  }
  return status;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  let virgula = ', ';
  let name1 = array[0];
  let name2 = array[array.length - 1];
  string = name2 + virgula + name1;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoins;
  let winsPoins = wins * 3;
  let tiePoins = ties * 1;
  totalPoins = winsPoins + tiePoins;
  return totalPoins;
}

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum < array[index]) {
      maiorNum = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  let movCat1 = Math.abs(mouse - cat1);
  let movCat2 = Math.abs(mouse - cat2);
  if (movCat1 > movCat2) {
    result = 'cat2';
  }
  if (movCat2 > movCat1) {
    result = 'cat1';
  }
  if (movCat1 === movCat2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayB = [];
  let div3 = 'fizz';
  let div5 = 'buzz';
  let div3e5 = 'fizzBuzz';
  let divNa = 'bug!';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrayB.push(div3);
    }
    if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arrayB.push(div5);
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayB.push(div3e5);
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayB.push(divNa);
    }
  }
  return arrayB;
}

// Desafio 9
function encode(string) {
  let subLetA = string.replace(/a/gi, 1);
  let subLetE = subLetA.replace(/e/gi, 2);
  let subLetI = subLetE.replace(/i/gi, 3);
  let subLetO = subLetI.replace(/o/gi, 4);
  let subLetU = subLetO.replace(/u/gi, 5);
  return subLetU;
}

function decode(string) {
  let subLetA = string.replace(/1/gi, 'a');
  let subLetE = subLetA.replace(/2/gi, 'e');
  let subLetI = subLetE.replace(/3/gi, 'i');
  let subLetO = subLetI.replace(/4/gi, 'o');
  let subLetU = subLetO.replace(/5/gi, 'u');
  return subLetU;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
