// En este apartado creare las funciones para que sea mas visible

function listarTodos(lista) {
    console.log("--- Lista de todos los eventos ---");

    for (const evento of lista) {
        const aforoEvento = evento.aforo <= AFORO_LIMITADO
            ? "Aforo limitado"
            : "Aforo amplio";

        console.log(
            `${evento.id}. ${evento.nombre} | ${evento.tipoEvento} | ${evento.localizacion} | ${aforoEvento}`
        );
    }
}

// Siguiente funcion Filtro

function filtrarEventos(lista, limite) {
    let encontrados = 0;

    for (const evento of lista) {
        if (evento.aforo >= limite && evento.tipoEvento === "Pesca") {
            console.log(`${evento.id}. ${evento.nombre} | Aforo: ${evento.aforo}`);
            encontrados++;
        }
    }

    return encontrados;
}

// Para ejecutarla 
// const total = filtrarEventos(lista, 3000);
// console.log("Total de eventos encontrados:", total);