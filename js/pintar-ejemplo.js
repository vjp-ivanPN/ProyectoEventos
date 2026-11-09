// Creo la tarjeta primero
// 1- Creo la variable tarjeta
// 2- Con js , en el documento se crea un 
// elemento el cual sera un articulo document.createElement("article")

const tarjeta = document.createElement("article");

// Rellenar tarjeta

// 2. Rellenar
tarjeta.classList.add("tarjeta");

// La primera linea tarjeta.classList.add("tarjeta");
// Crea una clase llamada tarjeta en elemento tarjeta , es como si usaramos la etiqueta class="tarjeta" en css

tarjeta.textContent = "gazpacho";

// En esta linea lo que hago es darle contenido al elemento que he creado tarjeta
// Esto es lo equivalente en html a  <article class="tarjeta">Gazpacho</article>
// Con esto se mostraria en pantalla 
// .querrySelector Selecciona la id a la que se quiere agregar con append
document.querySelector("#listado").append(tarjeta);

