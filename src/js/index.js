// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

// Escribe una función que reciba un número y lo devuelva sumando 2.

const addition = (number) => {
  return number + 2;
};
const resultAddition = addition(2);
console.log(resultAddition);

const double = (number) => {
  return number * 2;
};
const resultDouble = double(3);
console.log(resultDouble);

const wordLength = (word) => {
  return word.length;
};
const resultWordLength = wordLength("palabra");
console.log(resultWordLength);

const upperCaseWord = (word) => {
  return word.toUpperCase();
};
const resultUpperCaseWord = upperCaseWord("galleta");
console.log(resultUpperCaseWord);

const sameWords = (wordA, wordB) => {
  if (wordA === wordB) {
    console.log(`Son palabras iguales`);
  } else {
    console.log(`Son palabras diferentes`);
  }
};
sameWords("Casa", "Casa");

const multiplication = (numberA, NumberB) => {
  return numberA * NumberB;
};
const resultMultiplication = multiplication(3, 4);
console.log(resultMultiplication);

const sumDigits = (number) => {
  const StringSumDigits = String(number);
  return (
    Number(StringSumDigits.charAt(0)) +
    Number(StringSumDigits.charAt(1)) +
    Number(StringSumDigits.charAt(2))
  );
};
const resultSumDigits = sumDigits(234);
console.log(resultSumDigits);

const longestWord = (wordA, wordB) => {
  if (wordA.length > wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};
// longestWord('palabras', 'palabra');
console.log(longestWord("árbol", "camila"));

//const array = [1, 2, 3];

const getfirstElement = (array) => {
  return array[0];
};
const firstElement = getfirstElement([1, 2, 3]);
console.log(firstElement);

// Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) => {
  return array[position];
};
const arrayElement = getArrayElement(["a", "b", "c"], 2);

console.log(arrayElement);

const shortestWord = (wordA, wordB) => {
  if (wordA.length < wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};
console.log(shortestWord("árbol", "camila"));

const onlyEven = (numberA, numberB, numberC) => {
  if (numberA % 2 === 0) {
    console.log(numberA);
  }
  if (numberB % 2 === 0) {
    console.log(numberB);
  }
  if (numberC % 2 === 0) {
    console.log(numberC);
  }
};
onlyEven(2, 4, 5);

//Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const squareAndCube = (number) => {
  console.log(
    `Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`
  );
};
squareAndCube(2);

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const palabraOfFiveLetters = (word) => {
  console.log(
    `${word.charAt(0)}, ${word.charAt(1)}, ${word.charAt(2)}, ${word.charAt(
      3
    )}, ${word.charAt(4)}`
  );
};
palabraOfFiveLetters("arbol");

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicateNumbers = (array) => {
  array.push(array[0], array[1], array[2]);
  console.log(array);
};
duplicateNumbers([1, 2, 3]);

//- Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const fiveNumbers = (array) => {
  array.pop();
  array.shift();
  console.log(array);
};
fiveNumbers([1, 2, 3, 4, 5]);

//- Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const fiveLetters = (array) => {
  console, log(`${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}`);
};
fiveLetters(["p", "a", "l", "a", "s"]);
