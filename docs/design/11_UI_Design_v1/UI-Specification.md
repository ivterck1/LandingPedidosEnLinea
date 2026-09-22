# El Cangrejo Cevichero — UI Specification

## Estado

Diseño aprobado para desktop y mobile.

## Dirección visual

Antojo Inmediato: identidad gastronómica costera, enérgica, cálida y contemporánea. La comida debe dominar visualmente y las acciones de compra deben identificarse de inmediato.

## Paleta

- Azul marino principal: #082F49
- Naranja de compra: #F97316
- Crema de superficies: #FFF4DE
- Verde WhatsApp: #22A447
- Texto oscuro: #17212B
- Blanco: #FFFFFF

## Categorías

1. Especialidades
2. Ceviches
3. Tostadas
4. Cócteles
5. Complementos
6. Bebidas

## Productos representativos

- Tacos Gobernador — $189
- Ceviche Acapulco — $169
- Tostada de Pulpo — $109
- Cóctel de Camarón — $179
- Guacamole Costero con Totopos — $99
- Agua de Jamaica de la Casa — $45

Los nombres, descripciones y precios son provisionales hasta recibir el menú real.

## Desktop

- Ancho de referencia: 1440 px.
- Hero azul marino con mensaje principal y producto destacado.
- Trust strip debajo del hero.
- Navegación clara hacia el menú.
- Categorías visibles y filtrables.
- Catálogo organizado en dos columnas.
- Tarjetas gastronómicas con fotografía, nombre, descripción, precio y acción para agregar.
- Carrito lateral sticky.
- Acciones de compra en naranja.
- Acción final de WhatsApp en verde.
- Inventar sucursales (en lugares turisticos de Playa del Carmen), horarios, cobertura, promociones y métodos de pago (transferencia y efectivo).

## Mobile

- Diseño mobile-first.
- Hero simplificado.
- Categorías en desplazamiento horizontal.
- Productos en una sola columna.
- Controles de cantidad accesibles.
- Barra inferior fija con cantidad, total y botón “Ver pedido”.
- El pedido se abre como panel móvil.
- Botón final de WhatsApp en verde.
- La barra inferior no debe cubrir contenido.

## Fotografías

- Formato horizontal 4:3.
- Ángulo cercano de 45 grados.
- Luz natural cálida.
- Fondo azul marino.
- Vajilla artesanal crema con borde azul.
- Texturas realistas.
- Sin texto ni logotipos incrustados.
- Usar object-fit: cover y recortes responsivos.

## Comportamiento

Conservar la lógica existente de:

- Carrito.
- Cantidades.
- Eliminación de productos.
- localStorage.
- Validaciones.
- Generación y envío del pedido por WhatsApp.

Conservar los IDs utilizados actualmente por JavaScript.

## Accesibilidad

- Contraste suficiente.
- Estados de foco visibles.
- Botones con etiquetas claras.
- Imágenes con texto alternativo.
- Áreas táctiles mínimas de 44 × 44 px.
- Respeto a prefers-reduced-motion.

## Animación

GSAP se utilizará únicamente durante la implementación y con moderación:

- Entrada ligera del hero.
- Aparición progresiva de tarjetas.
- Transiciones del panel móvil.
- Retroalimentación al agregar un producto.

Las animaciones no deben retrasar la compra ni competir con las fotografías.