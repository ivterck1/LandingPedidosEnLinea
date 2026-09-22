# Design System

## Filosofia visual

El sistema visual de El Cangrejo Cevichero debe sostener una experiencia mobile first, clara y apetecible. Su funcion no es decorar la interfaz, sino ordenar decisiones para que cualquier pantalla futura conserve la misma personalidad: fresca, costera, moderna, cercana y casual-premium.

El criterio principal es que la comida debe dominar la percepcion visual. Colores, tipografia, espacios, botones y motion deben acompanar el pedido sin competir con los platillos. Cada decision debe mejorar una de estas tres cosas: claridad, confianza o deseo.

### Principios rectores

- La interfaz debe sentirse ligera antes que abundante.
- El producto debe tener mas peso visual que la decoracion.
- El contraste debe resolver lectura en celular antes que buscar efectos esteticos.
- Las acciones principales deben ser evidentes sin explicacion.
- Lo premium debe comunicarse con orden, espacio y consistencia.
- Los elementos visuales deben ayudar al usuario a pedir mas rapido.

## Color

El color debe construir una sensacion costera madura: mar, arena, coral y vegetacion. La paleta evita azules genericos saturados y recursos infantiles. Debe sentirse luminosa, fresca y confiable.

### Paleta principal

| Token | Color | Uso | Justificacion |
| --- | --- | --- | --- |
| `--color-sea-deep` | `#064B5F` | Textos principales, headers, acentos fuertes | Aporta confianza y profundidad marina sin depender de negro puro. |
| `--color-lagoon` | `#0E8A9A` | CTA secundarios, enlaces, detalles activos | Refuerza frescura y lectura costera. |
| `--color-sand` | `#F6E8CB` | Fondos suaves, bloques de descanso | Da calidez y evita una interfaz fria. |
| `--color-coral` | `#F26D5B` | CTA principal, estados destacados | Conecta con apetito y accion sin volverse agresivo. |
| `--color-leaf` | `#2F7D5C` | Detalles naturales, estados positivos | Introduce vegetacion costera y equilibrio. |

### Paleta secundaria

| Token | Color | Uso | Justificacion |
| --- | --- | --- | --- |
| `--color-shell` | `#FFF9EF` | Fondo base | Mantiene luminosidad y suavidad. |
| `--color-foam` | `#E8F6F4` | Fondos informativos, categorias | Sugiere frescura sin saturar. |
| `--color-ink` | `#17323A` | Texto de alta importancia | Mejora legibilidad sobre fondos claros. |
| `--color-muted` | `#65777B` | Texto secundario | Permite jerarquia sin perder contraste. |
| `--color-line` | `#D8E4E2` | Bordes, divisores | Ordena sin endurecer la interfaz. |

### Estados

| Estado | Color sugerido | Uso |
| --- | --- | --- |
| Exito | `#2F7D5C` | Confirmaciones y disponibilidad. |
| Error | `#B8322A` | Validaciones y bloqueos. |
| Advertencia | `#C77A20` | Avisos operativos no criticos. |
| Desactivado | `#A8B4B6` | Botones no disponibles. |
| Foco | `#0E8A9A` | Outline accesible en controles. |

### Gradientes

Los gradientes deben usarse con moderacion y solo cuando aporten profundidad ambiental. No deben reemplazar fotografia ni convertirse en fondo dominante.

Uso recomendado:

- Fondo sutil de hero con transicion de `--color-shell` a `--color-foam`.
- Pequenos acentos en botones principales si no comprometen contraste.
- Capas suaves sobre fotografia para mejorar lectura.

Evitar:

- Gradientes morados, neon o muy saturados.
- Fondos con muchos colores compitiendo.
- Gradientes como sustituto de imagen de producto.

### Uso correcto

- Usar coral para acciones de conversion.
- Usar tonos marinos para confianza y navegacion.
- Usar arena y concha para descanso visual.
- Mantener suficiente contraste en texto y botones.
- Reservar colores intensos para decisiones importantes.

### Uso incorrecto

- Usar todos los colores con la misma intensidad.
- Convertir cada tarjeta en una combinacion distinta.
- Usar coral para informacion secundaria.
- Usar azul saturado como unico recurso costero.
- Priorizar estetica sobre legibilidad.

## Tipografia

La tipografia debe ser limpia, contemporanea y facil de leer en celular. El sistema puede trabajar con fuentes del sistema para conservar performance, o incorporar una familia externa en una fase posterior si se optimiza correctamente.

### Familias

| Rol | Familia recomendada | Uso |
| --- | --- | --- |
| Principal | `Inter`, `system-ui`, `Segoe UI`, `Arial`, sans-serif | Interfaz, textos, formularios, carrito. |
| Editorial opcional | `Fraunces`, `Georgia`, serif | Titulares puntuales o acentos gastronomicos. |

Justificacion: una sans serif clara facilita conversion movil. Una serif editorial puede elevar percepcion premium si se usa solo en titulares y no afecta carga.

### Jerarquia

| Nivel | Mobile | Desktop | Uso |
| --- | --- | --- | --- |
| Display | 36px | 56px | Hero principal. |
| H1 | 32px | 48px | Titulo de pantalla o seccion clave. |
| H2 | 26px | 36px | Secciones principales. |
| H3 | 20px | 24px | Grupos, tarjetas destacadas. |
| Body | 16px | 17px | Lectura general. |
| Small | 14px | 14px | Metadatos, ayudas, notas. |
| Micro | 12px | 12px | Etiquetas secundarias. |

### Escalas

La escala debe crecer por importancia, no por decoracion. En mobile, ningun bloque compacto debe usar tamanos hero. Las tarjetas, carrito y formulario deben priorizar densidad legible.

### Pesos

| Peso | Uso |
| --- | --- |
| 400 | Texto regular. |
| 500 | Etiquetas, navegacion, controles. |
| 600 | Nombres de producto, precios, subtotales. |
| 700 | Titulares y CTA principales. |

### Line-height

| Tipo | Line-height |
| --- | --- |
| Titulares | 1.05 a 1.15 |
| Subtitulos | 1.25 |
| Cuerpo | 1.5 |
| UI compacta | 1.3 |

Justificacion: una altura de linea generosa mejora lectura en celular, pero los componentes compactos necesitan evitar crecimiento innecesario.

## Espaciado

### Sistema de spacing

El sistema usa una base de 4px para mantener consistencia entre componentes.

| Token | Valor | Uso |
| --- | --- | --- |
| `--space-1` | 4px | Separaciones internas minimas. |
| `--space-2` | 8px | Grupos pequenos. |
| `--space-3` | 12px | Inputs, etiquetas, metadatos. |
| `--space-4` | 16px | Padding base de componentes. |
| `--space-5` | 20px | Separacion entre elementos relacionados. |
| `--space-6` | 24px | Padding de tarjetas y secciones compactas. |
| `--space-8` | 32px | Separacion entre bloques. |
| `--space-10` | 40px | Secciones mobile. |
| `--space-12` | 48px | Secciones desktop moderadas. |
| `--space-16` | 64px | Separacion editorial desktop. |

El espaciado debe crear lectura rapida. Si un bloque requiere demasiada separacion para entenderse, probablemente necesita mejor jerarquia.

## Grid

### Desktop

- Contenedor maximo: 1120px a 1200px.
- Columnas: 12.
- Gutter: 24px.
- Margenes laterales: 32px minimo.
- Uso: hero en dos zonas, menu en 3 columnas, carrito y formulario en layout complementario.

### Tablet

- Contenedor maximo: 900px.
- Columnas: 8.
- Gutter: 20px.
- Margenes laterales: 24px.
- Uso: menu en 2 columnas, carrito visible despues del menu o en bloque lateral si hay espacio.

### Mobile

- Contenedor: 100%.
- Columnas: 4 conceptuales.
- Gutter: 16px.
- Margenes laterales: 16px.
- Uso: una columna, botones full width cuando sean acciones principales, tarjetas escaneables.

Justificacion: el proyecto nace para pedidos por celular. Desktop debe ampliar la experiencia, no cambiar el modelo mental.

## Border Radius

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-xs` | 6px | Badges, pequenas etiquetas. |
| `--radius-sm` | 8px | Inputs, controles, tarjetas compactas. |
| `--radius-md` | 12px | Cards de producto, bloques funcionales. |
| `--radius-lg` | 18px | Hero media, contenedores destacados. |
| `--radius-pill` | 999px | Botones tipo capsula y chips. |

Los radios deben sentirse suaves, no infantiles. Las tarjetas principales pueden ser redondeadas, pero los componentes repetidos deben conservar una geometria ordenada.

## Sombras

Las sombras deben sugerir capas ligeras, no profundidad dramatica.

| Token | Valor | Uso |
| --- | --- | --- |
| `--shadow-soft` | `0 8px 24px rgba(6, 75, 95, 0.10)` | Cards y formularios. |
| `--shadow-medium` | `0 14px 36px rgba(6, 75, 95, 0.14)` | Elementos destacados. |
| `--shadow-button` | `0 8px 16px rgba(242, 109, 91, 0.22)` | CTA principal. |

Evitar sombras negras pesadas. Una sombra excesiva puede hacer que la interfaz parezca promocional o poco refinada.

## Botones

Los botones deben ser grandes, tactiles y claros. Cada variante debe comunicar jerarquia.

### Variantes

| Variante | Uso | Estilo |
| --- | --- | --- |
| Primario | Enviar pedido, pedir ahora, agregar clave | Fondo coral, texto claro, peso alto. |
| Secundario | Ver menu, navegar a seccion | Fondo claro, borde marino o lagoon. |
| Terciario | Acciones menores | Texto marino, sin relleno fuerte. |
| WhatsApp | Cierre de pedido | Verde funcional, estado desactivado visible. |
| Destructivo | Eliminar producto | Texto o borde rojo sobrio, no dominante. |

### Estados

- Default: contraste claro y area tactil amplia.
- Hover: elevacion o cambio sutil de tono.
- Active: reduccion visual breve para confirmar presion.
- Focus: outline visible de al menos 2px.
- Disabled: opacidad reducida, cursor no interactivo y texto comprensible.
- Loading futuro: texto estable para evitar salto de layout.

### Tamanos

| Tamano | Alto minimo | Uso |
| --- | --- | --- |
| Small | 36px | Controles internos del carrito. |
| Medium | 44px | Botones secundarios. |
| Large | 52px | CTA principales mobile. |

En mobile, las acciones principales deben ocupar el ancho disponible cuando ayude a reducir errores.

## Cards

Las cards deben presentar informacion escaneable y apetecible. La estructura recomendada para producto es:

1. Imagen.
2. Categoria o etiqueta opcional.
3. Nombre.
4. Descripcion breve.
5. Precio.
6. Boton de agregar.

Reglas:

- No anidar cards dentro de cards.
- Mantener precio y CTA visibles sin buscar demasiado.
- Evitar descripciones largas.
- Usar imagenes con relacion estable para prevenir saltos.
- Mantener estados de disponibilidad claros.

Justificacion: una tarjeta debe convertir informacion en decision rapida.

## Inputs

Los inputs deben sentirse simples y confiables.

Reglas:

- Etiqueta visible siempre.
- Placeholder solo como ayuda, no como unica instruccion.
- Alto minimo de 44px en mobile.
- Borde visible en reposo.
- Estado de foco claro.
- Mensajes de error cercanos al campo cuando se implemente validacion detallada.

Campos actuales:

- Nombre.
- Tipo de entrega.
- Direccion.
- Notas.

El campo direccion solo debe sentirse obligatorio cuando el usuario elige entrega a domicilio.

## Navbar

La navegacion debe ser corta y orientada a conversion.

Elementos recomendados:

- Nombre de marca.
- Enlaces a menu, carrito y contacto.
- CTA "Pedir ahora".

Reglas:

- En mobile, evitar una navegacion extensa.
- El CTA debe ser visible pero no bloquear lectura del hero.
- La marca debe leerse claramente.
- Los enlaces deben apuntar a secciones utiles, no a contenido decorativo.

## Footer

El footer debe cerrar con informacion operativa, no con exceso institucional.

Contenido recomendado:

- Horarios.
- Telefono.
- Zona de entrega.
- Redes sociales.

Reglas:

- Mantener contraste alto.
- Usar textos concretos.
- No repetir CTAs si la pantalla ya tiene cierre claro.
- Incluir enlaces temporales solo mientras no existan URLs reales.

## Iconografia

La iconografia debe ser funcional y sobria.

Uso recomendado:

- Acciones: agregar, eliminar, aumentar, disminuir.
- Informacion: horario, telefono, ubicacion, entrega.
- Estados: exito, error, advertencia.

Reglas:

- No usar iconos caricaturescos de mariscos.
- Mantener trazo consistente.
- No reemplazar texto critico solo con icono.
- Acompanar iconos no evidentes con etiqueta o `aria-label`.

## Imagenes

Las imagenes son el principal activo emocional del sistema. Deben comunicar frescura, textura y producto real.

Reglas:

- Priorizar fotografia de platillos reales.
- Usar luz natural o simulacion de luz suave costera.
- Mostrar ingredientes reconocibles.
- Evitar imagenes oscuras, borrosas o excesivamente editadas.
- Optimizar peso y dimensiones.
- Mantener `alt` descriptivo.

Relaciones sugeridas:

- Hero: 4:3 o 16:10 segun composicion.
- Cards: 4:3 estable.
- Especialidades futuras: 1:1 o 4:5 si se busca enfoque editorial.

## Motion

El motion debe orientar, confirmar y suavizar cambios.

Uso permitido:

- Hover sutil en botones.
- Aparicion ligera de tarjetas.
- Feedback breve al agregar producto.
- Transicion de mensajes de error o exito.

Reglas:

- Duraciones entre 120ms y 240ms.
- Easing suave, sin rebotes infantiles.
- Respetar `prefers-reduced-motion`.
- No animar elementos esenciales de forma que retrasen el pedido.

## Responsive

Mobile first significa que el sitio se disena primero para pantallas pequenas y despues se expande.

Reglas:

- Una columna como base.
- Botones principales de ancho completo cuando sea util.
- Tarjetas con dimensiones estables.
- Formularios sin campos comprimidos.
- Desktop debe mejorar comparacion y escaneo, no crear un flujo distinto.
- El carrito debe permanecer facil de encontrar en todos los tamanos.

## Accesibilidad

La accesibilidad es parte de la calidad percibida y de la conversion.

Requisitos base:

- Contraste suficiente entre texto y fondo.
- Estados de foco visibles.
- Botones con nombres claros.
- Mensajes dinamicos con `aria-live` cuando afecten el pedido.
- Imagenes con texto alternativo.
- No depender solo del color para comunicar errores.
- Areas tactiles minimas de 44px.
- Orden logico de lectura y navegacion por teclado.

## Design Tokens

Los tokens permiten traducir decisiones visuales a CSS de forma consistente.

```css
:root {
  --color-sea-deep: #064B5F;
  --color-lagoon: #0E8A9A;
  --color-sand: #F6E8CB;
  --color-coral: #F26D5B;
  --color-leaf: #2F7D5C;
  --color-shell: #FFF9EF;
  --color-foam: #E8F6F4;
  --color-ink: #17323A;
  --color-muted: #65777B;
  --color-line: #D8E4E2;

  --font-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-editorial: Fraunces, Georgia, serif;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 999px;

  --shadow-soft: 0 8px 24px rgba(6, 75, 95, 0.10);
  --shadow-medium: 0 14px 36px rgba(6, 75, 95, 0.14);
  --shadow-button: 0 8px 16px rgba(242, 109, 91, 0.22);
}
```

Estos tokens son una base inicial. Antes de aplicarlos al CSS real, deben compararse contra la interfaz actual para evitar cambios innecesarios o inconsistentes.
