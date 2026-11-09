function crearTarjeta(elemento) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h3");
    titulo.textContent = elemento.nombre;

    const tipo = document.createElement("p");
    tipo.textContent = "Tipo de evento: " + elemento.tipoEvento;

    const localizacion = document.createElement("p");
    localizacion.textContent = "Localización: " + elemento.localizacion;

    const aforo = document.createElement("p");
    aforo.textContent = "Aforo: " + elemento.aforo;

    const fechas = document.createElement("p");
    fechas.textContent = "Fechas: " + elemento.fechaIni + " - " + elemento.fechaFin;

    tarjeta.append(titulo, tipo, localizacion, aforo, fechas);

    return tarjeta;
}

function pintar(lista) {
    const listado = document.querySelector("#listado");
    listado.replaceChildren();

    for (const elemento of lista) {
        const tarjeta = crearTarjeta(elemento);
        listado.append(tarjeta);
    }

    document.querySelector("#resumen").textContent =
        "Tenemos " + lista.length + " eventos en nuestra colección.";
}

function pintarEstadisticas(lista) {
    const resultado = estadisticas(lista);
    const elemento = document.querySelector("#estadisticas");

    if (resultado === null) {
        elemento.textContent = "No hay eventos para mostrar estadísticas.";
        return;
    }

    elemento.textContent =
        "Aforo total: " + resultado.total +
        " | Media de aforo: " + resultado.media.toFixed(1) +
        " | Evento con mayor aforo: " + resultado.maximo.nombre +
        " (" + resultado.maximo.aforo + ")";
}

pintar(lista);
pintarEstadisticas(lista);
