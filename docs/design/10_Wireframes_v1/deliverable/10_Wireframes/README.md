# 10 — Wireframes

## Estado

Fase en revisión. Arquitectura del menú completo aprobada.

## Objetivo

Convertir la dirección visual **Antojo Inmediato** en una experiencia de pedido clara, consistente y verificable antes del diseño final y del código.

## Flujo principal

Explorar menú → agregar producto → revisar carrito → capturar datos mínimos → validar pedido → enviar por WhatsApp.

## Entregables

| Archivo | Propósito |
| --- | --- |
| `01_User_Flow.md` | Flujo, decisiones y rutas del pedido |
| `02_Desktop_Wireframe.md` | Estructura completa para escritorio |
| `03_Mobile_Wireframe.md` | Estructura mobile-first |
| `04_Menu_and_Product_Cards.md` | Anatomía del catálogo y productos |
| `05_Cart_and_Order_Form.md` | Carrito, formulario y reglas |
| `06_States_and_Validation.md` | Vacíos, errores, confirmación y WhatsApp |
| `07_Usability_Checklist.md` | Criterios para aprobar la fase |
| `wireframes/desktop-full.svg` | Plano visual de baja fidelidad desktop |
| `wireframes/mobile-full.svg` | Plano visual de baja fidelidad mobile |

## Principios obligatorios

- Precio, cantidad y total deben ser evidentes.
- El catálogo es la única fuente de verdad para productos.
- El total siempre deriva del carrito.
- WhatsApp recibe exactamente el pedido revisado.
- Mobile no es una reducción de desktop.
- No se inventan sucursales, horarios, cobertura ni costos.
- Los wireframes no fijan todavía color, fotografía o tipografía final.
- El menú completo vive en la misma landing y contempla aproximadamente 30 productos.
- Las categorías filtran el catálogo; no se muestran los 30 productos simultáneamente.

## Decisión estructural principal

Desktop utiliza un carrito lateral persistente desde el catálogo. Mobile utiliza una barra inferior compacta que abre una vista de carrito y formulario por etapas.

## Decisión aprobada: catálogo de 30 productos

- Seis categorías iniciales: Especialidades, Ceviches, Tostadas, Cocteles, Complementos y Bebidas.
- Cada categoría muestra aproximadamente 4–6 productos y su contador de resultados.
- Las especialidades superiores funcionan como descubrimiento; no sustituyen al catálogo.
- Desktop presenta el catálogo en dos columnas y el carrito sticky a la derecha.
- Mobile presenta una tarjeta por fila, categorías desplazables y barra inferior de pedido.
- La disponibilidad contempla estados **Disponible**, **Agregado** y **Agotado**.
