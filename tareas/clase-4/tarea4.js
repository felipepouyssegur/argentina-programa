//Desafío de programación #1: Imprimí los números del 1 al 10
 

/*  for (let i = 1; i <= 10; i++) {
  console.log(i) 
}  */


// Desafìo de programación  #2: Imprimí los números impares del 1 al 100

for (let i = 1; i <= 100; i += 2) {
    console.log(i)
}

/* Desafío de programación #3: Imprimí la tabla de multiplicación del 7

  7x0 = 0
 7x1 = 7
 ...
 7x9 = 63 
 */


/* let numero = 7

for (let i = 1; i<=10; i++) {
    let resultado = numero * i
    alert(`${numero} x ${i} = ${resultado}`);
}  */


/* Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81 */



/* 
 for (let i = 1; i <= 9; i++) {
    for (let x = 1; x <= 10; x++){
        let resultado = i * x;
        console.log(`${i} X ${x} = ${resultado}`);
    }
}
 */


/* Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10] */

/*  let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
 let suma = 0;
 for (let i = 0; i < arrayNumeros.length; i++) {
    suma = suma + arrayNumeros[i]
 }

 console.log(suma)
 */

/*  Desafío de programación #6: Calcula 10! (10 factorial) */

/* let number = 1;

for(let i = 1; i <= 10; i++){
    number *= i;
    console.log(number);
}
 */


//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30


/* for (let i = 10; i <= 30; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }  
} */

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit





/* let gradoCelcius = Number(prompt("Indique sus grados celcius."));

function convertirCelsiusAFahrenheit(gradoCelcius){
  let celsius9Sobre5 = gradoCelcius * (9/5);
  return celsius9Sobre5 + 32
}
console.log(`${gradoCelcius} grados Celcius son ${convertirCelsiusAFahrenheit(gradoCelcius)} grados Farenheit`) */



// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

/* let gradoFarenheit = Number(prompt("Indique sus grados Farenheit."));

function convertirFahrenheitACelsius(gradoFarenheit){
  let farenheit9Sobre5 = gradoFarenheit - 32;
  return farenheit9Sobre5 * 5/9;
}
console.log(`${gradoFarenheit} grados Farenheit son ${convertirFahrenheitACelsius(gradoFarenheit)} grados Celcius.`)
 */


//Desafío de programación #10: Calcula la suma de todos los números en un array de números

/* const arrayNumeros = [4, 8, 12, 1, 24, 5];

let totalNumeros = 0;
for (i = 0; i < arrayNumeros.length; i++){
    totalNumeros = totalNumeros + arrayNumeros[i];
    console.log(totalNumeros)
}
 */

/* console.log(arrayNumeros.length) */


// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)



const arrayPromedio = [1, 4, 12, 6, 8, 11];
let totalNumeros = 0;

function promediarNumeros(numeros){

 for(let i = 0; i < numeroAPromediar.length; i++){
  totalNumeros = totalNumeros + numeroAPromediar[i]
 }
 return (totalNumeros / numeroAPromediar.length)
}

promediarNumeros(arrayPromedio)

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

/* let arrayNumeros = [5, -3, 10, -7, -2, 14, 9];
let conteoNumeros = 0;

function numerosPositivos (arrayNumeros) {
    for (i = 0; i <= arrayNumeros.length; i++) {
        if (arrayNumeros[i] >= 0) {
        
    } 
  } 
}
     */

