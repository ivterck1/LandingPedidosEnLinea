# 05 — Cart and Order Form

## Carrito

Cada línea contiene producto, precio unitario, cantidad, subtotal y eliminar. El resumen contiene subtotal, costo de entrega cuando aplique y total.

## Formulario

| Campo | Regla |
| --- | --- |
| Nombre | Obligatorio |
| Tipo de entrega | Obligatorio: entrega o recolección |
| Dirección | Obligatoria solo para entrega |
| Referencias | Opcional, recomendable para entrega |
| Sucursal | Obligatoria para recolección cuando haya opciones reales |
| Observaciones | Opcional, con límite de caracteres |

## Mensaje de WhatsApp

Orden recomendado:

1. Saludo e intención de pedido.
2. Nombre del cliente.
3. Productos con cantidad, precio y subtotal.
4. Subtotal, costo de entrega y total.
5. Modalidad y datos correspondientes.
6. Observaciones.

## Regla de integridad

El mensaje se genera a partir del mismo estado usado para dibujar el carrito. No se reconstruye desde campos independientes.

## Confirmación previa

El botón final primero muestra el resumen verificable. Después de confirmar, abre WhatsApp; no se debe afirmar que el pedido fue recibido, porque abrir WhatsApp todavía no equivale a enviarlo.

