
const edadUsuario = document.querySelector("#edadUsuario").value;
const tituloPrincipal = document.querySelector("h1");
const boton = document.querySelector("#boton");

boton.onclick = function () {
    let nombreUsuario = document.querySelector("#nombreUsuario").value;
    let apellidoUsuario = document.querySelector("#apellidoUsuario").value;
    let edadUsuario = document.querySelector("#edadUsuario").value;

    tituloPrincipal.innerText = `Bienvenido, ${nombreUsuario}  ${apellidoUsuario}`

    
    document.querySelector("#vacio").innerText = `Bienvenido ${nombreUsuario}  ${apellidoUsuario}, usted tiene ${edadUsuario} años.`


    return false
}

