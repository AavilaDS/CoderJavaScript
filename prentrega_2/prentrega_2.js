alert("Bienvenido a tu cotizador")

function calcularPrestamo() {
    ////////////////DATOS PERSONALES DEL USUARIO
    let nombreUsuario = prompt("Ingrese su Nombre y Apellido");
    let telefonoUsuario = prompt("ingrese su número de teléfono");
    let correoUsuario = prompt("Ingrese su correo electronico");
    const datosPersonales = {
        nombreUsuario,
        telefonoUsuario,
        correoUsuario
    }
    console.log(datosPersonales.nombreUsuario) 
    console.log(datosPersonales.telefonoUsuario)
    console.log(datosPersonales.correoUsuario)
    //////////////DATOS FINANCIEROS DEL USUARIO
    let cantidadPrestamo = prompt("Ingrese la cantidad de su péstamo");
    let tiempoPrestamo = prompt("Escribe tu tiempo para para pagar tu préstamo: 12, 24 o 36 meses");
    let interesTotal = cantidadPrestamo * (35 / 100);
    let interesCantidad = interesTotal + Number(cantidadPrestamo);
    let sumaTotal = interesCantidad / tiempoPrestamo;
    if (cantidadPrestamo === "") {
        alert("Por favor ingrese alguna cantidad válida");
    }
    if (tiempoPrestamo === "12" || tiempoPrestamo === "24" || tiempoPrestamo === "36") {
        alert(("Hola " + nombreUsuario) + (" esta es tu cantidad que solicitaste: $" + cantidadPrestamo) + ("  ,este es tu cantidad a pagar al mes: $" + sumaTotal) + ("  ,estos son los meses a pagar: " + tiempoPrestamo) + ("  y esta es tu cantidad final con interes: $" + interesCantidad));
    } else {
        alert("Por favor ingrese alguna cantidad de meses válida");
    }
    return nombreUsuario + telefonoUsuario + correoUsuario + sumaTotal;

}

//Array
let datos = ["Muchas gracias", calcularPrestamo(), "Esta es mi primera chamba"];
datos.push ("preentrega 2")
console.log(datos[0]);
console.log(datos[1]);
console.log(datos[2]);
console.log(datos[3]);





