// ============================================================
// Datos (sesión 5)
// ============================================================
const NOMBRE_APP = "Mi recetario";
const TIEMPO_RAPIDA = 30;

const recetas = [
{ id: 1, nombre: "Gazpacho", categoria: "Entrante",
tiempo: 15, dificultad: "Fácil", fecha: "2026-06-12", raciones: 4 },
{ id: 2, nombre: "Migas", categoria: "Principal",
tiempo: 45, dificultad: "Media", fecha: "2026-01-20", raciones: 6 },
{ id: 3, nombre: "Tortilla de patatas", categoria: "Principal",
tiempo: 40, dificultad: "Media", fecha: "2026-09-02", raciones: 4 },
{ id: 4, nombre: "Ensalada de pimientos", categoria: "Entrante",
tiempo: 25, dificultad: "Fácil", fecha: "2026-08-15", raciones: 4 },
{ id: 5, nombre: "Cerezas del Jerte con yogur", categoria: "Postre",
tiempo: 10, dificultad: "Fácil", fecha: "2026-06-01", raciones: 2 },
{ id: 6, nombre: "Caldereta de cordero", categoria: "Principal",
tiempo: 120, dificultad: "Difícil", fecha: "2025-12-24", raciones: 8 },
{ id: 7, nombre: "Crema de calabaza", categoria: "Entrante",
tiempo: 35, dificultad: "Fácil", fecha: "2026-10-01", raciones: 4 },
{ id: 8, nombre: "Arroz con leche", categoria: "Postre",
tiempo: 50, dificultad: "Media", fecha: "2026-03-19", raciones: 6 },
{ id: 9, nombre: "Revuelto de setas", categoria: "Principal",
tiempo: 20, dificultad: "Fácil", fecha: "2026-09-28", raciones: 2 },
{ id: 10, nombre: "Perrunillas", categoria: "Postre",
tiempo: 60, dificultad: "Media", fecha: "2026-04-05", raciones: 12 }
];

// ============================================================
// Listados como funciones (sesión 7)
// ============================================================

// Muestra todas las recetas con su etiqueta de rápida o elaborada
function listarTodos(lista) {
console.log("--- Todas las recetas ---");
for (const receta of lista) {
const etiqueta = receta.tiempo <= TIEMPO_RAPIDA ? "rápida" : "elaborada";
console.log(`${receta.id}. ${receta.nombre} · ${etiqueta}`);
}
}

// Muestra las recetas fáciles que no pasan del límite y devuelve cuántas hay
function listarRapidasYFaciles(lista, limite) {
console.log(`--- Rápidas (≤ ${limite} min) y fáciles ---`);
let encontradas = 0;
for (let i = 0; i < lista.length; i++) {
const receta = lista[i];
if (receta.tiempo <= limite && receta.dificultad === "Fácil") {
console.log(`${receta.nombre} · ${receta.tiempo} min`);
encontradas++;
}
}
return encontradas;
}

// Cuenta cuántas recetas hay de cada categoría
function contarPorCategoria(lista) {
let entrantes = 0;
let principales = 0;
let postres = 0;
for (const receta of lista) {
switch (receta.categoria) {
case "Entrante":
entrantes++;
break;
case "Principal":
principales++;
break;
case "Postre":
postres++;
break;
default:
console.warn(`Categoría desconocida en la receta ${receta.id}`);
}
}
console.log(`Entrantes: ${entrantes} · Principales: ${principales} · Postres: ${postres}`);
}

