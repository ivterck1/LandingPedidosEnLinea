# 04 — Mobile UI Specification

## Lienzo de referencia

- Diseño base: 390 × 844 px.
- Verificación adicional: 320 px de ancho y teléfonos grandes.
- Una columna y controles táctiles de al menos 44 px.

## Recorrido

1. Header con logo, botón de menú y acceso al carrito.
2. Hero compacto con una acción dominante hacia el menú.
3. Trust strip reducido y legible.
4. Especialidades en carrusel accesible o lista corta; no carrusel automático.
5. Menú completo con categorías desplazables horizontalmente.
6. Una tarjeta de producto por fila.
7. Barra inferior fija: cantidad, total y `Ver pedido`.
8. Panel de pedido de pantalla completa en tres pasos: Pedido → Entrega → Confirmar.
9. WhatsApp aparece al final de Confirmar.

## Categorías

- La fila permite scroll horizontal con indicación visual de continuidad.
- Al cambiar de categoría, el encabezado del catálogo permanece visible.
- El foco de teclado y lector de pantalla sigue un orden lógico.
- El carrito no se reinicia al cambiar de categoría.

## Barra de pedido

- No aparece con carrito vacío o aparece en estado informativo no invasivo.
- Respeta safe areas del dispositivo.
- No cubre botones `Agregar`; el contenido reserva espacio inferior equivalente.
- Muestra cantidad total de unidades, total MXN y acceso al pedido.

## Panel de pedido

- Puede cerrarse sin perder datos.
- El botón Atrás no elimina el carrito.
- Cada etapa explica errores antes de avanzar.
- La confirmación muestra exactamente los datos que formarán el mensaje.

## Prioridad visual

En cada viewport debe dominar una sola cosa: producto, elección o confirmación. Se reducen texturas e ilustraciones antes de reducir legibilidad.
