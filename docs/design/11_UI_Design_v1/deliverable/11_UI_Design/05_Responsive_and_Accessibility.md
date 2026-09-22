# 05 — Responsive and Accessibility

## Rangos de diseño

| Rango | Comportamiento |
| --- | --- |
| 320–767 px | Mobile: una columna, navegación colapsada y barra de pedido |
| 768–1023 px | Tablet: catálogo adaptable; carrito abre como panel |
| 1024–1279 px | Desktop compacto: dos columnas y carrito reducido |
| 1280 px o más | Desktop completo con contenedor máximo |

Los breakpoints se validan por contenido, no por modelos específicos de dispositivo.

## Requisitos mínimos

- Contraste WCAG AA para texto y controles.
- Navegación completa por teclado.
- Foco visible y no oculto por header/barra sticky.
- Orden semántico independiente de la composición visual.
- Botones con nombre accesible y estados anunciables.
- Errores asociados con sus campos.
- Cambios del carrito anunciados sin robar el foco.
- Imágenes de producto con texto alternativo útil; decoración con alternativa vacía.
- Respeto a `prefers-reduced-motion`.

## Movimiento

- Transiciones breves para feedback, no para espectáculo.
- Sin desplazamiento automático de carruseles.
- Sin parallax obligatorio.
- La confirmación de agregado puede usar cambio de estado y microanimación reducida.

## Contenido adaptable

- Los nombres pueden ocupar dos líneas.
- Los precios no se truncan.
- Los botones no dependen de una anchura fija.
- Los mensajes de error pueden crecer sin romper tarjetas o paneles.
