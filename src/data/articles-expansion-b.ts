import { createQuickArticle } from "./article-factory";
import type { Article } from "./types";

export const expansionArticlesB: Article[] = [
  {
    slug: "composicion/los-10-elementos-de-la-composicion-en-fotografia",
    category: "composicion",
    title: "Los elementos de la composicion en fotografia que merece la pena dominar",
    description: "Que elementos compositivos cambian de verdad la lectura de una foto y como aplicarlos con criterio.",
    kicker: "Composicion",
    intro: "La composicion deja de parecer una lista arbitraria cuando entiendes que cada elemento organiza la mirada de una forma concreta. No se trata de memorizar reglas, sino de saber que cambia dentro del encuadre cuando desplazas un peso visual, limpias un fondo o decides una direccion.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Jerarquia visual",
    heroLabel: "componer es decidir que mira primero el ojo",
    summary: [
      "Linea, forma, ritmo, color, fondo y escala no son adornos: ordenan la lectura.",
      "Los elementos compositivos funcionan mejor cuando responden al motivo principal de la imagen.",
      "La composicion mejora mucho cuando revisas lo que sobra, no solo lo que quieres meter."
    ],
    sections: [
      {
        title: "Que elementos pesan mas en una foto",
        paragraphs: [
          "Algunos elementos suelen mandar antes que otros. El contraste, la direccion de las lineas, la posicion del sujeto, el fondo y la relacion entre tamanos influyen directamente en como recorremos la imagen.",
          "Por eso conviene pensar la composicion como una suma de relaciones. No miras solo un sujeto: miras su distancia al borde, el espacio que lo rodea, la tension que crean otras formas y el camino que siguen los ojos."
        ],
        bullets: [
          "Linea y direccion para guiar la mirada.",
          "Masa y equilibrio para repartir peso visual.",
          "Fondo y separacion para limpiar lectura."
        ]
      },
      {
        title: "Como aplicar estos elementos sin volverlos mecanicos",
        table: {
          columns: ["Elemento", "Que aporta", "Que conviene revisar"],
          rows: [
            ["Lineas", "Recorrido visual", "Si llevan a algo importante"],
            ["Espacio negativo", "Aire y claridad", "Si realmente suma o vacia demasiado"],
            ["Repeticion", "Ritmo y estructura", "Donde se rompe el patron"],
            ["Contraste", "Jerarquia inmediata", "Si compite con el sujeto principal"]
          ]
        }
      },
      {
        title: "Errores habituales",
        bullets: [
          "Confiar en una sola regla y olvidar el resto de relaciones del encuadre.",
          "Cargar la imagen de elementos que compiten entre si.",
          "No revisar bordes y esquinas antes de disparar.",
          "Pensar la composicion solo desde el sujeto y no desde el fondo."
        ]
      }
    ],
    faq: [
      {
        question: "Hay que usar todos los elementos a la vez",
        answer: "No. Lo normal es que una foto funcione bien con dos o tres relaciones claras. Intentar meterlo todo suele volverla confusa."
      },
      {
        question: "La composicion se corrige mejor al disparar o al editar",
        answer: "Siempre es mejor resolverla al disparar. La edicion puede afinar, pero rara vez compensa una estructura debil de base."
      }
    ],
    related: ["composicion/pie-de-foto-ejemplos", "conceptos-basicos/regla-de-la-mirada"]
  },
  {
    slug: "conceptos-basicos/que-es-la-exposicion",
    category: "conceptos-basicos",
    title: "Que es la exposicion y como empezar a leerla bien",
    description: "Explicacion clara de la exposicion fotografica y de como tomar decisiones utiles segun luz y escena.",
    kicker: "Fundamento",
    intro: "La exposicion no es solo una cantidad de luz. Es una decision que determina como de clara, legible y util sera la imagen para el uso que buscas. Por eso exponer bien no significa siempre dejar la foto neutra, sino construirla con criterio.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Luz con intencion",
    heroLabel: "la exposicion se mide, pero tambien se interpreta",
    summary: [
      "La exposicion afecta brillo, textura, contraste y margen de revelado.",
      "Se entiende mejor cuando la relacionas con ISO, apertura, velocidad e histograma.",
      "Una buena exposicion depende del tipo de escena y del resultado final que quieres."
    ],
    sections: [
      {
        title: "Que significa exponer bien",
        paragraphs: [
          "Exponer bien no consiste en perseguir una foto siempre equilibrada en terminos academicos. Una escena nocturna puede pedir sombras densas y un contraluz puede funcionar mejor si aceptas ciertas zonas oscuras.",
          "Lo importante es que la imagen conserve lo esencial para tu intencion: detalle donde importa, una lectura clara y suficiente margen si vas a editar despues."
        ],
        bullets: [
          "No toda foto buena es luminosa o neutra.",
          "La escena manda mas que una receta fija.",
          "El destino final de la imagen cambia la decision."
        ]
      },
      {
        title: "Como leerla en camara",
        table: {
          columns: ["Herramienta", "Que te dice", "Limite"],
          rows: [
            ["Pantalla", "Impresion rapida", "Puede engañar segun brillo ambiental"],
            ["Histograma", "Distribucion tonal", "No explica por si solo la intencion"],
            ["Aviso de altas luces", "Zonas en riesgo", "No siempre significa que la foto este mal"],
            ["Exposimetro", "Punto de partida", "No piensa por ti"]
          ]
        }
      },
      {
        title: "Cuando revisar y corregir",
        bullets: [
          "En escenas de contraste alto donde las luces se rompen rapido.",
          "Cuando disparas pieles, vestidos blancos o cielos complejos.",
          "Si el archivo ira a una edicion importante.",
          "Cuando la pantalla da una sensacion que no coincide con el histograma."
        ]
      }
    ],
    faq: [
      {
        question: "Una exposicion correcta es siempre la que marca la camara",
        answer: "No. La camara propone una lectura media. Tu decides si esa lectura encaja con la escena o si conviene desplazarla."
      },
      {
        question: "Es mejor quedarse corto o pasarse de luz",
        answer: "Depende del archivo y la escena, pero normalmente las altas luces quemadas son mas delicadas. Aun asi, no hay una regla universal que sustituya a revisar el resultado."
      }
    ],
    related: [
      "tutoriales-de-fotografia/comprension-de-iso-velocidad-de-obturacion-y-apertura-una-guia-para-principiantes",
      "conceptos-basicos/que-es-el-valor-de-exposicion-y-como-usar-ev-en-fotografia"
    ]
  },
  {
    slug: "post-produccion/como-usar-filtros-neurales-en-photoshop-paso-a-paso",
    category: "post-produccion",
    title: "Como usar filtros neurales en Photoshop paso a paso y sin perder el control",
    description: "Guia practica para usar filtros neurales en Photoshop con criterio, revisar resultados y evitar retoques artificiales.",
    kicker: "Photoshop",
    intro: "Los filtros neurales de Photoshop pueden ahorrar tiempo en tareas de retrato, restauracion o cambio de expresion, pero solo funcionan bien cuando se usan como apoyo y no como piloto automatico. El resultado final sigue dependiendo de tu ojo, de la calidad del archivo y de la revision posterior.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "IA supervisada",
    heroLabel: "automatizar una parte no es dejar de editar",
    summary: [
      "Los filtros neurales sirven mejor para ajustes puntuales que para rehacer una foto entera.",
      "Conviene trabajar sobre copia, revisar piel, ojos, bordes y textura antes de aceptar el resultado.",
      "Cuanto mas fuerte es el efecto, mas facil es que aparezcan artificios."
    ],
    sections: [
      {
        title: "En que casos tienen sentido",
        paragraphs: [
          "Los filtros neurales son utiles cuando una tarea concreta te robaria mucho tiempo a mano: mejorar una mascara, suavizar pequenas imperfecciones, recuperar una cara en un retrato antiguo o probar una variante rapida de color.",
          "No compensan cuando la foto ya esta bien resuelta o cuando necesitas precision local muy fina. En esos casos suele dar mejor resultado trabajar con capas, mascaras y ajustes clasicos."
        ],
        bullets: [
          "Retrato ligero con revision posterior.",
          "Restauracion basica de fotos deterioradas.",
          "Pruebas rapidas antes de un ajuste manual mas fino."
        ]
      },
      {
        title: "Paso a paso para usarlos bien",
        table: {
          columns: ["Paso", "Que hacer", "Que revisar despues"],
          rows: [
            ["Preparar", "Duplica la capa o trabaja sobre un objeto inteligente", "Poder volver atras sin destruir el archivo"],
            ["Aplicar", "Elige un filtro y empieza con intensidad baja", "Que la foto siga pareciendo tuya"],
            ["Comparar", "Activa y desactiva el efecto varias veces", "Textura, halos, ojos, dientes y piel"],
            ["Rematar", "Corrige con mascara y opacidad", "Que no queden zonas incoherentes"]
          ]
        }
      },
      {
        title: "Errores que estropean el resultado",
        bullets: [
          "Aceptar el ajuste al cien por cien sin bajar opacidad.",
          "Dejar piel plastica o expresiones irreales.",
          "Usar el filtro para tapar una mala luz o una mala toma.",
          "No revisar bordes de pelo, gafas, nariz o fondo."
        ]
      }
    ],
    faq: [
      {
        question: "Los filtros neurales sirven para cualquier foto",
        answer: "No. Funcionan mejor con archivos razonablemente limpios y con un objetivo claro. En imagenes muy comprimidas o muy complejas pueden fallar bastante."
      },
      {
        question: "Es mejor usar filtros neurales o editar a mano",
        answer: "Depende del trabajo. Para una correccion rapida pueden acelerar mucho. Para un acabado fino, la edicion manual sigue siendo la referencia."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar", "post-produccion/curso-de-camera-raw"]
  },
  {
    slug: "post-produccion/las-45-mejores-acciones-gratuitas-de-photoshop-para-fotografia-creativa",
    category: "post-produccion",
    title: "Acciones gratuitas de Photoshop para fotografia creativa: cuales merece la pena guardar",
    description: "Como evaluar acciones gratuitas de Photoshop, cuando ayudan de verdad y como integrarlas en una edicion con criterio.",
    kicker: "Recursos",
    intro: "Una accion de Photoshop es util cuando automatiza pasos repetitivos y te deja margen para ajustar el acabado. Cuando pretende decidir por ti el look entero de la imagen, suele quedarse en un efecto rapido que envejece pronto.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Atajos utiles",
    heroLabel: "ahorrar tiempo sin renunciar al criterio visual",
    summary: [
      "Las mejores acciones sirven como base editable, no como resultado final cerrado.",
      "Antes de guardarlas conviene revisar que capas crean y que parametros dejan tocar.",
      "Una biblioteca pequena y buena suele rendir mas que un paquete enorme de efectos."
    ],
    sections: [
      {
        title: "Que acciones suelen funcionar mejor",
        paragraphs: [
          "Las acciones mas utiles suelen ser las que ordenan un flujo: separacion de frecuencias sencilla, conversion a blanco y negro, dodge and burn basico, contraste local o preparacion para web e impresion.",
          "Las que prometen convertir cualquier foto en cine, pintura o fantasia con un clic suelen depender demasiado de la imagen de partida. Sirven para probar, pero rara vez para cerrar un trabajo serio."
        ],
        bullets: [
          "Ajustes tecnicos repetitivos.",
          "Preparacion de exportaciones.",
          "Bases de color o contraste faciles de modular."
        ]
      },
      {
        title: "Como decidir si una accion merece quedarse",
        table: {
          columns: ["Criterio", "Que mirar", "Senal de calidad"],
          rows: [
            ["Capas", "Si deja capas editables", "Puedes ajustar sin rehacer todo"],
            ["Mascaras", "Si localiza el efecto", "No castiga toda la imagen por igual"],
            ["Naturalidad", "Si mantiene textura y tono", "La foto no parece prefabricada"],
            ["Repetibilidad", "Si sirve en mas de una imagen", "No depende de una escena concreta"]
          ]
        }
      },
      {
        title: "Como integrarlas en un flujo serio",
        bullets: [
          "Aplicalas despues de corregir exposicion, balance y encuadre.",
          "Ajusta opacidad y mascara antes de dar por bueno el efecto.",
          "Guarda solo las que realmente repites.",
          "Pon nombre claro a las utiles y borra el resto."
        ]
      }
    ],
    faq: [
      {
        question: "Una accion gratuita puede ser profesional",
        answer: "Si. Lo decisivo no es el precio, sino que este bien construida, sea editable y no fuerce un efecto tosco."
      },
      {
        question: "Cuantas acciones conviene tener",
        answer: "Pocas y muy claras. Una seleccion pequena y fiable hace el flujo mas rapido que una carpeta inmensa que nunca revisas."
      }
    ],
    related: ["post-produccion/como-usar-filtros-neurales-en-photoshop-paso-a-paso", "post-produccion/curso-de-camera-raw"]
  },
  {
    slug: "conceptos-basicos/regla-de-la-mirada",
    category: "conceptos-basicos",
    title: "Regla de la mirada: que es y cuando romperla",
    description: "Como funciona la regla de la mirada y en que casos conviene seguirla o romperla con intencion.",
    kicker: "Composicion",
    intro: "La regla de la mirada parte de una idea sencilla: si una persona o un animal mira hacia un lado del encuadre, suele funcionar mejor dejar aire en esa direccion. Ese espacio no es decorativo; ayuda a que la imagen respire y a que la mirada tenga recorrido.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Aire visual",
    heroLabel: "la direccion del gesto tambien compone",
    summary: [
      "Dejar espacio hacia donde mira el sujeto suele dar equilibrio y claridad.",
      "Romper la regla puede generar tension o encierro si se hace a conciencia.",
      "La mirada, el cuerpo y el contexto deben leerse juntos, no por separado."
    ],
    sections: [
      {
        title: "Por que funciona",
        paragraphs: [
          "Cuando dejas aire hacia la direccion de la mirada, la foto resulta mas abierta y legible. El espectador siente que el gesto tiene continuidad dentro del encuadre.",
          "Si recortas demasiado ese espacio, la imagen puede volverse tensa o sofocada. Eso no es necesariamente malo, pero cambia mucho la sensacion."
        ],
        bullets: [
          "Refuerza la direccion visual.",
          "Da mas naturalidad al gesto.",
          "Ayuda a equilibrar el encuadre en retrato y escena."
        ]
      },
      {
        title: "Cuando romperla tiene sentido",
        bullets: [
          "Cuando buscas sensacion de encierro o conflicto.",
          "Si el fondo detras del sujeto cuenta mas que el espacio hacia delante.",
          "Cuando el corte forma parte de una propuesta mas grafica o agresiva."
        ]
      }
    ],
    faq: [
      {
        question: "La regla de la mirada vale solo para retrato",
        answer: "No. Tambien funciona con animales, figuras en movimiento y escenas donde el gesto o la direccion visual tienen peso."
      },
      {
        question: "Romperla significa que la foto esta mal",
        answer: "No. Significa que asumes otra tension visual. La cuestion es si esa tension ayuda a la imagen o la vuelve incomoda sin necesidad."
      }
    ],
    related: ["composicion/pie-de-foto-ejemplos"]
  },
  {
    slug: "tutoriales-de-fotografia/configuracion-recomendada-de-sony-a6400",
    category: "tutoriales-de-fotografia",
    title: "Configuracion recomendada de Sony A6400 para empezar con buen pie",
    description: "Ajustes base para una Sony A6400 segun el tipo de uso y una forma de trabajar razonable.",
    kicker: "Camara",
    intro: "La mejor configuracion para una Sony A6400 no es una lista universal. Lo util es partir de una base limpia y ajustar enfoque, formato, botones y ayudas visuales a tu forma de fotografiar. Esa base evita menu infinito y errores repetidos.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Base limpia",
    heroLabel: "menos friccion, mas fotos utiles",
    summary: [
      "Una buena configuracion inicial reduce dudas y acelera el disparo.",
      "Conviene revisar enfoque, formato de archivo, botones personalizables y ayudas de visualizacion.",
      "La camara debe adaptarse a tu uso principal, no intentar cubrir todos a la vez."
    ],
    sections: [
      {
        title: "Ajustes que conviene revisar primero",
        table: {
          columns: ["Ajuste", "Recomendacion base", "Por que importa"],
          rows: [
            ["Formato", "RAW o RAW+JPG segun flujo", "Te da margen de edicion y una salida rapida si la necesitas"],
            ["AF", "Modo acorde a sujetos estaticos o movimiento", "Evita errores de enfoque por una configuracion generica"],
            ["Botones", "Personaliza funciones frecuentes", "Te ahorra entrar al menu cada dos minutos"],
            ["Pantalla y ayudas", "Histograma y avisos visibles", "Mejor control de exposicion y enfoque"]
          ]
        }
      },
      {
        title: "Como pensar la configuracion segun uso",
        paragraphs: [
          "No es lo mismo preparar la A6400 para retrato, calle, video o viaje. En cada caso cambian las necesidades: rapidez de enfoque, silencio, botones personalizados o forma de revisar la exposicion.",
          "Por eso conviene crear una configuracion razonable para el uso que mas repites y ajustarla despues en situaciones concretas."
        ],
        bullets: [
          "Empieza por tu uso principal, no por escenarios hipoteticos.",
          "Guarda una base sencilla y estable.",
          "Cambia una cosa cada vez para entender su efecto real."
        ]
      }
    ],
    faq: [
      {
        question: "Hay una configuracion perfecta para todo",
        answer: "No. Hay una base sensata que luego se adapta. Cuanto mas universal intentas hacerla, mas incomoda suele resultar."
      },
      {
        question: "Que ajuste suele mejorar mas la experiencia al principio",
        answer: "Normalmente la personalizacion de botones y la eleccion correcta del modo AF, porque afectan al flujo en casi cada foto."
      }
    ],
    related: ["consejos/explicacion-del-boton-af-on"]
  },
  {
    slug: "tecnicas-de-fotografia/como-escanear-fotos",
    category: "tecnicas-de-fotografia",
    title: "Como escanear fotos y conseguir un archivo limpio desde el principio",
    description: "Que hacer para escanear fotos con buena calidad, menos correccion y un archivo mejor organizado.",
    kicker: "Escaneado",
    intro: "Escanear bien una foto ahorra muchisimo trabajo posterior. La limpieza del original, la resolucion correcta y una minima organizacion pesan mas que disparar el ajuste mas alto del escaner por defecto.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Captura limpia",
    heroLabel: "mejor origen, mejor restauracion",
    summary: [
      "Un buen escaneado empieza antes de tocar el boton: limpieza, orientacion y preparacion del original.",
      "Mas resolucion no siempre significa mejor resultado ni mejor archivo.",
      "Nombrar y guardar bien desde el principio evita duplicados y perdida de tiempo."
    ],
    sections: [
      {
        title: "Que preparar antes de escanear",
        bullets: [
          "Limpia polvo y huellas con cuidado.",
          "Comprueba que la foto este plana y bien colocada.",
          "Decide si quieres una copia para archivo o para uso rapido.",
          "Organiza una carpeta clara antes de empezar."
        ]
      },
      {
        title: "Resolucion y formato con sentido",
        table: {
          columns: ["Uso", "Que conviene priorizar", "Error tipico"],
          rows: [
            ["Archivo familiar", "Buen detalle y orden", "Escanear a maxima resolucion sin necesidad"],
            ["Restauracion", "Margen suficiente para trabajar", "Quedarse corto en tamaño"],
            ["Compartir online", "Archivo ligero y legible", "Guardar copias pesadas para un uso pequeño"]
          ]
        }
      },
      {
        title: "Lo que suele dar problemas despues",
        bullets: [
          "Escanear torcido y corregirlo luego una a una.",
          "No separar originales de copias editadas.",
          "Elegir una resolucion excesiva que complica todo el flujo.",
          "Confiar en correcciones automaticas agresivas del software."
        ]
      }
    ],
    faq: [
      {
        question: "Escanear a maxima resolucion siempre es mejor",
        answer: "No. Solo tiene sentido si el uso final lo necesita. Si no, generas archivos pesados sin una mejora real proporcional."
      },
      {
        question: "Conviene corregir color y polvo en el propio software del escaner",
        answer: "Depende. Para lotes sencillos puede ahorrar tiempo, pero si quieres control serio suele ser mejor partir de una base limpia y corregir despues con mas criterio."
      }
    ],
    related: ["edicion-digital/digitalizar-imagenes"]
  },
  {
    slug: "fotografia/panasonic-lumix-fz82",
    category: "fotografia",
    title: "Panasonic Lumix FZ82: para quien tiene sentido una bridge asi",
    description: "Analisis util de la Panasonic Lumix FZ82 para entender sus ventajas, sus limites y el perfil de usuario al que mejor encaja.",
    kicker: "Camara",
    intro: "La Panasonic Lumix FZ82 es una camara puente pensada para quien quiere mucha focal en un solo cuerpo y no quiere entrar en un sistema de objetivos intercambiables. Su valor esta en la comodidad y en el alcance, no en competir con cuerpos mas grandes en calidad pura.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Versatilidad compacta",
    heroLabel: "mucho rango focal a cambio de aceptar ciertos limites",
    summary: [
      "Su mayor baza es tener angular y tele en un cuerpo sencillo de llevar.",
      "Rinde mejor en viaje, observacion y uso familiar que en escenas exigentes de poca luz.",
      "Compensa cuando valoras practicidad por encima de crecimiento de sistema."
    ],
    sections: [
      {
        title: "Donde encaja mejor",
        paragraphs: [
          "Una bridge como esta resulta util en viajes, salidas de naturaleza ligera, eventos familiares y situaciones en las que no quieres cargar con varias lentes. Poder pasar de un plano amplio a uno lejano sin cambiar objetivo tiene mucho valor practico.",
          "Tambien es una opcion razonable para usuarios que quieren una camara dedicada pero no desean invertir en un ecosistema mas complejo."
        ],
        bullets: [
          "Viaje y ocio con un solo cuerpo.",
          "Escenas lejanas donde el alcance manda.",
          "Usuarios que priorizan sencillez."
        ]
      },
      {
        title: "Que conviene asumir antes de comprarla",
        table: {
          columns: ["Aspecto", "Punto fuerte", "Limite"],
          rows: [
            ["Zoom", "Cobertura enorme", "Menor calidad que un sistema especializado"],
            ["Tamano", "Todo integrado", "No cabe como una compacta de bolsillo"],
            ["Manejo", "Facil de usar", "Menor margen para crecer en tecnica"],
            ["Poca luz", "Vale para salir del paso", "Sufre antes que sensores mas grandes"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Es mejor una bridge o una mirrorless basica",
        answer: "Depende del uso. Si quieres alcance inmediato y cero cambios de lente, la bridge es muy comoda. Si buscas mas calidad y evolucion, una mirrorless suele dar mas recorrido."
      },
      {
        question: "Sirve para aprender fotografia",
        answer: "Si, sobre todo para entender encuadre, exposicion y focales. Simplemente hay que aceptar que su techo tecnico aparece antes."
      }
    ],
    related: ["equipo/revision-de-panasonic-lumix-gh5", "equipo/las-12-mejores-camaras-para-fotografia-de-conciertos"]
  },
  {
    slug: "tecnicas-de-fotografia/circulo-de-confusion",
    category: "tecnicas-de-fotografia",
    title: "Circulo de confusion: que significa y por que importa en profundidad de campo",
    description: "Explicacion clara del circulo de confusion y de como afecta a la nitidez aparente y a la lectura de la profundidad de campo.",
    kicker: "Profundidad de campo",
    intro: "El circulo de confusion sirve para explicar por que una zona puede parecer suficientemente nitida aunque no este enfocada de forma exacta. Es una idea tecnica, pero ayuda mucho a entender por que la profundidad de campo no funciona como un corte rigido entre nitido y borroso.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Foco aceptable",
    heroLabel: "la nitidez percibida siempre tiene un margen",
    summary: [
      "La profundidad de campo se apoya en una tolerancia visual, no en un limite absoluto.",
      "El circulo de confusion ayuda a entender hiperfocal, retrato y paisaje con mas sentido.",
      "Ver una zona como nitida depende tambien del tamano final y de la distancia de vision."
    ],
    sections: [
      {
        title: "Que significa en terminos sencillos",
        paragraphs: [
          "Cuando un punto de la escena no cae exactamente en el plano de enfoque, el sensor no lo registra como un punto perfecto, sino como un pequeno circulo. Si ese circulo es muy pequeno para nuestra vista y para el tamano de reproduccion, seguimos percibiendolo como nitido.",
          "Por eso la profundidad de campo es una franja de nitidez aceptable, no una garantia de nitidez perfecta."
        ],
        bullets: [
          "No describe nitidez maxima, sino nitidez tolerable.",
          "Depende de ampliacion y distancia de vision.",
          "Cambia como interpretas las tablas de profundidad de campo."
        ]
      },
      {
        title: "Donde se nota de verdad",
        bullets: [
          "En paisaje cuando calculas hiperfocal.",
          "En retrato cuando quieres saber cuanta cara entra realmente en foco.",
          "En macro, donde ese margen se vuelve minimo.",
          "En impresion grande, donde una tolerancia pequena ya se nota."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta calcularlo siempre",
        answer: "No. Basta con entender la idea para tomar mejores decisiones. Solo en ciertos trabajos tecnicos o de paisaje muy medido compensa entrar en calculos exactos."
      },
      {
        question: "Tiene relacion con el desenfoque del fondo",
        answer: "Si. Te ayuda a entender por que unas zonas quedan dentro de lo aceptablemente nitido y otras caen ya en desenfoque visible."
      }
    ],
    related: ["conceptos-basicos/que-es-el-enfoque-selectivo-y-como-usarlo-para-fotos-geniales", "conceptos-basicos/que-es-la-exposicion"]
  },
  {
    slug: "equipo/que-es-el-boton-ae-l-y-af-l-en-una-nikon-dslr",
    category: "equipo",
    title: "Que hacen los botones AE-L y AF-L en una Nikon DSLR",
    description: "Como funcionan AE-L y AF-L, para que sirven y cuando compensa usarlos en Nikon.",
    kicker: "Controles",
    intro: "Los botones AE-L y AF-L permiten bloquear exposicion y enfoque para trabajar con mas control en escenas donde mides, recompones o quieres mantener una referencia estable. Parecen ajustes avanzados, pero en realidad resuelven problemas muy concretos del disparo diario.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Bloqueos utiles",
    heroLabel: "separar decisiones para disparar mejor",
    summary: [
      "AE-L sirve para mantener una exposicion fija durante unos segundos o durante una recomposicion.",
      "AF-L bloquea el enfoque para que no cambie cuando vuelves a disparar.",
      "Su valor real depende de como mides la luz y de si recompones con frecuencia."
    ],
    sections: [
      {
        title: "Que bloquea cada boton",
        table: {
          columns: ["Boton", "Que fija", "Cuando suele ayudar"],
          rows: [
            ["AE-L", "Exposicion", "Escenas con contrastes o recomposicion"],
            ["AF-L", "Enfoque", "Retrato, sujeto quieto o recomposicion"],
            ["AE-L/AF-L combinado", "Depende de la configuracion", "Flujos personalizados en Nikon"]
          ]
        }
      },
      {
        title: "Situaciones donde mas se nota",
        bullets: [
          "Retratos donde mides una vez y recompones.",
          "Escenas con luz cambiante donde no quieres que la camara recalcule en cada disparo.",
          "Sujetos quietos a los que no hace falta reenfocar una y otra vez.",
          "Momentos en los que quieres separar medicion y disparo."
        ]
      }
    ],
    faq: [
      {
        question: "Estos botones hacen lo mismo que AF-ON",
        answer: "No exactamente. AF-ON se usa para activar enfoque; AF-L lo bloquea. AE-L, por su parte, bloquea la exposicion. Pueden convivir en el mismo flujo."
      },
      {
        question: "Merece la pena personalizarlos",
        answer: "Si trabajas siempre de una forma parecida, si. Una buena personalizacion ahorra menu y hace mas consistente la respuesta de la camara."
      }
    ],
    related: ["consejos/explicacion-del-boton-af-on"]
  },
  {
    slug: "post-produccion/como-abrir-imagenes-sin-procesar-en-gimp-rawtherapee-y-darktable",
    category: "post-produccion",
    title: "Como abrir imagenes RAW en GIMP, RawTherapee y Darktable",
    description: "Opciones gratuitas para abrir y revelar archivos RAW sin depender del ecosistema Adobe.",
    kicker: "Software",
    intro: "Trabajar con RAW sin Adobe es perfectamente viable, pero conviene saber que papel juega cada programa. GIMP, RawTherapee y Darktable no hacen exactamente lo mismo, y entender esa diferencia evita frustracion y flujos desordenados.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "RAW sin Adobe",
    heroLabel: "el flujo importa mas que el nombre del programa",
    summary: [
      "RawTherapee y Darktable cubren bien el revelado base de un RAW.",
      "GIMP encaja mejor como editor posterior que como revelador principal.",
      "La clave esta en ordenar importacion, revelado y exportacion, no en mezclar herramientas sin criterio."
    ],
    sections: [
      {
        title: "Que hace cada programa",
        table: {
          columns: ["Programa", "Donde encaja mejor", "Que conviene saber"],
          rows: [
            ["RawTherapee", "Revelado RAW", "Muy potente, con bastante control y curva de aprendizaje"],
            ["Darktable", "Catalogo y revelado", "Buena opcion para un flujo mas continuo dentro del mismo entorno"],
            ["GIMP", "Edicion posterior", "No sustituye por si solo a un revelador RAW completo"]
          ]
        }
      },
      {
        title: "Una secuencia que suele funcionar bien",
        paragraphs: [
          "Lo mas razonable es abrir y revelar primero el RAW en RawTherapee o Darktable, ajustar exposicion, color, contraste y detalle, y despues exportar a un formato que puedas terminar en GIMP si necesitas retoque local, texto, montajes o capas mas complejas.",
          "Cuando entiendes esa division, el flujo deja de sentirse limitado y se vuelve bastante solido para muchisimos usos."
        ],
        bullets: [
          "Importa y selecciona en el revelador.",
          "Haz ahi el trabajo tonal y de color.",
          "Exporta solo cuando necesites un acabado adicional en GIMP."
        ]
      },
      {
        title: "Errores que complican el proceso",
        bullets: [
          "Intentar usar GIMP como si fuera el revelador principal.",
          "Exportar demasiado pronto y perder margen del RAW.",
          "Ir saltando entre programas sin una funcion clara para cada uno.",
          "No guardar el archivo original y las versiones finales por separado."
        ]
      }
    ],
    faq: [
      {
        question: "Se puede trabajar en serio con RAW sin Adobe",
        answer: "Si. RawTherapee y Darktable ofrecen mucho recorrido real. Lo importante es conocer sus limites y organizar el flujo con cabeza."
      },
      {
        question: "Darktable o RawTherapee, cual conviene mas",
        answer: "Depende de tu manera de trabajar. Darktable suele sentirse mas cercano a un entorno integrado; RawTherapee destaca mucho por su control de revelado."
      }
    ],
    related: ["software/capture-one-gratis", "post-produccion/curso-de-camera-raw"]
  },
  {
    slug: "post-produccion/curso-de-camera-raw",
    category: "post-produccion",
    title: "Curso de Camera Raw: una ruta simple para aprender sin perderte",
    description: "Como plantear una ruta de aprendizaje de Camera Raw con orden, criterio y practica util.",
    kicker: "Aprendizaje",
    intro: "Aprender Camera Raw no consiste en memorizar sliders, sino en entender un orden de decisiones. Cuando el flujo esta claro, el revelado deja de ser una suma de toques aleatorios y empieza a producir resultados repetibles.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Orden de revelado",
    heroLabel: "primero leer la foto, despues mover controles",
    summary: [
      "Camera Raw se aprende mejor con una secuencia corta y estable.",
      "Exposicion, balance de blancos y contraste suelen pesar mas que los efectos llamativos.",
      "La mejora real llega cuando repites un metodo, no cuando pruebas cien ajustes sueltos."
    ],
    sections: [
      {
        title: "Por donde conviene empezar",
        bullets: [
          "Revisar exposicion general y balance de blancos.",
          "Ajustar luces y sombras antes de entrar en detalle fino.",
          "Decidir contraste y presencia con moderacion.",
          "Dejar nitidez, reduccion de ruido y color para una segunda pasada."
        ]
      },
      {
        title: "Una secuencia de estudio util",
        table: {
          columns: ["Etapa", "Que practicar", "Objetivo"],
          rows: [
            ["Base tonal", "Exposicion, blancos, negros", "Lograr una imagen legible"],
            ["Color", "Temperatura, matiz, intensidad", "Dar coherencia cromatica"],
            ["Contraste local", "Textura, claridad, curvas", "Controlar la sensacion visual"],
            ["Salida", "Recorte, exportacion, enfoque final", "Preparar el archivo segun destino"]
          ]
        }
      },
      {
        title: "Que suele frenar el aprendizaje",
        bullets: [
          "Empezar por presets o efectos sin saber leer la imagen.",
          "Mover demasiados controles a la vez.",
          "No comparar antes y despues para entender el efecto real.",
          "Cambiar de metodo en cada foto y no consolidar ninguno."
        ]
      }
    ],
    faq: [
      {
        question: "Conviene usar presets mientras aprendes",
        answer: "Pueden servir como referencia, pero si dependes de ellos demasiado pronto aprendes menos sobre la logica real del revelado."
      },
      {
        question: "Cuantas herramientas hacen falta dominar al principio",
        answer: "Muy pocas. Si entiendes bien exposicion, color, contraste y recorte ya puedes resolver muchisimas fotos con bastante solvencia."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar"]
  },
  {
    slug: "equipo/revision-de-panasonic-lumix-gh5",
    category: "equipo",
    title: "Panasonic Lumix GH5: por que sigue siendo una camara muy capaz en 2026",
    description: "Revision practica de la Panasonic Lumix GH5 para entender donde sigue rindiendo bien y quien puede aprovecharla hoy.",
    kicker: "Review",
    intro: "La GH5 se gano su reputacion por mezclar un cuerpo robusto, video serio y un sistema micro cuatro tercios muy maduro. Hoy sigue teniendo sentido para perfiles concretos, sobre todo si valoran funciones de grabacion, buen manejo y un mercado de segunda mano con mucho recorrido.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Video muy serio",
    heroLabel: "una herramienta madura que aun tiene mucho oficio",
    summary: [
      "Sigue destacando en video, ergonomia y variedad de objetivos.",
      "Es especialmente atractiva si encuentras una buena unidad usada a precio razonable.",
      "Pierde terreno frente a cuerpos mas modernos en enfoque continuo y ciertas prestaciones de sensor."
    ],
    sections: [
      {
        title: "Donde sigue brillando",
        bullets: [
          "Produccion de video con presupuesto contenido.",
          "Uso hibrido donde importa mas el manejo que la novedad.",
          "Usuarios que valoran cuerpos sellados y botones directos.",
          "Quien quiere un sistema amplio sin saltar a formatos mas caros."
        ]
      },
      {
        title: "Lo que conviene mirar con frialdad",
        table: {
          columns: ["Apartado", "Sigue siendo fuerte", "Se nota el paso del tiempo"],
          rows: [
            ["Video", "Formato y controles muy completos", "Hay opciones mas nuevas con AF mejor"],
            ["Cuerpo", "Robusto y comodo", "No es especialmente ligero"],
            ["Sistema", "Micro cuatro tercios muy amplio", "Menor margen de sensor frente a formatos grandes"],
            ["Mercado", "Segunda mano interesante", "Estado y bateria importan mucho"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Vale la pena para foto fija",
        answer: "Si, pero donde mas sigue destacando es en uso hibrido y video. Para foto pura hay alternativas que pueden resultarte mas atractivas segun tu estilo."
      },
      {
        question: "Es buena compra de segunda mano",
        answer: "Puede serlo mucho si el precio es bueno y el estado esta claro. Revisar obturador, puertos, pantalla y bateria es obligatorio."
      }
    ],
    related: ["fotografia/panasonic-lumix-fz82", "equipo/las-12-mejores-camaras-para-fotografia-de-conciertos"]
  },
  {
    slug: "opiniones/gopro-10-opiniones",
    category: "opiniones",
    title: "GoPro 10 opiniones: donde convence y donde no merece forzarla",
    description: "Opinion util sobre la GoPro 10 desde uso real: accion, viaje, ergonomia, autonomia y limites fuera de su terreno natural.",
    kicker: "Opinion",
    intro: "La GoPro 10 tiene sentido cuando necesitas una camara pequena, dura y rapida de colocar en lugares donde otras camaras simplemente no caben o no son practicas. El problema aparece cuando se espera de ella la misma imagen, control o comodidad que de una camara pensada para otro trabajo.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Accion sin rodeos",
    heroLabel: "excelente en movimiento, discreta fuera de ese contexto",
    summary: [
      "Es muy fuerte en deportes, viaje ligero y tomas sujetas al cuerpo o al casco.",
      "Pierde atractivo si la quieres como camara principal de retrato, interior o uso pausado.",
      "Su compra se justifica por escenarios concretos, no por capricho tecnologico."
    ],
    sections: [
      {
        title: "Lo mejor de una GoPro asi",
        bullets: [
          "Tamano minimo y montaje sencillo.",
          "Estabilizacion muy util en accion.",
          "Resistencia y rapidez para situaciones duras.",
          "Video directo y facil de compartir."
        ]
      },
      {
        title: "Donde empieza a quedarse corta",
        paragraphs: [
          "En baja luz, en escenas donde importa el desenfoque, en sonido cuidado o en trabajos donde el encuadre fino y el color delicado son esenciales. No es un defecto: simplemente no esta pensada para eso.",
          "Tambien conviene ser realista con autonomia, calentamiento y necesidad de accesorios si el uso va a ser intensivo."
        ],
        bullets: [
          "Interior y nocturnas exigentes.",
          "Entrevistas y trabajos de sonido serio.",
          "Foto mas pausada o con control fino de optica."
        ]
      }
    ],
    faq: [
      {
        question: "Sirve como unica camara para viajar",
        answer: "Solo si tu viaje gira mucho alrededor de accion, agua o movimiento. Para una cobertura mas amplia suele ser mejor verla como camara complementaria."
      },
      {
        question: "Compensa frente al movil",
        answer: "Compensa cuando necesitas resistencia, gran angular extremo, montaje y estabilizacion en situaciones donde el movil sufre o se vuelve incomodo."
      }
    ],
    related: ["equipo/las-12-mejores-camaras-para-fotografia-de-conciertos", "tecnicas-de-fotografia/21-tipos-de-fotografia-que-debes-conocer"]
  },
  {
    slug: "tecnicas-de-fotografia/seis-consejos-para-mejores-fotografias-de-plantas",
    category: "tecnicas-de-fotografia",
    title: "Consejos para hacer mejores fotografias de plantas con luz, orden y detalle",
    description: "Guia practica para fotografiar plantas con mas claridad visual, buen fondo, enfoque limpio y una luz mas amable.",
    kicker: "Naturaleza",
    intro: "Las plantas exigen una mirada paciente. Como no se mueven apenas, tendemos a disparar sin decidir nada, y por eso aparecen fondos sucios, reflejos feos o encuadres sin jerarquia. Mejorar mucho esta fotografia depende de ordenar la escena y de afinar el punto de interes.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Naturaleza cercana",
    heroLabel: "pequenos sujetos, decisiones muy visibles",
    summary: [
      "El fondo importa casi tanto como la planta.",
      "La mejor luz suele ser suave y lateral, no dura y cenital.",
      "Elegir un punto de interes claro evita fotos bonitas pero vacias."
    ],
    sections: [
      {
        title: "Que conviene decidir antes de disparar",
        bullets: [
          "Si quieres mostrar la planta completa o un detalle concreto.",
          "Que fondo la separa mejor del entorno.",
          "Desde que altura se lee mejor la forma.",
          "Si necesitas profundidad de campo o desenfoque selectivo."
        ]
      },
      {
        title: "Seis ajustes que suelen mejorar casi todo",
        table: {
          columns: ["Ajuste", "Que mejora", "Que vigilar"],
          rows: [
            ["Luz suave", "Textura y color", "No aplanar demasiado la escena"],
            ["Fondo limpio", "Separacion visual", "No cortar hojas de forma torpe"],
            ["Punto de enfoque claro", "Lectura inmediata", "No dejar el sujeto principal fuera de foco"],
            ["Tripode o apoyo", "Nitidez", "Que el viento no arruine la toma"],
            ["Plano cercano", "Detalle", "No perder contexto si era importante"],
            ["Serie corta", "Mas opciones", "Cambiar algo real entre tomas"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Hace falta objetivo macro",
        answer: "No siempre. Para flores medianas o hojas un tele corto o un zoom puede bastar. El macro compensa cuando buscas detalle muy cercano."
      },
      {
        question: "Que hago si hay viento",
        answer: "Busca resguardo, sube velocidad, trabaja en rafagas cortas o sujeta con cuidado el tallo fuera del encuadre si la escena lo permite."
      }
    ],
    related: ["conceptos-basicos/que-es-el-enfoque-selectivo-y-como-usarlo-para-fotos-geniales", "paisaje-naturaleza/que-es-un-filtro-cpl-como-cuando-y-por-que-usar-uno"]
  },
  {
    slug: "resenas/canon-eos-80d",
    category: "resenas",
    title: "Canon EOS 80D: reseña y para quien sigue teniendo sentido",
    description: "Que sigue ofreciendo la Canon EOS 80D y en que casos todavia es una compra razonable o una camara valida.",
    kicker: "Reseña",
    intro: "La Canon EOS 80D pertenece a una generacion de DSLR que aun puede rendir muy bien en aprendizaje, aficion seria y trabajo generalista. La pregunta importante hoy no es si fue buena en su momento, sino si todavia encaja en tu forma real de fotografiar.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "DSLR equilibrada",
    heroLabel: "solvencia por encima de moda",
    summary: [
      "La EOS 80D sigue siendo una camara comoda, estable y capaz para uso general.",
      "Su valor actual depende mucho del precio, del estado y del sistema Canon que ya tengas.",
      "No destaca por ser la mas moderna, sino por ofrecer una experiencia todavia muy util."
    ],
    sections: [
      {
        title: "Donde sigue funcionando bien",
        bullets: [
          "Aprendizaje serio de fotografia con controles completos.",
          "Uso general de retrato, viaje o aficion avanzada.",
          "Personas que valoran ergonomia DSLR y visor optico.",
          "Usuarios con objetivos Canon EF o EF-S ya disponibles."
        ]
      },
      {
        title: "Que conviene valorar hoy",
        table: {
          columns: ["Aspecto", "Lo positivo", "El limite"],
          rows: [
            ["Ergonomia", "Cuerpo comodo y claro de manejar", "Mas volumen que opciones actuales"],
            ["Sistema", "Muchos objetivos compatibles", "Mercado orientado cada vez mas a mirrorless"],
            ["Rendimiento", "Muy suficiente para mucho uso real", "No compite igual en video y AF moderno"],
            ["Precio", "Puede ser muy atractiva usada", "Solo compensa si el estado acompaña"]
          ]
        }
      },
      {
        title: "Para quien no seria la mejor opcion",
        bullets: [
          "Quien prioriza video actual o enfoque de ultima generacion.",
          "Quien quiere el conjunto mas ligero posible.",
          "Quien empieza de cero y no tiene ya equipo Canon reflex."
        ]
      }
    ],
    faq: [
      {
        question: "La EOS 80D sigue siendo buena para aprender",
        answer: "Si. Precisamente su manejo claro y sus controles completos la hacen muy valida para aprender con base tecnica solida."
      },
      {
        question: "Merece la pena comprarla hoy usada",
        answer: "Puede merecer mucho la pena si el precio es bueno, el cuerpo esta bien cuidado y encaja con el sistema de objetivos que piensas usar."
      }
    ],
    related: ["equipo/nikon-z6-frente-a-nikon-d750"]
  },
  {
    slug: "conceptos-basicos/25-errores-que-cometen-todos-los-fotografos-y-que-no-quieren-admitir",
    category: "conceptos-basicos",
    title: "Errores que cometen muchos fotografos y como detectarlos a tiempo",
    description: "Errores frecuentes en fotografia y como revisarlos con criterio para mejorar de forma real.",
    kicker: "Errores",
    intro: "La mayoria de los errores fotograficos no son raros ni sofisticados. Se repiten porque se confunden con costumbre, prisa o una falsa sensacion de estilo. Aprender a detectarlos vale mas que acumular tecnicas nuevas sin revisar lo que falla siempre.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Revisar mejor",
    heroLabel: "mejorar empieza por ver lo que te sabotea",
    summary: [
      "Muchos errores vienen de no revisar fondo, bordes, enfoque y exposicion antes de disparar.",
      "La revision posterior honesta acelera mucho mas el aprendizaje que disparar por volumen.",
      "No hace falta corregirlo todo a la vez: basta con detectar tus fallos mas repetidos."
    ],
    sections: [
      {
        title: "Los fallos que mas se repiten",
        bullets: [
          "Fondos sucios o con elementos que salen de la cabeza del sujeto.",
          "Horizontes torcidos sin intencion.",
          "Punto de enfoque mal colocado.",
          "Recortes torpes en manos, pies o bordes del encuadre.",
          "Exceso de confianza en que la edicion lo arreglara despues."
        ]
      },
      {
        title: "Por que cuesta tanto verlos",
        paragraphs: [
          "Porque mientras disparas miras sobre todo al sujeto o al momento y dejas en segundo plano el resto del encuadre. Ademas, cuando repites un mismo fallo, acabas normalizandolo.",
          "La forma mas util de romper ese patron es revisar series completas, no solo las fotos que mas te gustan."
        ]
      },
      {
        title: "Como corregirlos de verdad",
        table: {
          columns: ["Error", "Que hacer antes", "Que revisar despues"],
          rows: [
            ["Fondo confuso", "Moverte o simplificar encuadre", "Si compite con el sujeto"],
            ["Foco fallido", "Elegir mejor punto AF", "Donde esta realmente la nitidez"],
            ["Exposicion floja", "Mirar histograma y luces", "Si la decision coincide con tu intencion"],
            ["Recorte torpe", "Revisar bordes antes de disparar", "Que partes sobran o faltan"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Es mejor disparar mucho para mejorar mas rapido",
        answer: "Solo si revisas con criterio. Disparar mucho sin analizar errores puede consolidar malos habitos."
      },
      {
        question: "Que error conviene corregir primero",
        answer: "El que mas se repite en tus fotos. Normalmente fondo, enfoque o exposicion suelen dar el mayor salto cuando se corrigen."
      }
    ],
    related: ["conceptos-basicos/como-tomar-buenas-fotografias-10-pasos-infalibles"]
  },
  {
    slug: "composicion/las-mejores-memorias-fotograficas",
    category: "composicion",
    title: "Memorias fotograficas recomendables para aprender a mirar y a trabajar mejor",
    description: "Por que merece la pena leer memorias de fotografos y que se aprende de estos libros mas alla de la tecnica.",
    kicker: "Lecturas",
    intro: "Las memorias fotograficas sirven para entrar en el proceso de un autor: sus dudas, su manera de recorrer lugares, su relacion con el encargo, el archivo o la obsesion personal. Esa parte del oficio rara vez aparece en tutoriales, y sin embargo condiciona mucho la mirada.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Aprender del proceso",
    heroLabel: "leer tambien forma la mirada fotografica",
    summary: [
      "Estos libros aportan contexto, metodo y relacion con el tiempo.",
      "Ayudan a entender como piensan los autores cuando no estan disparando.",
      "Son especialmente valiosos si buscas una practica mas madura y menos impulsiva."
    ],
    sections: [
      {
        title: "Que buscar en una buena memoria fotografica",
        bullets: [
          "Que cuente proceso y no solo anecdotas.",
          "Que explique dudas, fracasos y decisiones.",
          "Que relacione la obra con vida, contexto y oficio.",
          "Que deje algo aplicable a tu propia practica."
        ]
      },
      {
        title: "Como sacarles partido de verdad",
        paragraphs: [
          "No hace falta leer una biblioteca entera. Lo util es elegir algunos autores que conecten con tu manera de trabajar o con el tipo de fotografia que quieres comprender mejor.",
          "Mientras lees, anota decisiones concretas: como editaban, como elegian un proyecto, como trataban a la gente o como construian una serie. Eso se puede trasladar a tu trabajo mucho mejor que una frase grandilocuente."
        ]
      }
    ],
    faq: [
      {
        question: "Sirven tambien para principiantes",
        answer: "Si, porque enseñan a pensar la fotografia como practica y no solo como ajuste tecnico. Solo conviene leerlas con paciencia y sin esperar recetas."
      },
      {
        question: "Es mejor leer memorias o teoria",
        answer: "Las dos cosas cumplen funciones distintas. La teoria aclara conceptos; las memorias muestran como esos conceptos se viven en una trayectoria real."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "inspiracion/las-15-citas-mas-importantes-de-susan-sontag-sobre-fotografia"]
  },
  {
    slug: "tutoriales-de-fotografia/como-evitar-fotos-borrosas",
    category: "tutoriales-de-fotografia",
    title: "Como evitar fotos borrosas y entender por que fallaron",
    description: "Guia practica para evitar fotos borrosas por foco, movimiento del sujeto o trepidacion.",
    kicker: "Nitidez",
    intro: "Una foto borrosa no siempre falla por la misma razon. A veces el problema es enfoque, otras movimiento del sujeto y otras la propia estabilidad del disparo. Si no distingues la causa, es facil corregir lo equivocado.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Diagnostico primero",
    heroLabel: "cada falta de nitidez pide una solucion distinta",
    summary: [
      "No toda borrosidad es igual: foco fallido, trepidacion y movimiento se corrigen de forma distinta.",
      "Velocidad, modo AF y tecnica de disparo influyen mas de lo que parece.",
      "Corregir en la captura siempre funciona mejor que intentar salvarlo despues."
    ],
    sections: [
      {
        title: "Como distinguir la causa",
        table: {
          columns: ["Problema", "Que suele verse", "Que revisar"],
          rows: [
            ["Foco fallido", "Otra zona sale mas nitida que el sujeto", "Punto AF y modo de enfoque"],
            ["Trepidacion", "Toda la foto parece arrastrada", "Velocidad y estabilidad al disparar"],
            ["Movimiento del sujeto", "El fondo puede verse bien y el sujeto no", "Tiempo de exposicion y ritmo de la escena"]
          ]
        }
      },
      {
        title: "Ajustes que mas ayudan",
        bullets: [
          "Subir velocidad cuando el sujeto o tu pulso lo exigen.",
          "Elegir un modo AF coherente con la escena.",
          "Sujetar mejor la camara o apoyarte si la luz es escasa.",
          "No confiar ciegamente en que la estabilizacion arregla todo."
        ]
      },
      {
        title: "Que conviene revisar despues de disparar",
        paragraphs: [
          "Si una serie sale blanda, no basta con repetir. Amplia una imagen, mira donde esta el foco real y valora si el problema ha sido velocidad, tecnica o configuracion.",
          "Ese gesto de revision corta mucho tiempo de aprendizaje porque te obliga a relacionar el fallo con una decision concreta."
        ]
      }
    ],
    faq: [
      {
        question: "Una foto borrosa siempre se puede arreglar en edicion",
        answer: "No. Hay herramientas que mejoran un poco la percepcion, pero una falta de nitidez fuerte casi nunca se recupera de forma convincente."
      },
      {
        question: "Que suele arreglar mas fotos: subir ISO o bajar velocidad",
        answer: "Si el problema es borrosidad por movimiento o pulso, normalmente conviene ganar velocidad aunque implique subir ISO."
      }
    ],
    related: ["conceptos-basicos/que-es-el-obturador", "consejos/explicacion-del-boton-af-on"]
  },
  {
    slug: "inspiracion/15-fotografos-de-comida-famosos-para-inspirarte",
    category: "inspiracion",
    title: "Fotografos de comida famosos para estudiar luz, textura y puesta en escena",
    description: "Seleccion de referentes de fotografia gastronomica para aprender direccion de luz, color y construccion visual del plato.",
    kicker: "Food",
    intro: "La fotografia de comida obliga a dominar varias cosas a la vez: textura, apetito visual, color, vajilla, estilismo y luz. Por eso estudiar buenos autores del genero resulta tan util incluso aunque no te dediques a fotografia gastronomica.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Textura y apetito",
    heroLabel: "la comida se lee con luz, orden y detalle",
    summary: [
      "Los mejores autores del genero controlan muy bien volumen, brillo y color.",
      "La referencia util no esta solo en el plato, sino en fondo, utileria y distancia de camara.",
      "Es un campo excelente para aprender a simplificar."
    ],
    sections: [
      {
        title: "Que conviene mirar en estos referentes",
        bullets: [
          "Direccion de la luz y dureza de las sombras.",
          "Cantidad de informacion alrededor del plato.",
          "Uso del color para abrir apetito o crear atmosfera.",
          "Relacion entre realismo comercial y mirada mas autoral."
        ]
      },
      {
        title: "Como estudiar fotografia de comida sin quedarte en la superficie",
        paragraphs: [
          "No te limites a guardar imagenes bonitas. Elige algunas y analiza por que funcionan: desde donde entra la luz, donde esta el punto de maxima textura, que parte del encuadre limpia la escena y como se organiza la mesa o el fondo.",
          "Ese ejercicio sirve luego para retrato, producto o bodegon, porque el control visual es muy transferible."
        ]
      }
    ],
    faq: [
      {
        question: "Sirve este genero aunque no quiera fotografiar comida",
        answer: "Mucho. Ayuda a entender luz, color, textura y puesta en escena de una forma muy clara."
      },
      {
        question: "Que pesa mas en fotografia gastronomica, la camara o el estilismo",
        answer: "La imagen final depende mucho mas de luz, estilismo y orden de escena que del cuerpo concreto de camara."
      }
    ],
    related: ["inspiracion/los-22-mejores-fotografos-de-bellas-artes-que-debes-conocer", "consejos/10-fotografos-contemporaneos-de-bodegones-que-debes-ver"]
  },
  {
    slug: "composicion/como-disparar-desde-la-cadera",
    category: "composicion",
    title: "Como disparar desde la cadera y cuando tiene sentido hacerlo",
    description: "Guia practica para trabajar street photography desde la cadera con anticipacion, distancia y encuadre mas controlados.",
    kicker: "Calle",
    intro: "Disparar desde la cadera no consiste en fotografiar a ciegas. Funciona cuando conoces bien tu focal, tu distancia de trabajo y el tipo de escena que estas buscando. Es una tecnica de anticipacion, no una excusa para el azar.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Anticipacion real",
    heroLabel: "sin visor, pero no sin criterio",
    summary: [
      "La clave esta en previsualizar angulo, distancia y altura antes de disparar.",
      "Una focal fija moderada y una distancia conocida facilitan mucho la tecnica.",
      "Cuanto mas entiendes el espacio, menos aleatorio sale el resultado."
    ],
    sections: [
      {
        title: "Como prepararla bien",
        bullets: [
          "Trabaja con una focal que ya conozcas.",
          "Deja una velocidad suficiente para congelar el gesto.",
          "Usa una apertura que te de margen de foco.",
          "Ajusta la camara antes de entrar en la escena."
        ]
      },
      {
        title: "Que cambia respecto a disparar con visor",
        paragraphs: [
          "La gran diferencia es que dejas de corregir al milimetro en el instante final. Por eso la lectura de trayectorias, fondos y distancias se vuelve mas importante.",
          "Tambien cambia la relacion con la calle: trabajas mas por flujo, por ritmo y por intuicion entrenada que por composicion cerrada al momento."
        ],
        bullets: [
          "Mas rapidez, menos precision instantanea.",
          "Mayor necesidad de conocer tu encuadre real.",
          "Mejor para escenas vivas que para composicion estatica."
        ]
      }
    ],
    faq: [
      {
        question: "Es una tecnica solo para fotografia callejera",
        answer: "Es donde mas se usa, pero tambien puede servir en eventos o escenas rapidas donde levantar la camara rompe el gesto."
      },
      {
        question: "Como mejorarla",
        answer: "Repitiendo con la misma focal, revisando resultados y corrigiendo distancia y altura. La memoria visual se entrena."
      }
    ],
    related: ["localizaciones/los-20-fotografos-callejeros-mas-famosos-que-deberias-conocer", "conceptos-basicos/regla-de-la-mirada"]
  },
  {
    slug: "consejos/8-consejos-para-proteger-las-fotografias-impresas",
    category: "consejos",
    title: "Consejos para proteger fotografias impresas y conservarlas durante anos",
    description: "Como guardar, manipular y archivar copias impresas para que duren mas tiempo en buen estado.",
    kicker: "Archivo",
    intro: "Una fotografia impresa se deteriora sobre todo por luz, humedad, calor y manipulacion deficiente. La buena noticia es que la mayor parte de esos danos se pueden prevenir con materiales correctos y unas pocas rutinas de archivo.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Conservar mejor",
    heroLabel: "pequenos cuidados que alargan mucho la vida de una copia",
    summary: [
      "Guardar bien es mas importante que limpiar despues.",
      "Fundas, cajas y papel libre de acido marcan una diferencia real.",
      "La luz directa y la humedad siguen siendo los riesgos mas faciles de evitar."
    ],
    sections: [
      {
        title: "Que materiales ayudan de verdad",
        bullets: [
          "Fundas y cajas de archivo libres de acido.",
          "Separadores de papel adecuado entre copias delicadas.",
          "Guantes o manos limpias para manipular.",
          "Etiquetado por fuera para no tocar de mas."
        ]
      },
      {
        title: "Rutina minima para conservarlas bien",
        table: {
          columns: ["Riesgo", "Como prevenirlo", "Resultado"],
          rows: [
            ["Luz", "Evita sol directo y exposicion continua", "Menos perdida de color"],
            ["Humedad", "Guarda en lugar seco y estable", "Menos curvatura y hongos"],
            ["Rozamiento", "Usa fundas y separadores", "Menos rayas y marcas"],
            ["Manipulacion", "Toca solo lo necesario", "Menos huellas y grasa"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Hace falta material de archivo profesional",
        answer: "No siempre. Con fundas y cajas correctas, un lugar estable y buena manipulacion ya mejoras mucho la conservacion."
      },
      {
        question: "Se pueden enmarcar sin estropearlas",
        answer: "Si, pero conviene usar materiales adecuados, separacion del cristal y evitar una pared con mucho sol o humedad."
      }
    ],
    related: ["edicion-digital/digitalizar-imagenes", "compras/imprimir-economico"]
  },
  {
    slug: "equipo/nikon-z6-frente-a-nikon-d750",
    category: "equipo",
    title: "Nikon Z6 vs Nikon D750: que cambia de verdad entre mirrorless y DSLR",
    description: "Comparativa util entre Nikon Z6 y Nikon D750 segun visor, enfoque, video, ergonomia y tipo de flujo.",
    kicker: "Comparativa",
    intro: "Comparar la Nikon Z6 con la D750 es comparar dos formas de trabajar. Una representa una mirrorless moderna con visor electronico y enfoque mas flexible sobre sensor; la otra, una DSLR muy apreciada por ergonomia, autonomia y visor optico. La mejor no es la mas nueva, sino la que encaja con tu manera de fotografiar.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Dos filosofias",
    heroLabel: "tecnologia distinta, sensaciones de uso muy distintas",
    summary: [
      "La Z6 gana sobre todo en enfoque sobre sensor, visor electronico y video.",
      "La D750 sigue gustando por bateria, visor optico y experiencia reflex clasica.",
      "El paso de una a otra cambia tanto el flujo como la ficha tecnica."
    ],
    sections: [
      {
        title: "Donde se nota mas la diferencia",
        table: {
          columns: ["Aspecto", "Nikon Z6", "Nikon D750"],
          rows: [
            ["Visor", "Electronico con previsualizacion", "Optico directo y natural"],
            ["Enfoque", "Mas flexible sobre el encuadre", "Muy solido, mas clasico"],
            ["Video", "Mejor planteado para uso hibrido", "Mas limitado"],
            ["Autonomia", "Menor por visor y pantalla", "Muy buena en uso prolongado"]
          ]
        }
      },
      {
        title: "Que usuario suele preferir cada una",
        bullets: [
          "Z6 para quien valora ayudas de visor, video y transicion a sistema Z.",
          "D750 para quien disfruta la experiencia DSLR y ya tiene opticas F.",
          "Z6 si haces mas hibrido o enfoque variable en encuadre.",
          "D750 si buscas una full frame robusta y comoda a buen precio."
        ]
      }
    ],
    faq: [
      {
        question: "Merece la pena cambiar una D750 por una Z6",
        answer: "Solo si las ventajas concretas de la Z6 te resuelven algo real: video, enfoque sobre sensor, visor electronico o paso al sistema Z."
      },
      {
        question: "La D750 sigue siendo valida hoy",
        answer: "Si. Sigue siendo una camara muy competente para foto fija si te encaja el flujo DSLR y el estado de la unidad es bueno."
      }
    ],
    related: ["equipo/las-12-mejores-camaras-para-fotografia-de-conciertos", "conceptos-basicos/que-significa-dslr"]
  },
  {
    slug: "equipo/lista-de-camaras-con-gps-incorporado-y-algunos-consejos-sobre-etiquetado-geografico",
    category: "equipo",
    title: "Camaras con GPS incorporado y consejos para usar bien el etiquetado geografico",
    description: "Que aporta el GPS integrado en una camara, cuando compensa activarlo y como usar la geolocalizacion con sentido.",
    kicker: "Metadatos",
    intro: "El GPS integrado sirve para anadir coordenadas a las fotos en el momento del disparo. Eso puede ser muy util en viaje, naturaleza, archivo documental o catalogacion de grandes sesiones, pero solo merece la pena si despues vas a aprovechar ese dato y si aceptas su impacto en bateria y privacidad.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Lugar y archivo",
    heroLabel: "geolocalizar tiene valor cuando mejora tu organizacion",
    summary: [
      "El GPS ayuda sobre todo en catalogacion y recuerdo espacial.",
      "No siempre compensa activarlo por consumo y por privacidad.",
      "La geolocalizacion es mas util si ya trabajas bien tus metadatos."
    ],
    sections: [
      {
        title: "Cuando merece la pena",
        bullets: [
          "Viajes con muchas localizaciones distintas.",
          "Archivo de naturaleza, ruta o documental.",
          "Proyectos donde luego buscas imagenes por lugar.",
          "Equipos de trabajo que necesitan trazabilidad del material."
        ]
      },
      {
        title: "Que conviene revisar antes de usarlo siempre",
        table: {
          columns: ["Tema", "Ventaja", "Cuidado"],
          rows: [
            ["Archivo", "Busqueda por lugar", "Hay que mantener metadatos ordenados"],
            ["Viaje", "Recuerdo exacto de ubicacion", "Puede agotar mas la bateria"],
            ["Seguridad", "Mejor contexto documental", "No siempre interesa compartir ubicacion"],
            ["Precision", "Dato automatico", "No siempre es perfecto en interiores o zonas densas"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Es mejor GPS integrado o geolocalizar luego con el movil",
        answer: "Depende del flujo. El integrado es comodo; el movil puede dar mas flexibilidad si prefieres ahorrar bateria en la camara."
      },
      {
        question: "Hay que publicar siempre esos datos",
        answer: "No. Muchas veces conviene conservarlos en tu archivo pero quitarlos en la version publica por privacidad o proteccion del lugar."
      }
    ],
    related: ["accesorios-de-fotografia/registrar-dron-dji", "edicion-digital/digitalizar-imagenes"]
  }
];
