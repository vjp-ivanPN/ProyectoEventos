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

