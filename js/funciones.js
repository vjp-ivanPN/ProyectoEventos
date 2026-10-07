// Si no entendi mal , tengo que hacer una funcion que meta los datos de mis eventos
// Asi cada vez que cree un evento solo tengo que preguntarle los datos al usuario , que en este caso sere yo
// Y rellenare de forma automatica el campo de lista.

function rellenarLista(id,nombre,tipoEvento,localizacion,aforo,fechaIni,fechaFin){
    id = prompt("Id");
    Number(id);
    nombre = prompt("Introduzca el nombre");
    tipoEvento = prompt("Introduzca el tipo de evento");
    localizacion = prompt("Lugar de realizacion del evento");
    aforo = prompt("Aforo maximo");
    Number(aforo);
    fechaIni = prompt("Fecha de inicio del evento");
    fechaFin = prompt("Fecha final del evento");
    
};

//En casa tengo que , hacer las funciones que pide , y ademas ,
//Crear mi propia funcion que agregue un nuevo evento a la lista de eventos, investigar como en js