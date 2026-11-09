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
