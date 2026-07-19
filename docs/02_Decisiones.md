# Decisiones tecnicas

## Por que usamos HTML, CSS y JavaScript puro

El proyecto esta pensado como una primera version sencilla, sin backend y facil de entender. HTML, CSS y JavaScript puro permiten construir la landing page sin instalar dependencias ni aprender un framework antes de comprender los fundamentos.

Esta decision ayuda a practicar:

- Estructura semantica con HTML.
- Diseno mobile-first con CSS.
- Manipulacion del DOM con JavaScript.
- Manejo de estado en memoria.
- Persistencia simple con localStorage.

## Por que el menu esta separado de la logica

Los productos estan en `js/menu-data.js` y la logica esta en `js/app.js`.

Esta separacion permite:

- Cambiar productos sin tocar las funciones del carrito.
- Mantener los datos del menu en un solo lugar.
- Evitar duplicar tarjetas en HTML.
- Renderizar la interfaz de forma dinamica.
- Preparar el proyecto para futuros filtros por categoria o busqueda.

## Por que usamos localStorage

localStorage permite conservar el carrito aunque el usuario recargue la pagina o cierre temporalmente el navegador.

Se eligio porque:

- No requiere backend.
- Funciona directamente en el navegador.
- Es suficiente para una primera version.
- Permite practicar serializacion con JSON.

El carrito se guarda como texto JSON y se restaura al cargar la pagina.

## Limitaciones de esta primera version

- No hay envio real por WhatsApp todavia.
- El boton de WhatsApp esta desactivado.
- El formulario del cliente existe visualmente, pero aun no se valida para enviar.
- No hay costo de envio.
- No hay promociones ni cupones.
- No hay backend ni base de datos.
- El menu es temporal.
- Las imagenes son placeholders visuales en CSS, no fotografias reales.
- localStorage vive solo en el navegador del usuario.
- Si el usuario cambia de dispositivo, el carrito no se sincroniza.
- Algunos textos de `index.html` presentan caracteres mal codificados y deben corregirse antes de pulir la experiencia.
