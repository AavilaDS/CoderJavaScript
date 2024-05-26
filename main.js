
///MOSTRAR TABLA
function mostrarTabla() {
    document.getElementById("tablaFinanciera").style.display = "block";
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

///DESHABILITAR
const boton = document.getElementById("mostrar_info");
boton.addEventListener("click", () => {
    guardarDatos(), cantidadDatos(), calcularTotal(), mensualidades(), calcularMensualidad(), retornoTotal(), retornoInteres(), mostrarTabla()
});

let formularioCompleto = document.querySelector("#formulario_prestamo");
let mostrarBoton = document.querySelector("#mostrar_info");

formularioCompleto.addEventListener("submit", function (event) {
    event.preventDefault();

})



function validar() {
    let desabilitar = false;
    if (formularioCompleto.full_name.value === "") {
        desabilitar = true;
    }

    if (formularioCompleto.phone_number.value === "") {
        desabilitar = true;
    }

    if (formularioCompleto.email_address.value === "") {
        desabilitar = true;
    }

    if (formularioCompleto.cantidad_prestamo.value === "") {
        desabilitar = true;
    }

    if (desabilitar === true) {
        mostrarBoton.disabled = true;
    } else {
        mostrarBoton.disabled = false;
    }
};
formularioCompleto.addEventListener("keyup", validar);


//DATOS PERSONALES DEL USUARIO
function guardarDatos() {

    //event.preventDefault();
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

//DATOS TITULO 
function cantidadDatos() {
    let titulo = document.getElementById("tituloSaludo")
    let nombreUsuario = document.getElementById("full_name").value;
    let monto = document.getElementById("cantidad");
    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    let tiempoPrestamo = document.getElementById("floatingSelect").value;
    let meses = document.getElementById("meses");
    titulo.innerText = "Hola " + nombreUsuario + " este es el resutado de tu prestamo.";
    monto.innerText = "$" + cantidadPrestamo + ".00";
    meses.innerText = tiempoPrestamo + (" meses");
}
///CALCULAR INTERES
function calcularInteres() {
    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    const tiempoPrestamo = document.getElementById("floatingSelect").value;
    //INTERESES VALORES
    let interesTotal12 = cantidadPrestamo * (35 / 100);
    let interesTotal24 = cantidadPrestamo * (40 / 100);
    let interesTotal36 = cantidadPrestamo * (75 / 100);
    let interesPrestamo = 0;
    //CALCULAR INTERES
    switch (tiempoPrestamo) {
        case "12":
            interesPrestamo = (interesTotal12);
            break;

        case "24":
            interesPrestamo = (interesTotal24);
            break;

        case "36":
            interesPrestamo = (interesTotal36);
            break;

    }
    return interesPrestamo
};
function retornoInteres() {
    const interesFinal = calcularInteres();
    let interes = document.getElementById("interes");
    interes.innerText = `$${interesFinal.toFixed(2)}`;
    localStorage.setItem("Interes", JSON.stringify(interesFinal));
};


///CALCULAR TOTAL
function calcularTotal() {
    let cantidadPrestamo = document.getElementById("cantidad_prestamo").value;
    const tiempoPrestamo = document.getElementById("floatingSelect").value;
    //let montoTotal = document.getElementById("total");
    // let interes = document.getElementById("interes");
    //INTERESES VALORES
    let interesTotal12 = cantidadPrestamo * (35 / 100);
    let interesTotal24 = cantidadPrestamo * (40 / 100);
    let interesTotal36 = cantidadPrestamo * (75 / 100);
    let sumaTotal = 0;
    //CALCULAR INTERES
    switch (tiempoPrestamo) {
        case "12":
            sumaTotal = ((Number(cantidadPrestamo) + (interesTotal12)));
            break;

        case "24":
            sumaTotal = ((Number(cantidadPrestamo) + (interesTotal24)));
            break;

        case "36":
            sumaTotal = ((Number(cantidadPrestamo) + (interesTotal36)));
            break;
    }
    return sumaTotal
};
function retornoTotal() {
    const sumaTotal = calcularTotal();
    let montoTotal = document.getElementById("total");
    montoTotal.innerText = `$${sumaTotal.toFixed(2)}`;
    localStorage.setItem("Pago total", JSON.stringify(sumaTotal));
};


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
            mensualidad = ((Number(cantidadPrestamo) + (interesTotal12)) / 12);
            break;

        case "24":
            mensualidad = ((Number(cantidadPrestamo) + (interesTotal24)) / 24);
            break;

        case "36":
            mensualidad = ((Number(cantidadPrestamo) + (interesTotal36)) / 36);
            break;
    }
    return mensualidad;
}

function mensualidades() {
    const mensualidad = calcularMensualidad();
    let mensualidades = document.getElementById("cuota_mensual");
    mensualidades.innerText = `$${mensualidad.toFixed(2)}`;
    localStorage.setItem("Pago mensual", JSON.stringify(mensualidad));
};







