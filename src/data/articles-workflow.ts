import type { Article } from "./types";

export const workflowArticles: Article[] = [
  {
    slug: "post-produccion/que-es-adobe-camera-raw-y-como-empezar",
    category: "post-produccion",
    title: "Que es Adobe Camera Raw y como empezar con un flujo limpio desde el primer dia",
    description: "Introduccion clara a Adobe Camera Raw para entender que hace, cuando usarlo y como organizar un revelado basico.",
    kicker: "Flujo",
    intro: "Camera Raw es una puerta de entrada al revelado, no un festival de deslizadores. Entender eso al principio te ahorra mucho ruido y muchas malas decisiones.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "5 ajustes base",
    heroLabel: "para arrancar sin perderte",
    summary: [
      "Camera Raw permite revelar archivos RAW antes de entrar en ediciones mas finas o destructivas.",
      "Merece la pena empezar por balance, exposicion, contraste, detalle y color, en ese orden aproximado.",
      "El mejor flujo es consistente y reversible, no espectacular en cada foto."
    ],
    sections: [
      {
        title: "Que resuelve Camera Raw",
        paragraphs: [
          "Te permite partir de un archivo con mas margen de informacion y ajustar luz, color y detalle de forma no destructiva. Eso es especialmente util cuando todavia estas definiendo el aspecto general de la imagen."
        ],
        bullets: [
          "Corregir exposicion general.",
          "Afinar blancos y dominantes de color.",
          "Recuperar altas luces y sombras con criterio.",
          "Dar una base consistente antes de Photoshop."
        ]
      },
      {
        title: "Un orden de trabajo razonable",
        table: {
          columns: ["Paso", "Que mirar", "Que evitar"],
          rows: [
            ["Balance de blancos", "Neutralidad o intencion cromatica", "Corregir a ojo sin referencia"],
            ["Exposicion", "Brillo global y lectura", "Abrir de mas y lavar negros"],
            ["Contraste y presencia", "Separacion de planos", "Clarity y textura en exceso"],
            ["Detalle", "Nitidez segun destino", "Enfocar antes de tiempo"],
            ["Color", "Consistencia de tonos", "Saturar por impulso"]
          ]
        }
      },
      {
        title: "Cuando pasar a Photoshop",
        cards: [
          {
            title: "Cuando hay trabajo local fino",
            text: "Retoque, capas, composiciones o limpieza avanzada suelen vivir mejor en Photoshop."
          },
          {
            title: "Cuando ya decidiste el aspecto general",
            text: "Si entras demasiado pronto, mezclas revelado y retoque y acabas perdiendo control."
          }
        ]
      },
      {
        title: "Errores de principiante que conviene evitar",
        bullets: [
          "Mover demasiados deslizadores antes de entender que hace cada uno.",
          "Intentar resolver el color sin haber ajustado antes la exposicion base.",
          "Enfocar o reducir ruido demasiado pronto.",
          "Entrar en Photoshop con una imagen todavia sin decidir."
        ]
      }
    ],
    faq: [
      {
        question: "Camera Raw sirve tambien para JPG",
        answer: "Si, pero donde realmente se aprovecha mejor es con archivos RAW, porque ofrecen mas margen de ajuste sin degradar la imagen."
      },
      {
        question: "Hace falta tocar todos los paneles",
        answer: "No. De hecho suele ser mejor dominar unos pocos ajustes base antes de meterse en herramientas mas finas."
      }
    ],
    related: [
      "software/capture-one-gratis",
      "edicion-digital/digitalizar-imagenes"
    ]
  },
  {
    slug: "edicion-digital/digitalizar-imagenes",
    category: "edicion-digital",
    title: "Digitalizar imagenes: como escanear fotos antiguas sin perder detalle ni tiempo",
    description: "Guia practica para digitalizar fotografias impresas con buen archivo, color estable y un proceso sensato.",
    kicker: "Archivo",
    intro: "Digitalizar bien no consiste en escanear a la maxima cifra posible. Lo importante es capturar limpio, nombrar bien y guardar con sentido.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "600 dpi",
    heroLabel: "punto de partida util para copias impresas",
    summary: [
      "Para fotos impresas normales, 600 dpi suele ser un punto de partida solido.",
      "Limpieza del original, formato de archivo y organizacion pesan tanto como la resolucion.",
      "Escanear por lotes sin criterio suele generar un archivo caotico e inutil."
    ],
    sections: [
      {
        title: "Resolucion y formato",
        table: {
          columns: ["Material", "Resolucion sugerida", "Formato recomendado"],
          rows: [
            ["Foto impresa estandar", "600 dpi", "TIFF o JPG alta calidad"],
            ["Documento con texto", "300 dpi", "PDF o JPG"],
            ["Negativo o diapositiva", "2400 dpi o mas", "TIFF"]
          ]
        }
      },
      {
        title: "Proceso que ahorra tiempo",
        bullets: [
          "Limpia polvo y huellas antes de escanear.",
          "Agrupa por lotes logicos: fechas, eventos o familias.",
          "Nombra archivos con criterio estable.",
          "Haz una copia maestra y otra optimizada para compartir."
        ]
      },
      {
        title: "Que hacer despues",
        paragraphs: [
          "Una vez digitalizadas, revisa dominantes de color, enderezado y pequenas motas. No intentes restaurarlo todo al mismo tiempo. Separa archivo de restauracion para no convertir el proceso en una montana."
        ]
      },
      {
        title: "Como ordenar el archivo para no perderlo",
        paragraphs: [
          "Una digitalizacion buena pierde mucho valor si luego no puedes encontrar nada. Conviene crear una estructura clara por familias, fechas, eventos o cajas fisicas y mantenerla estable desde el principio.",
          "Tambien ayuda guardar una hoja simple con criterios de nombre, resolucion y formato para no improvisar cada semana."
        ]
      }
    ],
    faq: [
      {
        question: "Siempre hace falta guardar en TIFF",
        answer: "No. Para archivo maestro delicado o restauracion seria es muy recomendable; para uso mas ligero puede bastar un JPG de alta calidad."
      },
      {
        question: "Que hago con fotos muy danadas",
        answer: "Primero digitalizalas lo mejor posible. Despues decide si merece la pena restaurarlas aparte, sin mezclar archivo y retoque en el mismo paso."
      }
    ],
    related: [
      "documentos-de-identidad/tamano-carnet-medidas",
      "post-produccion/que-es-adobe-camera-raw-y-como-empezar"
    ]
  },
  {
    slug: "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres",
    category: "retrato",
    title: "Poses masculinas: guia para dirigir sin rigidez ni cliches",
    description: "Como trabajar poses masculinas con intencion, naturalidad y un lenguaje visual coherente con el retrato.",
    kicker: "Direccion",
    intro: "Dirigir a una persona no va de memorizar 25 poses y repetirlas. Va de entender lineas, peso, manos, mirada y energia corporal para adaptar la postura al retrato.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "3 ajustes",
    heroLabel: "peso, manos y mirada",
    summary: [
      "La mejor pose no es la mas compleja, sino la que resulta creible y sostenida.",
      "Cambiar peso, posicion de manos y direccion de mirada ya transforma casi todo el retrato.",
      "Merece la pena dirigir con verbos simples, no con instrucciones anatomicas confusas."
    ],
    sections: [
      {
        title: "Tres cosas que cambian casi cualquier pose",
        cards: [
          {
            title: "Peso",
            text: "Pasa el peso a una pierna para romper rigidez y generar una linea mas natural."
          },
          {
            title: "Manos",
            text: "Dales una tarea: bolsillo, chaqueta, reloj, silla o cuello de camisa. Las manos ociosas suelen delatar incomodidad."
          },
          {
            title: "Mirada",
            text: "A camara, fuera de camara, abajo o en movimiento: cambia por completo el tono del retrato."
          }
        ]
      },
      {
        title: "Esquemas rapidos",
        bullets: [
          "De pie con hombro ligeramente retrasado.",
          "Sentado al borde con torso inclinado hacia delante.",
          "Apoyo lateral en pared o barandilla.",
          "Caminata lenta con manos ocupadas."
        ]
      },
      {
        title: "Que suele estropear el resultado",
        bullets: [
          "Mandar demasiadas instrucciones seguidas.",
          "Bloquear codos y hombros.",
          "Forzar una pose dominante si no encaja con la persona.",
          "Olvidar el gesto de la mandibula y la tension del cuello."
        ]
      },
      {
        title: "Como dirigir a alguien que no posa nunca",
        paragraphs: [
          "La mejor estrategia suele ser pedir acciones pequenas y claras en lugar de poses completas. Un paso, un giro leve, una mano al bolsillo o una mirada fuera de camara resultan mas faciles de sostener y mucho mas naturales.",
          "Tambien ayuda validar cuando algo funciona. Si la persona siente que la pose ya esta cerca, se relaja y el retrato mejora enseguida."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta una pose distinta para cada persona",
        answer: "No una pose completamente nueva, pero si adaptar energia, apertura corporal y tono a como se mueve y que quiere transmitir esa persona."
      },
      {
        question: "Es mejor dirigir mucho o dejar libertad",
        answer: "Lo mas util suele ser una mezcla: dar una base clara y luego dejar que la persona respire dentro de ella."
      }
    ],
    related: [
      "composicion/pie-de-foto-ejemplos",
      "conceptos-basicos/que-es-el-obturador"
    ]
  },
  {
    slug: "software/capture-one-gratis",
    category: "software",
    title: "Capture One gratis: que opciones existen y cuando merece la pena",
    description: "Que ofrece Capture One, si existe version gratis y en que casos compensa frente a otras herramientas.",
    kicker: "Herramientas",
    intro: "Capture One interesa sobre todo por dos motivos: comprobar si puedes probarlo antes de pagar y averiguar si su flujo encaja de verdad frente a Lightroom u otras alternativas.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Prueba antes de migrar",
    heroLabel: "el flujo importa mas que la marca",
    summary: [
      "La cuestion clave no es si es gratis para siempre, sino si puedes validarlo antes de cambiar de flujo.",
      "Capture One destaca en organizacion, color y trabajo tethered para muchos fotografos.",
      "Si no vas a aprovechar su enfoque, alternativas mas simples pueden darte mejor retorno."
    ],
    sections: [
      {
        title: "Cuando si tiene sentido probarlo",
        bullets: [
          "Retrato o moda con flujo tethered.",
          "Necesidad de control fino del color.",
          "Trabajo frecuente con sesiones y seleccion intensiva."
        ]
      },
      {
        title: "Cuando no hace falta complicarte",
        bullets: [
          "Si solo haces ajustes basicos y exportas rapido.",
          "Si ya tienes un catalogo estable y no ganas nada migrando.",
          "Si buscas el menor coste posible con un flujo simple."
        ]
      },
      {
        title: "Como decidir con criterio",
        paragraphs: [
          "Haz una prueba corta con tu propio material: un retrato, una escena de alto contraste y una sesion completa. Si con esa prueba no te ahorra tiempo ni mejora el resultado, la respuesta probablemente ya la tienes."
        ]
      },
      {
        title: "Que conviene comparar frente a otras opciones",
        bullets: [
          "Velocidad real con tu catalogo y tu ordenador.",
          "Color y herramientas que si vas a usar de verdad.",
          "Tethering si forma parte de tu trabajo habitual.",
          "Precio final frente al retorno que te da."
        ]
      }
    ],
    faq: [
      {
        question: "Existe una version gratis permanente",
        answer: "Eso puede cambiar segun la politica del producto. Lo importante es comprobar si tienes una prueba real y si te basta para validar el flujo antes de pagar."
      },
      {
        question: "Merece la pena migrar desde Lightroom",
        answer: "Solo si con tu material y tu forma de trabajar notas una mejora clara en color, tethering, organizacion o velocidad de seleccion."
      }
    ],
    related: [
      "post-produccion/que-es-adobe-camera-raw-y-como-empezar",
      "edicion-digital/digitalizar-imagenes"
    ]
  }
];
