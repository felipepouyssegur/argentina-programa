/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/



let integrantesFamilia = Number(prompt("¿Cuantos integrantes son en tu familia?"));

for(i = 1; i <= integrantesFamilia; i++) {
    let body = document.querySelector("body");

    let label = document.createElement("label")
    let form = document.createElement("input")
    form.type = "number"
    form.className = `input${i}`
    let br = document.createElement("br")

    label.innerText = `Pone la edad de tu familiar N° ${i}`

    body.appendChild(label)
    label.appendChild(form)
    body.appendChild(br)
}

let boton = document.querySelector("button");


let numeros = []; /* DECLARO MI ARRAY VACIO (VOY A RECIBIR NUMEROS)*/


/* RECORRO MIS INPUTS Y LOS PUSHEO AL ARRAY  */

boton.onclick = function () {
    for(i = 1; i <= integrantesFamilia; i++) {
    let edades = Number(document.querySelector(`.input${i}`).value);
    numeros.push(edades)
}

/* MUESTRO LOS DATOS */
document.querySelector("#mayor-edad").innerText = `Mayor edad: ${calcularMasGrande(numeros)}`
document.querySelector("#menor-edad").innerText = `Menor edad: ${calcularMasPequeño(numeros)}`
document.querySelector("#promedio-edad").innerText = `El promedio de edad es: ${calcularPromedio(numeros)}`

}





/* FUNCIONES CALCULAR EDADES */

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


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
