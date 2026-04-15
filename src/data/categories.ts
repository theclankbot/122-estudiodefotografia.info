import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "conceptos-basicos",
    name: "Conceptos basicos",
    tagline: "La base tecnica bien explicada",
    description: "Exposicion, optica, movimiento y fundamentos con ejemplos claros y sin relleno.",
    accent: "var(--accent-amber)",
    intro: "Empieza aqui si quieres dominar lo que pasa antes de apretar el disparador.",
    routeLabel: "Dominar la tecnica",
    startHere: "conceptos-basicos/que-es-el-obturador"
  },
  {
    slug: "composicion",
    name: "Composicion",
    tagline: "Hacer imagenes que digan algo",
    description: "Narrativa visual, pie de foto, mirada, ritmo y decisiones de encuadre.",
    accent: "var(--accent-sage)",
    intro: "Menos reglas vacias y mas criterio para decidir que entra, que se omite y por que.",
    routeLabel: "Construir mejores imagenes",
    startHere: "composicion/pie-de-foto-ejemplos"
  },
  {
    slug: "consejos",
    name: "Consejos",
    tagline: "Decisiones pequenas que cambian el resultado",
    description: "Ajustes, atajos y criterio practico para trabajar mejor con camara, lentes y flujo.",
    accent: "var(--accent-coral)",
    intro: "Consejos concretos para mejorar decisiones reales de disparo, configuracion y trabajo de campo.",
    routeLabel: "Afinar el proceso",
    startHere: "consejos/que-es-un-archivo-nef-y-como-abrir-uno"
  },
  {
    slug: "retrato",
    name: "Retrato",
    tagline: "Direccion, luz y gesto",
    description: "Poses, conexion con la persona fotografiada y recursos practicos para retrato.",
    accent: "var(--accent-coral)",
    intro: "Retrato entendido como direccion visual y comunicacion, no como coleccion de poses vacias.",
    routeLabel: "Dirigir personas",
    startHere: "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres"
  },
  {
    slug: "equipo",
    name: "Equipo",
    tagline: "Elegir herramienta con cabeza",
    description: "Camaras, botones, formatos y comparativas pensadas desde uso real, no desde fichas vacias.",
    accent: "var(--accent-blue)",
    intro: "Camaras, objetivos y controles explicados para comparar mejor y comprar con mas cabeza.",
    routeLabel: "Elegir mejor equipo",
    startHere: "equipo/las-12-mejores-camaras-para-fotografia-de-conciertos"
  },
  {
    slug: "post-produccion",
    name: "Postproduccion",
    tagline: "Revelar mejor, no maquillar peor",
    description: "Camera Raw, flujo de trabajo, nitidez, grano y herramientas de revelado con criterio.",
    accent: "var(--accent-blue)",
    intro: "Todo lo necesario para pasar de archivo plano a imagen terminada sin destrozar la toma.",
    routeLabel: "Editar con intencion",
    startHere: "post-produccion/que-es-adobe-camera-raw-y-como-empezar"
  },
  {
    slug: "tutoriales-de-fotografia",
    name: "Tutoriales",
    tagline: "Aprender haciendo",
    description: "Guias paso a paso para dominar exposicion, ajustes de camara y errores comunes.",
    accent: "var(--accent-amber)",
    intro: "Tutoriales directos para convertir teoria en resultados repetibles.",
    routeLabel: "Practicar con metodo",
    startHere: "tutoriales-de-fotografia/comprension-de-iso-velocidad-de-obturacion-y-apertura-una-guia-para-principiantes"
  },
  {
    slug: "inspiracion",
    name: "Inspiracion",
    tagline: "Referencias que empujan tu mirada",
    description: "Ensayo fotografico, autores, cultura visual y piezas para ampliar el lenguaje.",
    accent: "var(--accent-rose)",
    intro: "Una buena referencia no sirve para copiar, sino para afinar criterio, intencion y ambicion.",
    routeLabel: "Encontrar referencias",
    startHere: "inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas"
  },
  {
    slug: "localizaciones",
    name: "Localizaciones",
    tagline: "Lugares, calle y contexto",
    description: "Fotografia urbana, callejera y referencias vinculadas al espacio y a la observacion.",
    accent: "var(--accent-ink)",
    intro: "La localizacion no es fondo: condiciona ritmo, gesto, luz y lectura de la imagen.",
    routeLabel: "Mirar el espacio",
    startHere: "localizaciones/los-20-fotografos-callejeros-mas-famosos-que-deberias-conocer"
  },
  {
    slug: "documentos-de-identidad",
    name: "Foto carnet",
    tagline: "Utilidad real, no texto inflado",
    description: "Medidas, proporciones y requisitos explicados con tablas claras y calculadoras utiles.",
    accent: "var(--accent-gold)",
    intro: "Medidas, proporciones, recorte y resolucion para preparar fotos de carnet y tramites sin errores.",
    routeLabel: "Resolver una necesidad concreta",
    startHere: "documentos-de-identidad/tamano-carnet-medidas"
  },
  {
    slug: "tecnicas-de-fotografia",
    name: "Tecnicas",
    tagline: "Control fino del oficio",
    description: "Escaneado, profundidad de campo, plantas, calle y otros recursos practicos.",
    accent: "var(--accent-sage)",
    intro: "Tecnica entendida como herramienta para decidir mejor, no como jerga por acumulacion.",
    routeLabel: "Resolver tecnica",
    startHere: "tecnicas-de-fotografia/como-escanear-fotos"
  },
  {
    slug: "edicion-digital",
    name: "Edicion digital",
    tagline: "Restaurar, digitalizar y preservar",
    description: "Escaneado, archivo, recuperacion de fotos y procesos para trabajar material ya existente.",
    accent: "var(--accent-ink)",
    intro: "Para cuando la fotografia empieza en el archivo, en la caja de zapatos o en el album familiar.",
    routeLabel: "Recuperar imagenes",
    startHere: "edicion-digital/digitalizar-imagenes"
  },
  {
    slug: "accesorios-de-fotografia",
    name: "Accesorios",
    tagline: "Complementos con impacto real",
    description: "Drones, monturas, zapatas y accesorios explicados desde el uso real y la compatibilidad.",
    accent: "var(--accent-gold)",
    intro: "Accesorios y complementos explicados desde el uso y la compatibilidad, no desde el catalogo.",
    routeLabel: "Elegir accesorios",
    startHere: "accesorios-de-fotografia/registrar-dron-dji"
  },
  {
    slug: "software",
    name: "Software",
    tagline: "Herramientas que si merecen la pena",
    description: "Programas de edicion, alternativas y guias directas para elegir mejor.",
    accent: "var(--accent-mint)",
    intro: "No todo programa tiene sentido para todo fotografo. Aqui se compara por flujo y resultados.",
    routeLabel: "Elegir software",
    startHere: "software/capture-one-gratis"
  },
  {
    slug: "fotografia",
    name: "Fotografia",
    tagline: "Camaras y temas generales",
    description: "Entradas generales sobre camaras concretas y piezas que no encajan en un cluster mas fino.",
    accent: "var(--accent-ink)",
    intro: "Aqui se reunen camaras concretas y temas generales que siguen siendo utiles por si mismos.",
    routeLabel: "Temas generales",
    startHere: "fotografia/panasonic-lumix-fz82"
  },
  {
    slug: "paisaje-naturaleza",
    name: "Paisaje y naturaleza",
    tagline: "Luz, espacio y respeto por el entorno",
    description: "Paisaje, filtros, viajes eticos y referencias para trabajar la naturaleza con mas criterio.",
    accent: "var(--accent-sage)",
    intro: "Paisaje y naturaleza entendidos desde la luz, el espacio y la relacion etica con el entorno.",
    routeLabel: "Mirar el paisaje",
    startHere: "paisaje-naturaleza/que-es-un-filtro-cpl-como-cuando-y-por-que-usar-uno"
  },
  {
    slug: "proyectos-de-fotografia-creativa",
    name: "Proyectos creativos",
    tagline: "Ideas y ejercicios con una salida visual clara",
    description: "Proyectos, ejercicios y usos creativos de herramientas para practicar con intencion.",
    accent: "var(--accent-rose)",
    intro: "Ideas de proyecto y ejercicios para practicar con un objetivo visual claro.",
    routeLabel: "Activar ideas",
    startHere: "proyectos-de-fotografia-creativa/21-ideas-geniales-de-fotografia-macro-para-probar-hoy"
  },
  {
    slug: "artesania",
    name: "Historia y procesos",
    tagline: "Tecnicas y origenes del medio",
    description: "Historia de la fotografia, procesos tempranos y contexto tecnico-cultural del oficio.",
    accent: "var(--accent-gold)",
    intro: "Para piezas historicas o de procesos tempranos que enriquecen el contexto del medio fotografico.",
    routeLabel: "Entender el origen",
    startHere: "artesania/que-es-daguerrotipo"
  },
  {
    slug: "tecnologia",
    name: "Tecnologia",
    tagline: "Software y flujo desde una mirada practica",
    description: "Temas tecnologicos relacionados con edicion, instalacion y entorno de trabajo visual.",
    accent: "var(--accent-mint)",
    intro: "Tecnologia aplicada al trabajo fotografico, desde instalacion de software hasta herramientas de apoyo.",
    routeLabel: "Resolver tecnologia",
    startHere: "tecnologia/instalar-photoshop"
  },
  {
    slug: "fotografia-de-hombres",
    name: "Fotografia masculina",
    tagline: "Retrato, cuerpo y representacion",
    description: "Piezas vinculadas a retrato masculino, presencia corporal y representacion visual.",
    accent: "var(--accent-coral)",
    intro: "Un subespacio para terminos de busqueda vinculados a retrato masculino y representacion del cuerpo.",
    routeLabel: "Trabajar figura masculina",
    startHere: "fotografia-de-hombres/hombres-gay-musculoso"
  },
  {
    slug: "opiniones",
    name: "Opiniones",
    tagline: "Valoraciones con contexto",
    description: "Opiniones y valoraciones rapidas de producto con foco en uso real.",
    accent: "var(--accent-rose)",
    intro: "Opiniones utiles cuando necesitas una lectura breve y argumentada antes de decidir.",
    routeLabel: "Valorar producto",
    startHere: "opiniones/gopro-10-opiniones"
  },
  {
    slug: "compras",
    name: "Compras",
    tagline: "Impresion y decisiones practicas",
    description: "Consultas orientadas a compra, impresion y decisiones economicas alrededor del flujo fotografico.",
    accent: "var(--accent-amber)",
    intro: "Aqui se reunen dudas de compra e impresion en las que importa resolver rapido, comparar bien y gastar con cabeza.",
    routeLabel: "Resolver compra",
    startHere: "compras/imprimir-economico"
  },
  {
    slug: "resenas",
    name: "Resenas",
    tagline: "Review con criterio",
    description: "Resenas y analisis de camaras con foco en quien las aprovecha mejor.",
    accent: "var(--accent-blue)",
    intro: "Reviews concisas para entender fortalezas, limites y tipo de usuario ideal.",
    routeLabel: "Leer resenas",
    startHere: "resenas/canon-eos-80d"
  }
];
