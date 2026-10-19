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

// Contar los tipos de eventos de cada categoria que existen

function contarPorCategoria(lista) {
    let carreras = 0;
    let gastronomicos = 0;
    let pescas = 0;

    for (const evento of lista) {
        switch (evento.tipoEvento) {
            case "Carrera":
                carreras++;
                break;

            case "Gastronomico":
                gastronomicos++;
                break;

            case "Pesca":
                pescas++;
                break;

            default:
                console.log("Categoría desconocida:", evento.tipoEvento);
        }
    }

    console.log("--- Eventos por categoría ---");
    console.log("Carreras:", carreras);
    console.log("Gastronómicos:", gastronomicos);
    console.log("Pesca:", pescas);
}
