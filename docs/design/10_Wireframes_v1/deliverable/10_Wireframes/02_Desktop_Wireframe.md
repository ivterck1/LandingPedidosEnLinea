# 02 — Desktop Wireframe

## Viewport de referencia

1440 px de ancho. Contenido central máximo aproximado de 1200–1280 px.

## Orden de secciones

1. Header compacto y fijo.
2. Hero con mensaje, CTA principal y producto protagonista.
3. Franja de confianza.
4. Especialidades.
5. Menú completo con categorías sticky.
6. Productos de la categoría activa con carrito lateral sticky.
7. Historia y preparación.
8. Formulario y resumen del pedido.
9. CTA de WhatsApp.
10. Información operativa pendiente y footer.

## Reglas de composición

- El header contiene logo, navegación breve, acceso al menú y carrito con cantidad.
- El hero usa dos columnas; la acción dominante es **Ver menú**.
- La franja de confianza contiene máximo tres pruebas verificables.
- Especialidades permite descubrir; el catálogo permite decidir.
- El menú completo contiene aproximadamente 30 productos repartidos en seis categorías.
- La categoría activa filtra el catálogo y muestra su contador; no se cargan visualmente los 30 productos a la vez.
- Desde el catálogo, la retícula ocupa aproximadamente dos tercios y el carrito un tercio.
- El carrito permanece visible mientras se exploran productos, sin invadir el hero.
- El formulario aparece después del catálogo y conserva un resumen visible.
- No repetir botones de WhatsApp en cada tarjeta: primero se arma el pedido.

## Jerarquía del catálogo

Título **Menú completo** → categorías sticky → categoría activa + contador (4–6 resultados) → tarjetas → nombre → descripción corta → precio → agregar.

## Distribución aprobada

| Zona | Comportamiento |
| --- | --- |
| Categorías | Barra sticky con estado activo visible |
| Catálogo | Dos columnas; 4–6 productos de la categoría seleccionada |
| Producto disponible | Botón **Agregar** |
| Producto agregado | Controles `− cantidad +` |
| Producto agotado | Estado visible y acción deshabilitada |
| Carrito | Columna derecha sticky con cantidad, subtotal y total |

## Puntos de revisión

- El total se distingue del subtotal y de cualquier costo pendiente.
- El carrito no tapa contenido al hacer scroll.
- El usuario puede regresar al producto desde el carrito.
- La revisión final es idéntica al mensaje que abrirá WhatsApp.

Plano visual: [`wireframes/desktop-full.svg`](wireframes/desktop-full.svg).
