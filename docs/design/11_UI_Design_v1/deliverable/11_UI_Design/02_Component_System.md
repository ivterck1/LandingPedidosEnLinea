# 02 — Component System

## Componentes obligatorios

| Componente | Variantes/estados |
| --- | --- |
| Header | desktop, mobile, scrolled, menú abierto |
| Button | primary-orange, secondary, WhatsApp, disabled, loading |
| Category chip | default, hover, active, focus |
| Product card | disponible, agregado, varias unidades, agotado, sin imagen |
| Quantity control | decremento, cantidad, incremento, mínimo alcanzado |
| Cart item | normal, edición, eliminación |
| Cart summary | vacío, con productos, entrega pendiente, total final |
| Form field | default, focus, complete, error, disabled |
| Delivery selector | entrega, recolección |
| Status message | informativo, validación, éxito operativo |
| Mobile order bar | oculta, carrito con artículos, panel abierto |

## Tarjeta de producto

Orden fijo:

1. Imagen con relación consistente.
2. Etiqueta opcional.
3. Nombre.
4. Descripción breve.
5. Precio MXN.
6. `Agregar` o control `− cantidad +`.

El nombre y el precio nunca dependen de la imagen. `Agotado` permanece legible y el control queda deshabilitado.

## Botones

- Altura táctil mínima de 44 px.
- Un CTA dominante por bloque.
- Estado focus visible además de hover.
- El botón WhatsApp expresa `Revisar y pedir por WhatsApp`; no promete que el pedido ya fue enviado.

## Carrito

- Cada línea muestra nombre, precio unitario, cantidad y subtotal.
- La edición en tarjeta y carrito comparte el mismo estado.
- Eliminar requiere una acción clara, pero no una confirmación modal innecesaria.
- Subtotal, entrega y total se separan visualmente.

## Formulario

- Etiquetas persistentes; placeholder solo como ejemplo.
- Error junto al campo y resumen accesible cuando existan varios errores.
- Dirección aparece únicamente para entrega.
- Sucursal aparece únicamente para recolección y cuando existan opciones confirmadas.

## Estados transversales

Todo componente interactivo debe diseñarse al menos en default, hover cuando aplique, focus, active/selected, disabled y error cuando aplique.
