//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let listaHTML = document.querySelectorAll("li")
let numeros = []

for(let i = 0; i < listaHTML.length; i++) {
    numeros.push(Number(listaHTML[i].textContent))
}

function calcularPromedio(numeros){
    let suma = 0
    for(i=0; i<numeros.length; i++){
        suma += numeros[i];
    }
    return (suma/numeros.length).toFixed(2);
}


function calcularMasPequeño (numeros) {
    let numeroMinimo = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMinimo > numeros[i]) {
            numeroMinimo = numeros[i]
        }
    }
    return numeroMinimo
}

function calcularMasGrande(numeros) {
    let numeroMaximo = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMaximo < numeros[i]) {
            numeroMaximo = numeros[i];
          }
        }
        return numeroMaximo;
      }

function calcularMasRepetido(numeros) {
    let masRepetido = 0;
    for(let i=0; i<numeros.length; i++){
        for(let j=i+1; j<numeros.length; j++){
            if(numeros[i]===numeros[j]){
                masRepetido = numeros[i]
            }
        }
    }
    return masRepetido;
}



const boton = document.querySelector("#boton");

boton.onclick = function () {

document.querySelector('#numeros-promedio').textContent = `El promedio es ${calcularPromedio(numeros)}`
document.querySelector('#numero-mas-pequeño').textContent = `El número más chico es ${calcularMasPequeño(numeros)}`
document.querySelector("#numero-mas-grande").textContent = `El número más grande es ${calcularMasGrande(numeros)}`
document.querySelector('#numero-mas-repetido').textContent = `El número más repetido es ${calcularMasRepetido(numeros)}`

}