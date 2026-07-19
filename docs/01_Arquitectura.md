# Arquitectura del proyecto

## Objetivo del proyecto

Crear una landing page para el restaurante El Cangrejo Cevichero donde los clientes puedan consultar un menu, agregar productos a un carrito, ajustar cantidades, ver subtotal y total, capturar datos del cliente y, en una etapa posterior, enviar el pedido por WhatsApp.

El proyecto actualmente ya cubre menu dinamico, carrito funcional y persistencia del carrito con localStorage. El envio por WhatsApp aun no esta implementado.

## Tecnologias usadas

- HTML5 para la estructura de la pagina.
- CSS3 para el diseno visual mobile-first.
- JavaScript puro para datos, renderizado dinamico, carrito y persistencia.
- localStorage del navegador para conservar el carrito entre recargas.
- Sin frameworks.
- Sin backend.

## Estructura de archivos

```text
LandingPedidosEnLinea/
├── AGENTS.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── menu-data.js
│   └── app.js
├── assets/
│   └── images/
└── docs/
    ├── 01_Arquitectura.md
    ├── 02_Decisiones.md
    ├── 03_Cambios.md
    ├── 04_Lecciones.md
    └── 05_Backlog.md
```

## Responsabilidad de cada archivo principal

- `index.html`: contiene la estructura semantica de la pagina, secciones principales, contenedores que JavaScript usa para pintar menu y carrito, formulario visual del cliente y boton de WhatsApp desactivado.
- `css/styles.css`: contiene los estilos visuales de la interfaz, incluyendo hero, tarjetas de productos, carrito, formulario, footer y reglas responsive.
- `js/menu-data.js`: contiene el arreglo `menuItems` con los productos temporales del menu.
- `js/app.js`: contiene la logica de renderizado del menu, manejo del carrito, calculo de totales, eventos y persistencia en localStorage.
- `assets/images/`: carpeta preparada para imagenes reales, actualmente sin uso funcional.

## Flujo general desde el menu hasta el carrito

1. `index.html` carga primero `js/menu-data.js` y despues `js/app.js`.
2. `menu-data.js` define el arreglo global `menuItems`.
3. Al cargar el DOM, `initializeApp()` se ejecuta en `app.js`.
4. `renderMenu(menuItems)` filtra productos disponibles y crea tarjetas con `createMenuCard(product)`.
5. Cada tarjeta tiene un boton `Agregar` con `data-product-id`.
6. `handleMenuClick(event)` detecta clics en botones del menu usando delegacion de eventos.
7. `addProductToCart(productId)` busca el producto en `menuItems`.
8. Si el producto no esta en el carrito, se agrega a `cartItems` con cantidad `1`.
9. Si el producto ya existe, se actualiza su cantidad con `updateCartItemQuantity(productId, 1)`.
10. Cada cambio guarda el carrito en localStorage y llama a `renderCart()`.
11. `renderCart()` reconstruye visualmente el carrito y actualiza subtotal y total.

## Funcionamiento de localStorage

El carrito se guarda en localStorage usando la clave:

```js
CANGREJO_CART_STORAGE_KEY = "cangrejoCevicheroCart"
```

El flujo actual es:

1. Cuando se agrega, aumenta, disminuye o elimina un producto, se llama `saveCartToStorage()`.
2. `saveCartToStorage()` convierte `cartItems` a JSON con `JSON.stringify()`.
3. Al cargar la pagina, `loadCartFromStorage()` lee la clave guardada.
4. El JSON se convierte de nuevo a datos JavaScript con `JSON.parse()`.
5. `validateStoredCart()` valida que los datos sean seguros.
6. `restoreCartItems(storedItems)` restaura el carrito en memoria.
7. `renderCart()` recalcula subtotal y total.

Si el dato guardado esta corrupto o no cumple las validaciones, se elimina de localStorage y el carrito inicia vacio.
