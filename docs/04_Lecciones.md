# Lecciones aprendidas

## Separacion de responsabilidades

El proyecto separa estructura, estilos, datos y logica:

- HTML define las zonas de la pagina.
- CSS define la presentacion visual.
- `menu-data.js` define los datos del menu.
- `app.js` controla comportamiento, carrito y persistencia.

Esta separacion evita mezclar responsabilidades y facilita cambiar una parte sin romper otra.

## Renderizado dinamico

El menu ya no se escribe tarjeta por tarjeta en HTML.

La funcion `renderMenu(products)` toma productos de `menuItems` y crea tarjetas con JavaScript. Esto reduce duplicacion y permite que el menu crezca sin copiar bloques HTML manualmente.

## Manejo del estado del carrito

El estado principal del carrito esta en el arreglo `cartItems`.

Cada item guarda:

- `id`
- `name`
- `price`
- `quantity`

El HTML del carrito se considera una representacion visual del estado, no la fuente de verdad.

## Persistencia

localStorage permite guardar el carrito como texto JSON.

Para guardar:

```js
JSON.stringify(cartItems)
```

Para leer:

```js
JSON.parse(storedCart)
```

La app valida los datos antes de restaurarlos para evitar errores con informacion corrupta o antigua.

## Validaciones basicas

Actualmente existen validaciones para:

- No agregar productos inexistentes.
- No agregar productos no disponibles.
- Evitar cantidades menores o iguales a cero.
- Validar datos guardados en localStorage.
- Limpiar almacenamiento corrupto.
- Validar carrito no vacio antes de enviar.
- Validar nombre del cliente.
- Validar tipo de entrega.
- Validar direccion solo cuando la entrega es a domicilio.
- Validar que los productos del carrito sigan existiendo y disponibles.
- Validar que el numero de WhatsApp tenga formato numerico.

## Refactorizacion

La refactorizacion ayudo a dividir funciones grandes en piezas mas simples.

Ejemplos:

- `createCartItemElement()` delega partes a funciones mas pequenas.
- `updateCartItemQuantity()` centraliza el cambio de cantidades.
- `calculateCartSubtotal()` expresa mejor que por ahora subtotal y total son iguales.

Refactorizar no cambio el comportamiento: solo hizo el codigo mas claro y facil de extender.

## Integracion con WhatsApp

La integracion usa el estado real del carrito (`cartItems`) y no el HTML renderizado.

El mensaje se construye en texto plano con saltos de linea (`\n`) y despues se codifica con `encodeURIComponent()` para que funcione dentro de una URL.

La URL final usa el formato:

```text
https://wa.me/NUMERO?text=MENSAJE
```

WhatsApp no confirma si el pedido fue enviado; solo abre la conversacion con el texto preparado. Por eso el carrito no se limpia automaticamente.
