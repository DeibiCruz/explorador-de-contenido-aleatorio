# Explorador de contenido aleatorio

Proyecto individual de Programación Web III de **Deibi Frandulcardo Cruz Gomez**.

## Ejecución

Descomprime el proyecto y abre la carpeta que contiene index.html en Visual Studio Code con Archivo → Abrir carpeta. Abre index.html en tu navegador. Si ya tienes la extensión Live Server, también puedes elegir Open with Live Server. Se necesita conexión a Internet para consultar las APIs.

## Preguntas de reflexión

### ¿Qué es un endpoint y cuál usaste para cada API?

Es la dirección a la que se envía una solicitud para obtener un recurso. En este proyecto las consultas usan GET.

- Citas: https://dummyjson.com/quotes/random
- Perros: https://dog.ceo/api/breeds/image/random
- Gatos: https://cataas.com/cat?json=true
- Datos curiosos: https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

### ¿Qué función cumplen await y response.json()?

await permite esperar una promesa dentro de una función asíncrona sin bloquear la página. Primero espero la respuesta de fetch. Después, response.json() lee el cuerpo y lo convierte en datos de JavaScript. Ese paso también devuelve una promesa.

### ¿Qué diferencia existe entre recibir JSON y recibir directamente una imagen?

El JSON trae campos que puedo leer, como message en Dog CEO. En CATAAS consulto primero la información del gato en JSON y uso el campo url o construyo la ruta con id. La dirección de la foto entrega los bytes de la imagen, por eso la asigno al src y el navegador la muestra.

### ¿Por qué se debe verificar response.ok además de utilizar try/catch?

Si el servidor devuelve un estado HTTP de error como 404, fetch aún puede devolver una respuesta. Compruebo response.ok y lanzo un error para que catch muestre el aviso. Una desconexión o un fallo al leer el JSON también llega a catch.

### ¿Cómo actualizaste una sección sin recargar toda la página?

Cada botón tiene un evento click que llama a la función de su tarjeta. Esa función consulta su API y reemplaza solo el contenido de esa sección. Mientras espera, el botón queda deshabilitado. Al terminar se habilita en finally, incluso si hay que reintentar.
