# Estrategia de migración y relanzamiento de `estudiodefotografia.info`

## Diagnóstico rápido

- CSV de Bing: `394` URLs, `406` clics totales, `117` URLs con al menos `1` clic y `69` URLs con más de `1` clic.
- El tráfico útil está muy concentrado en búsquedas informacionales de fotografía: conceptos, composición, edición, equipo, inspiración y una oportunidad clara en `foto carnet / medidas`.
- El Excel `trad_limpia.xls` no parece una base válida para republicar contenido:
  - Tiene `679` filas.
  - `658` filas contienen referencias a `improvephotography.com`.
  - `661` filas incluyen HTML con imágenes externas.
  - El tono y la redacción son de traducción automática antigua.

## Recomendación

No haría una “migración de contenido” clásica. Haría una reconstrucción completa de la web, conservando las URLs con demanda, pero reescribiendo el contenido desde cero en español nativo, con mejor criterio editorial, mejor UX y una arquitectura mucho más clara.

El Excel sí sirve para dos cosas:

- Detectar temas que existían y no perder intención de búsqueda.
- Recuperar ideas de estructura, ejemplos o apartados, pero nunca como copy final.

## Qué salvar

### Regla base

- Todas las URLs con más de `1` clic deben tener destino.
- En la mayoría de casos conviene mantener la misma URL y publicar una versión nueva muy superior.
- En unas pocas URLs fuera de foco conviene redirigir a un hub más limpio o tomar una decisión de marca.

### Decisiones importantes

- `documentos-de-identidad/tamano-carnet-medidas` hay que salvarla sí o sí. Tiene muchísimas impresiones y encaja perfecto si la conviertes en una utilidad potente.
- Las URLs de intención clara y específica como `NEF`, `ARW`, `CR3`, `obturador`, `gran angular`, `filtros ND`, `paneo`, `EV`, etc. conviene mantenerlas 1:1.
- La URL `inapropiado/mujer-sin-ropa-fotos` requiere decisión de marca:
  - O la conviertes en una guía seria sobre fotografía de desnudo artístico.
  - O asumes perder ese tráfico y respondes con `410 Gone`.
  - Yo no la mantendría tal como estaba.
- Varias URLs de `arte` y similares no encajan con una marca fuerte de fotografía. Mejor redirigirlas a `inspiracion/` o directamente no recrearlas si no aportan negocio.

## Nueva propuesta de posicionamiento

La web debería dejar de parecer un “contenedor SEO traducido” y pasar a ser una referencia en español para aprender fotografía con criterio práctico.

Propuesta de posicionamiento:

> La web de referencia para aprender fotografía, mejorar técnica, elegir equipo y editar mejor, con guías prácticas, comparativas útiles y herramientas reales.

## Arquitectura recomendada

### 1. Home editorial + utilidades

La home no debería ser una lista de posts. Debería funcionar como una portada viva:

- Hero potente con propuesta de valor clara.
- Acceso directo a 4 bloques:
  - Aprender fotografía
  - Editar y revelar
  - Elegir equipo
  - Herramientas y medidas
- Módulo de “Empieza aquí”.
- Módulo de guías destacadas.
- Módulo de comparativas o recursos.
- Newsletter o suscripción.

### 2. Pilares principales

- `/conceptos-basicos/`
- `/composicion/`
- `/retrato/`
- `/equipo/`
- `/post-produccion/`
- `/inspiracion/`
- `/documentos-de-identidad/`
- `/tutoriales-de-fotografia/`

### 3. Hub de utilidades

Aquí tienes una gran oportunidad diferencial. En vez de solo texto, metería herramientas:

- Calculadora de tamaño foto carnet.
- Conversor `4x6` a `px / cm / mm / pulgadas`.
- Tabla de formatos RAW: `NEF`, `ARW`, `CR3`, etc.
- Guía interactiva de exposición.
- Tabla de equivalencias focales.

Esto mejora UX, retención, enlaces internos y posibilidad de captar enlaces.

## Diseño y UX

No haría una web “blog WordPress genérico”. La dirección debería ser más editorial y más premium.

### Dirección visual

- Estética de revista visual, no de nicho SEO barato.
- Tipografía con personalidad.
- Mucho aire, muy buen ritmo vertical y fotografías protagonistas.
- Paleta sobria y cálida:
  - Fondo hueso o gris muy claro.
  - Negro carbón para texto.
  - Un acento cobre / terracota / verde oliva suave.
- Portadas de artículos muy trabajadas.

### UX de artículo

Cada artículo importante debería tener:

- Resumen rápido al inicio.
- Índice fijo o anclado.
- Bloques visuales para ejemplos.
- Tablas limpias.
- Comparativas.
- FAQ real.
- CTA contextual a contenidos relacionados.
- Fecha de actualización visible.

### UX de navegación

- Menú por intención, no por etiquetas antiguas.
- Breadcrumbs.
- Búsqueda visible.
- “Siguiente paso recomendado” al final de cada pieza.
- Bloques de series o rutas de aprendizaje.

## Estrategia editorial

### Lo que sí haría

- Contenido original en español.
- Artículos más cortos cuando la intención sea directa.
- Artículos largos solo cuando el tema lo pida.
- Mucha estructura escaneable.
- Ejemplos reales, tablas, esquemas y utilidades.

### Lo que no haría

- Reescribir el Excel “limpiándolo”.
- Mantener categorías raras o residuales.
- Publicar contenido muy genérico solo por volumen.
- Seguir atrayendo tráfico basura o ambiguo si no encaja con la marca.

## Clústeres prioritarios para relanzamiento

### Fase 1: rescate del tráfico existente

Publicaría primero estas URLs:

- `/documentos-de-identidad/tamano-carnet-medidas/`
- `/inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas/`
- `/conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm/`
- `/composicion/pie-de-foto-ejemplos/`
- `/conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos/`
- `/edicion-digital/digitalizar-imagenes/`
- `/retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres/`
- `/post-produccion/que-es-adobe-camera-raw-y-como-empezar/`
- `/software/capture-one-gratis/`
- `/conceptos-basicos/que-es-imgbb-y-como-usarlo-para-alojamiento-de-imagenes-gratuito/`
- `/post-produccion/que-es-un-archivo-cr3-y-como-abrir-uno/`
- `/consejos/que-es-un-archivo-nef-y-como-abrir-uno/`
- `/conceptos-basicos/que-es-el-obturador/`
- `/conceptos-basicos/que-es-una-lente-gran-angular-y-cuando-usar-una/`
- `/conceptos-basicos/que-es-la-exposicion/`

### Fase 2: autoridad temática

- Exposición: ISO, velocidad, apertura, EV, obturador.
- Óptica: focal, gran angular, retrato, abreviaturas Nikon, botones cámara.
- Revelado: Camera Raw, Photoshop, grano, formatos RAW, alternativas gratuitas.
- Inspiración: fotógrafos clave, ensayo fotográfico, cine y fotografía.

### Fase 3: crecimiento con mejor negocio

- Comparativas de equipo.
- Recursos descargables.
- Herramientas interactivas.
- Newsletter.
- Páginas comerciales si luego quieres monetizar con afiliación, formación o servicios.

## Criterio de migración por tipo de URL

- `rewrite_same`: mantener slug y rehacer desde cero.
- `redirect_hub`: redirigir a una categoría o hub limpio.
- `decision`: requiere decisión editorial o de marca.

He dejado el inventario operativo en:

- [urls-a-salvar.csv](\\192.168.0.21\clank\.hermes\workspace\webs\122-estudiodefotografia.info\Migration\urls-a-salvar.csv)

## Orden realista de trabajo

1. Definir arquitectura final y taxonomías.
2. Levantar la nueva web con diseño editorial fuerte.
3. Publicar primero las URLs con más tráfico y mejor encaje.
4. Configurar redirecciones para lo que no se recree 1:1.
5. Revisar Search Console y Bing tras indexación.
6. Expandir desde los clústeres que ya mostraban demanda.

## Mi criterio final

Sí merece la pena recuperar el dominio y las URLs con intención válida.

No merece la pena “restaurar la web antigua”.

Lo correcto aquí es:

- salvar la intención de búsqueda,
- limpiar la marca,
- rediseñar por completo,
- y convertir el sitio en una publicación de fotografía mucho más útil, visual y creíble.
