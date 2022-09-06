// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!



/* let nombreUsuario = (prompt('¿Cual es tu nombre?') || '').toLowerCase();
const miNombre = "felipe"

if (nombreUsuario === miNombre){
    console.log('Hola Felipe! Yo tambien me llamo Felipe.')
} else if(nombreUsuario === 'paula') {
    console.log('Hola Paula! Te llamas igual que mi novia.')
} else if (nombreUsuario.trim().length === 0 ) {
    console.log('No ingresaste ningun nombre.')
}
else {
    console.log(`Hola ${nombreUsuario}!`)
}
 */



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


/*
let edadUsuario = Number(prompt('¿Cuantos años tenes?'))
const MI_EDAD = 20;  La defino en mayuscula por que la defino yo 


if (edadUsuario === MI_EDAD) {
    console.log ('¡¡¡Tenes la misma edad que yo!!!');
} else if (edadUsuario > MI_EDAD) {
    console.log ('JAJA!! ¡¡¡Sos mas viejo que yo!!!');
} else if (edadUsuario < MI_EDAD) {
    console.log ('Sos mas joven que yo :(')
} else {
    console.log('¡¡¡Te dije que pongas una edad!!! >:(')
}

*/





//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.



let usuarioTieneDocumento = prompt('¿Tenes documento?').toLowerCase();

if (usuarioTieneDocumento === 'si') {
    let edadUsuario = Number(prompt('¿Cuantos años tenes?'));
    if (edadUsuario >= 18) {
    console.log('¡Bienvenido al bar!')
    } else if (edadUsuario < 18) {
    console.log('No podes entrar al bar.')
    } else {
    console.log('No entiendo tu respuesta.')
}
} else if(usuarioTieneDocumento.toLocaleLowerCase() === 'no') {
    console.log('No podes entrar al bar.')
} else {
    console.log('No entiendo tu respuesta')
}

