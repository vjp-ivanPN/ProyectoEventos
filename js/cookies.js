// Criterio de ordenación actual
let criterio = "ninguno";

// Guarda una cookie durante el número de días indicado
function guardarCookie(nombre, valor, dias) {
    const segundos = dias * 24 * 60 * 60;
    const texto = encodeURIComponent(valor);

    document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
}

// Lee una cookie por su nombre
function leerCookie(nombre) {
    const partes = document.cookie.split("; ");

    for (const parte of partes) {
        const [clave, valor] = parte.split("=");

        if (clave === nombre) {
            return decodeURIComponent(valor);
        }
    }

    return null;
}

// Cambia el criterio, lo guarda y actualiza la página
function elegirOrden(nuevo) {
    criterio = nuevo;
    guardarCookie("orden", criterio, 30);
    actualizar();
}
