async function leerJSON(url) {
  const respuesta = await fetch(url, { cache: "no-store" });
  if (!respuesta.ok) throw new Error("La consulta falló.");
  return respuesta.json();
}

async function cargarCita() {
  const cita = await leerJSON("https://dummyjson.com/quotes/random");
  if (!cita.quote || !cita.author) throw new Error("La cita está incompleta.");

  const frase = document.createElement("blockquote");
  frase.lang = "en";
  frase.textContent = cita.quote;
  const autor = document.createElement("p");
  autor.textContent = "— " + cita.author;
  document.querySelector("#citas .contenido").replaceChildren(frase, autor);
}

async function cargarDato() {
  const dato = await leerJSON("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
  if (!dato.text) throw new Error("El dato está vacío.");

  const parrafo = document.createElement("p");
  parrafo.lang = "en";
  parrafo.textContent = dato.text;
  document.querySelector("#datos .contenido").replaceChildren(parrafo);
}

function activarTarjeta(id, cargar) {
  const tarjeta = document.getElementById(id);
  const boton = tarjeta.querySelector("button");
  const estado = tarjeta.querySelector(".estado");

  async function actualizar() {
    try {
      boton.disabled = true;
      estado.textContent = "Cargando...";
      await cargar();
      estado.textContent = "";
    } catch {
      estado.textContent = "No se pudo cargar el contenido. Inténtalo otra vez.";
    } finally {
      boton.disabled = false;
    }
  }

  boton.addEventListener("click", actualizar);
  actualizar();
}

activarTarjeta("citas", cargarCita);
activarTarjeta("datos", cargarDato);

async function mostrarImagen(id, url, descripcion) {
  const imagen = new Image();
  imagen.alt = descripcion;
  imagen.src = url;
  // Espera a que la foto esté lista.
  await imagen.decode();
  document.querySelector("#" + id + " .contenido").replaceChildren(imagen);
}

async function cargarPerro() {
  const perro = await leerJSON("https://dog.ceo/api/breeds/image/random");
  if (!perro.message) throw new Error("Falta la foto del perro.");
  await mostrarImagen("perros", perro.message, "Perro de la galería de Dog CEO");
}

async function cargarGato() {
  const gato = await leerJSON("https://cataas.com/cat?json=true");
  if (!gato.url && !gato.id) throw new Error("Falta la foto del gato.");
  const ruta = gato.url || "/cat/" + encodeURIComponent(gato.id);
  const url = new URL(ruta, "https://cataas.com");
  await mostrarImagen("gatos", url.href, "Gato de la galería de CATAAS");
}

activarTarjeta("perros", cargarPerro);
activarTarjeta("gatos", cargarGato);
