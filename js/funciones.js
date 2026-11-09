function listarTodos(lista) {
    console.log("--- Lista de todos los eventos ---");

    for (const evento of lista) {
        const aforoEvento = evento.aforo <= AFORO_LIMITADO
            ? "Aforo limitado" : "Aforo amplio";

        console.log(
            `${evento.id}. ${evento.nombre} | ${evento.tipoEvento} | ${evento.localizacion} | ${aforoEvento}`
        );
    }
}

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

function buscarPorTexto(lista, texto) {
    const resultados = [];
    const textoMinuscula = texto.toLowerCase();

    for (const evento of lista) {
        if (evento.nombre.toLowerCase().includes(textoMinuscula)) {
            resultados.push(evento);
        }
    }

    return resultados;
}

function anadir(lista, elemento) {
    let mayorId = -1;

    for (const evento of lista) {
        if (evento.id > mayorId) {
            mayorId = evento.id;
        }
    }

    elemento.id = mayorId + 1;
    lista.push(elemento);

    return elemento.id;
}

function eliminarPorId(lista, id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1);
            return true;
        }
    }

    return false;
}

function estadisticas(lista) {
    if (lista.length === 0) {
        return null;
    }

    let total = 0;
    let maximo = lista[0];

    for (const evento of lista) {
        total += evento.aforo;

        if (evento.aforo > maximo.aforo) {
            maximo = evento;
        }
    }

    return {
        total: total,
        media: total / lista.length,
        maximo: maximo
    };
}
