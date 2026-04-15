import { createQuickArticle } from "./article-factory";
import type { Article } from "./types";

export const expansionArticlesC: Article[] = [
  {
    slug: "software/adobe-rueda-de-color",
    category: "software",
    title: "Rueda de color de Adobe: para que sirve y como aprovecharla mejor",
    description: "Que hace la rueda de color de Adobe y como ayuda a decidir armonias, contraste y paletas con mas criterio.",
    kicker: "Color",
    intro: "La rueda de color de Adobe es util cuando quieres pensar el color con algo mas de metodo y no solo por intuicion. Sirve para probar relaciones cromaticas, ver tensiones posibles entre tonos y preparar una paleta antes de editar, disenar o planificar una sesion.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Color con criterio",
    heroLabel: "visualizar relaciones cromaticas ahorra muchas dudas despues",
    summary: [
      "La rueda permite ver armonias y contrastes de forma rapida.",
      "Resulta util en fotografia, diseno, branding y planificacion de paletas.",
      "Funciona mejor como herramienta de decision que como receta cerrada."
    ],
    sections: [
      {
        title: "Para que sirve de verdad",
        bullets: [
          "Probar combinaciones complementarias o analogas.",
          "Preparar una direccion cromatica antes de una sesion.",
          "Entender por que un conjunto de tonos funciona o choca.",
          "Afinar decisiones de color en edicion o diseno."
        ]
      },
      {
        title: "Como sacarle partido sin volverte mecanico",
        paragraphs: [
          "La rueda ayuda a decidir, pero no reemplaza la observacion de la escena real. La luz, la piel, el material o el contexto visual pueden alterar por completo una paleta que sobre el papel parecia perfecta.",
          "Lo util es usarla como mapa y luego contrastar esas ideas con imagenes reales y con el tono que quieres dar al trabajo."
        ]
      }
    ],
    faq: [
      {
        question: "Sirve tambien para fotografia",
        answer: "Si, sobre todo para pensar paletas, estilismo, fondos y relaciones de color antes de disparar o editar."
      },
      {
        question: "Hay que seguir siempre una armonia clasica",
        answer: "No. Las armonias ayudan a entender relaciones, pero una imagen puede funcionar muy bien rompiendo esa comodidad."
      }
    ],
    related: ["consejos/explicacion-de-la-calibracion-del-color-de-la-camara", "composicion/25-asombrosos-ejemplos-de-colores-complementarios-en-fotografia"]
  },
  {
    slug: "documentos-de-identidad/que-es-una-ortofoto",
    category: "documentos-de-identidad",
    title: "Que es una ortofoto y por que no es una foto cualquiera",
    description: "Definicion clara de ortofoto y diferencia con una fotografia aerea convencional.",
    kicker: "Definicion",
    intro: "Una ortofoto no es simplemente una imagen tomada desde arriba. Su valor esta en que se corrige geometricamente para representar el terreno con mucha mas precision, casi como si combinara la lectura visual de una fotografia con la utilidad de un plano.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Imagen corregida",
    heroLabel: "ver desde arriba no basta: hace falta exactitud geometrica",
    summary: [
      "La ortofoto corrige deformaciones y perspectiva para ser util como referencia precisa.",
      "Se usa en cartografia, urbanismo, gestion del territorio y documentacion tecnica.",
      "No debe confundirse con una foto aerea comun sin corregir."
    ],
    sections: [
      {
        title: "Que la diferencia de una fotografia aerea normal",
        bullets: [
          "Se corrige para eliminar buena parte de la distorsion.",
          "Permite medir y situar elementos con mas precision.",
          "Se apoya en datos topograficos y procesos tecnicos.",
          "Tiene valor documental y tecnico, no solo visual."
        ]
      },
      {
        title: "Donde se usa con frecuencia",
        paragraphs: [
          "Las ortofotos se utilizan en cartografia, catastros, urbanismo, medio ambiente, gestion agricola y otros trabajos donde importa saber con bastante exactitud como esta dispuesto un territorio.",
          "Tambien son utiles para comparar cambios en el tiempo, porque ayudan a superponer informacion y a leer el espacio con mas fiabilidad."
        ]
      }
    ],
    faq: [
      {
        question: "Una ortofoto se puede medir como un plano",
        answer: "En gran medida si, porque esta corregida para que la representacion del terreno sea mucho mas precisa que en una foto aerea comun."
      },
      {
        question: "Hace falta que la tome un dron",
        answer: "No. Puede generarse desde avion, dron u otras plataformas aereas siempre que despues exista el proceso de correccion adecuado."
      }
    ],
    related: ["documentos-de-identidad/tamano-carnet-medidas", "accesorios-de-fotografia/registrar-dron-dji"]
  },
  {
    slug: "artesania/que-es-daguerrotipo",
    category: "artesania",
    title: "Qué es un daguerrotipo y por qué importa en la historia de la fotografía",
    description: "Qué fue el daguerrotipo, cómo funcionaba y por qué sigue siendo clave para entender los orígenes materiales de la fotografía.",
    kicker: "Historia",
    intro: "El daguerrotipo fue uno de los primeros grandes procesos fotográficos del siglo XIX. No solo importa por su antigüedad, sino porque cambió la relación entre imagen, tiempo, retrato y memoria.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "1839",
    heroLabel: "año de su presentación pública",
    summary: [
      "El daguerrotipo fue un procedimiento fotográfico pionero basado en una placa metálica sensibilizada.",
      "Ofrecía una imagen única, muy detallada y sin negativo intermedio.",
      "Su estudio ayuda a entender mejor cómo nació la fotografía como objeto, técnica y cultura visual."
    ],
    sections: [
      {
        title: "Cómo funcionaba un daguerrotipo",
        paragraphs: [
          "El proceso partía de una placa de cobre recubierta de plata que se sensibilizaba con vapores químicos y se exponía en cámara. Después la imagen latente se revelaba y se fijaba para hacerla visible y estable.",
          "El resultado no era una copia en papel, sino una pieza única con una presencia material muy fuerte. Esa condición explica parte de su valor histórico y también muchas de sus limitaciones."
        ],
        bullets: [
          "No había negativo reproducible como en procesos posteriores.",
          "La imagen quedaba sobre una superficie metálica pulida.",
          "El nivel de detalle era sorprendente para su época."
        ]
      },
      {
        title: "Por qué marcó un antes y un después",
        paragraphs: [
          "El daguerrotipo hizo visible que la cámara podía registrar el mundo con una precisión desconocida hasta entonces. Eso transformó el retrato, la documentación de lugares y la idea misma de la imagen como huella del tiempo.",
          "También abrió preguntas nuevas sobre acceso, coste, circulación de imágenes y relación entre técnica y representación."
        ],
        bullets: [
          "Acercó el retrato a un público más amplio que el de la pintura.",
          "Consolidó la fotografía como práctica técnica con valor social.",
          "Preparó el terreno para procesos más rápidos y reproducibles."
        ]
      },
      {
        title: "Qué sigue enseñando hoy",
        cards: [
          {
            title: "La fotografía como objeto",
            text: "Un daguerrotipo recuerda que la imagen no es solo contenido visual: también es soporte, superficie y presencia física."
          },
          {
            title: "La importancia del proceso",
            text: "Los primeros procedimientos obligaban a pensar cada paso con cuidado. Esa relación entre técnica y resultado sigue vigente."
          },
          {
            title: "Historia con efectos actuales",
            text: "Entender estos orígenes ayuda a leer mejor conceptos modernos como archivo, copia, original y restauración."
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Un daguerrotipo es lo mismo que una foto antigua cualquiera",
        answer: "No. Es un proceso muy concreto de los inicios de la fotografía, con una técnica, un soporte y un aspecto propios."
      },
      {
        question: "¿Por qué no se hacían copias iguales",
        answer: "Porque el daguerrotipo generaba una imagen única sobre placa. A diferencia de los sistemas con negativo, no estaba pensado para reproducirse en serie."
      }
    ],
    related: ["artesania/que-es-daguerrotipo"]
  },
  {
    slug: "tecnologia/instalar-photoshop",
    category: "tecnologia",
    title: "Instalar Photoshop: qué revisar para hacerlo sin problemas",
    description: "Guía clara para instalar Photoshop con menos fricción: versión, cuenta, espacio, permisos y errores frecuentes.",
    kicker: "Instalación",
    intro: "Instalar Photoshop suele ser una tarea rápida, pero los problemas aparecen cuando sistema, cuenta y versión no están bien alineados desde el principio.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Cuenta + sistema",
    heroLabel: "la base de una instalación limpia",
    summary: [
      "Antes de instalar merece la pena revisar requisitos del sistema, espacio libre y cuenta de Adobe.",
      "Los errores más comunes tienen que ver con permisos, sincronización o instalaciones previas mal cerradas.",
      "Una base limpia ahorra mucho más tiempo que ir parcheando fallos uno por uno."
    ],
    sections: [
      {
        title: "Qué mirar antes de instalar",
        bullets: [
          "Versión del sistema operativo y compatibilidad.",
          "Espacio libre suficiente para programa, cachés y archivos temporales.",
          "Cuenta de Adobe activa y con el plan correcto.",
          "Conexión estable para descarga e inicio de sesión."
        ],
        paragraphs: [
          "Si esa base falla, Photoshop puede instalarse a medias, no abrir o actualizarse de forma errática. La comprobación previa evita la mayoría de incidencias tontas."
        ]
      },
      {
        title: "Orden de instalación razonable",
        paragraphs: [
          "Lo más limpio es iniciar sesión en Creative Cloud, revisar si existen instalaciones antiguas o parciales y solo entonces descargar la versión que necesitas. Si trabajas con plugins o flujos concretos, asegúrate de que esa versión te encaja antes de actualizar por inercia.",
          "Cuando el equipo ya arrastra errores previos, a veces lo más eficaz es limpiar la instalación anterior y volver a empezar con el entorno despejado."
        ],
        table: {
          columns: ["Paso", "Qué hacer", "Qué evita"],
          rows: [
            ["1", "Revisar sistema y espacio", "Bloqueos por incompatibilidad o falta de disco"],
            ["2", "Entrar en Creative Cloud con la cuenta correcta", "Errores de licencia o activación"],
            ["3", "Instalar la versión necesaria", "Actualizaciones poco controladas"],
            ["4", "Abrir y probar un archivo simple", "Detectar fallos antes de trabajar"]
          ]
        }
      },
      {
        title: "Problemas habituales",
        bullets: [
          "La app descarga pero Photoshop no abre.",
          "Creative Cloud no reconoce la suscripción correcta.",
          "Faltan permisos de sistema o carpetas de usuario.",
          "Plugins antiguos bloquean el arranque o generan errores."
        ],
        paragraphs: [
          "Cuando pasa algo así, merece la pena aislar el problema: primero cuenta, luego versión, después permisos y por último conflicto con otros componentes."
        ]
      }
    ],
    faq: [
      {
        question: "¿Es buena idea instalar siempre la última versión",
        answer: "Solo si encaja con tu flujo. Si dependes de plugins, automatizaciones o compatibilidad con otros equipos, a veces es mejor mantener una versión estable."
      },
      {
        question: "¿Qué hago si Creative Cloud falla antes de instalar",
        answer: "Empieza por revisar inicio de sesión, conexión, permisos y restos de instalaciones previas. Muchas incidencias nacen ahí, no en Photoshop como tal."
      }
    ],
    related: ["software/capture-one-gratis"]
  },
  {
    slug: "fotografia-de-hombres/hombres-gay-musculoso",
    category: "fotografia-de-hombres",
    title: "Fotografía masculina atlética: cuerpo, forma y representación visual",
    description: "Cómo abordar retrato masculino atlético con una mirada seria, respetuosa y visualmente sólida.",
    kicker: "Figura masculina",
    intro: "Cuando una imagen gira alrededor del cuerpo masculino, el valor no está en exagerar el físico sino en construir presencia, forma y contexto con una dirección clara.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Forma y respeto",
    heroLabel: "dos bases para que la imagen funcione",
    summary: [
      "La fotografía de cuerpo masculino funciona mejor cuando se apoya en gesto, luz y estructura.",
      "La intención visual importa más que el impacto superficial.",
      "La representación mejora cuando hay respeto, contexto y una dirección precisa."
    ],
    sections: [
      {
        title: "Cómo evitar una imagen vacía",
        paragraphs: [
          "Una foto basada solo en exhibición corporal se agota rápido. En cambio, cuando trabajas postura, mirada, tensión de hombros, luz y encuadre, la imagen gana carácter y deja de depender únicamente del físico.",
          "Eso vale tanto para retrato editorial como para una sesión más íntima o personal: el cuerpo necesita una lectura visual, no solo presencia."
        ],
        bullets: [
          "Trabaja la postura antes que el gesto forzado.",
          "Cuida manos, cuello y línea de mirada.",
          "Decide si buscas fuerza, calma, vulnerabilidad o distancia."
        ]
      },
      {
        title: "Qué ayuda a construir mejor el retrato",
        cards: [
          {
            title: "Luz",
            text: "La luz lateral o ligeramente envolvente suele describir bien la forma sin convertirla en caricatura."
          },
          {
            title: "Dirección",
            text: "Instrucciones cortas y concretas funcionan mejor que una lista larga de poses cerradas."
          },
          {
            title: "Contexto",
            text: "Vestuario, espacio y gesto cambian por completo el tono de la representación."
          }
        ]
      },
      {
        title: "Qué es mejor evitar",
        bullets: [
          "Usar estereotipos visuales sin pensar en la persona real.",
          "Confundir intensidad con rigidez.",
          "Forzar sexualización si no responde al proyecto o al acuerdo de la sesión."
        ]
      }
    ],
    faq: [
      {
        question: "¿Hace falta marcar mucho la musculatura para que la foto funcione",
        answer: "No. La musculatura puede estar presente, pero la imagen mejora cuando también hay gesto, ritmo, dirección de luz y una intención clara."
      },
      {
        question: "¿Qué cambia más el resultado: la pose o la iluminación",
        answer: "Las dos cosas van juntas. Una buena luz define la forma, pero la pose decide cómo se percibe esa forma."
      }
    ],
    related: ["retrato/fotografia-de-desnudo-artistico", "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres"]
  },
  {
    slug: "paisaje-naturaleza/paisajes-con-lineas",
    category: "paisaje-naturaleza",
    title: "Paisajes con lineas: como usarlas para construir profundidad y direccion",
    description: "Como aprovechar lineas en paisaje para ordenar la imagen, dar recorrido y guiar la mirada.",
    kicker: "Paisaje",
    intro: "Las lineas en paisaje sirven para mucho mas que decorar una escena. Pueden conectar planos, dar recorrido y hacer que un encuadre amplio tenga una direccion clara. Bien trabajadas, convierten un paisaje bonito en una imagen con estructura.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Direccion visual",
    heroLabel: "cuando el terreno marca un camino, la foto respira mejor",
    summary: [
      "Las lineas ayudan a dar orden y recorrido a la escena.",
      "Funcionan muy bien con caminos, rios, sombras, muros y crestas.",
      "Necesitan un final visual o una relacion clara con el resto de planos."
    ],
    sections: [
      {
        title: "Que tipos de lineas suelen funcionar mejor",
        bullets: [
          "Caminos y carreteras que entran en la escena.",
          "Rios, costas o bordes de cultivo.",
          "Sombras largas al amanecer o al atardecer.",
          "Lineas de montana, vallas o huellas en nieve y arena."
        ]
      },
      {
        title: "Como evitar que se queden en un recurso vacio",
        paragraphs: [
          "Una linea fuerte no basta por si sola. Conviene que conduzca hacia una luz, una forma, un vacio interesante o una relacion clara entre planos. Sin ese destino, el efecto se agota rapido.",
          "Tambien ayuda vigilar los bordes y decidir desde donde empieza realmente el recorrido visual. Unos centimetros cambian mucho el resultado."
        ]
      }
    ],
    faq: [
      {
        question: "Hay que buscar siempre diagonales",
        answer: "No. Las diagonales suelen dar mucha energia, pero una horizontal o una curva tambien pueden funcionar muy bien si ordenan la escena."
      },
      {
        question: "Funcionan mejor con angular o con tele",
        answer: "Depende. El angular enfatiza el recorrido; el tele simplifica y comprime. Las dos opciones pueden ser muy buenas."
      }
    ],
    related: ["composicion/lineas-convergentes", "paisaje-naturaleza/que-es-un-filtro-cpl-como-cuando-y-por-que-usar-uno"]
  },
  {
    slug: "post-produccion/una-guia-para-principiantes-para-editar-fotos-en-gimp",
    category: "post-produccion",
    title: "Editar fotos en GIMP: guia para principiantes con un flujo sensato",
    description: "Introduccion clara a GIMP para edicion fotografica basica y media sin depender de software de pago.",
    kicker: "GIMP",
    intro: "GIMP puede ser una buena puerta de entrada a la edicion si entiendes bien que hace bien, que no y como integrarlo dentro de un flujo realista. No se trata de imitar Photoshop a toda costa, sino de sacar partido a una herramienta gratuita con orden y sentido.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Edicion accesible",
    heroLabel: "lo importante no es el precio del programa, sino la claridad del flujo",
    summary: [
      "GIMP cubre muchas tareas basicas y medias de edicion fotografica.",
      "Conviene combinarlo con un revelador RAW si trabajas mucho con archivos sin procesar.",
      "Aprender capas, mascara y exportacion suele dar mas resultado que perseguir efectos."
    ],
    sections: [
      {
        title: "Por donde merece la pena empezar",
        bullets: [
          "Recorte y reencuadre.",
          "Ajustes basicos de tono y color.",
          "Capas y mascaras sencillas.",
          "Clonado y limpieza de pequenas distracciones."
        ]
      },
      {
        title: "Que flujo funciona mejor para principiantes",
        paragraphs: [
          "Lo mas sensato es abrir la imagen ya revelada de base y despues trabajar en GIMP la parte local: limpieza, capas, texto, pequenos retoques y ajustes concretos. Asi el programa se vuelve mucho mas facil de entender.",
          "Tambien conviene guardar una copia editable por capas y exportar aparte la version final para web o impresion."
        ]
      }
    ],
    faq: [
      {
        question: "Sirve GIMP para uso fotografico serio",
        answer: "Si, sobre todo en edicion basica, retoque medio y trabajo por capas. Simplemente hay que aceptar sus limites y ordenar bien el flujo."
      },
      {
        question: "Hace falta usar RAW con GIMP",
        answer: "No es obligatorio, pero si disparas RAW suele ser mejor revelarlo primero con otra herramienta y pasar despues a GIMP."
      }
    ],
    related: ["post-produccion/como-abrir-imagenes-sin-procesar-en-gimp-rawtherapee-y-darktable", "post-produccion/como-usar-la-herramienta-tampon-de-clonar-en-photoshop"]
  },
  {
    slug: "paisaje-naturaleza/que-es-un-filtro-cpl-como-cuando-y-por-que-usar-uno",
    category: "paisaje-naturaleza",
    title: "Qué es un filtro CPL y cuándo usarlo en paisaje y exteriores",
    description: "Qué hace un filtro polarizador circular y en qué situaciones ayuda de verdad en paisaje, agua, cristal, vegetación y cielo.",
    kicker: "Filtro",
    intro: "El filtro CPL, también llamado polarizador circular, es una de las herramientas más útiles en exterior cuando necesitas controlar reflejos y limpiar la lectura de una escena sin depender solo de la edición.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Reflejos bajo control",
    heroLabel: "un filtro que cambia la escena antes del disparo",
    summary: [
      "Un CPL reduce reflejos y puede reforzar contraste y color en determinadas superficies.",
      "Resulta especialmente útil en agua, cristal, vegetación y cielo.",
      "Funciona mejor cuando se usa con moderación y se revisa el efecto antes de disparar."
    ],
    sections: [
      {
        title: "Qué hace realmente un polarizador",
        paragraphs: [
          "El CPL filtra parte de la luz reflejada y eso permite ver mejor a través de superficies brillantes o reducir destellos molestos. En paisaje también puede profundizar algo el azul del cielo o separar mejor ciertas texturas en hojas, roca y agua.",
          "La diferencia importante es que ese cambio sucede en la captura. No estás corrigiendo un reflejo después: lo estás controlando antes de que llegue al sensor."
        ],
        bullets: [
          "Reduce reflejos en agua y cristal.",
          "Puede dar más claridad a vegetación y superficies húmedas.",
          "Ayuda a limpiar escenas con brillo disperso."
        ]
      },
      {
        title: "Cuándo compensa llevarlo montado",
        table: {
          columns: ["Escena", "Qué mejora", "Qué vigilar"],
          rows: [
            ["Río o lago", "Menos reflejo superficial", "No apagar del todo el brillo natural del agua"],
            ["Bosque húmedo", "Más separación de textura y color", "No saturar en exceso verdes y sombras"],
            ["Ventanas o escaparates", "Más visibilidad a través del cristal", "Ángulo y pérdidas de luz"],
            ["Cielo con nubes", "Más contraste entre azul y nube", "Efecto desigual en angulares muy abiertos"]
          ]
        }
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Forzar demasiado el efecto y volver artificial el color.",
          "Usarlo en un gran angular extremo sin revisar el cielo.",
          "Olvidar que resta algo de luz y puede afectar a la exposición.",
          "Dejarlo fijo en el objetivo como si sirviera para todo."
        ],
        paragraphs: [
          "El mejor uso del CPL es el que apenas se nota como efecto, pero sí mejora la lectura general de la imagen."
        ]
      }
    ],
    faq: [
      {
        question: "¿Un CPL hace lo mismo que un filtro ND",
        answer: "No. El ND reduce luz para alargar exposición o abrir diafragma. El CPL trabaja sobre reflejos y polarización de la luz, aunque también resta algo de luminosidad."
      },
      {
        question: "¿Se puede corregir ese efecto después en edición",
        answer: "Solo en parte. Puedes bajar reflejos o ajustar color, pero un polarizador resuelve cosas en captura que la edición no recupera igual."
      }
    ],
    related: ["conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos"]
  },
  {
    slug: "conceptos-basicos/como-usar-el-primer-plano-el-medio-y-el-fondo-en-la-fotografia",
    category: "conceptos-basicos",
    title: "Primer plano, plano medio y fondo: como usarlos en fotografia",
    description: "Como trabajar los distintos planos de una imagen para ganar profundidad, orden y lectura.",
    kicker: "Planos",
    intro: "Pensar una foto por planos es una de las maneras mas directas de mejorar profundidad, jerarquia y sentido de espacio. Cuando sabes que papel cumple cada capa de la imagen, el encuadre deja de ser una suma de cosas y empieza a respirar como conjunto.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Tres capas utiles",
    heroLabel: "una foto gana mucho cuando cada plano sabe que esta haciendo",
    summary: [
      "Separar la escena por planos ayuda a construir imagenes mas ricas y legibles.",
      "Cada plano puede cumplir una funcion distinta dentro de la lectura.",
      "Es especialmente util en paisaje, calle y documental."
    ],
    sections: [
      {
        title: "Que puede hacer cada plano",
        bullets: [
          "El primer plano introduce, ancla o crea profundidad.",
          "El plano medio suele contener la accion principal.",
          "El fondo aporta contexto, aire o tension.",
          "No siempre hacen falta los tres, pero conviene decidirlo."
        ]
      },
      {
        title: "Como evitar el caos entre capas",
        paragraphs: [
          "La dificultad aparece cuando todos los planos compiten. Conviene decidir cual manda y como se separan los otros, ya sea por luz, color, enfoque o posicion.",
          "Moverse unos pasos, agacharse o esperar a que algo entre o salga del encuadre suele ser mas importante que tocar la camara."
        ]
      }
    ],
    faq: [
      {
        question: "Siempre hacen falta tres planos",
        answer: "No. Lo importante no es completar una formula, sino saber si la escena pide profundidad compleja o una estructura mas sencilla."
      },
      {
        question: "Como separarlos mejor",
        answer: "Con distancia, luz, contraste, color o enfoque. Cualquier diferencia clara entre capas ayuda a que se lean mejor."
      }
    ],
    related: ["conceptos-basicos/que-es-el-enfoque-selectivo-y-como-usarlo-para-fotos-geniales", "composicion/los-10-elementos-de-la-composicion-en-fotografia"]
  },
  {
    slug: "post-produccion/como-usar-la-herramienta-tampon-de-clonar-en-photoshop",
    category: "post-produccion",
    title: "Como usar la herramienta tampon de clonar en Photoshop sin dejar rastros evidentes",
    description: "Que hace el tampon de clonar y como usarlo con mas limpieza para corregir distracciones en Photoshop.",
    kicker: "Retoque",
    intro: "El tampon de clonar parece una herramienta simple, pero se nota enseguida cuando se usa mal. La diferencia entre un retoque limpio y uno torpe suele estar en elegir bien la muestra, respetar la direccion de la luz y no repetir texturas de forma evidente.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Clonar con limpieza",
    heroLabel: "el mejor retoque es el que no se delata al segundo vistazo",
    summary: [
      "Sirve para eliminar distracciones y reparar pequenas zonas con control.",
      "La muestra debe parecerse en textura, tono y luz a la zona corregida.",
      "Trabajar por capas y con varias muestras suele dar mejor resultado."
    ],
    sections: [
      {
        title: "Que conviene hacer siempre",
        bullets: [
          "Trabajar sobre una capa nueva o no destructiva.",
          "Cambiar la muestra con frecuencia.",
          "Clonar en tramos pequenos.",
          "Revisar patrones repetidos al final."
        ]
      },
      {
        title: "Donde suelen aparecer los errores",
        paragraphs: [
          "El fallo mas comun es usar una sola muestra para demasiado espacio. Eso crea repeticiones faciles de detectar y rompe la naturalidad de la imagen.",
          "Tambien conviene vigilar bordes, lineas, sombras y texturas con direccion, porque cualquier salto se nota mucho mas ahi."
        ]
      }
    ],
    faq: [
      {
        question: "Es mejor el tampon o el pincel corrector",
        answer: "Depende. El tampon da mas control manual; el corrector puede ir muy bien en ciertas superficies. Lo sensato es saber cuando conviene cada uno."
      },
      {
        question: "Hay que ampliar mucho para clonar",
        answer: "Conviene alternar. Amplia para trabajar fino, pero alejate a menudo para comprobar si el retoque sigue siendo creible en conjunto."
      }
    ],
    related: ["post-produccion/como-arreglar-fotos-granuladas-en-photoshop-y-lightroom", "consejos/12-herramientas-de-seleccion-de-photoshop-que-debes-conocer"]
  },
  {
    slug: "consejos/12-herramientas-de-seleccion-de-photoshop-que-debes-conocer",
    category: "consejos",
    title: "Herramientas de seleccion de Photoshop que merece la pena conocer",
    description: "Que herramientas de seleccion ofrece Photoshop y en que caso encaja mejor cada una.",
    kicker: "Photoshop",
    intro: "Seleccionar bien en Photoshop cambia por completo la calidad del retoque. No hace falta dominarlo todo, pero si entender que unas herramientas van mejor para bordes duros, otras para pelo, otras para formas geometricas y otras para selecciones rapidas de trabajo.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Seleccionar mejor",
    heroLabel: "un buen borde ahorra mucho tiempo en cualquier edicion seria",
    summary: [
      "No todas las selecciones sirven para el mismo tipo de sujeto o borde.",
      "Elegir bien la herramienta ahorra tiempo y mejora mucho el acabado.",
      "La revision final del borde sigue siendo imprescindible."
    ],
    sections: [
      {
        title: "Que conviene dominar primero",
        bullets: [
          "Marco y lazo para selecciones simples.",
          "Seleccion rapida para zonas generales.",
          "Pluma cuando hace falta precision dura.",
          "Seleccion y mascara para pelo y bordes complejos."
        ]
      },
      {
        title: "Como decidir la herramienta adecuada",
        paragraphs: [
          "Lo mejor es mirar el borde. Si es limpio y geometrico, conviene una herramienta precisa. Si es organico o cambiante, hace falta una seleccion mas flexible y una buena mascara.",
          "Tambien ayuda pensar si la seleccion es definitiva o solo de trabajo. A veces una seleccion rapida basta para avanzar y ya despues se afina."
        ]
      }
    ],
    faq: [
      {
        question: "Hay una herramienta mejor que todas",
        answer: "No. Cada una resuelve mejor un tipo de borde, velocidad o precision distinta."
      },
      {
        question: "Que arruina mas una buena seleccion",
        answer: "No revisar el borde final. Un recorte rapido puede parecer suficiente hasta que lo colocas sobre otro fondo."
      }
    ],
    related: ["post-produccion/como-usar-la-herramienta-tampon-de-clonar-en-photoshop", "post-produccion/que-son-los-canales-de-photoshop-y-como-empezar-a-usarlos"]
  },
  {
    slug: "conceptos-basicos/5x7-pulgadas-en-cm",
    category: "conceptos-basicos",
    title: "5x7 pulgadas en cm: equivalencias y uso habitual en fotografia",
    description: "Conversion de 5x7 pulgadas a centimetros y contexto practico de uso en impresion fotografica.",
    kicker: "Formato",
    intro: "Igual que pasa con 4x6, una parte grande del problema en formatos impresos es simplemente no tener clara la equivalencia y la proporcion. Saber cuanto mide 5x7 en centimetros evita recortes inesperados y ayuda a preparar mejor el archivo antes de imprimir.",
    readTime: "5 min",
    updatedAt: "2026-04-15",
    heroStat: "12,7 x 17,78 cm",
    heroLabel: "la medida importa, pero la proporcion manda aun mas",
    summary: [
      "5x7 pulgadas equivalen a 12,7 x 17,78 cm.",
      "La proporcion es distinta de otros formatos fotograficos comunes.",
      "Conviene adaptar el archivo a la impresion final y no confiar en el recorte automatico."
    ],
    sections: [
      {
        title: "Que conviene revisar antes de imprimir",
        bullets: [
          "Proporcion de la imagen original.",
          "Si vas a recortar o dejar borde.",
          "Resolucion suficiente para el tamano final.",
          "Destino: album, marco o copia suelta."
        ]
      },
      {
        title: "Por que da problemas un formato tan simple",
        paragraphs: [
          "Porque muchas fotos se disparan en proporciones distintas y el laboratorio recorta lo que sobra si no das instrucciones. Eso puede cortar cabeza, manos o aire de una composicion delicada.",
          "Preparar el archivo al tamano final antes de enviarlo evita sorpresas y te deja decidir a ti donde cae el recorte."
        ]
      }
    ],
    faq: [
      {
        question: "Se puede imprimir cualquier foto en 5x7",
        answer: "Si, pero a veces exige recorte. Lo importante es decidirlo antes y no dejarlo al ajuste automatico del laboratorio."
      },
      {
        question: "Importa mucho el DPI aqui",
        answer: "Importa si quieres una impresion nitida. Conviene comprobar que el archivo tiene resolucion suficiente para ese tamano."
      }
    ],
    related: ["conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm", "compras/imprimir-economico"]
  },
  {
    slug: "paisaje-naturaleza/los-27-fotografos-de-paisajes-mas-influyentes-a-seguir",
    category: "paisaje-naturaleza",
    title: "Fotografos de paisaje influyentes para estudiar composicion, luz y escala",
    description: "Autores clave de fotografia de paisaje para ampliar referencias y entender maneras distintas de construir territorio y atmosfera.",
    kicker: "Referencias",
    intro: "Estudiar fotografos de paisaje es una de las mejores formas de entender como se construyen escala, atmosfera y relacion entre forma y territorio. Los buenos referentes no solo muestran lugares bonitos: ensenan como se mira, cuanto se espera y que se deja fuera.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Escala y luz",
    heroLabel: "el paisaje se aprende tambien mirando como otros lo ordenan",
    summary: [
      "Estas referencias ayudan a entender luz, tiempo y composicion en paisaje.",
      "Conviene estudiar estilos distintos para no caer en una sola formula visual.",
      "Mirar autores buenos acelera mucho la madurez del ojo."
    ],
    sections: [
      {
        title: "Que conviene mirar en estos autores",
        bullets: [
          "Como usan el primer plano y la escala humana.",
          "Que tipo de luz buscan y cuanto esperan.",
          "Como equilibran espectacularidad y estructura.",
          "Que papel tiene la edicion o la serie en su trabajo."
        ]
      },
      {
        title: "Como estudiar referencias sin copiar superficie",
        paragraphs: [
          "Lo util no es repetir cielo dramatico o color intenso, sino entender como cada autor organiza el espacio y decide el momento. Esa parte metodologica se puede trasladar a tu trabajo mucho mejor que el estilo aparente.",
          "Tambien ayuda mezclar autores clasicos y contemporaneos para no quedarse solo con una moda de procesado."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta conocer muchos nombres para mejorar",
        answer: "No. Bastan algunos autores bien estudiados. Lo importante es mirarlos con calma y sacar decisiones utiles."
      },
      {
        question: "Sirve aunque no haga paisaje puro",
        answer: "Si. El paisaje ensena mucho sobre escala, luz, paciencia y construccion del espacio."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "paisaje-naturaleza/paisajes-con-lineas"]
  },
  {
    slug: "composicion/25-asombrosos-ejemplos-de-colores-complementarios-en-fotografia",
    category: "composicion",
    title: "Colores complementarios en fotografia: ejemplos y como usarlos con intencion",
    description: "Como funcionan los colores complementarios y que aportan a la composicion fotografica cuando se usan con criterio.",
    kicker: "Color",
    intro: "Los colores complementarios destacan porque generan contraste cromatico directo. Bien usados, pueden dar energia y orden al mismo tiempo. Mal usados, convierten la imagen en una pelea de saturacion sin jerarquia.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Contraste cromatico",
    heroLabel: "el color puede separar, dirigir y tensar una imagen",
    summary: [
      "Los complementarios crean una separacion visual muy clara.",
      "Funcionan mejor cuando la escena ya tiene una jerarquia sencilla.",
      "No hace falta saturarlo todo para que el contraste cromatico se note."
    ],
    sections: [
      {
        title: "Donde suele aparecer bien este recurso",
        bullets: [
          "Ropa y fondo con colores opuestos.",
          "Escena urbana con grafica sencilla.",
          "Puesta de sol y zonas frias del entorno.",
          "Objetos de color fuerte en composiciones limpias."
        ]
      },
      {
        title: "Como hacer que no se vuelva estridente",
        paragraphs: [
          "El truco suele estar en dejar que uno mande y el otro apoye. Cuando ambos colores compiten con la misma fuerza, la imagen se vuelve cansada.",
          "Tambien conviene cuidar luz y textura. Un color bonito no arregla una escena desordenada."
        ]
      }
    ],
    faq: [
      {
        question: "Hay que buscarlos siempre en estado puro",
        answer: "No. A veces funcionan mejor en versiones mas apagadas o parciales que en una oposicion saturada total."
      },
      {
        question: "Sirven solo para fotografia creativa",
        answer: "No. Tambien ayudan mucho en retrato, calle, producto o gastronomia cuando quieres separar bien elementos."
      }
    ],
    related: ["software/adobe-rueda-de-color", "consejos/que-es-el-valor-en-la-fotografia-y-como-usarlo"]
  },
  {
    slug: "fotografia/formato-fotografico",
    category: "fotografia",
    title: "Formato fotografico: que puede significar y como no confundir terminos",
    description: "Que se entiende por formato fotografico segun el contexto: impresion, sensor, archivo o relacion de aspecto.",
    kicker: "Definicion",
    intro: "Formato fotografico es un termino ambiguo. A veces se refiere al tamano de impresion, otras a la relacion de aspecto, otras al tipo de sensor y otras incluso al archivo. Por eso conviene leer siempre el contexto antes de sacar conclusiones o comprar algo equivocadamente.",
    readTime: "5 min",
    updatedAt: "2026-04-15",
    heroStat: "Termino ambiguo",
    heroLabel: "aclarar el contexto evita muchos errores innecesarios",
    summary: [
      "Formato puede referirse a varias cosas distintas dentro de la fotografia.",
      "La precision del termino evita errores de impresion o de equipo.",
      "Conviene separar bien formato de archivo, de sensor y de copia final."
    ],
    sections: [
      {
        title: "Que puede querer decir formato",
        bullets: [
          "Tamano de impresion o copia.",
          "Relacion de aspecto de la imagen.",
          "Tamano o familia del sensor.",
          "En ciertos contextos, tipo de archivo o soporte."
        ]
      },
      {
        title: "Por que se confunde tanto",
        paragraphs: [
          "Porque en fotografia muchos terminos se reutilizan segun quien habla: laboratorio, tienda, fabricante o fotografo. Lo que para uno es formato, para otro puede ser proporcion o tamano final.",
          "Si no se aclara el contexto, aparecen malentendidos de impresion, recorte o compatibilidad."
        ]
      }
    ],
    faq: [
      {
        question: "Formato fotografico y proporcion son lo mismo",
        answer: "No siempre. A veces se usan casi como sinonimos, pero no conviene darlo por hecho sin ver el contexto."
      },
      {
        question: "Importa aclararlo",
        answer: "Si. Ahorras errores de compra, de recorte y de preparacion de archivos."
      }
    ],
    related: ["conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm", "conceptos-basicos/apaisada-significado"]
  },
  {
    slug: "post-produccion/la-mejor-configuracion-de-exportacion-de-lightroom-para-impresion-instagram-y-mas",
    category: "post-produccion",
    title: "Configuracion de exportacion de Lightroom para impresion, Instagram y mas",
    description: "Como exportar desde Lightroom segun destino sin perder calidad ni complicarte de mas.",
    kicker: "Exportacion",
    intro: "Exportar bien es la ultima gran decision del flujo. Hacerlo mal puede arruinar una edicion buena con compresion, tamano incorrecto o un enfoque de salida mal planteado. La configuracion correcta siempre depende del destino final de la imagen.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Exportar segun destino",
    heroLabel: "no existe una sola salida buena para todos los usos",
    summary: [
      "La exportacion cambia mucho entre impresion, web y redes sociales.",
      "Tamano, espacio de color y enfoque de salida son claves.",
      "Pensar en el uso final evita repetir trabajo y perder calidad."
    ],
    sections: [
      {
        title: "Que revisar siempre antes de exportar",
        bullets: [
          "Tamano final en pixeles o centimetros.",
          "Espacio de color segun destino.",
          "Calidad y compresion del archivo.",
          "Enfoque de salida adecuado."
        ]
      },
      {
        title: "Como cambia segun el destino",
        paragraphs: [
          "Para impresion importa sobre todo la resolucion, el tamano fisico y un archivo limpio. Para Instagram o web pesan mas el tamano final, la compresion y que la imagen siga viendose nitida despues de la plataforma.",
          "Lo importante es dejar de exportar siempre igual por costumbre y pensar que necesita cada uso concreto."
        ]
      }
    ],
    faq: [
      {
        question: "Hay una configuracion perfecta para todo",
        answer: "No. La salida correcta depende de donde se va a ver la foto y que control tienes sobre ese destino."
      },
      {
        question: "Hace falta exportar varias versiones",
        answer: "Muchas veces si. Una version para impresion y otra para redes suele ser lo mas sensato."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar", "compras/imprimir-economico"]
  },
  {
    slug: "post-produccion/que-son-los-canales-de-photoshop-y-como-empezar-a-usarlos",
    category: "post-produccion",
    title: "Que son los canales de Photoshop y como empezar a usarlos",
    description: "Introduccion clara a los canales en Photoshop y a por que importan para seleccion, mascara y luminosidad.",
    kicker: "Photoshop",
    intro: "Los canales suelen parecer una parte avanzada de Photoshop, pero entenderlos aporta mucho en seleccion, mascara y lectura de luminosidad. No hace falta dominarlos todos de golpe; basta con entender que almacenan informacion util que a veces resulta mucho mas limpia que una seleccion rapida convencional.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Canales y mascaras",
    heroLabel: "la parte menos evidente de Photoshop suele esconder mucho control",
    summary: [
      "Los canales guardan informacion separada de color y luminosidad.",
      "Son muy utiles para selecciones finas y mascaras complejas.",
      "Aprender a leerlos abre una capa de precision muy interesante."
    ],
    sections: [
      {
        title: "Para que sirven en la practica",
        bullets: [
          "Crear selecciones por contraste.",
          "Afinar mascaras de pelo, cielo o fondos complejos.",
          "Leer luminosidad de la imagen.",
          "Trabajar ajustes mas finos por zonas."
        ]
      },
      {
        title: "Como empezar sin perderte",
        paragraphs: [
          "Lo mas util es abrir una imagen con contraste claro, mirar cada canal RGB y ver cual separa mejor la zona que te interesa. Esa observacion ya cambia mucho la manera de entender la herramienta.",
          "Despues puedes probar duplicados de canal, niveles y conversion a mascara para ver como se construyen selecciones mas finas."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta usar canales en todas las ediciones",
        answer: "No. Pero conviene conocerlos porque hay situaciones donde resuelven mejor que una seleccion rapida convencional."
      },
      {
        question: "Los canales solo sirven en RGB",
        answer: "No. Su funcionamiento depende del modo de color, pero la idea de informacion separada sigue siendo importante tambien en otros contextos."
      }
    ],
    related: ["consejos/12-herramientas-de-seleccion-de-photoshop-que-debes-conocer", "post-produccion/como-usar-la-herramienta-tampon-de-clonar-en-photoshop"]
  },
  {
    slug: "conceptos-basicos/apaisada-significado",
    category: "conceptos-basicos",
    title: "Apaisada significado: que quiere decir en fotografia",
    description: "Que significa formato apaisado y en que tipo de imagen suele tener mas sentido usarlo.",
    kicker: "Formato",
    intro: "Formato apaisado significa, de forma sencilla, que la imagen se presenta en orientacion horizontal. Parece una definicion simple, pero conviene pensar cuando esa orientacion ayuda de verdad a la escena y cuando la costumbre nos hace usarla sin motivo.",
    readTime: "4 min",
    updatedAt: "2026-04-15",
    heroStat: "Horizontal",
    heroLabel: "la orientacion debe responder a la imagen y no solo al habito",
    summary: [
      "Apaisado es la orientacion horizontal de la imagen.",
      "Suele funcionar muy bien cuando la escena necesita recorrido lateral.",
      "No es mejor por defecto que el formato vertical."
    ],
    sections: [
      {
        title: "Cuando suele funcionar mejor",
        bullets: [
          "Paisaje y horizonte amplio.",
          "Escenas con movimiento lateral.",
          "Narrativas donde importa el entorno.",
          "Composiciones con varias masas repartidas a lo ancho."
        ]
      },
      {
        title: "Cuando conviene dudar de la costumbre",
        paragraphs: [
          "Muchas fotos se hacen apaisadas por inercia, no porque la escena lo pida. Si el sujeto principal crece en vertical o la tension sube hacia arriba y abajo, el formato vertical puede ser mucho mas fuerte.",
          "Probar ambas orientaciones antes de decidir suele ser un ejercicio muy util."
        ]
      }
    ],
    faq: [
      {
        question: "Apaisada y horizontal son lo mismo",
        answer: "En la practica si, se usan como equivalentes para indicar que la imagen esta orientada a lo ancho."
      },
      {
        question: "Es el formato mas comun por algo",
        answer: "Si, porque muchas escenas se leen bien asi, pero eso no significa que sea siempre la mejor opcion."
      }
    ],
    related: ["conceptos-basicos/5x7-pulgadas-en-cm", "fotografia/formato-fotografico"]
  }
];

