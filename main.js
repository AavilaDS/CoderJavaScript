

//DATOS PERSONALES DEL USUARIO
function guardarDatos() {

    event.preventDefault();
    let nombreUsuario = document.getElementById("full_name").value;
    let telefonoUsuario = document.getElementById("phone_number").value;
    let correoUsuario = document.getElementById("email_address").value;
    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    let tiempoPrestamo = document.getElementById("floatingSelect").value;


    localStorage.setItem("Nombre", nombreUsuario);
    localStorage.setItem("Telefono", telefonoUsuario);
    localStorage.setItem("Correo", correoUsuario);
    localStorage.setItem("Cantidad", cantidadPrestamo);
    localStorage.setItem("Tiempo", tiempoPrestamo);

}

//DATOS TITULO Y CA
function cantidadDatos() {
    let titulo = document.getElementById("tituloSaludo")
    let nombreUsuario = document.getElementById("full_name").value;
    let monto = document.getElementById("cantidad");
    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    let tiempoPrestamo = document.getElementById("floatingSelect").value;
    let meses = document.getElementById("meses");

    titulo.innerText = "Hola " + nombreUsuario + " este es el resutado de tu prestamo.";
    monto.innerText = cantidadPrestamo;
    meses.innerText = tiempoPrestamo;
    localStorage.setItem("Meses del prestamo", meses);

}
///CALCULAR TOTAL E INTERES
function calcularPrestamo() {

    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    let total = document.getElementById("total");
    let interes = document.getElementById("interes");
    let interesTotal12 = cantidadPrestamo * (35 / 100);

    total.innerText = (interesTotal12) + Number(cantidadPrestamo);
    interes.innerText = interesTotal12;

}

///CALCULAR MENSUALIDADES
function calcularMensualidad() {
    //DATOS SOBRE EL PRÉSTAMO
    const cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    const tiempoPrestamo = document.getElementById("floatingSelect").value;
    //INTERESES VALORES
    let interesTotal12 = cantidadPrestamo * (35 / 100);
    let interesTotal24 = cantidadPrestamo * (40 / 100);
    let interesTotal36 = cantidadPrestamo * (75 / 100);

    let mensualidad = 0;
    //CALCULAR INTERES
    switch (tiempoPrestamo) {
        case "12":
            mensualidad = (Number(cantidadPrestamo) + (interesTotal12)) / 12;
            break;

        case "24":
            mensualidad = (Number(cantidadPrestamo) + (interesTotal24)) / 24;
            break;

        case "36":
            mensualidad = (Number(cantidadPrestamo) + (interesTotal36)) / 36;
            break;

    }
    return mensualidad;
}

function mensualidades() {
    const mensualidad = calcularMensualidad();
    let mensualidades = document.getElementById("cuota_mensual");
    mensualidades.innerText = `$${mensualidad.toFixed(2)}`;
    localStorage.setItem("mensualidades", JSON.stringify(mensualidad));
};







