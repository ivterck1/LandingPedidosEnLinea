# 03 — Desktop UI Specification

## Lienzo de referencia

- Diseño base: 1440 px.
- Contenedor de contenido: aproximadamente 1200–1280 px.
- Catálogo: dos columnas de producto.
- Carrito: columna sticky independiente, sin cubrir footer ni secciones posteriores.

## Recorrido

1. **Header compacto:** marca, navegación, acceso al menú y resumen de carrito.
2. **Hero:** titular `¿Se te antojó? Pídelo ahora`, texto breve, CTA al menú y producto protagonista.
3. **Trust strip:** preparación al momento, recetas de la casa y pedido directo.
4. **Especialidades:** tres productos destacados; enlazan al producto o su categoría.
5. **Menú completo:** título, contador, categorías sticky y catálogo filtrado.
6. **Carrito sticky:** aparece junto al catálogo y conserva total visible.
7. **Historia/preparación:** prueba humana y gastronómica, no manifiesto largo.
8. **Pedido:** formulario y resumen final coherentes con el carrito.
9. **CTA WhatsApp:** únicamente tras validación.
10. **Información operativa y footer:** solo datos confirmados.

## Jerarquía del menú

- Encabezado: `Menú completo` + cantidad de productos de la categoría.
- Categorías en una fila que puede envolver de forma controlada.
- Categoría activa con diferencia de color, borde y estado accesible.
- Tarjetas alineadas por filas sin forzar descripciones a igual longitud artificial.

## Comportamiento del carrito

- Sticky únicamente durante el catálogo.
- Si está vacío, explica cómo empezar y no muestra formulario prematuramente.
- Al agregar el primer producto, confirma sin interrumpir el recorrido.
- El formulario completo puede vivir después del catálogo; el carrito sticky ofrece `Continuar pedido`.

## Densidad visual

La fotografía domina el hero y las tarjetas. Las ilustraciones aparecen en bordes o fondos de transición; no detrás de texto pequeño ni controles.
