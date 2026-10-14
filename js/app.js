// Creo mi constante de aforo limitado , en caso de que sea menor o igual a este numero
//  , el evento sera de aforo limitado o aforo amplio x ejemplo

const AFORO_LIMITADO=500;
const lista =[
{
    id:0,
    nombre:"CarreraContraCancerInfantil",
    tipoEvento:"Carrera",
    localizacion:" Parque Forestal de Valdebebas - Madrid",
    aforo:10000,
    fechaIni:"27-09-2026",
    fechaFin:"27-09-2026"
},
{
    id:1,
    nombre:"Barbas",
    tipoEvento:"Gastronomico",
    localizacion:"Malaga",
    aforo:500,
    fechaIni:"07-10-2026",
    fechaFin:"14-10-2026"
}
,
{
    id:2,
    nombre:"PescaNocturnaTajomar",
    tipoEvento:"Pesca",
    localizacion:"Rio Tajo",
    aforo:3000,
    fechaIni:"21-11-2026",
    fechaFin:"22-11-2026"
}
,
{
    id:3,
    nombre:"PescaNocturna",
    tipoEvento:"Pesca",
    localizacion:"Plasencia",
    aforo:7000,
    fechaIni:"24-10-2026",
    fechaFin:"24-10-2026"
}

]
// A continuacion tengo que crear dos funciones , una que 
function recorrerLista(lista){
console.log("--- Listado de todos los eventos ---")

for (const nombreEvento of lista) {

const aforo = lista.nombre <= AFORO_LIMITADO ? "Limitado" : "Amplio";
console.log(`${lista.id}. ${lista.nombre} · ${aforo}`);
}
}