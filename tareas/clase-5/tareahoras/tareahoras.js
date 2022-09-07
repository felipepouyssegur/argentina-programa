const horasTotales = [];
const minutosTotales = [];
const segundosTotales = [];

const botonCalcular = document.querySelector("#boton-calcular")

botonCalcular.onclick = function () {
    //HORAS
    const horasClase1 = Number(document.querySelector("#horas-clase1").value);
    horasTotales.push(horasClase1);

    const horasClase2 = Number(document.querySelector("#horas-clase2").value);
    horasTotales.push(horasClase2);

    const horasClase3 = Number(document.querySelector("#horas-clase3").value);
    horasTotales.push(horasClase3);

    const horasClase4 = Number(document.querySelector("#horas-clase4").value);
    horasTotales.push(horasClase4);


    const horasClase5 = Number(document.querySelector("#horas-clase5").value);
    horasTotales.push(horasClase5);
   
    
    let totalHoras = horasTotales.reduce((a, b) => a + b, 0);  //TOTAL HORAS
                               

    //MINUTOS
    const minutosClase1 = Number(document.querySelector("#minutos-clase1").value);
    minutosTotales.push(minutosClase1);


    const minutosClase2 = Number(document.querySelector("#minutos-clase2").value);
    minutosTotales.push(minutosClase2);


    const minutosClase3 = Number(document.querySelector("#minutos-clase3").value);
    minutosTotales.push(minutosClase3);


    const minutosClase4 = Number(document.querySelector("#minutos-clase4").value);
    minutosTotales.push(minutosClase4);


    const minutosClase5 = Number(document.querySelector("#minutos-clase5").value);
    minutosTotales.push(minutosClase5);

    let totalMinutos = minutosTotales.reduce((a, b) => a + b, 0);  //TOTAL MINUTOS


    //SEGUNDOS
    const segundosClase1 = Number(document.querySelector("#segundos-clase1").value);
    segundosTotales.push(segundosClase1);


    const segundosClase2 = Number(document.querySelector("#segundos-clase2").value);
    segundosTotales.push(segundosClase2);


    const segundosClase3 = Number(document.querySelector("#segundos-clase3").value);
    segundosTotales.push(segundosClase3);


    const segundosClase4 = Number(document.querySelector("#segundos-clase4").value);
    segundosTotales.push(segundosClase4);



    const segundosClase5 = Number(document.querySelector("#segundos-clase5").value);
    segundosTotales.push(segundosClase5);

    let totalSegundos = segundosTotales.reduce((a, b) => a + b, 0);  //TOTAL SEGUNDOS


    const minutosFinales = totalMinutos % 60;
    console.log(minutosFinales)
    const segundosFinales = totalSegundos % 60;
    console.log(segundosFinales)


    document.querySelector("#vacio").innerText = `El total de sus videos es de ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`

}