# 04 — Menu and Product Cards

## Anatomía de producto

1. Imagen o espacio reservado.
2. Etiqueta opcional: especialidad, nuevo o agotado.
3. Nombre.
4. Descripción de una o dos líneas.
5. Precio en MXN.
6. Control **Agregar** o selector `− cantidad +`.

## Estados

| Estado | Presentación |
| --- | --- |
| Disponible | Botón Agregar activo |
| Agregado | Confirmación breve; carrito actualizado |
| Varias unidades | Selector `− cantidad +` en tarjeta y sincronizado con el carrito |
| Agotado | Etiqueta visible y control deshabilitado |
| Sin imagen | Placeholder editorial legítimo, no archivo de imagen falso |

## Categorías propuestas para validar

- Especialidades.
- Ceviches.
- Tostadas.
- Cocteles.
- Complementos.
- Bebidas.

Estas seis categorías quedan aprobadas como arquitectura inicial para distribuir aproximadamente 30 productos. Sus nombres y cantidades exactas se validarán contra el catálogo real antes de la implementación.

## Navegación del catálogo

- El menú completo permanece dentro de la landing.
- Solo se muestran los productos de la categoría activa.
- Cada categoría indica su estado activo y la cantidad de resultados.
- Se esperan entre 4 y 6 productos visibles por categoría.
- Desktop utiliza dos columnas; mobile utiliza una.
- El cambio de categoría no altera los productos que ya están en el carrito.
- El buscador se considera opcional y solo se incorporará si las pruebas demuestran que las categorías no bastan.

## Distribución de referencia

| Categoría | Cantidad estimada |
| --- | ---: |
| Especialidades | 5 |
| Ceviches | 6 |
| Tostadas | 6 |
| Cocteles | 5 |
| Complementos | 4 |
| Bebidas | 4 |
| **Total** | **30** |

## Fuente de verdad

Cada producto debe tener un identificador, nombre, descripción, categoría, precio, disponibilidad e imagen. Ninguno de esos datos se duplica manualmente entre menú, carrito y WhatsApp.
