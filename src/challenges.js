// Desafio 1
function compareTrue(a, b) {
  let status = false;
  if (a === true && b === true) {
    status = true;
  } else {
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
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let string = "";
  let name1 = array[0];
  let name2 = array[array.length - 1];
  string = "'" + name2 + ", " + name1 + "'";
  return string;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
