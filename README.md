Explorador de contenido aleatorio

Programación Web III

Deibi Frandulcardo Cruz Gomez

Cómo abrir el proyecto

Descomprime el ZIP. En Visual Studio Code, elige Abrir carpeta y selecciona la carpeta explorador. Abre una terminal y escribe start .\index.html. La página se abrirá en el navegador. Necesitas conexión a internet para cargar las citas, las fotos y los datos curiosos.

Preguntas de reflexión


¿Qué es un endpoint y cuál usaste para cada API?

Un endpoint es una dirección de una API a la que se envía una solicitud. En este proyecto, las cuatro tarjetas hacen solicitudes GET para pedir contenido nuevo. Cada una lee un dato distinto de la respuesta.

Citas y autores (DummyJSON): https://dummyjson.com/quotes/random
El campo quote contiene la cita y author contiene el nombre del autor.

Fotos de perros (Dog CEO): https://dog.ceo/api/breeds/image/random
El campo message contiene la dirección de la foto que se muestra en la tarjeta.

Fotos de gatos (CATAAS): https://cataas.com/cat?json=true
La página usa la dirección del campo url. Si solo recibe el identificador id, lo agrega al final de https://cataas.com/cat/ para formar la dirección de la foto.

Datos curiosos (Useless Facts): https://uselessfacts.jsph.pl/api/v2/facts/random?language=en
El campo text contiene el dato curioso. El parámetro language=en indica que se solicita en inglés.


¿Qué diferencia hay entre recibir JSON y recibir una imagen?

Al recibir JSON, JavaScript puede leer los campos de la respuesta. Por ejemplo, cuando la tarjeta de perros recibe el campo message, ya tiene la dirección de la foto. Todavía falta cargarla.

Para mostrarla, la página coloca esa dirección en el atributo src de la imagen. El navegador hace otra solicitud, recibe la foto y la muestra. Esta segunda respuesta ya contiene la imagen, por lo que se carga directamente sin usar response.json().


¿Para qué sirven await y response.json()?

Cuando la página usa fetch, la respuesta puede tardar. Con await, la función espera a que llegue antes de pasar a la siguiente línea. Mientras tanto, el usuario puede seguir usando las otras tarjetas.

response.json() lee el contenido de la respuesta y lo convierte en datos que JavaScript puede usar. Esa lectura también tarda un momento. En el proyecto, leerJSON devuelve la promesa de esa lectura y cargarCita espera su resultado con await. Recién entonces se pueden leer quote y author.


¿Por qué revisar response.ok si ya se usa try/catch?

Si se corta internet, fetch falla y el programa pasa al bloque catch. Si el servidor responde con un error como 404, la situación es distinta. Hubo una respuesta del servidor, así que fetch puede terminar sin lanzar un error.

Por eso se revisa response.ok. Si es falso, el código lanza un error para que catch muestre el aviso en la tarjeta. Al final, el bloque finally vuelve a habilitar el botón para que se pueda reintentar.


¿Cómo se actualiza una tarjeta sin recargar la página?

Cada botón tiene asociado un evento click. Por ejemplo, al pulsar Mostrar otro perro, se deshabilita ese botón, aparece el mensaje de carga y se consulta la API de perros.

Cuando la nueva foto está lista, replaceChildren reemplaza la foto anterior dentro de la tarjeta de perros. Como el código actualiza solo ese elemento, la cita, el gato y el dato curioso siguen en pantalla. Si la foto falla, se conserva la anterior y aparece el aviso para reintentar.
