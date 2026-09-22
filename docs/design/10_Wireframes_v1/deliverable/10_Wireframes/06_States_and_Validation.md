# 06 — States and Validation

## Estados obligatorios

| Estado | Respuesta de interfaz |
| --- | --- |
| Carga de catálogo | Esqueleto estable; evita saltos de layout |
| Catálogo vacío | Mensaje útil y alternativa de contacto |
| Error de catálogo | Reintentar y contacto alterno |
| Carrito vacío | Explica cómo comenzar y enlaza al menú |
| Producto agregado | Confirmación no intrusiva y actualización visible |
| Producto eliminado | Confirmación con opción Deshacer |
| Producto agotado | No permite agregar |
| Campo inválido | Mensaje junto al campo y resumen accesible |
| Pedido válido | Habilita revisión final |
| WhatsApp no disponible | Permite copiar el mensaje |

## Validación

- Validar al salir del campo y al intentar avanzar.
- No borrar datos al cambiar entre etapas.
- Llevar el foco al primer error.
- Usar mensajes específicos: “Escribe tu nombre”, no “Campo inválido”.
- No bloquear por observaciones vacías.
- Si cambia entrega a recolección, conservar temporalmente la dirección sin incluirla en el pedido.

## Diferencia crítica

**Listo para enviar** significa que el pedido es válido. **Enviado** solo puede afirmarse cuando exista confirmación externa; la apertura de WhatsApp no la proporciona.

