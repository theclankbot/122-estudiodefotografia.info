import { createQuickArticle } from "./article-factory";
import type { Article } from "./types";

export const expansionArticlesD: Article[] = [
  {
    slug: "proyectos-de-fotografia-creativa/como-usar-editar-y-compartir-fotos-en-vivo-en-tu-iphone",
    category: "proyectos-de-fotografia-creativa",
    title: "Fotos en vivo en iPhone: como usarlas, editarlas y compartirlas mejor",
    description: "Que hacer con las Live Photos del iPhone y como sacarles partido sin que se queden en un simple efecto.",
    kicker: "iPhone",
    intro: "Las Live Photos capturan un pequeño fragmento de tiempo alrededor del disparo. Eso puede servir para elegir mejor el instante, rescatar una expresion mas natural o crear una pieza visual con algo mas de vida que una foto fija, siempre que se use con criterio.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Movimiento ligero",
    heroLabel: "ni foto fija ni video completo",
    summary: [
      "Las Live Photos ayudan a conservar contexto y pequeños gestos alrededor de una imagen.",
      "Pueden convertirse en una foto mejor elegida, un bucle o una pieza mas expresiva para compartir.",
      "Funcionan cuando el movimiento suma algo al momento, no cuando solo se activa por costumbre."
    ],
    sections: [
      {
        title: "Cuando tiene sentido usarlas",
        bullets: [
          "Retratos informales con expresiones cambiantes.",
          "Escenas cotidianas donde un gesto breve importa.",
          "Imagenes que luego quieras convertir en bucle o en foto con mejor fotograma.",
          "Recuerdos rapidos donde el contexto temporal suma."
        ]
      },
      {
        title: "Que conviene editar",
        table: {
          columns: ["Ajuste", "Para que sirve", "Que mirar"],
          rows: [
            ["Fotograma clave", "Elegir el mejor instante", "Expresion, nitidez y gesto"],
            ["Recorte y tono", "Mejorar la lectura", "Que el movimiento no distraiga"],
            ["Efecto bucle o rebote", "Dar continuidad", "Que no se note forzado o repetitivo"],
            ["Compartir", "Adaptar formato", "Donde se vera mejor y con que peso"]
          ]
        }
      },
      {
        title: "Cuando se quedan en una curiosidad",
        bullets: [
          "Si todas se activan por defecto sin pensar.",
          "Cuando el movimiento no aporta nada al momento.",
          "Si el resultado final solo ocupa mas espacio sin mejorar la imagen.",
          "Cuando se comparte un archivo pesado para una escena irrelevante."
        ]
      }
    ],
    faq: [
      {
        question: "Las Live Photos sustituyen a un video corto",
        answer: "No. Son una solucion intermedia muy ligera, util para un gesto o un instante ampliado, no para narracion sostenida."
      },
      {
        question: "Se puede sacar una buena foto fija de una Live Photo",
        answer: "Si, y de hecho esa es una de sus utilidades mas practicas: elegir el mejor fotograma cuando el instante exacto cambia en una fraccion de segundo."
      }
    ],
    related: ["proyectos-de-fotografia-creativa/como-convertir-fotos-en-pinturas-con-photoshop"]
  },
  {
    slug: "conceptos-basicos/que-significa-dslr",
    category: "conceptos-basicos",
    title: "Que significa DSLR y por que el termino sigue importando",
    description: "Definicion clara de DSLR, como funciona y que la diferencia de otros tipos de camara.",
    kicker: "Glosario",
    intro: "Aunque las mirrorless dominen hoy buena parte del mercado, entender que significa DSLR sigue siendo util para leer comparativas, comprar equipo usado y situar mejor muchas camaras que siguen funcionando perfectamente.",
    readTime: "6 min",
    updatedAt: "2026-04-14",
    heroStat: "Reflex digital",
    heroLabel: "un termino clave para entender muchas comparativas",
    summary: [
      "DSLR significa camara reflex digital de un solo objetivo.",
      "Su diferencia central esta en el uso de espejo y visor optico.",
      "Conocer el termino ayuda a entender mejor ergonomia, enfoque y ecosistema de lentes."
    ],
    sections: [
      {
        title: "Que define a una DSLR",
        paragraphs: [
          "Una DSLR utiliza un sistema de espejo para llevar la imagen al visor optico. Cuando disparas, ese espejo se levanta y la luz llega al sensor para registrar la foto.",
          "Esa arquitectura condiciona el tamaño del cuerpo, la experiencia del visor y buena parte del comportamiento tradicional de este tipo de camaras."
        ],
        bullets: [
          "Visor optico en lugar de visor electronico.",
          "Cuerpo normalmente mas voluminoso.",
          "Amplio mercado de objetivos y accesorios."
        ]
      },
      {
        title: "Por que el termino sigue siendo util",
        bullets: [
          "Para entender comparativas frente a mirrorless.",
          "Para moverte mejor en mercado de segunda mano.",
          "Para leer compatibilidades de objetivos y accesorios.",
          "Para situar la experiencia de uso de muchas camaras todavia vigentes."
        ]
      }
    ],
    faq: [
      {
        question: "DSLR y reflex significan lo mismo",
        answer: "En la practica se usan casi como sinonimos, pero DSLR especifica que hablamos de una reflex digital."
      },
      {
        question: "Una DSLR esta obsoleta por definicion",
        answer: "No. Puede no ser la opcion mas moderna, pero sigue siendo perfectamente valida si encaja con tu uso, tu presupuesto y tus objetivos."
      }
    ],
    related: ["equipo/nikon-z6-frente-a-nikon-d750"]
  },
  {
    slug: "consejos/10-fotografos-contemporaneos-de-bodegones-que-debes-ver",
    category: "consejos",
    title: "Fotografos contemporaneos de bodegon que merece la pena estudiar",
    description: "Seleccion de autores actuales de bodegon para aprender luz, forma, textura y construccion de escena.",
    kicker: "Bodegon",
    intro: "El bodegon sigue siendo una escuela formidable para aprender a ver. Como todo esta quieto, cada decision se vuelve visible: la direccion de la luz, la distancia entre objetos, la tension del color, la textura de una superficie o la cantidad de aire que dejas alrededor. Por eso estudiar autores contemporaneos del genero resulta tan util.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Control total",
    heroLabel: "objeto, luz y espacio trabajando a la vez",
    summary: [
      "El bodegon contemporaneo mezcla tecnica clasica y una sensibilidad mas actual de color y concepto.",
      "Mirar buenos autores ayuda a entender como se construye una escena solida desde cero.",
      "Es un genero ideal para entrenar composicion y luz sin prisas."
    ],
    sections: [
      {
        title: "Que conviene analizar en estos autores",
        bullets: [
          "Como organizan objetos grandes y pequenos.",
          "De que lado llega la luz y que tipo de sombra deja.",
          "Que papel cumple el fondo: neutro, narrativo o grafico.",
          "Como trabajan color, material y textura."
        ]
      },
      {
        title: "Por que el bodegon mejora tu fotografia aunque hagas otra cosa",
        paragraphs: [
          "El bodegon ensena a controlar relaciones visuales sin depender del azar. Eso despues sirve en producto, retrato, gastronomia o incluso paisaje, porque aprendes a ordenar mejor el encuadre.",
          "Tambien obliga a pensar antes de disparar. Cuando el sujeto no se escapa, ya no hay excusa para no afinar la luz o el orden de la escena."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta estudio para practicar bodegon",
        answer: "No. Con una mesa, una ventana y algunos objetos bien elegidos se pueden hacer ejercicios muy buenos."
      },
      {
        question: "Es un genero util para principiantes",
        answer: "Mucho. Precisamente porque todo esta bajo control y cada cambio se entiende con claridad."
      }
    ],
    related: ["inspiracion/15-fotografos-de-comida-famosos-para-inspirarte", "composicion/los-10-elementos-de-la-composicion-en-fotografia"]
  },
  {
    slug: "retrato/las-16-mejores-ideas-para-selfies-para-que-tus-fotos-de-perfil-se-destaquen",
    category: "retrato",
    title: "Ideas para selfies y fotos de perfil con una base visual mas solida",
    description: "Como mejorar selfies y fotos de perfil con luz, angulo, fondo y expresion mas coherentes.",
    kicker: "Selfie",
    intro: "Una buena selfie no depende de parecer espontanea ni de repetir un gesto de moda. Funciona cuando la luz favorece, el fondo no molesta y la expresion encaja con el uso real de esa imagen, ya sea una red social, un perfil profesional o una cuenta personal.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Imagen clara",
    heroLabel: "un buen retrato corto necesita orden, no postureo",
    summary: [
      "La luz natural suave y un fondo limpio mejoran mas que cualquier filtro.",
      "El angulo debe favorecer la cara sin deformarla ni parecer forzado.",
      "La mejor foto de perfil suele ser la que se entiende rapido y transmite bien."
    ],
    sections: [
      {
        title: "Que ideas suelen funcionar de verdad",
        bullets: [
          "Ventana lateral con pared limpia de fondo.",
          "Exterior en sombra abierta para un tono suave.",
          "Plano medio corto en lugar de primerisimo plano extremo.",
          "Expresion simple y mirada coherente con el uso de la imagen."
        ]
      },
      {
        title: "Errores muy comunes en selfies",
        table: {
          columns: ["Error", "Que provoca", "Como corregirlo"],
          rows: [
            ["Camara demasiado cerca", "Rostro deformado", "Aleja el movil o usa temporizador"],
            ["Techo o foco duro", "Sombras feas", "Busca ventana o sombra abierta"],
            ["Fondo cargado", "Distraccion", "Simplifica la escena"],
            ["Filtro fuerte", "Aspecto artificial", "Ajusta con moderacion"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Es mejor selfie o foto hecha por otra persona",
        answer: "Si puedes, una foto hecha por otra persona suele darte mejor distancia y angulo. Pero una selfie bien preparada tambien puede quedar muy bien."
      },
      {
        question: "Que fondo conviene para una foto de perfil",
        answer: "Uno limpio y sin ruido visual, con un color o una textura que no compita contigo."
      }
    ],
    related: ["retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres", "fotografia-de-hombres/hombres-gay-musculoso"]
  },
  {
    slug: "tecnicas-de-fotografia/21-tipos-de-fotografia-que-debes-conocer",
    category: "tecnicas-de-fotografia",
    title: "Tipos de fotografia para orientarte mejor",
    description: "Panorama de generos fotograficos para entender mejor que pide cada campo y hacia donde quieres profundizar.",
    kicker: "Panorama",
    intro: "Conocer tipos de fotografia sirve menos para etiquetar y mas para entender que problemas, ritmos, herramientas y decisiones pide cada campo. Ese mapa ayuda a situarte, a detectar afinidades y a aprender de otras disciplinas sin encerrarte en una sola.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Generos y usos",
    heroLabel: "cada campo te obliga a mirar de otra manera",
    summary: [
      "Cada tipo de fotografia tiene un ritmo, una tecnica y una relacion distinta con el sujeto.",
      "Conocer generos ayuda a elegir mejor donde practicar y que herramientas priorizar.",
      "No hace falta especializarse de inmediato para aprender mucho de varios campos."
    ],
    sections: [
      {
        title: "Como cambia el problema segun el genero",
        table: {
          columns: ["Genero", "Que pide mas", "Que suele enseñar"],
          rows: [
            ["Retrato", "Direccion y relacion humana", "Luz, gesto y expresion"],
            ["Paisaje", "Tiempo y estructura", "Composicion, luz natural y paciencia"],
            ["Calle", "Anticipacion y lectura", "Rapidez, encuadre y timing"],
            ["Producto o bodegon", "Control total", "Luz, precision y construccion visual"],
            ["Deporte o accion", "Respuesta tecnica", "Enfoque, velocidad y anticipacion"]
          ]
        }
      },
      {
        title: "Para que sirve conocerlos aunque no te especialices",
        paragraphs: [
          "Porque cada genero te obliga a resolver un tipo de problema visual distinto. Incluso si nunca te dedicas al bodegon, estudiar ese campo puede mejorar tu control de luz. Aunque no hagas calle a menudo, te puede enseñar ritmo y lectura del espacio.",
          "Ese cruce entre disciplinas suele acelerar mucho el aprendizaje."
        ],
        bullets: [
          "Te ayuda a descubrir donde disfrutas mas.",
          "Evita comprar o practicar a ciegas.",
          "Amplia tu mirada incluso dentro de tu genero favorito."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta elegir un solo tipo de fotografia al principio",
        answer: "No. De hecho suele ser mejor probar varios para entender mejor tus intereses y tu manera de trabajar."
      },
      {
        question: "Todos los generos piden equipo muy distinto",
        answer: "No siempre. A veces cambia mas la forma de mirar y de moverte que el equipo en si."
      }
    ],
    related: ["conceptos-basicos/como-tomar-buenas-fotografias-10-pasos-infalibles"]
  },
  {
    slug: "tutoriales-de-fotografia/guia-completa-de-fotografia-en-blanco-y-negro",
    category: "tutoriales-de-fotografia",
    title: "Fotografia en blanco y negro: guia completa para trabajar tono y forma",
    description: "Como pensar y revelar fotografia en blanco y negro desde luz, contraste, textura y estructura.",
    kicker: "Blanco y negro",
    intro: "Trabajar en blanco y negro no consiste en quitar el color. Consiste en decidir como se va a sostener la imagen con luz, forma, textura y contraste. Cuando esas relaciones no estan claras, la conversion rara vez mejora la foto.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Tono y estructura",
    heroLabel: "el blanco y negro pide otra forma de mirar",
    summary: [
      "El blanco y negro obliga a leer mejor volumen, textura y separacion tonal.",
      "No todas las escenas mejoran al perder color; algunas viven precisamente de el.",
      "Conviene pensar el resultado desde el disparo o, como minimo, desde el revelado inicial."
    ],
    sections: [
      {
        title: "Que escenas suelen funcionar mejor",
        bullets: [
          "Escenas con buena estructura de luces y sombras.",
          "Retratos donde textura y gesto pesan mas que el color.",
          "Arquitectura, calle o paisaje con lineas y volumen claros.",
          "Imagenes donde el color distrae mas de lo que aporta."
        ]
      },
      {
        title: "Que deberias mirar antes de convertir",
        table: {
          columns: ["Aspecto", "Por que importa", "Que revisar"],
          rows: [
            ["Contraste", "Sostiene la separacion de planos", "Si hay suficiente diferencia entre zonas"],
            ["Textura", "Da cuerpo a la imagen", "Si aporta o ensucia"],
            ["Forma", "Reemplaza parte del papel del color", "Si el sujeto se entiende sin ayuda cromatica"],
            ["Fondo", "Puede volverse mas invasivo", "Si compite tonalmente con el sujeto"]
          ]
        }
      },
      {
        title: "Errores comunes",
        bullets: [
          "Convertir por rutina cualquier foto mediocre.",
          "Exagerar contraste hasta perder matiz.",
          "Olvidar que las pieles tambien necesitan suavidad y rango tonal.",
          "Pensar que blanco y negro significa automaticamente mas autoral."
        ]
      }
    ],
    faq: [
      {
        question: "Es mejor disparar ya pensando en blanco y negro",
        answer: "Si. Cuando anticipas el resultado es mas facil buscar luz, textura y relaciones tonales que funcionen de verdad."
      },
      {
        question: "Una foto floja en color mejora al pasarla a blanco y negro",
        answer: "No necesariamente. Si la estructura visual es debil, quitar el color rara vez la convierte en una foto fuerte."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar"]
  },
  {
    slug: "conceptos-basicos/10-increibles-aplicaciones-de-camara-con-ia-que-deberias-probar-tu-mismo",
    category: "conceptos-basicos",
    title: "Aplicaciones de camara con IA: que aportan y que no",
    description: "Que hacen las apps de camara con IA y en que casos conviene usarlas sin perder el control de la imagen.",
    kicker: "Apps",
    intro: "Las aplicaciones de camara con IA prometen fotos mejores casi sin esfuerzo, pero conviene mirar con calma que parte es realmente util y que parte es solo procesado agresivo disfrazado de inteligencia. La automatizacion puede ayudar mucho, siempre que no te quite control ni coherencia visual.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Automatismo inteligente",
    heroLabel: "rapidez si sabes donde esta el limite",
    summary: [
      "Estas apps suelen destacar en procesado rapido, limpieza automatica y ayuda al disparo.",
      "El problema aparece cuando exageran textura, piel, color o nitidez sin que lo notes a tiempo.",
      "La mejor app no es la que mas hace sola, sino la que te deja intervenir con criterio."
    ],
    sections: [
      {
        title: "Donde suelen resultar utiles",
        bullets: [
          "Mejoras rapidas para uso movil y comparticion inmediata.",
          "Ayudas automáticas de escena, HDR o reducción de ruido.",
          "Pruebas creativas ligeras cuando no necesitas un flujo completo de edición."
        ]
      },
      {
        title: "Que conviene vigilar",
        table: {
          columns: ["Aspecto", "Riesgo habitual", "Que revisar"],
          rows: [
            ["Piel", "Suavizado artificial", "Si el rostro sigue pareciendo real"],
            ["Detalle", "Nitidez falsa", "Si aparecen halos o textura extraña"],
            ["Color", "Saturacion excesiva", "Si la escena sigue siendo creible"],
            ["Cielo o fondo", "Procesado desigual", "Si hay cortes o cambios raros"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Estas apps sustituyen una buena tecnica de captura",
        answer: "No. Pueden ayudar mucho en velocidad y automatismos, pero no reemplazan luz, composicion ni criterio al disparar."
      },
      {
        question: "Merece la pena usarlas para todo",
        answer: "No. Funcionan mejor en usos rapidos y moviles. Cuando quieres consistencia o control serio, conviene un flujo mas estable."
      }
    ],
    related: ["software/adobe-rueda-de-color"]
  },
  {
    slug: "conceptos-basicos/por-que-los-fotografos-utilizan-fondos-verdes",
    category: "conceptos-basicos",
    title: "Por que los fotografos utilizan fondos verdes y cuando tiene sentido",
    description: "Que resuelve un fondo verde, en que contextos funciona y que hace falta para que no se convierta en un problema.",
    kicker: "Croma",
    intro: "El fondo verde no se usa porque sea un color especial en si mismo, sino porque facilita separar sujeto y fondo en postproduccion cuando la iluminacion y el planteamiento estan bien hechos. Fuera de ese contexto, puede complicar mas de lo que ayuda.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Separar para sustituir",
    heroLabel: "el croma funciona cuando todo lo demas acompaña",
    summary: [
      "El fondo verde facilita recorte y sustitucion del fondo en foto y video.",
      "Su eficacia depende mucho de la iluminacion, la distancia al sujeto y la limpieza del borde.",
      "No tiene sentido usarlo si la sesion no necesita realmente ese reemplazo posterior."
    ],
    sections: [
      {
        title: "Por que precisamente verde",
        paragraphs: [
          "El verde suele separarse bien de muchos tonos de piel y ropa habituales, lo que ayuda al recorte digital. No significa que sea siempre la unica opcion, pero si una de las mas practicas en muchos entornos.",
          "Aun asi, el color por si solo no resuelve nada si la escena tiene sombras duras, reflejos o demasiado rebote sobre el sujeto."
        ]
      },
      {
        title: "Que hace que funcione de verdad",
        bullets: [
          "Iluminar el fondo de forma uniforme.",
          "Separar al sujeto lo suficiente para evitar rebote verde.",
          "Cuidar pelo, transparencias y bordes complicados.",
          "Pensar desde el principio en el fondo que ira despues."
        ]
      }
    ],
    faq: [
      {
        question: "Se puede usar fondo verde en fotografia y no solo en video",
        answer: "Si. Aunque se asocie mucho al video, tambien se usa en fotografia cuando el recorte posterior es parte real del trabajo."
      },
      {
        question: "El fondo verde arregla una mala postproduccion",
        answer: "No. Al contrario: si esta mal iluminado o mal planteado, la edicion se vuelve mucho mas dificil."
      }
    ],
    related: ["post-produccion/como-usar-filtros-neurales-en-photoshop-paso-a-paso"]
  },
  {
    slug: "conceptos-basicos/que-es-el-visor-de-la-camara-y-como-funciona",
    category: "conceptos-basicos",
    title: "Que es el visor de la camara y como funciona",
    description: "Que tipos de visor existen, como cambian la experiencia de disparo y que conviene mirar en cada uno.",
    kicker: "Visor",
    intro: "El visor condiciona bastante mas de lo que parece la forma de fotografiar. No es solo un accesorio para encuadrar: cambia ritmo, anticipacion, comodidad y hasta la forma en que interpretas la exposicion antes de disparar.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Optico o electronico",
    heroLabel: "dos formas distintas de mirar antes del disparo",
    summary: [
      "El visor permite encuadrar con mas control y menos distraccion que la pantalla trasera.",
      "El visor optico y el electronico ofrecen experiencias distintas de lectura y respuesta.",
      "Entender esa diferencia ayuda a elegir mejor camara y flujo de trabajo."
    ],
    sections: [
      {
        title: "Que hace realmente un visor",
        paragraphs: [
          "El visor te aísla parcialmente del entorno para que veas mejor la escena, el encuadre y ciertos datos de disparo. Eso suele dar mas precision, sobre todo con mucha luz exterior o en situaciones rapidas.",
          "Tambien influye en la postura, en la estabilidad y en la sensacion de cercania con la escena."
        ],
        bullets: [
          "Mejora visibilidad frente a la pantalla en exterior.",
          "Ayuda a estabilizar la camara al apoyarla en la cara.",
          "Permite leer mejor gesto y timing en muchas situaciones."
        ]
      },
      {
        title: "Optico frente a electronico",
        table: {
          columns: ["Tipo", "Ventaja principal", "Limite habitual"],
          rows: [
            ["Optico", "Vision directa y natural", "No muestra previsualizacion real de exposicion"],
            ["Electronico", "Previsualiza exposicion y color", "Puede sentirse menos natural o con retraso segun modelo"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "El visor electronico es siempre mejor",
        answer: "No. Tiene ventajas claras en previsualizacion, pero el optico sigue gustando mucho por inmediatez y naturalidad."
      },
      {
        question: "Se puede fotografiar bien solo con pantalla",
        answer: "Si, pero hay contextos donde el visor da mas precision, estabilidad y comodidad."
      }
    ],
    related: ["conceptos-basicos/que-significa-dslr", "equipo/nikon-z6-frente-a-nikon-d750"]
  },
  {
    slug: "consejos/explicacion-de-la-calibracion-del-color-de-la-camara",
    category: "consejos",
    title: "Calibracion del color de la camara: que significa y cuando importa",
    description: "Que se entiende por calibracion del color y como afecta a la coherencia entre captura, edicion y salida.",
    kicker: "Color",
    intro: "Hablar de calibracion del color suele mezclar varias cosas a la vez: el perfil de la camara, la pantalla, el revelado y la salida final. Separar esos niveles es la unica forma de entender que conviene hacer y para quien realmente compensa.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Color consistente",
    heroLabel: "menos misterio y mas flujo coherente",
    summary: [
      "La calibracion busca que captura, pantalla y salida se parezcan mas entre si.",
      "No todo el mundo necesita el mismo nivel de precision cromatica.",
      "Cobra mas importancia cuando imprimes, entregas a cliente o trabajas producto y pieles con exigencia."
    ],
    sections: [
      {
        title: "Que se suele confundir",
        bullets: [
          "Calibrar la camara no es lo mismo que calibrar la pantalla.",
          "Un buen perfil de color no arregla una mala exposicion.",
          "Ver una foto bonita en tu monitor no garantiza una salida coherente.",
          "No toda desviacion de color exige un flujo profesional complejo."
        ]
      },
      {
        title: "Donde merece mas la pena prestar atencion",
        table: {
          columns: ["Situacion", "Por que importa", "Que conviene cuidar"],
          rows: [
            ["Impresion", "El papel evidencia desviaciones", "Pantalla y gestion de color"],
            ["Producto", "El color debe ser fiel", "Perfiles consistentes y control de luz"],
            ["Retrato", "Las pieles son muy sensibles", "Balance de blancos y revelado coherente"],
            ["Uso casual", "El margen es mayor", "Una base razonable suele bastar"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Hace falta calibrar todo si solo subo fotos a redes",
        answer: "No con el mismo nivel de exigencia. Una base razonable de pantalla y un flujo coherente suelen ser suficientes para ese uso."
      },
      {
        question: "La calibracion es solo para profesionales",
        answer: "No, pero se vuelve mas importante cuanto mas control cromatico necesitas en tu resultado final."
      }
    ],
    related: ["software/adobe-rueda-de-color"]
  },
  {
    slug: "consejos/que-es-el-valor-en-la-fotografia-y-como-usarlo",
    category: "consejos",
    title: "Que es el valor en fotografia y como usarlo para leer mejor la imagen",
    description: "Como entender el valor tonal y aplicarlo a composicion, contraste y lectura visual.",
    kicker: "Valor tonal",
    intro: "En fotografia, valor suele referirse al grado de claridad u oscuridad de una zona. Aprender a verlo cambia mucho la forma de componer, revelar y leer una imagen, porque te obliga a pensar en estructura tonal y no solo en objetos o colores.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Claro y oscuro",
    heroLabel: "la estructura tonal sostiene media foto",
    summary: [
      "El valor tonal organiza separacion, profundidad y jerarquia visual.",
      "Importa tanto en blanco y negro como en color, aunque a veces pase mas desapercibido.",
      "Ver bien los valores ayuda a componer mejor y a revelar con mas precision."
    ],
    sections: [
      {
        title: "Que aporta el valor a la imagen",
        paragraphs: [
          "El valor tonal define como se reparten claros, medios y oscuros. Esa relacion hace que una imagen respire, tenga peso o se vuelva confusa. Muchas fotos fallan no por falta de color, sino por una estructura tonal pobre.",
          "Por eso el valor es una herramienta clave para separar sujeto y fondo, sostener volumen y dirigir la atencion."
        ],
        bullets: [
          "Separa elementos aunque compartan color parecido.",
          "Refuerza volumen y profundidad.",
          "Hace mas clara la lectura general."
        ]
      },
      {
        title: "Como empezar a verlo mejor",
        bullets: [
          "Convierte mentalmente la escena en zonas claras y oscuras.",
          "Observa si el sujeto principal destaca por valor o se pierde.",
          "Revisa el fondo no solo por forma, tambien por tono.",
          "En revelado, ajusta pensando en jerarquia, no solo en impacto."
        ]
      }
    ],
    faq: [
      {
        question: "El valor solo importa en blanco y negro",
        answer: "No. En blanco y negro se ve con mas claridad, pero en color sigue siendo fundamental para organizar la imagen."
      },
      {
        question: "Se puede mejorar el valor solo en edicion",
        answer: "Se puede afinar mucho, pero funciona mejor cuando ya lo tenias en cuenta al disparar y al elegir la escena."
      }
    ],
    related: ["tutoriales-de-fotografia/guia-completa-de-fotografia-en-blanco-y-negro"]
  },
  {
    slug: "resenas/nikon-50mm-f-1-2-ai-s",
    category: "resenas",
    title: "Nikon 50mm f/1.2 AI-S: por que este clasico sigue interesando",
    description: "Resena practica del Nikon 50mm f/1.2 AI-S y de lo que aporta hoy frente a opticas mas modernas y comodas.",
    kicker: "Optica",
    intro: "El Nikon 50mm f/1.2 AI-S sigue llamando la atencion por una razon sencilla: ofrece una experiencia de uso y un caracter visual que no se resumen en una ficha tecnica. Quien se acerca a el suele buscar dibujo, construccion y una forma mas pausada de trabajar.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Clasico luminoso",
    heroLabel: "menos comodidad, mas personalidad y tacto manual",
    summary: [
      "Su interes real esta en el caracter, la apertura y la experiencia de enfoque manual.",
      "No es una lente para quien quiera velocidad ni precision automatica inmediata.",
      "Tiene mucho sentido en retrato pausado, detalle y disfrute del manejo."
    ],
    sections: [
      {
        title: "Que ofrece todavia hoy",
        bullets: [
          "Construccion robusta y tacto muy agradable.",
          "Luminosidad real para trabajar con poca luz y profundidad corta.",
          "Una imagen con personalidad propia a maxima apertura.",
          "Un ritmo mas lento que invita a mirar mejor."
        ]
      },
      {
        title: "Que exige a cambio",
        paragraphs: [
          "La principal exigencia es aceptar el enfoque manual como parte del proceso. A aperturas grandes el margen es muy estrecho, asi que cualquier prisa se paga rapido.",
          "Tambien conviene asumir que no es la opcion mas practica para trabajos dinamicos o encargos donde prima la velocidad."
        ]
      }
    ],
    faq: [
      {
        question: "Merece la pena frente a un 50 mm moderno",
        answer: "Si buscas comodidad total, no. Si buscas experiencia, construccion y una respuesta visual mas clasica, puede merecer mucho la pena."
      },
      {
        question: "Es solo una lente de coleccionista",
        answer: "No. Se puede usar muy bien en trabajo real, pero pide paciencia y una manera de disparar mas consciente."
      }
    ],
    related: ["retrato/cual-es-la-mejor-lente-para-retratos-las-30-mejores-selecciones", "consejos/abreviaturas-de-lentes-nikon-y-lo-que-significan-una-guia-facil"]
  },
  {
    slug: "retrato/imagen-mujer-arabe",
    category: "retrato",
    title: "Retrato de mujer arabe: como trabajar representacion con respeto y contexto",
    description: "Claves para abordar un retrato culturalmente situado con sensibilidad, contexto y una direccion visual seria.",
    kicker: "Retrato cultural",
    intro: "Cuando una fotografia se cruza con identidad, cultura o religion, el reto principal no es tecnico. Lo importante es evitar la simplificacion, escuchar a la persona retratada y construir una imagen que no convierta la diferencia en decorado. Eso exige contexto, consentimiento y una mirada menos exotizante.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Representar bien",
    heroLabel: "el respeto visual empieza mucho antes del disparo",
    summary: [
      "Un retrato cultural serio se construye con escucha y precision, no con simbolos rapidos.",
      "La puesta en escena debe responder a la persona, no a un estereotipo.",
      "La fotografia mejora cuando el contexto pesa mas que el efecto."
    ],
    sections: [
      {
        title: "Que conviene cuidar especialmente",
        bullets: [
          "Hablar antes sobre intencion, uso y limites del retrato.",
          "Evitar vestuario o atrezzo impuesto para reforzar una idea ajena.",
          "Preguntar por detalles sensibles de representacion o publicacion.",
          "Elegir fondo, luz y gesto desde la dignidad, no desde el exotismo."
        ]
      },
      {
        title: "Como hacer que la imagen tenga verdad",
        paragraphs: [
          "Una imagen funciona mejor cuando la persona retratada puede reconocerse en ella. Eso significa dejar espacio a su forma de posar, de vestir, de mirar y de decidir que se quiere mostrar.",
          "Tambien ayuda que el entorno y el pie de foto aporten contexto si la imagen se va a publicar. La fotografia rara vez se lee sola."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta evitar cualquier referencia cultural visible",
        answer: "No. Lo importante no es borrar la cultura, sino no reducir a la persona a un estereotipo o a un signo superficial."
      },
      {
        question: "Que papel tiene el consentimiento aqui",
        answer: "Central. Consentimiento claro, contexto de uso y respeto por la imagen final son imprescindibles."
      }
    ],
    related: ["composicion/pie-de-foto-ejemplos", "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres"]
  },
  {
    slug: "accesorios-de-fotografia/objetivo-descentrable",
    category: "accesorios-de-fotografia",
    title: "Objetivo descentrable: que es y cuando merece la pena usar uno",
    description: "Que hace un objetivo descentrable y por que puede ser clave en arquitectura, interiorismo o fotografia de producto.",
    kicker: "Optica especial",
    intro: "Un objetivo descentrable permite mover o inclinar el plano optico para controlar perspectiva y enfoque de una forma que una lente convencional no ofrece. Es una herramienta muy especializada, pero en ciertos trabajos marca una diferencia enorme.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Perspectiva bajo control",
    heroLabel: "una lente para quien necesita precision optica real",
    summary: [
      "Su gran valor esta en corregir verticales y controlar plano de enfoque.",
      "Es especialmente util en arquitectura, interiorismo y producto.",
      "Solo compensa si esa precision resuelve un problema real de trabajo."
    ],
    sections: [
      {
        title: "Que puede hacer que una lente normal no hace",
        bullets: [
          "Corregir caidas de perspectiva sin recortar tanto en edicion.",
          "Mover el encuadre manteniendo lineas mas limpias.",
          "Ajustar el plano de enfoque en situaciones concretas.",
          "Construir una imagen tecnica mas precisa desde camara."
        ]
      },
      {
        title: "Donde suele notarse su ventaja",
        table: {
          columns: ["Uso", "Que aporta", "Por que importa"],
          rows: [
            ["Arquitectura", "Verticales mas limpias", "Evita edificios deformados"],
            ["Interiores", "Mayor control de lineas", "Imagen mas profesional"],
            ["Producto", "Plano de enfoque afinado", "Mas legibilidad del objeto"],
            ["Paisaje creativo", "Control selectivo", "Uso mas experimental"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Se puede corregir lo mismo en edicion",
        answer: "Parte si, pero no siempre con la misma calidad ni con la misma resolucion util. Empezar bien desde camara sigue teniendo ventaja."
      },
      {
        question: "Es una lente para cualquiera",
        answer: "No. Es una herramienta de nicho y solo merece la pena si tu trabajo pide ese control con frecuencia."
      }
    ],
    related: ["conceptos-basicos/guia-para-principiantes-de-lentes-de-camara-partes-funciones-y-tipos", "tecnicas-de-fotografia/circulo-de-confusion"]
  },
  {
    slug: "composicion/lineas-convergentes",
    category: "composicion",
    title: "Lineas convergentes: como usarlas para dar profundidad y tension",
    description: "Guia clara sobre las lineas convergentes y sobre como aprovecharlas en arquitectura, calle y paisaje.",
    kicker: "Composicion",
    intro: "Las lineas convergentes son una de las herramientas mas directas para empujar la mirada hacia un punto concreto y crear sensacion de profundidad. Bien usadas, ordenan el encuadre; mal usadas, convierten la imagen en un recurso demasiado obvio sin nada interesante al final del recorrido.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Recorrido visual",
    heroLabel: "la mirada entra mejor cuando el encuadre sabe llevarla",
    summary: [
      "Funcionan muy bien para reforzar profundidad y dirigir la atencion.",
      "Suelen aparecer de forma natural en arquitectura, carreteras, vias o pasillos.",
      "Necesitan un punto de llegada o una tension que sostenga la imagen."
    ],
    sections: [
      {
        title: "Como hacer que funcionen",
        bullets: [
          "Busca un sujeto, una luz o un vacio interesante al final del recorrido.",
          "Decide si quieres simetria o una convergencia mas lateral.",
          "Cuida que las lineas no saquen la mirada fuera del encuadre.",
          "Simplifica el fondo para que el recorrido se lea mejor."
        ]
      },
      {
        title: "Errores frecuentes",
        paragraphs: [
          "El mas habitual es confiar demasiado en la geometria y olvidarse de que la foto necesita algo mas. La estructura puede ser fuerte, pero si no hay sujeto, atmosfera o sentido, la imagen se queda en ejercicio visual.",
          "Tambien conviene vigilar lineas cortadas, verticales torcidas sin intencion y exceso de informacion en los bordes."
        ]
      }
    ],
    faq: [
      {
        question: "Solo sirven en arquitectura",
        answer: "No. Tambien aparecen en paisaje, calle, puentes, caminos, sombras y cualquier escena con direccion marcada."
      },
      {
        question: "Es mejor que converjan al centro",
        answer: "No necesariamente. A veces un punto desplazado genera mas tension y mas interes que una solucion centrada."
      }
    ],
    related: ["paisaje-naturaleza/paisajes-con-lineas", "composicion/los-10-elementos-de-la-composicion-en-fotografia"]
  },
  {
    slug: "consejos/como-lograr-una-fotografia-cinematografica-con-desenfoque-de-movimiento-con-la-regla-de-180-grados",
    category: "consejos",
    title: "Regla de 180 grados y desenfoque de movimiento: como lograr un look cinematografico",
    description: "Explicacion clara de la regla de 180 grados y de como afecta al motion blur en video y trabajos hibridos.",
    kicker: "Video",
    intro: "La regla de 180 grados relaciona la velocidad de obturacion con la frecuencia de imagen para que el movimiento se vea natural dentro de un lenguaje cinematografico reconocible. No es una norma sagrada, pero si una base muy util para saber por que ciertas secuencias se sienten fluidas y otras demasiado duras o demasiado blandas.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Movimiento natural",
    heroLabel: "la velocidad de obturacion cambia mucho la sensacion del plano",
    summary: [
      "La regla vincula obturacion y frame rate para crear motion blur equilibrado.",
      "Ayuda a evitar un movimiento demasiado nervioso o artificial.",
      "Conviene conocerla incluso si luego decides romperla."
    ],
    sections: [
      {
        title: "Como se aplica de forma simple",
        bullets: [
          "Si grabas a 24 fps, una obturacion cercana a 1/48 o 1/50 suele funcionar bien.",
          "Si subes a 50 fps o 60 fps, ajusta la obturacion en la misma logica.",
          "Piensa la regla como punto de partida, no como imposicion rigida.",
          "Usa filtros ND si necesitas mantener esa velocidad con mucha luz."
        ]
      },
      {
        title: "Cuando conviene apartarse de ella",
        paragraphs: [
          "A veces interesa romper la regla para crear un efecto mas nervioso, mas seco o mas estilizado, por ejemplo en accion intensa, videoclip o cierta publicidad. El problema no es apartarse, sino hacerlo sin saber que cambia.",
          "Si entiendes primero el look natural, despues puedes decidir con mas criterio cuando buscar algo mas agresivo o mas etereo."
        ]
      }
    ],
    faq: [
      {
        question: "Es solo una regla para video",
        answer: "Su uso principal esta en video, pero entenderla tambien aclara por que ciertos desenfoques de movimiento se perciben de forma mas agradable."
      },
      {
        question: "Si no la sigo, la imagen esta mal",
        answer: "No. Simplemente tendra otra sensacion de movimiento. La cuestion es que sea una decision y no un accidente."
      }
    ],
    related: ["conceptos-basicos/que-es-el-obturador", "paisaje-naturaleza/que-es-un-filtro-cpl-como-cuando-y-por-que-usar-uno"]
  },
  {
    slug: "equipo/todas-las-camaras-nikon-actuales-a-partir-de-2022-comparadas",
    category: "equipo",
    title: "Camaras Nikon comparadas: como leer la gama y no perderte",
    description: "Guia practica para entender las familias Nikon y comparar modelos con criterio de uso real.",
    kicker: "Comparativa",
    intro: "Comparar camaras Nikon resulta mas facil cuando dejas de mirar una lista infinita de modelos y entiendes primero como se ordena la gama. Hay cuerpos de entrada, opciones hibridas, modelos pensados para velocidad, otros para resolucion y otros para un usuario que simplemente quiere una herramienta fiable sin complicarse.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Leer la gama",
    heroLabel: "comparar bien empieza por entender familias y usos",
    summary: [
      "La comparacion util separa bien nivel de usuario, tipo de trabajo y presupuesto total.",
      "No todas las diferencias de ficha tienen el mismo peso segun el uso.",
      "Entender el ecosistema evita compras descompensadas."
    ],
    sections: [
      {
        title: "Como ordenar mentalmente la gama Nikon",
        bullets: [
          "Entrada y uso general para quien empieza o busca sencillez.",
          "Cuerpos hibridos para foto y video equilibrados.",
          "Modelos orientados a resolucion para detalle y trabajo pausado.",
          "Opciones enfocadas a velocidad, accion y seguimiento."
        ]
      },
      {
        title: "Que conviene comparar de verdad",
        table: {
          columns: ["Criterio", "Por que importa", "Error comun"],
          rows: [
            ["Ergonomia", "Afecta al uso diario", "Mirar solo megapixeles"],
            ["Sistema de objetivos", "Define coste y recorrido", "Comprar cuerpo sin pensar en lentes"],
            ["Enfoque", "Cambia mucho segun genero", "Suponer que todo vale igual"],
            ["Video", "No todos los perfiles lo necesitan", "Pagar por funciones que no usaras"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Conviene empezar por el cuerpo mas nuevo",
        answer: "No necesariamente. Muchas veces conviene mas un cuerpo equilibrado y reservar presupuesto para buenas lentes."
      },
      {
        question: "Importa mucho si ya tengo opticas Nikon antiguas",
        answer: "Si. Ese punto puede cambiar por completo la compra mas sensata dentro del ecosistema."
      }
    ],
    related: ["equipo/nikon-z6-frente-a-nikon-d750", "consejos/abreviaturas-de-lentes-nikon-y-lo-que-significan-una-guia-facil"]
  },
  {
    slug: "post-produccion/como-utilizar-las-curvas-en-lightroom-el-tutorial-completo",
    category: "post-produccion",
    title: "Como utilizar las curvas en Lightroom y entender que estas haciendo",
    description: "Guia practica para usar la curva de tonos en Lightroom con mas control sobre contraste y luminosidad.",
    kicker: "Curvas",
    intro: "La curva de tonos es una de las herramientas mas potentes de Lightroom porque permite decidir con mucha precision que ocurre en sombras, medios tonos y luces. Tambien es una de las mas faciles de usar mal si solo te dejas llevar por un gesto rapido en forma de S.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Control tonal fino",
    heroLabel: "menos deslizador general, mas precision sobre la imagen",
    summary: [
      "Las curvas sirven para modelar contraste y luminosidad con mucha precision.",
      "Entender negros, sombras, medios tonos y altas luces cambia por completo su uso.",
      "La moderacion suele dar mejores resultados que una curva extrema."
    ],
    sections: [
      {
        title: "Por donde empezar",
        bullets: [
          "Ajusta primero exposicion general y balance.",
          "Trabaja la curva de forma suave y compara antes y despues.",
          "Mueve un punto cada vez para entender que cambia.",
          "Revisa piel, cielos y sombras profundas al terminar."
        ]
      },
      {
        title: "Que hace cada zona de la curva",
        table: {
          columns: ["Zona", "Que controla", "Que vigilar"],
          rows: [
            ["Negros", "Anclaje del contraste", "No empastar detalle"],
            ["Sombras", "Profundidad", "No volver la imagen opaca"],
            ["Medios tonos", "Volumen general", "No lavar la escena"],
            ["Altas luces", "Brillo y aire", "No romper textura"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Hace falta usar siempre la curva",
        answer: "No. Pero merece la pena conocerla porque cuando necesitas precision ofrece un control que otros deslizadores no dan."
      },
      {
        question: "Una curva en S mejora siempre la foto",
        answer: "No. Puede funcionar, pero tambien exagerar contraste o estropear tonos delicados si se aplica por costumbre."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar", "post-produccion/curso-de-camera-raw"]
  },
  {
    slug: "proyectos-de-fotografia-creativa/como-convertir-fotos-en-pinturas-con-photoshop",
    category: "proyectos-de-fotografia-creativa",
    title: "Como convertir fotos en pinturas con Photoshop sin perder intencion visual",
    description: "Guia creativa para dar a una fotografia un aspecto pictorico sin que el resultado parezca un filtro vacio.",
    kicker: "Efecto creativo",
    intro: "Convertir una foto en una imagen con aire pictorico puede ser interesante cuando ya existe una intencion visual: color, volumen, textura o atmosfera. Si el efecto se aplica por si solo, el resultado suele quedarse en una capa superficial que agota la imagen enseguida.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Efecto con criterio",
    heroLabel: "la atmosfera importa mas que el truco",
    summary: [
      "El aspecto pictorico funciona mejor con imagenes ya solidas de base.",
      "La textura y el color pesan mas que el filtro concreto que uses.",
      "Conviene dosificar el efecto para que la foto no pierda estructura."
    ],
    sections: [
      {
        title: "Que tipo de imagen aguanta mejor este tratamiento",
        bullets: [
          "Retratos con buena luz y fondo sencillo.",
          "Paisajes con atmosfera clara y color contenido.",
          "Escenas con formas fuertes y volumen legible.",
          "Fotos donde la textura tenga un papel expresivo."
        ]
      },
      {
        title: "Como construirlo con mas gusto",
        paragraphs: [
          "Empieza por tono, color y contraste general. Despues trabaja textura, pincelada aparente o suavizado selectivo. Si vas al efecto completo demasiado pronto, pierdes el control de la imagen.",
          "Conviene revisar siempre ojos, bordes y zonas de detalle. Ahí es donde el resultado suele delatarse si esta demasiado forzado."
        ]
      }
    ],
    faq: [
      {
        question: "Es mejor usar filtros automaticos o hacerlo por capas",
        answer: "Las dos vias pueden servir, pero trabajar por capas y opacidades suele darte un resultado mas fino y mas personal."
      },
      {
        question: "Este efecto vale para cualquier foto",
        answer: "No. Funciona mejor cuando la imagen ya tiene una base formal y atmosferica que sostener."
      }
    ],
    related: ["post-produccion/como-usar-filtros-neurales-en-photoshop-paso-a-paso", "post-produccion/curso-de-camera-raw"]
  },
  {
    slug: "compras/imprimir-economico",
    category: "compras",
    title: "Imprimir fotos barato: qué mirar para no pagar poco y obtener algo malo",
    description: "Cómo imprimir fotos de forma económica sin arruinar papel, color, nitidez ni formato final.",
    kicker: "Impresión",
    intro: "Imprimir barato puede salir bien si sabes dónde reducir coste y dónde no merece la pena recortar. La clave está en ajustar expectativas, archivo y laboratorio al uso real de esas copias.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Coste y calidad",
    heroLabel: "lo barato funciona si el uso está claro",
    summary: [
      "La impresión económica exige vigilar papel, tamaño, perfil y laboratorio.",
      "No todos los usos requieren la misma calidad de salida.",
      "Un archivo bien preparado evita muchos resultados pobres aunque el servicio sea básico."
    ],
    sections: [
      {
        title: "Cuándo merece la pena buscar una impresión barata",
        paragraphs: [
          "Tiene sentido cuando necesitas copias sencillas para álbum familiar, pruebas de tamaño, recuerdos rápidos o tiradas donde el coste pesa más que la máxima fidelidad de color.",
          "En cambio, si vas a enmarcar, vender, exponer o cuidar mucho la textura y la duración, esa lógica de ahorro deja de ser la principal."
        ],
        bullets: [
          "Copias casuales para casa o familia.",
          "Pruebas de formato antes de una impresión mejor.",
          "Pedidos grandes donde el coste por copia importa mucho."
        ]
      },
      {
        title: "Qué revisar antes de subir el archivo",
        table: {
          columns: ["Elemento", "Por qué importa", "Error típico"],
          rows: [
            ["Tamaño final", "Evita recortes automáticos", "Subir una proporción equivocada"],
            ["Resolución", "Mantiene nitidez suficiente", "Enviar archivos demasiado pequeños"],
            ["Color", "Reduce sorpresas en la copia", "Exportar sin pensar en el laboratorio"],
            ["Papel o acabado", "Ajusta el resultado al uso", "Elegir brillante por defecto sin mirarlo"]
          ]
        }
      },
      {
        title: "Dónde se suele perder calidad",
        paragraphs: [
          "El problema no siempre es el precio. Muchas veces la copia sale mal porque el archivo estaba mal preparado, el laboratorio recortó sin avisar o se eligió un papel que no encajaba con la imagen.",
          "Cuando quieres ahorrar, lo más útil es controlar lo que sí depende de ti: tamaño, proporción, nitidez de salida y expectativas razonables."
        ],
        bullets: [
          "Laboratorios que reescalan demasiado.",
          "Recorte automático por no respetar la proporción.",
          "Papel muy fino para imágenes con mucho detalle.",
          "Colores apagados por una exportación descuidada."
        ]
      }
    ],
    faq: [
      {
        question: "¿Para copias baratas hace falta un archivo perfecto",
        answer: "No perfecto, pero sí correcto. Un tamaño adecuado, buena proporción y nitidez razonable marcan mucho más que una edición compleja."
      },
      {
        question: "¿Siempre sale mejor pedir el papel más barato",
        answer: "No. A veces merece la pena subir un poco en papel o acabado si eso evita una copia floja o poco duradera."
      }
    ],
    related: ["documentos-de-identidad/tamano-carnet-medidas"]
  },
  {
    slug: "conceptos-basicos/101-terminos-de-fotografia-que-debes-saber",
    category: "conceptos-basicos",
    title: "Terminos de fotografia para moverte con mas soltura",
    description: "Glosario util de fotografia para entender mejor menus, tutoriales, comparativas y conversaciones tecnicas.",
    kicker: "Glosario",
    intro: "Aprender terminos de fotografia reduce muchisima friccion cuando configuras camara, lees tutoriales o comparas equipo. No se trata de memorizar un diccionario entero, sino de entender las palabras que vuelven una y otra vez y relacionarlas con situaciones reales.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Lenguaje del oficio",
    heroLabel: "entender palabras para decidir mejor",
    summary: [
      "Conocer terminos basicos reduce errores de interpretacion en tecnica, equipo y revelado.",
      "El glosario sirve de verdad cuando conectas cada termino con una decision fotografica concreta.",
      "No hace falta saberselos todos de memoria para empezar a trabajar con seguridad."
    ],
    sections: [
      {
        title: "Que tipos de terminos conviene aprender primero",
        table: {
          columns: ["Bloque", "Ejemplos", "Por que importa"],
          rows: [
            ["Exposicion", "ISO, apertura, velocidad, EV", "Afecta casi cada disparo"],
            ["Enfoque", "AF, AF-C, profundidad de campo", "Aclara nitidez y seguimiento"],
            ["Optica", "Focal, gran angular, tele, bokeh", "Ayuda a elegir lente y encuadre"],
            ["Archivo y edicion", "RAW, JPG, revelar, exportar", "Ordena el flujo posterior"]
          ]
        }
      },
      {
        title: "Como aprenderlos sin saturarte",
        bullets: [
          "Aprende primero los que aparecen en tu camara o en tu flujo real.",
          "Relaciona cada termino con una foto concreta o una decision practica.",
          "Vuelve a ellos varias veces en vez de intentar memorizar una lista enorme de golpe.",
          "Usa el glosario como apoyo, no como sustituto de practicar."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta saberse todos los terminos para hacer buenas fotos",
        answer: "No. Pero entender los terminos mas frecuentes acelera mucho el aprendizaje y evita errores de configuracion o interpretacion."
      },
      {
        question: "Que terminos conviene dominar antes que ninguno",
        answer: "Los relacionados con exposicion, enfoque, focal y formato de archivo, porque condicionan muchisimas decisiones desde el principio."
      }
    ],
    related: ["conceptos-basicos/que-significa-dslr", "conceptos-basicos/shutter-significado"]
  },
  {
    slug: "conceptos-basicos/como-comprender-y-utilizar-facilmente-el-estilo-de-imagen-de-canon",
    category: "conceptos-basicos",
    title: "Estilo de imagen de Canon: que es y como utilizarlo",
    description: "Que hacen los Picture Style de Canon, donde se notan mas y en que casos conviene tocarlos.",
    kicker: "Canon",
    intro: "Los estilos de imagen de Canon modifican sobre todo el aspecto de la JPG y de la previsualizacion en camara. Entender eso evita sobrevalorar su efecto en RAW y ayuda a decidir cuando merece la pena ajustarlos.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Perfil visual",
    heroLabel: "mas importante en JPG que en un flujo RAW puro",
    summary: [
      "Los Picture Style cambian contraste, nitidez, saturacion y tono de la imagen procesada en camara.",
      "Su impacto es mucho mas directo en JPG que en un archivo RAW revelado despues.",
      "Pueden ser utiles si quieres una base consistente sin editar demasiado."
    ],
    sections: [
      {
        title: "Que cambia cada estilo",
        bullets: [
          "Contraste general de la imagen.",
          "Nivel de saturacion y tono del color.",
          "Nitidez percibida en la JPG.",
          "Caracter visual mas neutro o mas intenso segun el perfil elegido."
        ]
      },
      {
        title: "Cuando tiene sentido ajustarlo",
        table: {
          columns: ["Uso", "Por que puede ayudar", "Que tener en cuenta"],
          rows: [
            ["JPG directo", "Te da una base visual mas afinada", "Conviene probar varios estilos en tu camara"],
            ["RAW+JPG", "Ayuda a previsualizar y entregar rapido", "No sustituye el revelado serio del RAW"],
            ["RAW puro", "Influye menos en el resultado final", "Sigue siendo util como referencia en pantalla"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "Los Picture Style cambian el RAW de forma definitiva",
        answer: "No de la misma manera que cambian una JPG. En RAW su efecto suele quedarse mas en la previsualizacion o como punto de partida segun el software."
      },
      {
        question: "Conviene tocar estos ajustes si apenas editas",
        answer: "Si. En ese caso pueden ayudarte bastante porque la JPG de camara sera mas cercana al aspecto que quieres."
      }
    ],
    related: ["conceptos-basicos/que-es-la-exposicion"]
  },
  {
    slug: "conceptos-basicos/revelar-definicion",
    category: "conceptos-basicos",
    title: "Revelar: definicion y que significa hoy en fotografia digital",
    description: "Que significa revelar en fotografia y como se conecta el laboratorio quimico con el flujo digital actual.",
    kicker: "Definicion",
    intro: "Revelar sigue siendo una palabra muy util porque conecta la fotografia quimica con la digital. En ambos casos habla de transformar una captura latente en una imagen final visible, trabajada y lista para su uso.",
    readTime: "6 min",
    updatedAt: "2026-04-14",
    heroStat: "Del negativo al RAW",
    heroLabel: "una idea antigua que sigue muy viva",
    summary: [
      "Revelar significa convertir una captura en una imagen final interpretable.",
      "En digital suele referirse sobre todo al trabajo sobre RAW.",
      "Entender el termino ayuda a situar mejor todo el flujo fotografico."
    ],
    sections: [
      {
        title: "Que significaba revelar en fotografia quimica",
        paragraphs: [
          "En el laboratorio tradicional, revelar era el proceso quimico que hacia visible la imagen latente registrada en pelicula o papel sensible. Era una etapa material y decisiva del proceso fotografico.",
          "No era un simple paso tecnico: ya implicaba interpretacion, tiempos, contraste y decisiones de resultado."
        ]
      },
      {
        title: "Que significa hoy en digital",
        paragraphs: [
          "En fotografia digital, revelar suele referirse al trabajo sobre el archivo RAW para ajustar exposicion, color, contraste, detalle y salida final. Aunque ya no haya quimicos, sigue existiendo esa idea de convertir un material inicial en una imagen terminada.",
          "Por eso programas como Camera Raw, Lightroom o Capture One heredan parte del lenguaje del laboratorio."
        ],
        bullets: [
          "El RAW actua como base flexible de trabajo.",
          "Revelar implica interpretar, no solo corregir.",
          "La exportacion final forma parte del cierre del proceso."
        ]
      }
    ],
    faq: [
      {
        question: "Revelar y editar son exactamente lo mismo",
        answer: "Se solapan mucho, pero revelar suele usarse para la interpretacion inicial del archivo, especialmente en RAW. Editar puede abarcar un campo mas amplio."
      },
      {
        question: "Se puede hablar de revelar una JPG",
        answer: "A veces si, de forma amplia, pero el termino encaja mejor cuando trabajas sobre un RAW o sobre una captura con mas margen de interpretacion."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar"]
  },
  {
    slug: "edicion-digital/anadir-marca-de-agua",
    category: "edicion-digital",
    title: "Anadir marca de agua: cuando tiene sentido y como hacerlo sin estropear la imagen",
    description: "Que tener en cuenta al anadir una marca de agua y en que casos compensa realmente usarla.",
    kicker: "Proteccion",
    intro: "La marca de agua puede tener sentido en ciertos contextos de difusion, pero no es una solucion magica contra el robo de imagenes y ademas puede empeorar mucho la percepcion de una fotografia si se usa sin cuidado.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Proteger sin invadir",
    heroLabel: "ese equilibrio casi nunca sale por azar",
    summary: [
      "La marca de agua solo compensa en algunos usos concretos, no como norma universal.",
      "Su problema principal es que puede molestar mas a quien ve la foto que a quien quiera copiarla.",
      "Tamano, posicion y opacidad marcan toda la diferencia."
    ],
    sections: [
      {
        title: "Cuando puede tener sentido",
        bullets: [
          "Previsualizaciones de cliente antes de la entrega final.",
          "Catalogos o galerias temporales de prueba.",
          "Difusion donde el objetivo principal sea identificar autoria rapidamente."
        ]
      },
      {
        title: "Cuando suele sobrar",
        bullets: [
          "Portafolios donde la foto debe respirarse limpia.",
          "Redes donde una marca invasiva empeora mas de lo que protege.",
          "Imagenes que ya van pequeñas o comprimidas y pierden legibilidad con facilidad."
        ]
      },
      {
        title: "Como hacerla menos agresiva",
        table: {
          columns: ["Decision", "Que conviene hacer", "Que evitar"],
          rows: [
            ["Posicion", "Buscar una zona que no rompa la lectura", "Tapar el sujeto principal"],
            ["Tamano", "Mantenerla discreta", "Convertirla en el elemento mas visible"],
            ["Opacidad", "Que se lea sin dominar", "Blancos o negros plenos demasiado duros"]
          ]
        }
      }
    ],
    faq: [
      {
        question: "La marca de agua evita que roben una foto",
        answer: "No de forma fiable. Puede disuadir en algunos casos o identificar autoria, pero no es una barrera real contra usos indebidos."
      },
      {
        question: "Es mejor una marca grande para proteger mas",
        answer: "Normalmente no. Cuanto mas invasiva es, mas arruina la experiencia de quien si queria ver la imagen de buena fe."
      }
    ],
    related: ["consejos/8-consejos-para-proteger-las-fotografias-impresas"]
  },
  {
    slug: "equipo/los-15-mejores-catalejos-para-la-fotografia-de-aves-en-2022",
    category: "equipo",
    title: "Catalejos para fotografia de aves: que mirar antes de elegir",
    description: "Guia clara para entender que importa en un catalejo orientado a observacion y fotografia de aves.",
    kicker: "Aves",
    intro: "Un catalejo puede ser una herramienta muy util en observacion y fotografia de aves, pero no cumple exactamente la misma funcion que un teleobjetivo fotografico. Conviene tener claro si lo quieres para mirar mejor, localizar antes de disparar o practicar digiscoping con adaptador.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Alcance y soporte",
    heroLabel: "ver lejos bien depende tanto de la optica como de la estabilidad",
    summary: [
      "Un buen catalejo se valora por nitidez, estabilidad y comodidad de uso largo.",
      "Portabilidad, tripode y adaptadores importan tanto como el propio tubo optico.",
      "No siempre sustituye a un tele; a veces lo complementa."
    ],
    sections: [
      {
        title: "Que criterios pesan mas",
        bullets: [
          "Calidad optica real y lectura de detalle fino.",
          "Luminosidad suficiente para primeras y ultimas horas.",
          "Peso asumible si caminas mucho.",
          "Tripode y rotula adecuados para que sirva de verdad."
        ]
      },
      {
        title: "Cuando compensa frente a otras opciones",
        paragraphs: [
          "Compensa mucho si haces observacion prolongada o si combinas localizacion y fotografia. Tambien puede tener sentido en digiscoping, donde el catalejo actua como base optica para capturar a larga distancia.",
          "En cambio, si buscas reaccion rapida y fotografiar aves en vuelo, un teleobjetivo fotografico suele resultar mas practico."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta uno muy grande para aves",
        answer: "No siempre. Un catalejo enorme puede dar mas alcance, pero tambien pesa mas y exige mejor soporte. El equilibrio importa mucho."
      },
      {
        question: "Sirve para empezar en fotografia de aves",
        answer: "Puede servir como complemento, pero si buscas aprender a fotografiar primero suele ser mas util una camara con un tele razonable."
      }
    ],
    related: ["equipo/las-12-mejores-camaras-para-fotografia-de-conciertos", "fotografia/panasonic-lumix-fz82"]
  },
  {
    slug: "inspiracion/las-15-citas-mas-importantes-de-susan-sontag-sobre-fotografia",
    category: "inspiracion",
    title: "Citas de Susan Sontag sobre fotografia y por que siguen siendo utiles",
    description: "Ideas de Susan Sontag para pensar mejor la fotografia, el archivo, el consumo visual y la representacion.",
    kicker: "Pensamiento",
    intro: "Susan Sontag sigue siendo una referencia porque obliga a pensar la fotografia como una practica cultural y politica, no solo como tecnica o estilo. Sus ideas ayudan a mirar mejor las imagenes, a sospechar de ciertos habitos visuales y a entender que fotografiar tambien es interpretar.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Pensar la imagen",
    heroLabel: "la camara no agota lo que una fotografia significa",
    summary: [
      "Sontag ayuda a leer la fotografia mas alla del ajuste tecnico.",
      "Sus ideas siguen siendo utiles para hablar de archivo, saturacion visual y etica.",
      "Leerla obliga a hacerse mejores preguntas sobre las imagenes."
    ],
    sections: [
      {
        title: "Por que conviene volver a Sontag",
        bullets: [
          "Porque pone en cuestion la costumbre de fotografiarlo todo.",
          "Porque piensa el acto de mirar y de consumir imagenes.",
          "Porque ayuda a hablar de distancia, poder y representacion.",
          "Porque sigue iluminando debates muy actuales."
        ]
      },
      {
        title: "Como sacar partido a sus citas",
        paragraphs: [
          "No se trata solo de subrayar frases bonitas. Conviene relacionarlas con fotografias concretas, con la manera en que publicamos imagenes hoy y con la facilidad con la que convertimos escenas ajenas en contenido.",
          "Leida asi, Sontag no es un adorno intelectual: es una herramienta para pensar mejor el oficio."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta leer ensayo para ser mejor fotografo",
        answer: "No es obligatorio, pero si muy util. Pensar la fotografia suele mejorar tambien la manera de hacerla."
      },
      {
        question: "Sontag sigue vigente en la era de redes sociales",
        answer: "Muchisimo. Muchas de sus preguntas sobre acumulacion de imagenes y consumo visual siguen incluso mas vivas hoy."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "paisaje-naturaleza/etica-de-la-fotografia-de-viajes-cuando-no-deberias-tomar-esa-foto"]
  },
  {
    slug: "paisaje-naturaleza/etica-de-la-fotografia-de-viajes-cuando-no-deberias-tomar-esa-foto",
    category: "paisaje-naturaleza",
    title: "Etica de la fotografia de viajes: cuando es mejor no hacer esa foto",
    description: "Preguntas utiles para tomar mejores decisiones eticas al fotografiar en viaje y en contextos sensibles.",
    kicker: "Etica",
    intro: "La fotografia de viajes se vuelve realmente interesante cuando no confunde acceso con derecho. Hay escenas disponibles que no conviene fotografiar, personas a las que no deberiamos convertir en imagen sin contexto y lugares cuya fragilidad pide mucha mas contencion que entusiasmo visual.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Mirar con limites",
    heroLabel: "la mejor fotografia de viaje empieza por una relacion mas limpia con el lugar",
    summary: [
      "No todo lo visible deberia transformarse en foto.",
      "Consentimiento, vulnerabilidad y contexto importan tanto como la composicion.",
      "La etica no resta fuerza a la imagen: la hace mas limpia y mas responsable."
    ],
    sections: [
      {
        title: "Preguntas utiles antes de disparar",
        bullets: [
          "La persona sabe que la estas fotografiando y en que contexto",
          "La escena implica dolor, precariedad o vulnerabilidad",
          "La imagen aporta algo mas que exotismo o consumo rapido",
          "Compartir la localizacion puede perjudicar el lugar"
        ]
      },
      {
        title: "Cuando es mejor bajar la camara",
        paragraphs: [
          "Cuando fotografiar invadiria un momento privado, explotaria una situacion dificil o convertiria a alguien en objeto visual sin su participacion real. Tambien cuando la imagen puede atraer dano sobre un lugar sensible o sobre una comunidad.",
          "A veces la mejor decision fotografica es no hacer la foto. Esa renuncia forma parte del oficio igual que el disparo."
        ]
      }
    ],
    faq: [
      {
        question: "La foto robada siempre es poco etica",
        answer: "No siempre, pero exige mucha responsabilidad. Cuanto mas vulnerable sea la situacion, mas alto debe ser el nivel de cuidado."
      },
      {
        question: "Importa la etica si la imagen es buena",
        answer: "Si. Una imagen potente no deja de tener consecuencias por el hecho de estar bien hecha."
      }
    ],
    related: ["documentos-de-identidad/que-es-una-ortofoto", "composicion/pie-de-foto-ejemplos"]
  },
  {
    slug: "proyectos-de-fotografia-creativa/21-ideas-geniales-de-fotografia-macro-para-probar-hoy",
    category: "proyectos-de-fotografia-creativa",
    title: "Ideas de fotografía macro para practicar con más intención",
    description: "Ideas y ejercicios de macro para entrenar detalle, textura, profundidad, enfoque y control de luz.",
    kicker: "Macro",
    intro: "La macro fotografía obliga a mirar despacio. Lo que a simple vista parece mínimo se convierte en un problema serio de enfoque, luz, fondo y composición.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Detalle extremo",
    heroLabel: "un campo perfecto para entrenar precisión",
    summary: [
      "La macro es ideal para entrenar enfoque, luz y composición minuciosa.",
      "Un buen ejercicio macro obliga a simplificar y observar mucho más.",
      "La paciencia y la eleccionón del sujeto pesan tanto como el equipo."
    ],
    sections: [
      {
        title: "Qué hace tan útil a la macro para practicar",
        paragraphs: [
          "La macro enseña muy rápido porque exagera cualquier error. Un fondo sucio, una vibración mínima o una luz mal colocada se vuelven evidentes en cuanto te acercas de verdad al sujeto.",
          "Por eso funciona tan bien como entrenamiento: obliga a observar, a decidir mejor el plano y a ser preciso con cada pequeño ajuste."
        ],
        bullets: [
          "Mejora la lectura del detalle.",
          "Obliga a pensar el fondo con más cuidado.",
          "Entrena paciencia, estabilidad y enfoque."
        ]
      },
      {
        title: "Ideas que sí dan juego",
        cards: [
          {
            title: "Texturas naturales",
            text: "Hojas, cortezas, plumas, arena o pétalos funcionan muy bien para estudiar superficie y volumen."
          },
          {
            title: "Objetos cotidianos",
            text: "Tornillos, tejidos, papel, utensilios o relojes cambian por completo cuando los miras de cerca."
          },
          {
            title: "Agua y transparencias",
            text: "Gotas, hielo o condensación ayudan a practicar reflejo, brillo y control de foco."
          },
          {
            title: "Series temáticas",
            text: "Repetir un mismo tipo de sujeto te obliga a encontrar variaciones reales en composición y luz."
          }
        ]
      },
      {
        title: "Cómo plantear un ejercicio que merezca la pena",
        paragraphs: [
          "En vez de saltar de una idea a otra, es más útil fijar una restricción clara: una sola luz, una sola textura, un solo color o una sola distancia. Esa limitación obliga a trabajar mejor el problema visual.",
          "Cuando la sesión se ordena así, la macro deja de ser una acumulación de detalles curiosos y se convierte en una práctica seria."
        ],
        bullets: [
          "Trabaja con trípode si el sujeto lo permite.",
          "Haz series cortas y compara resultados.",
          "Mueve la luz antes de mover el sujeto cuando puedas.",
          "Revisa el fondo con la misma atención que el punto de enfoque."
        ]
      }
    ],
    faq: [
      {
        question: "¿Hace falta un objetivo macro para practicar",
        answer: "Ayuda mucho, pero no es obligatorio para empezar. Tubos de extensión, lentes de aproximación o ciertos modos de cámara también sirven para entrenar la mirada."
      },
      {
        question: "¿Qué suele arruinar más una macro",
        answer: "La falta de estabilidad, un fondo poco cuidado y querer meter demasiado dentro del encuadre."
      }
    ],
    related: ["tecnicas-de-fotografia/seis-consejos-para-mejores-fotografias-de-plantas"]
  },
  {
    slug: "resenas/gnarbox-2-0-ssd",
    category: "resenas",
    title: "Gnarbox 2.0 SSD: que aportaba y como valorar hoy un backup portatil",
    description: "Resena contextual del Gnarbox 2.0 SSD y de lo que conviene mirar en un sistema de respaldo para trabajo en campo.",
    kicker: "Almacenamiento",
    intro: "El interes del Gnarbox 2.0 SSD no estaba solo en el aparato en si, sino en la idea de fondo: poder respaldar, revisar y mover archivos en campo sin depender tanto de un portatil. Ese problema sigue siendo muy real en viaje, naturaleza y producciones ligeras.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Respaldo en campo",
    heroLabel: "la seguridad del archivo cambia mucho fuera del estudio",
    summary: [
      "Un backup portatil vale por fiabilidad, autonomia y velocidad de flujo.",
      "No basta con capacidad bruta: importan puertos, interfaz y solidez real.",
      "El contexto de trabajo decide si compensa cargar con uno."
    ],
    sections: [
      {
        title: "Que debe ofrecer un equipo de este tipo",
        bullets: [
          "Transferencia estable y sencilla.",
          "Buen comportamiento con tarjetas y archivos grandes.",
          "Autonomia suficiente para una jornada real.",
          "Construccion fiable para viaje y campo."
        ]
      },
      {
        title: "Como juzgarlo hoy",
        paragraphs: [
          "Conviene comparar esta clase de dispositivos con flujos actuales: SSDs externos rapidos, tablets, moviles potentes y portatiles ligeros. A veces una solucion dedicada compensa; otras, un flujo mas simple resulta mejor.",
          "Lo importante es que el respaldo sea facil de repetir bajo cansancio, prisa y condiciones imperfectas."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta un dispositivo dedicado para viajar",
        answer: "No siempre. Depende del volumen de trabajo, de si llevas portatil y de lo critico que sea asegurar varias copias en el momento."
      },
      {
        question: "Que pesa mas en un backup portatil",
        answer: "Fiabilidad y sencillez. Un sistema muy completo pero poco fiable sirve de poco."
      }
    ],
    related: ["edicion-digital/digitalizar-imagenes", "equipo/lista-de-camaras-con-gps-incorporado-y-algunos-consejos-sobre-etiquetado-geografico"]
  },
  {
    slug: "resenas/nikon-20mm-f-1-8g-ed",
    category: "resenas",
    title: "Nikon 20mm f/1.8G ED: donde destaca este angular luminoso",
    description: "Resena util del Nikon 20mm f/1.8G ED para entender su lugar en paisaje, viaje, interior y fotografia ambiental.",
    kicker: "Gran angular",
    intro: "Un 20 mm luminoso tiene un atractivo muy particular: da aire, profundidad y contexto sin entrar todavia en una exageracion extrema. El Nikon 20mm f/1.8G ED interesa precisamente por ese equilibrio entre amplitud, luminosidad y tamano manejable.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Angular con margen",
    heroLabel: "espacio, luz y una perspectiva que pide cabeza",
    summary: [
      "Es muy util para paisaje, viaje, interior y retrato ambiental.",
      "La luminosidad abre opciones en baja luz y escena nocturna.",
      "Pide cuidar mucho bordes, verticales y distancia al sujeto."
    ],
    sections: [
      {
        title: "Donde funciona especialmente bien",
        bullets: [
          "Paisaje con mucho primer plano y profundidad.",
          "Interiores donde hace falta respirar.",
          "Viaje cuando quieres contar lugar y contexto.",
          "Escena nocturna o ambiental con poca luz."
        ]
      },
      {
        title: "Que conviene dominar para sacarle partido",
        paragraphs: [
          "Con un 20 mm todo entra con facilidad, y ese es precisamente el riesgo. Cuesta mas simplificar, vigilar bordes y mantener lineas ordenadas si no compones con decision.",
          "Tambien hay que ser consciente de la distancia al sujeto. Un paso mas cerca o mas lejos cambia mucho la presencia y la deformacion."
        ]
      }
    ],
    faq: [
      {
        question: "Sirve para retrato",
        answer: "Para retrato ambiental si, siempre que aceptes que el entorno pesa mucho y que acercarte demasiado puede deformar rasgos."
      },
      {
        question: "Es mejor que un 24 mm",
        answer: "No por definicion. El 20 mm ofrece mas amplitud y dramatismo; el 24 mm suele resultar mas facil y mas contenido."
      }
    ],
    related: ["conceptos-basicos/que-es-una-lente-gran-angular-y-cuando-usar-una", "paisaje-naturaleza/paisajes-con-lineas"]
  }
];
