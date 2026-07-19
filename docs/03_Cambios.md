# Registro de cambios

## Etapa 1: Base HTML

Se creo la estructura inicial del proyecto:

- `index.html`
- `css/styles.css`
- `js/menu-data.js`
- `js/app.js`
- `assets/images/`

La pagina incluyo encabezado, presentacion, menu, carrito, formulario y boton de WhatsApp desactivado.

## Etapa 2: Diseno inicial

Se adapto la interfaz para el restaurante El Cangrejo Cevichero.

Cambios principales:

- Encabezado con nombre del restaurante.
- Hero con concepto de mariscos frescos.
- Categorias visuales.
- Tarjetas temporales de platillos.
- Carrito visual.
- Formulario del cliente.
- Footer con informacion temporal.
- Estilo costero moderno con colores de mar, arena, coral y vegetacion.

## Etapa 3: Menu dinamico

Se movieron los productos a `js/menu-data.js`.

Cambios principales:

- Se creo el arreglo `menuItems`.
- Cada producto tiene `id`, `nombre`, `descripcion`, `precio`, `categoria`, `imagen` y `disponible`.
- `app.js` renderiza las tarjetas dinamicamente dentro de `#menu-grid`.
- Se elimino el HTML repetido de tarjetas escritas manualmente.

## Etapa 4: Carrito

Se implemento un carrito funcional en `app.js`.

Funciones y comportamientos agregados:

- Agregar productos.
- Aumentar cantidad si el producto ya existe.
- Disminuir cantidad.
- Eliminar producto.
- Mostrar nombre, cantidad, precio unitario y subtotal.
- Calcular subtotal y total.
- Mostrar mensaje de carrito vacio.
- Actualizar todo sin recargar la pagina.

## Refactorizacion

Se reorganizo la logica del carrito para hacerla mas clara.

Cambios principales:

- `cart` paso a llamarse `cartItems`.
- Se agrego `findCartItemById()`.
- Se centralizo el cambio de cantidad en `updateCartItemQuantity()`.
- Se dividio la creacion visual del carrito en funciones mas pequenas.
- `handleCartClick()` paso a usar `switch`.
- Se agrego `initializeApp()` para iniciar la app con validaciones basicas de contenedores.

## Persistencia con localStorage

Se agrego persistencia del carrito.

Cambios principales:

- Se agrego `CANGREJO_CART_STORAGE_KEY`.
- Se agrego `saveCartToStorage()`.
- Se agrego `loadCartFromStorage()`.
- Se agrego `validateStoredCart()`.
- Se agrego `restoreCartItems()`.
- El carrito se guarda al agregar, aumentar, disminuir o eliminar.
- El carrito se restaura al cargar la pagina.
- Datos corruptos o invalidos se limpian para evitar romper la aplicacion.

## Etapa 5: Integracion con WhatsApp

Se implemento el envio del pedido por WhatsApp desde el boton del carrito.

Cambios principales:

- Se agrego la constante `RESTAURANT_WHATSAPP_NUMBER`.
- El boton de WhatsApp se activa solo cuando el carrito tiene productos.
- Se agrego lectura de datos del cliente desde el formulario.
- Se agregaron validaciones para carrito, nombre, tipo de entrega, direccion a domicilio, productos disponibles y numero configurado.
- Se construye un mensaje con restaurante, productos, cantidades, precio unitario, subtotal por producto, total, datos del cliente, direccion cuando corresponde y notas cuando existen.
- El mensaje se codifica con `encodeURIComponent()`.
- Se abre la URL `https://wa.me/NUMERO?text=MENSAJE`.
- El carrito no se vacia despues de abrir WhatsApp.
