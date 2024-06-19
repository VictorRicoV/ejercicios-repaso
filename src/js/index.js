// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Escribe una función que reciba un número y lo devuelva sumando 2.

const addition = number => {
  return number + 2;
};
const resultAddition = addition(2);
console.log(resultAddition);

const double = number => {
  return number * 2;
};
const resultDouble = double(3);
console.log(resultDouble);

const wordLength = word => {
  return word.length;
};
const resultWordLength = wordLength('palabra');
console.log(resultWordLength);

const upperCaseWord = word => {
  return word.toUpperCase();
};
const resultUpperCaseWord = upperCaseWord('galleta');
console.log(resultUpperCaseWord);

const sameWords = (wordA, wordB) => {
  if (wordA === wordB) {
    console.log(`Son palabras iguales`);
  } else {
    console.log(`Son palabras diferentes`);
  }
};
sameWords('Casa', 'Casa');

const multiplication = (numberA, NumberB) => {
  return numberA * NumberB;
};
const resultMultiplication = multiplication(3, 4);
console.log(resultMultiplication);

const sumDigits = number => {
  const StringSumDigits = String(number);
  return Number(StringSumDigits.charAt(0)) + Number(StringSumDigits.charAt(1)) + Number(StringSumDigits.charAt(2));
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
console.log(longestWord('árbol', 'camila'));

//const array = [1, 2, 3];

const getfirstElement = array => {
  return array[0];
};
const firstElement = getfirstElement([1, 2, 3]);
console.log(firstElement);

// Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) => {
  return array[position];
};
const arrayElement = getArrayElement(['a', 'b', 'c'], 2);

console.log(arrayElement);

const shortestWord = (wordA, wordB) => {
  if (wordA.length < wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};
console.log(shortestWord('árbol', 'camila'));

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

const squareAndCube = number => {
  console.log(`Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
};
squareAndCube(2);

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const palabraOfFiveLetters = word => {
  console.log(`${word.charAt(0)}, ${word.charAt(1)}, ${word.charAt(2)}, ${word.charAt(3)}, ${word.charAt(4)}`);
};
palabraOfFiveLetters('arbol');

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicateNumbers = array => {
  array.push(array[0], array[1], array[2]);
  console.log(array);
};
duplicateNumbers([1, 2, 3]);

//- Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const fiveNumbers = array => {
  array.pop();
  array.shift();
  console.log(array);
};
fiveNumbers([1, 2, 3, 4, 5]);

//- Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

const fiveLetters = array => {
  console.log(`${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}`);
};
fiveLetters(['p', 'a', 'l', 'a', 's']);

//- Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = array => {
  if (array[0].length > array[1].length && array[0].length > array[2].length) {
    return array[0];
  }
  if (array[1].length > array[0].length && array[1].length > array[2].length) {
    return array[1];
  }
  if (array[2].length > array[1].length && array[2].length > array[0].length) {
    return array[2];
  }
};
console.log(longestWordArray(['palabra', 'casa', 'mueblessss']));

//- Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const twoArray = (arrayA, arrayB) => {
  const newArray = [];
  newArray.push(arrayA[0], arrayB[0], arrayA[1], arrayB[1], arrayA[2], arrayB[2]);
  console.log(newArray);
};
twoArray([1, 2, 3], ['a', 'b', 'c']);

//- Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

// 5 -> 2
// 7 -> 3
// 9 -> 4
// 11 ->

const printMiddleArray = numbers => {
  if (numbers.length % 2 === 0) {
    console.log('El array no es válido');
    return;
  }
  const middleValue = numbers[Math.floor(numbers.length / 2)];
  console.log(middleValue);
};

printMiddleArray([1, 2, 3, 4, 5, 6, 7]);

//- Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const onlyVowels = word => {
  const vowels = 'aeiou';
  let newString = '';

  if (vowels.includes(word.charAt(0))) {
    // newString = newString + word.charAt(0)
    newString += word.charAt(0);
  }
  if (vowels.includes(word.charAt(1))) {
    newString += word.charAt(1);
  }
  if (vowels.includes(word.charAt(2))) {
    newString += word.charAt(2);
  }
  if (vowels.includes(word.charAt(3))) {
    newString += word.charAt(3);
  }
  if (vowels.includes(word.charAt(4))) {
    newString += word.charAt(4);
  }

  console.log(newString);
};

onlyVowels('Celia');
