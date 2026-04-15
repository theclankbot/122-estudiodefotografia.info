import { createQuickArticle } from "./article-factory";
import type { Article } from "./types";

export const expansionArticlesA: Article[] = [
  {
    slug: "retrato/fotografia-de-desnudo-artistico",
    category: "retrato",
    title: "Fotografia de desnudo artistico: claves para trabajar con respeto, forma y direccion visual",
    description: "Guia seria sobre fotografia de desnudo artistico: intencion, consentimiento, luz, pose y construccion visual.",
    kicker: "Retrato",
    intro: "La fotografia de desnudo artistico solo tiene sentido cuando existe una intencion clara y un proceso de trabajo respetuoso. No se sostiene por provocacion ni por exhibicion, sino por forma, luz, gesto y por la relacion de confianza entre quien retrata y quien posa.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "Respeto y forma",
    heroLabel: "el cuerpo nunca deberia usarse como atajo visual",
    summary: [
      "La base de una sesion solida es el consentimiento claro y la comunicacion constante.",
      "La luz, el recorte y la pose pesan mas que cualquier gesto grandilocuente.",
      "Una buena imagen de desnudo artistico trabaja dignidad, forma y atmósfera."
    ],
    sections: [
      {
        title: "Que hace seria una sesion de desnudo artistico",
        bullets: [
          "Objetivo visual definido antes de empezar.",
          "Limites claros y revisables durante toda la sesion.",
          "Espacio seguro, ritmo tranquilo y direccion respetuosa.",
          "Uso final de las imagenes hablado desde el principio."
        ]
      },
      {
        title: "Como se construye la imagen",
        paragraphs: [
          "En este tipo de fotografia suele funcionar mejor la contencion. Una luz lateral suave, una silueta limpia, un gesto contenido o un recorte parcial pueden decir mucho mas que una exposicion total del cuerpo.",
          "Tambien conviene pensar el encuadre como una forma de cuidado. Recortar, esconder o sugerir no resta fuerza; a menudo añade elegancia y concentracion visual."
        ],
        bullets: [
          "Luz para volumen, no para exhibicion gratuita.",
          "Pose comoda y sostenible para la persona retratada.",
          "Fondo limpio y pocas distracciones."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta mostrar mucho para que funcione",
        answer: "No. Muchas veces funciona mejor la sugerencia, la silueta o el fragmento que la exposicion total del cuerpo."
      },
      {
        question: "Que es irrenunciable en este tipo de trabajo",
        answer: "Consentimiento claro, trato respetuoso, privacidad, contexto de uso y posibilidad real de parar o corregir la sesion en cualquier momento."
      }
    ],
    related: ["retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres", "composicion/pie-de-foto-ejemplos"]
  },
  {
    slug: "inspiracion/las-23-mejores-peliculas-de-fotografia-todo-fotografo-debe-verlas",
    category: "inspiracion",
    title: "Peliculas de fotografia: una seleccion util para mirar mejor",
    description: "Seleccion de peliculas sobre fotografia, imagen y cultura visual para aprender tambien fuera de la camara.",
    kicker: "Cultura visual",
    intro: "Una buena pelicula sobre fotografia no solo entretiene. Puede ensenarte como se construye una mirada, como se relaciona un autor con su archivo, que significa trabajar con otras personas y por que la fotografia tambien se juega en la edicion, la memoria y la etica.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Cine e imagen",
    heroLabel: "aprender fotografia tambien pasa por mirar otras narraciones",
    summary: [
      "Estas peliculas ayudan a pensar la fotografia mas alla de la tecnica.",
      "Muchas hablan de memoria, archivo, relacion con el sujeto y construccion de mirada.",
      "Conviene verlas con ojo analitico y no solo como inspiracion rapida."
    ],
    sections: [
      {
        title: "Que tipo de peliculas merece la pena buscar",
        bullets: [
          "Documentales sobre autores y procesos de trabajo.",
          "Peliculas donde la fotografia tenga un papel narrativo claro.",
          "Historias sobre archivo, prensa, guerra, retrato o memoria visual.",
          "Obras que obliguen a pensar etica y punto de vista."
        ]
      },
      {
        title: "Como verlas para que aporten de verdad",
        paragraphs: [
          "La forma util de ver este cine es fijarse en decisiones concretas: como se habla del sujeto, como se edita una serie, que valor tiene una imagen en contexto y como cambia la relacion entre camara y mundo.",
          "Tomar algunas notas mientras miras puede ser mas util que acumular una lista interminable de titulos. Lo importante es quedarte con preguntas mejores."
        ]
      }
    ],
    faq: [
      {
        question: "Sirven aunque no sean peliculas tecnicas",
        answer: "Si. Muchas de las lecciones mas valiosas de fotografia tienen que ver con mirada, tiempo, relacion y contexto, no con menu o equipo."
      },
      {
        question: "Que conviene analizar al verlas",
        answer: "La relacion con el sujeto, la etica, el papel del archivo, el proceso de edicion y la manera en que se construye una mirada."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "inspiracion/las-15-citas-mas-importantes-de-susan-sontag-sobre-fotografia"]
  },
  {
    slug: "conceptos-basicos/que-es-imgbb-y-como-usarlo-para-alojamiento-de-imagenes-gratuito",
    category: "conceptos-basicos",
    title: "Qué es ImgBB y cómo usarlo para alojar imágenes sin liarte",
    description: "Qué ofrece ImgBB, para qué puede servir y qué límites conviene tener presentes antes de usarlo de forma habitual.",
    kicker: "Servicio",
    intro: "ImgBB es un servicio sencillo para subir imágenes y compartirlas con rapidez. El problema aparece cuando se confunde esa comodidad con una solución seria de archivo o de publicación estable.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Subir y compartir",
    heroLabel: "rapidez antes que control",
    summary: [
      "ImgBB puede ser útil para compartir una imagen puntual, pero no para guardar tu archivo principal.",
      "Antes de usar un alojamiento gratuito importa revisar compresión, privacidad y permanencia.",
      "Una cosa es alojar una imagen para salir del paso y otra construir un flujo fiable."
    ],
    sections: [
      {
        title: "Para qué sí puede servir",
        paragraphs: [
          "ImgBB encaja cuando necesitas enviar una imagen rápido, incrustarla en un foro, mostrar una prueba o compartir un archivo visual sin demasada fricción. Su punto fuerte es precisamente la velocidad.",
          "En ese contexto funciona bien como apoyo puntual. El problema llega cuando se convierte en el lugar donde dejas tus fotos importantes, tu portafolio o copias que necesitas conservar con criterio."
        ],
        bullets: [
          "Enlaces rápidos para compartir.",
          "Pruebas o imágenes temporales.",
          "Uso ligero cuando no hace falta un sistema más complejo."
        ]
      },
      {
        title: "Qué revisar antes de subir nada",
        table: {
          columns: ["Aspecto", "Por qué importa", "Qué vigilar"],
          rows: [
            ["Compresión", "Puede alterar detalle y peso del archivo", "Si la calidad baja más de lo esperado"],
            ["Privacidad", "No todas las imágenes deberían quedar circulando libremente", "Qué tipo de enlace generas y quién lo recibe"],
            ["Permanencia", "Un servicio gratuito no es tu archivo maestro", "Si necesitas una copia estable en otro sitio"],
            ["Uso final", "No es lo mismo una prueba que una entrega", "Si el destino exige control de color o tamaño"]
          ]
        }
      },
      {
        title: "Dónde se queda corto",
        paragraphs: [
          "Cuando lo que quieres es conservar originales, mantener organización, controlar versiones o preparar imágenes para impresión, ImgBB ya no es la herramienta adecuada. Ahí necesitas un sistema de archivo real, no solo un enlace rápido.",
          "También conviene separar muy bien compartir de publicar. Que una imagen se vea bien en un enlace no significa que tengas control serio sobre su contexto, su duración o su tratamiento."
        ],
        bullets: [
          "No sustituye una carpeta maestra ni una copia de seguridad.",
          "No es un sistema de archivo fotográfico.",
          "No ofrece el mismo control que una plataforma pensada para portafolio o entrega."
        ]
      }
    ],
    faq: [
      {
        question: "¿ImgBB sirve como copia de seguridad",
        answer: "No es una buena idea usarlo como copia maestra. Puede valer como apoyo puntual, pero tu archivo principal debería vivir en un sistema que controles mejor."
      },
      {
        question: "¿Cuándo tiene sentido usarlo",
        answer: "Cuando buscas rapidez y sencillez para compartir una imagen concreta, no cuando necesitas organización, permanencia o control serio del archivo."
      }
    ],
    related: ["edicion-digital/digitalizar-imagenes", "software/capture-one-gratis"]
  },
  {
    slug: "conceptos-basicos/guia-para-principiantes-de-lentes-de-camara-partes-funciones-y-tipos",
    category: "conceptos-basicos",
    title: "Guía para principiantes de lentes de cámara: partes, funciones y tipos",
    description: "Introducción clara a los objetivos de cámara: qué partes importan, qué cambia con la focal y cómo elegir según el uso.",
    kicker: "Óptica",
    intro: "Entender un objetivo no consiste en memorizar nombres extraños, sino en saber cómo cambia la imagen según la focal, la apertura, la distancia de trabajo y el tipo de escena.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Focal + apertura",
    heroLabel: "dos decisiones que cambian casi todo",
    summary: [
      "La lente define ángulo de visión, compresión, distancia de trabajo y buena parte del carácter visual.",
      "No hay un objetivo mejor en abstracto: todo depende del tema, el espacio y tu manera de fotografiar.",
      "Distinguir focal, apertura máxima y tipo de uso aclara casi cualquier compra o eleccionón."
    ],
    sections: [
      {
        title: "Qué hace realmente un objetivo",
        paragraphs: [
          "El objetivo decide cómo entra la luz en la cámara y cómo se traduce la escena en una imagen. No solo cambia cuánto cabe dentro del encuadre: también altera la relación entre planos, la distancia a la que trabajas y parte del aspecto final de la foto.",
          "Por eso dos cámaras parecidas pueden sentirse muy distintas si montan lentes diferentes. La óptica no es un accesorio secundario: es una de las decisiones visuales más importantes."
        ],
        bullets: [
          "Cambia el campo de visión.",
          "Modifica la relación entre sujeto y fondo.",
          "Influye en enfoque, desenfoque y comodidad de trabajo."
        ]
      },
      {
        title: "Las partes que merece la pena entender",
        cards: [
          {
            title: "Focal",
            text: "Marca cuánto abarcas y cómo se percibe la distancia entre elementos. Un 24 mm y un 85 mm no cuentan la escena de la misma manera."
          },
          {
            title: "Apertura máxima",
            text: "Indica cuánta luz puede dejar pasar la lente y cuánto margen tienes para trabajar profundidad de campo o poca luz."
          },
          {
            title: "Montura y compatibilidad",
            text: "Antes de entusiasmarte con una lente, revisa si encaja de verdad con tu cámara y con el sistema en el que trabajas."
          }
        ]
      },
      {
        title: "Tipos que conviene distinguir",
        table: {
          columns: ["Tipo", "Dónde suele encajar", "Qué cambia más"],
          rows: [
            ["Gran angular", "Paisaje, interior, documental cercano", "Más espacio y más relación entre planos"],
            ["Normal", "Uso general y escenas equilibradas", "Lectura natural y versatilidad"],
            ["Tele corto", "Retrato y detalle", "Más separación del fondo y más distancia de trabajo"],
            ["Zoom", "Cuando necesitas flexibilidad", "Cambias de encuadre sin moverte tanto"]
          ]
        }
      },
      {
        title: "Cómo elegir sin liarte",
        paragraphs: [
          "La forma más clara de acertar es pensar primero en qué fotografias más. No tiene sentido escoger una lente por prestigio si luego te obliga a trabajar incómodo o no encaja en tus escenas habituales.",
          "Una buena decisión suele salir de cruzar tres cosas: espacio disponible, tipo de imagen que buscas y distancia desde la que te gusta trabajar."
        ],
        bullets: [
          "Piensa en escenas reales, no en fichas sueltas.",
          "Valora si prefieres versatilidad o una óptica más especializada.",
          "Mira también peso, enfoque y coste total del sistema."
        ]
      }
    ],
    faq: [
      {
        question: "¿La mejor lente para empezar es siempre la misma",
        answer: "No. Depende de si haces retrato, viaje, calle, paisaje o uso general. La eleccionón buena cambia con tu forma de fotografiar."
      },
      {
        question: "¿Qué aclara más rápido una lente: la focal o la apertura",
        answer: "Las dos importan, pero la focal suele cambiar antes la lectura de la escena y la distancia de trabajo. La apertura afina después el comportamiento con luz y desenfoque."
      }
    ],
    related: [
      "conceptos-basicos/que-es-una-lente-gran-angular-y-cuando-usar-una",
      "retrato/cual-es-la-mejor-lente-para-retratos-las-30-mejores-selecciones"
    ]
  },
  {
    slug: "conceptos-basicos/comprender-la-resolucion-de-la-camara-y-los-megapixeles-guia-facil",
    category: "conceptos-basicos",
    title: "Resolución de cámara y megapíxeles: qué significan de verdad",
    description: "Qué significan resolución y megapíxeles, cuándo importan de verdad y cuándo pesan menos de lo que parece.",
    kicker: "Resolución",
    intro: "Los megapíxeles importan, pero bastante menos de lo que suele parecer en publicidad. Lo decisivo casi siempre es el destino final de la imagen y cuánto margen de recorte o impresión necesitas.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Más no siempre mejor",
    heroLabel: "la cifra sola no decide la foto",
    summary: [
      "La resolución influye en impresión, recorte y detalle potencial, no en la calidad total por sí sola.",
      "Más megapíxeles solo compensan si óptica, técnica y flujo acompañan.",
      "Pensar en el uso final aclara mucho más que obsesionarse con la cifra."
    ],
    sections: [
      {
        title: "Qué miden realmente los megapíxeles",
        paragraphs: [
          "Los megapíxeles describen cuánta información espacial puede registrar el sensor en términos de tamaño de imagen. Eso afecta al nivel de detalle potencial, al margen para recortar y a ciertas posibilidades de impresión.",
          "Lo que no hacen es garantizar por sí solos una foto mejor. Si falla la luz, la óptica, el enfoque o la estabilidad, tener más resolución no arregla la imagen."
        ],
        bullets: [
          "A más megapíxeles, más tamaño potencial de archivo.",
          "También suele haber más margen para recorte.",
          "No sustituyen una buena captura."
        ]
      },
      {
        title: "Cuándo sí se nota",
        table: {
          columns: ["Situación", "Por qué importa", "Qué mirar"],
          rows: [
            ["Impresión grande", "Necesitas más detalle útil", "Tamaño final y distancia de visionado"],
            ["Recorte frecuente", "Pierdes resolución al recortar", "Cuánto margen quieres conservar"],
            ["Uso web o redes", "La salida final reduce mucho el archivo", "Resolución real de publicación"],
            ["Trabajo profesional exigente", "Puede importar para entrega o archivo", "Flujo completo y tipo de cliente"]
          ]
        }
      },
      {
        title: "Dónde suele exagerarse",
        paragraphs: [
          "En muchas decisiones de compra se habla de megapíxeles como si fueran la medida definitiva de calidad. Eso simplifica demasiado el problema. La foto también depende del sensor, del rango dinámico, del ruido, de la óptica y del uso que le vas a dar.",
          "Una cámara con menos resolución puede rendir mejor en tu caso si trabajas con poca luz, necesitas archivos más manejables o no imprimes grande."
        ],
        bullets: [
          "No todo uso necesita archivos enormes.",
          "La óptica limita mucho el detalle real que aprovechas.",
          "Más resolución también puede exigir más al ordenador y al almacenamiento."
        ]
      }
    ],
    faq: [
      {
        question: "¿Más megapíxeles significan siempre mejor calidad",
        answer: "No. Significan más resolución potencial. La calidad total depende también de captura, luz, óptica, ruido y destino final."
      },
      {
        question: "¿Cuándo merece la pena pagar por más resolución",
        answer: "Cuando imprimes grande, recortas mucho o tu trabajo necesita conservar más detalle útil. Si no, a veces el beneficio real es menor de lo que parece."
      }
    ],
    related: [
      "documentos-de-identidad/tamano-carnet-medidas",
      "conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm"
    ]
  },
  {
    slug: "conceptos-basicos/que-es-el-paneo-como-usarlo-para-fotografiar-movimiento",
    category: "conceptos-basicos",
    title: "Qué es el paneo y cómo usarlo para fotografiar movimiento",
    description: "Cómo funciona el paneo, qué velocidad usar y cómo acompañar al sujeto para que el movimiento tenga intención.",
    kicker: "Movimiento",
    intro: "El paneo no busca congelar el mundo, sino mantener al sujeto relativamente legible mientras el fondo se estira y transmite velocidad. Es una técnica de timing, ritmo corporal y lectura de la escena.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Movimiento guiado",
    heroLabel: "velocidad y gesto trabajando juntos",
    summary: [
      "El paneo funciona cuando velocidad, dirección del sujeto y seguimiento están alineados.",
      "No basta con bajar la velocidad: también importa cómo acompañas el movimiento.",
      "Encaja especialmente bien en deporte, calle y escenas de tránsito."
    ],
    sections: [
      {
        title: "Qué hace que un paneo funcione",
        paragraphs: [
          "La idea es sencilla: acompañas con la cámara el desplazamiento del sujeto durante la exposición para que ese sujeto conserve cierta lectura mientras el fondo aparece barrido. La sensación de velocidad sale de esa diferencia entre seguimiento y entorno.",
          "Por eso el paneo no es solo una cuestión de velocidad lenta. También depende de la distancia al sujeto, de su dirección de movimiento y de lo bien que puedas seguirlo con continuidad."
        ],
        bullets: [
          "El sujeto debe moverse de forma previsible.",
          "Tu seguimiento tiene que ser fluido.",
          "La velocidad elegida debe dejar ver movimiento sin romperlo todo."
        ]
      },
      {
        title: "Qué velocidades suelen servir",
        table: {
          columns: ["Velocidad", "Escena típica", "Resultado habitual"],
          rows: [
            ["1/60", "Calle o bici a ritmo moderado", "Barrido visible con margen de acierto"],
            ["1/30", "Coches, corredores o escenas más rápidas", "Más dramatismo y más riesgo"],
            ["1/15 o menos", "Paneo muy marcado", "Efecto fuerte, pero requiere mucha precisión"]
          ]
        }
      },
      {
        title: "Cómo practicarlo sin frustrarte",
        paragraphs: [
          "Empieza con sujetos que repitan recorrido: bicis, coches en una avenida, corredores o peatones a una distancia constante. Eso te permite centrarte en el gesto y no en el caos de la escena.",
          "A menudo funciona mejor disparar varias veces durante el mismo movimiento y revisar después qué combinación de velocidad y seguimiento te da el equilibrio más limpio."
        ],
        bullets: [
          "Colócate paralelo al desplazamiento del sujeto.",
          "Sigue el movimiento antes, durante y después del disparo.",
          "Usa ráfaga corta si te ayuda a mantener continuidad."
        ]
      }
    ],
    faq: [
      {
        question: "¿El paneo se hace siempre con velocidades muy lentas",
        answer: "No. Depende de la velocidad del sujeto y del efecto que busques. A veces 1/60 ya da un barrido suficiente; otras veces necesitas bajar más."
      },
      {
        question: "¿Qué suele fallar más en los primeros intentos",
        answer: "El seguimiento irregular. Muchas veces la velocidad era válida, pero el gesto de la cámara se rompe justo en el momento del disparo."
      }
    ],
    related: ["conceptos-basicos/que-es-el-obturador"]
  },
  {
    slug: "post-produccion/que-es-un-archivo-cr3-y-como-abrir-uno",
    category: "post-produccion",
    title: "Que es un archivo CR3 y como abrirlo sin perder el flujo",
    description: "Que es el formato CR3 de Canon, con que programas se abre y como trabajar con el sin desordenar tu archivo.",
    kicker: "RAW",
    intro: "CR3 es el formato RAW que Canon usa en muchos de sus modelos recientes. Abrirlo suele ser sencillo si tu software esta actualizado, pero trabajar bien con el exige algo mas que encontrar un programa compatible: hace falta entender como guardarlo, revelarlo y exportarlo sin liarte.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "RAW Canon",
    heroLabel: "mas margen antes de revelar",
    summary: [
      "CR3 conserva datos del sensor con mas flexibilidad que una JPG directa de camara.",
      "Necesita software actualizado para abrirlo y revelarlo sin problemas de compatibilidad.",
      "Lo importante no es solo verlo, sino integrarlo en un flujo claro de archivo, revelado y exportacion."
    ],
    sections: [
      {
        title: "Que ventajas tiene un CR3",
        paragraphs: [
          "Como otros formatos RAW, un CR3 te da margen para ajustar exposicion, balance de blancos, contraste y recuperacion de luces sin degradar el archivo tan rapido como ocurriria con una JPG.",
          "Eso es especialmente util en escenas con contraste dificil, pieles delicadas o fotografias que sabes que van a necesitar una edicion mas cuidada."
        ],
        bullets: [
          "Mas informacion tonal y de color.",
          "Mayor margen en revelado.",
          "Archivo pensado para editar, no para entregar tal cual."
        ]
      },
      {
        title: "Con que programas se abre",
        table: {
          columns: ["Programa", "Que resuelve bien", "Cuando encaja"],
          rows: [
            ["Adobe Camera Raw o Lightroom", "Revelado y catalogo", "Flujos generales de fotografia"],
            ["Canon Digital Photo Professional", "Compatibilidad oficial", "Quien quiere una opcion nativa de Canon"],
            ["Capture One", "Color y sesiones", "Trabajo mas afinado de estudio o retrato"],
            ["Alternativas gratuitas", "Lectura variable segun version", "Conviene comprobar compatibilidad antes"]
          ]
        }
      },
      {
        title: "Como trabajarlo sin romper el flujo",
        bullets: [
          "Guarda el CR3 original como archivo maestro.",
          "Revela sobre el RAW y exporta despues una copia final segun destino.",
          "No conviertas por costumbre si tu software ya lo lee bien.",
          "Manten separados originales, catalogo y exportaciones."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta convertir un CR3 para editarlo",
        answer: "No siempre. Si tu programa lo soporta, puedes revelar el archivo directamente. Solo conviene convertir cuando tu flujo o tu software lo exigen."
      },
      {
        question: "CR3 es mejor que JPG",
        answer: "No es mejor en todo uso, pero si ofrece mas margen de edicion. JPG puede bastar para rapidez absoluta; CR3 encaja mejor cuando quieres controlar mas el resultado final."
      }
    ],
    related: [
      "consejos/que-es-un-archivo-nef-y-como-abrir-uno",
      "post-produccion/que-es-adobe-camera-raw-y-como-empezar"
    ]
  },
  {
    slug: "tutoriales-de-fotografia/comprension-de-iso-velocidad-de-obturacion-y-apertura-una-guia-para-principiantes",
    category: "tutoriales-de-fotografia",
    title: "ISO, velocidad y apertura: guía para principiantes sin jerga inútil",
    description: "Cómo entender el triángulo de exposición de forma práctica y usarlo con intención desde las primeras sesiones.",
    kicker: "Exposición",
    intro: "ISO, velocidad y apertura se entienden mucho mejor cuando dejas de verlos como tres conceptos aislados y empiezas a leerlos como una sola decisión de exposición.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "3 variables",
    heroLabel: "una sola decisión visual",
    summary: [
      "La exposición no es solo luz: también decide ruido, desenfoque, nitidez y profundidad de campo.",
      "Aprender el triángulo significa saber qué sacrificas y qué ganas en cada escena.",
      "Practicarlo con escenas simples y un objetivo claro acelera mucho el aprendizaje."
    ],
    sections: [
      {
        title: "Cómo leer el triángulo sin complicarlo",
        paragraphs: [
          "La apertura decide cuánta luz entra y cuánto fondo o primer plano aparecen desenfocados. La velocidad decide cuánto tiempo registras la escena y, por tanto, cómo se ve el movimiento. El ISO ajusta la sensibilidad y afecta también al ruido que puede aparecer en la imagen.",
          "Lo importante no es aprenderlos por separado, sino entender que cada cambio tiene un coste y un beneficio. Cuando mueves uno, normalmente obligas a compensar con otro."
        ],
        bullets: [
          "Apertura: luz y profundidad de campo.",
          "Velocidad: tiempo y movimiento.",
          "ISO: sensibilidad y ruido."
        ]
      },
      {
        title: "Una forma útil de practicarlo",
        table: {
          columns: ["Escena", "Qué priorizar", "Qué suele pasar"],
          rows: [
            ["Retrato sencillo", "Apertura y fondo", "La velocidad necesita cubrir pequeños movimientos"],
            ["Calle o acción", "Velocidad", "ISO o apertura compensan la luz que falta"],
            ["Interior con poca luz", "Equilibrio", "Sube el riesgo de ruido o trepidación"],
            ["Paisaje estático", "Calidad y profundidad", "Puedes trabajar con más calma la combinación"]
          ]
        }
      },
      {
        title: "Qué conviene mirar después de disparar",
        paragraphs: [
          "No basta con ver si la foto está clara u oscura. Merece la pena revisar si el movimiento quedó como querías, si el fondo tiene la profundidad adecuada y si el ruido está dentro de lo razonable para el uso final.",
          "Ese análisis posterior es lo que convierte el triángulo en aprendizaje real y no en una lista de conceptos."
        ],
        bullets: [
          "Si el sujeto quedó demasiado movido o demasiado congelado.",
          "Si la profundidad de campo ayuda o molesta.",
          "Si el ruido es asumible para el destino final."
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué parámetro suele decidirse primero",
        answer: "Depende de la escena. Si importa el movimiento, empieza por velocidad. Si importa el desenfoque o la profundidad, empieza por apertura. El ISO suele ayudar a cerrar el equilibrio."
      },
      {
        question: "¿Hace falta disparar siempre en manual para entenderlo",
        answer: "No. Los modos semiautomáticos también sirven mucho para aprender, porque te dejan ver cómo cambia la exposición cuando priorizas una variable."
      }
    ],
    related: [
      "conceptos-basicos/que-es-el-obturador",
      "conceptos-basicos/que-es-la-exposicion"
    ]
  },
  {
    slug: "conceptos-basicos/que-es-el-valor-de-exposicion-y-como-usar-ev-en-fotografia",
    category: "conceptos-basicos",
    title: "Qué es el valor de exposición y cómo usar EV en fotografía",
    description: "Qué significa EV, cómo leerlo y cuándo la compensación de exposición te ayuda a afinar la escena con más criterio.",
    kicker: "EV",
    intro: "EV aparece mucho en cámaras y tutoriales, pero suele explicarse mal. En realidad es una forma bastante útil de pensar cambios relativos de exposición y de afinar cómo responde la cámara a la escena.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "+/- EV",
    heroLabel: "ajuste fino de la exposición",
    summary: [
      "EV traduce cambios de exposición en pasos comparables y fáciles de leer.",
      "La compensación de exposición resulta especialmente útil en modos semiautomáticos.",
      "No sustituye la lectura de la escena, pero la vuelve mucho más clara."
    ],
    sections: [
      {
        title: "Qué significa EV en la práctica",
        paragraphs: [
          "Cuando hablas de EV estás hablando de pasos relativos de exposición. Subir o bajar un EV implica aclarar u oscurecer la imagen en una cantidad comparable, aunque la cámara lo resuelva moviendo velocidad, apertura o ISO según el modo en el que estés trabajando.",
          "Por eso EV ayuda tanto: convierte una decisión intuitiva en una medida entendible. No te dice si la escena está bien expuesta por sí sola, pero sí cuánto la estás corrigiendo."
        ],
        bullets: [
          "EV positivo suele aclarar la escena.",
          "EV negativo suele oscurecerla.",
          "El cambio se lee en pasos comparables."
        ]
      },
      {
        title: "Cuándo tiene más sentido usar compensación",
        table: {
          columns: ["Escena", "Qué suele pasar", "Cómo ayuda EV"],
          rows: [
            ["Fondo muy claro", "La cámara tiende a oscurecer demasiado", "Compensar en positivo devuelve luz al sujeto"],
            ["Escena muy oscura", "La cámara intenta aclararla en exceso", "Compensar en negativo conserva ambiente"],
            ["Modos A o S", "La cámara automatiza parte de la exposición", "EV permite afinar sin salir del modo"],
            ["Luz cambiante", "No siempre da tiempo a recalcular todo", "EV agiliza pequeños ajustes"]
          ]
        }
      },
      {
        title: "Qué no conviene esperar de EV",
        paragraphs: [
          "EV no reemplaza el criterio. Si no entiendes la escena, compensar por costumbre puede empeorarla. Tampoco resuelve por sí solo problemas de movimiento, ruido o profundidad de campo: solo mueve la exposición en la dirección que le indicas.",
          "Funciona mejor como ajuste fino cuando ya sabes qué quieres mantener: atmósfera, detalle del sujeto o lectura del fondo."
        ],
        bullets: [
          "No es un atajo para exponer sin pensar.",
          "No sustituye la revisión de histograma o pantalla.",
          "No siempre la corrección intuitiva es la correcta."
        ]
      }
    ],
    faq: [
      {
        question: "¿EV es lo mismo que exponer bien o mal",
        answer: "No. EV describe el cambio relativo que aplicas. La calidad de esa decisión depende de la escena y de lo que quieres conseguir."
      },
      {
        question: "¿Dónde se nota más útil",
        answer: "Sobre todo en modos de prioridad, cuando quieres afinar el resultado sin pasar a manual completo ni recalcular toda la exposición."
      }
    ],
    related: ["conceptos-basicos/que-es-la-exposicion", "conceptos-basicos/que-es-el-obturador"]
  },
  {
    slug: "retrato/46-fotografos-de-retratos-famosos-que-deberias-conocer",
    category: "retrato",
    title: "Fotógrafos de retrato famosos que merece la pena estudiar",
    description: "Seleccionón de retratistas clave para entender dirección, luz, distancia y construcción de personaje.",
    kicker: "Referencias",
    intro: "Estudiar grandes retratistas sirve para mucho más que hacer una lista. Sirve para entender cómo cada autor decide distancia, luz, tensión, gesto y relación con la persona fotografiada.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Miradas distintas",
    heroLabel: "un mismo género, muchos lenguajes",
    summary: [
      "Los mejores fotógrafos de retrato se diferencian sobre todo por su relación con la persona fotografiada.",
      "Analizar referencias mejora dirección, criterio visual y lectura del gesto.",
      "Estudiar estilo sin contexto se queda corto; importa también el propósito de cada autor."
    ],
    sections: [
      {
        title: "Qué se aprende de un gran retratista",
        paragraphs: [
          "Un retratista importante no destaca solo por su estética, sino por cómo resuelve la relación entre persona, distancia, luz y tiempo. En algunos pesa más la intimidad; en otros, la puesta en escena; en otros, la tensión psicológica.",
          "Mirar autores con atención ayuda a entender que el retrato no es una pose aislada, sino una suma de decisiones pequeñas que terminan construyendo presencia."
        ],
        bullets: [
          "Cómo usa la luz para describir carácter.",
          "Qué distancia mantiene con la persona retratada.",
          "Cómo convierte gesto y mirada en parte del lenguaje."
        ]
      },
      {
        title: "Cómo estudiar referencias sin quedarte en la superficie",
        cards: [
          {
            title: "Dirección",
            text: "Mira si el retrato parece conducido, esperado, robado o construido. Esa diferencia cambia por completo la sensación final."
          },
          {
            title: "Luz",
            text: "No pienses solo en si es suave o dura. Pregunta qué cuenta esa luz sobre el personaje."
          },
          {
            title: "Contexto",
            text: "Un retrato editorial, documental o íntimo no persigue lo mismo, aunque compartan lenguaje visual."
          }
        ]
      },
      {
        title: "Qué tipo de autores merece la pena mezclar",
        paragraphs: [
          "Funciona bien estudiar referentes muy distintos entre sí. Unos te enseñan precisión formal; otros, naturalidad; otros, construcción de personaje. Esa mezcla evita que acabes copiando una sola fórmula.",
          "La referencia útil no es la que te deslumbra un minuto, sino la que te deja una decisión clara que puedes llevar a la cámara."
        ],
        bullets: [
          "Autores clásicos y contemporáneos.",
          "Retrato documental y retrato editorial.",
          "Miradas cercanas y puestas en escena más marcadas."
        ]
      }
    ],
    faq: [
      {
        question: "¿Cómo se estudia un retratista sin copiarlo",
        answer: "Separando decisiones: distancia, luz, gesto, fondo, ritmo y propósito. Así entiendes la lógica de la imagen sin limitarte a repetir su apariencia."
      },
      {
        question: "¿Qué mejora más al mirar buenas referencias",
        answer: "La dirección y la lectura del retrato. Empiezas a notar antes qué está diciendo una postura, una mirada o una distancia concreta."
      }
    ],
    related: [
      "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres",
      "composicion/pie-de-foto-ejemplos"
    ]
  },
  {
    slug: "localizaciones/los-20-fotografos-callejeros-mas-famosos-que-deberias-conocer",
    category: "localizaciones",
    title: "Fotógrafos callejeros famosos y por qué siguen importando",
    description: "Autores clave de street photography para estudiar observación, ritmo, distancia y relación con el espacio urbano.",
    kicker: "Street",
    intro: "La fotografía callejera no se aprende solo caminando con la cámara. También se aprende observando cómo otros fotógrafos resolvieron tiempo, distancia, caos, humor, geometría y presencia.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Calle + criterio",
    heroLabel: "mirar antes de disparar",
    summary: [
      "Cada gran fotógrafo callejero resuelve de forma distinta el problema del tiempo y la presencia.",
      "Mirar autores ayuda a decidir si te interesa más el gesto, la geometría, la ironía o el contexto urbano.",
      "La referencia solo importa de verdad cuando se analiza con método."
    ],
    sections: [
      {
        title: "Qué enseña la buena fotografía callejera",
        paragraphs: [
          "La calle obliga a decidir rápido, pero no todo en street photography es reflejo. También importan la lectura del espacio, la paciencia para esperar una relación entre elementos y la distancia justa desde la que mirar la escena.",
          "Por eso los grandes autores resultan tan útiles: cada uno resuelve el tiempo, la proximidad y el caos de una manera distinta."
        ],
        bullets: [
          "Algunos trabajan el gesto humano.",
          "Otros priorizan geometría y capas visuales.",
          "Otros convierten la calle en comentario social o ironía."
        ]
      },
      {
        title: "Cómo estudiar a estos autores con provecho",
        cards: [
          {
            title: "Distancia",
            text: "Mira si el fotógrafo trabaja desde cerca, desde fuera o desde una posición casi invisible. Esa distancia cambia por completo la energía de la imagen."
          },
          {
            title: "Espacio",
            text: "Observa cómo usa esquinas, cruces, escaparates, fondos y líneas. La calle no es fondo: es parte del lenguaje."
          },
          {
            title: "Tiempo",
            text: "Pregúntate si la foto nace de la espera, del reflejo inmediato o de una lectura muy entrenada del flujo urbano."
          }
        ]
      },
      {
        title: "Qué referencias conviene mezclar",
        paragraphs: [
          "Merece la pena combinar autores más clásicos con miradas contemporáneas. Unos afinan el sentido del instante; otros te ayudan a leer cómo cambia la calle en un contexto visual más saturado.",
          "La mezcla entre gesto, geometría, humor, tensión y comentario social vuelve tu aprendizaje mucho más rico que una sola escuela."
        ],
        bullets: [
          "Autores de gesto rápido y momento decisivo.",
          "Autores de capas, espacio y composición compleja.",
          "Autores que usan ironía o comentario social."
        ]
      }
    ],
    faq: [
      {
        question: "¿Mirar referentes callejeros sirve aunque no hagas street photography pura",
        answer: "Sí. Enseñan mucho sobre observación, lectura del espacio, anticipación y relación entre personas y entorno."
      },
      {
        question: "¿Qué conviene mirar primero en una referencia de calle",
        answer: "La distancia, el momento y la organización del espacio. Ahí suele estar la clave de cómo se construye la imagen."
      }
    ],
    related: [
      "inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas",
      "composicion/como-disparar-desde-la-cadera"
    ]
  },
  {
    slug: "conceptos-basicos/que-es-el-enfoque-selectivo-y-como-usarlo-para-fotos-geniales",
    category: "conceptos-basicos",
    title: "Que es el enfoque selectivo y como usarlo para dirigir la mirada",
    description: "Como funciona el enfoque selectivo, cuando aporta de verdad y que decisiones hacen que se vea intencionado.",
    kicker: "Enfoque",
    intro: "El enfoque selectivo consiste en dejar una parte de la escena claramente priorizada mientras el resto cae fuera de foco con una funcion visual clara. Bien usado no es un truco de desenfoque, sino una forma de jerarquizar la imagen.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Jerarquia visual",
    heroLabel: "enfocar menos para contar mejor",
    summary: [
      "El enfoque selectivo ayuda a decidir que debe mirar primero el espectador.",
      "Apertura, distancia al sujeto y fondo importan mas que disparar siempre al diafragma mas abierto.",
      "Funciona mejor cuando la escena tiene un motivo claro y un entorno que conviene simplificar."
    ],
    sections: [
      {
        title: "Que aporta a la foto",
        paragraphs: [
          "Cuando separas con foco al sujeto principal, la lectura se vuelve mas rapida. Eso es util en retrato, producto, detalle, naturaleza cercana o escenas de calle con mucho ruido visual.",
          "La clave es que el desenfoque no sea decorativo sin mas. Tiene que ayudar a limpiar la escena, aislar una expresion, destacar una textura o marcar una relacion entre planos."
        ],
        bullets: [
          "Da prioridad a un punto de interes concreto.",
          "Reduce distracciones en fondos complejos.",
          "Introduce profundidad cuando hay capas en la escena."
        ]
      },
      {
        title: "Que decisiones lo hacen funcionar",
        table: {
          columns: ["Factor", "Que cambia", "Que conviene revisar"],
          rows: [
            ["Apertura", "Profundidad de campo disponible", "Si realmente necesitas abrir tanto"],
            ["Distancia al sujeto", "Separacion del plano enfocado", "Cuanto te acercas y que parte debe quedar nitida"],
            ["Fondo", "Nivel de distraccion", "Si el fondo apoya o estorba la lectura"],
            ["Longitud focal", "Compresion y recorte del entorno", "Si una focal distinta simplifica mejor"]
          ]
        }
      },
      {
        title: "Errores frecuentes",
        bullets: [
          "Abrir al maximo sin revisar si los dos ojos quedan fuera de plano en retrato.",
          "Elegir un fondo demasiado cerca que apenas se separa.",
          "Usar el recurso en todas las fotos hasta volverlo previsible.",
          "Confundir desenfoque con interes visual."
        ]
      }
    ],
    faq: [
      {
        question: "El enfoque selectivo sirve solo para retrato",
        answer: "No. Tambien funciona en producto, macro, naturaleza cercana, calle y fotografia documental cuando necesitas destacar una parte concreta de la escena."
      },
      {
        question: "Hay que disparar siempre con aperturas extremas",
        answer: "No. Muchas veces una apertura intermedia da una separacion mas limpia y mantiene nitida la parte importante del sujeto."
      }
    ],
    related: ["conceptos-basicos/que-es-una-lente-gran-angular-y-cuando-usar-una"]
  },
  {
    slug: "consejos/como-utilizar-d-lighting-activo-de-nikon",
    category: "consejos",
    title: "Como utilizar Active D-Lighting de Nikon y cuando merece la pena",
    description: "Que hace Active D-Lighting en Nikon, en que escenas ayuda y cuando es mejor dejarlo en segundo plano.",
    kicker: "Nikon",
    intro: "Active D-Lighting es una ayuda interna de Nikon pensada para escenas con contraste complicado. Puede ser util, pero conviene entender bien que hace en JPG, como afecta a la previsualizacion y que papel tiene si trabajas en RAW.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Contraste dificil",
    heroLabel: "una ayuda, no una solucion magica",
    summary: [
      "Su funcion es proteger mejor altas luces y abrir sombras en escenas de contraste alto.",
      "Se nota mucho mas en JPG y en la previsualizacion que en un flujo RAW puro.",
      "No sustituye una exposicion bien medida ni una revision del histograma."
    ],
    sections: [
      {
        title: "Cuando tiene sentido activarlo",
        paragraphs: [
          "Suele ser util en contraluces moderados, retratos en exterior duro, interiores con ventanas o escenas donde quieres una JPG mas equilibrada sin editar demasiado despues.",
          "Tambien puede venir bien si entregas rapido y dependes bastante del archivo directo de camara. En esos casos ayuda a comprimir algo el contraste sin tocar el menu en cada foto."
        ],
        bullets: [
          "Escenas con luces altas muy presentes.",
          "Uso orientado a JPG directo.",
          "Situaciones rapidas en las que no quieres revelar mucho despues."
        ]
      },
      {
        title: "Que cambia en JPG y en RAW",
        table: {
          columns: ["Formato", "Que suele pasar", "Que tener en cuenta"],
          rows: [
            ["JPG", "El ajuste se aplica de forma visible", "Puede salvar algo de contraste pero tambien cambiar el aspecto general"],
            ["RAW", "Influye menos en el archivo final", "A menudo lo notas mas en la medicion o en la previsualizacion"],
            ["Revelado posterior", "Puedes reinterpretar la escena con mas control", "No dependas del ajuste para resolver exposiciones mal hechas"]
          ]
        }
      },
      {
        title: "Como probarlo con criterio",
        paragraphs: [
          "La mejor manera de decidir si te compensa es hacer una comparativa sencilla en una escena de alto contraste. Dispara la misma situacion con el ajuste desactivado y con uno o dos niveles activos, revisa el histograma y mira despues el resultado en ordenador.",
          "Asi veras si te aporta una base mas util o si simplemente esta cambiando el archivo de una forma que luego tendras que corregir."
        ],
        bullets: [
          "No lo dejes siempre activado por costumbre.",
          "Comprueba como responde tu camara concreta.",
          "Relaciona el ajuste con tu forma real de entregar."
        ]
      }
    ],
    faq: [
      {
        question: "Active D-Lighting sustituye al revelado",
        answer: "No. Puede mejorar una JPG de camara, pero no reemplaza la capacidad de ajustar contraste, luces y sombras con mas precision durante el revelado."
      },
      {
        question: "Si disparo en RAW me da igual activarlo o no",
        answer: "No del todo. Aunque el impacto final sea menor, puede influir en la previsualizacion y en como la camara interpreta la escena al disparar."
      }
    ],
    related: ["consejos/explicacion-del-boton-af-on", "equipo/que-es-el-boton-ae-l-y-af-l-en-una-nikon-dslr"]
  },
  {
    slug: "equipo/las-12-mejores-camaras-para-fotografia-de-conciertos",
    category: "equipo",
    title: "Camaras para fotografia de conciertos: que mirar antes de elegir",
    description: "Guia clara para elegir una camara de conciertos segun enfoque, rendimiento con poca luz, respuesta y manejo real.",
    kicker: "Equipo",
    intro: "La fotografia de conciertos obliga a trabajar con poca luz, cambios bruscos y sujetos que no esperan. Por eso una buena camara para este terreno no se define por moda o marketing, sino por como resuelve enfoque, ruido, velocidad y ergonomia bajo presion.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "AF + ISO + manejo",
    heroLabel: "lo que de verdad pesa en una sala",
    summary: [
      "El autofocus fiable y la respuesta operativa importan mas que una ficha espectacular.",
      "Una camara de concierto debe aguantar ISO alto sin romper color, pieles ni detalle util.",
      "El cuerpo solo no basta: la lente adecuada y una buena tecnica siguen marcando la diferencia."
    ],
    sections: [
      {
        title: "Lo que conviene valorar primero",
        table: {
          columns: ["Aspecto", "Por que importa", "Que se nota en uso real"],
          rows: [
            ["Enfoque", "La escena cambia sin avisar", "Seguimiento mas fiable y menos fotos perdidas"],
            ["ISO alto", "La luz suele ser escasa", "Archivos mas limpios y con color mas estable"],
            ["Rafaga y buffer", "Hay gestos que duran un instante", "Mas margen para capturar el momento preciso"],
            ["Manejo", "Trabajas rapido y a oscuras", "Botones, rueda y visor mas faciles de usar"]
          ]
        }
      },
      {
        title: "Que tipo de camara suele encajar mejor",
        paragraphs: [
          "Las mirrorless actuales suelen ofrecer ventajas claras en enfoque, vista previa y trabajo silencioso. Aun asi, muchas DSLR siguen funcionando muy bien si ya conoces su respuesta y montas buenas opticas luminosas.",
          "No conviene pensar esta eleccion como una guerra de sistemas. Lo util es preguntarte si necesitas un cuerpo agil, si vas a disparar mucha accion lateral, cuanto dependes del visor electronico o si ya tienes un parque de objetivos que compensa mantener."
        ],
        bullets: [
          "Mirrorless si priorizas AF moderno y vista previa.",
          "DSLR si ya tienes sistema y conoces muy bien su flujo.",
          "Sensor y lente pesan tanto como la marca concreta."
        ]
      },
      {
        title: "Errores habituales al comprar para conciertos",
        bullets: [
          "Elegir por resolucion en vez de por enfoque y ruido.",
          "Olvidar que un objetivo luminoso puede cambiar mas el resultado que un salto pequeño de cuerpo.",
          "Pensar en conciertos grandes cuando la mayoria de trabajos seran salas pequeñas y luz peor.",
          "Comprar una camara incomoda de manejar solo por prestigio."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta la camara mas cara para fotografiar conciertos",
        answer: "No. Hace falta un equipo que enfoque bien, tolere ISO alto con dignidad y responda rapido. Muchas veces una combinacion equilibrada de cuerpo y lente da mejor resultado que una compra descompensada."
      },
      {
        question: "Que importa mas, la camara o el objetivo",
        answer: "Depende, pero en conciertos un objetivo luminoso puede marcar una diferencia enorme. La camara importa mucho, pero no trabaja sola."
      }
    ],
    related: ["equipo/nikon-z6-frente-a-nikon-d750", "conceptos-basicos/que-es-el-obturador"]
  },
  {
    slug: "retrato/cual-es-la-mejor-lente-para-retratos-las-30-mejores-selecciones",
    category: "retrato",
    title: "Cual es la mejor lente para retratos y como elegirla de verdad",
    description: "Que focales suelen funcionar mejor en retrato y como escoger segun espacio, distancia y tipo de imagen.",
    kicker: "Optica",
    intro: "La mejor lente para retrato no sale de una lista unica. Cambia segun el espacio donde trabajas, la distancia a la persona retratada, el fondo que tienes y el tipo de retrato que quieres construir.",
    readTime: "9 min",
    updatedAt: "2026-04-14",
    heroStat: "Distancia y caracter",
    heroLabel: "la focal cambia mas que el recorte",
    summary: [
      "En retrato importa tanto la focal como la forma en que te relacionas fisicamente con la persona.",
      "Un 50 mm, un 85 mm o un 135 mm no solo cambian el encuadre: cambian la comodidad, el fondo y la direccion.",
      "La mejor eleccion es la que encaja con tu manera de trabajar y con la historia visual que buscas."
    ],
    sections: [
      {
        title: "Que suele aportar cada rango",
        table: {
          columns: ["Rango", "Donde encaja bien", "Que aporta"],
          rows: [
            ["35 mm", "Retrato ambiental y espacios reducidos", "Mas contexto y cercania"],
            ["50 mm", "Uso general y medio cuerpo", "Equilibrio entre naturalidad y versatilidad"],
            ["85 mm", "Retrato clasico", "Separacion de fondo y distancia comoda"],
            ["105-135 mm", "Primeros planos y fondos muy limpios", "Compresion mayor y mas aislamiento"]
          ]
        }
      },
      {
        title: "Que deberias mirar antes de comprar",
        paragraphs: [
          "Piensa primero en donde haces retratos. Si trabajas en casa o en interiores pequeños, una focal larga puede obligarte a alejarte mas de lo posible. Si haces exterior con espacio y buscas un fondo muy limpio, un tele corto suele dar mucha comodidad.",
          "Tambien importa tu forma de dirigir. Hay fotografos que prefieren cercania y conversacion directa; otros trabajan mejor con algo mas de distancia. La lente influye en esa relacion."
        ],
        bullets: [
          "Espacio real disponible.",
          "Tipo de retrato: ambiental, medio cuerpo o primer plano.",
          "Apertura maxima, peso y velocidad de enfoque."
        ]
      },
      {
        title: "Cuando el ranking engaña",
        paragraphs: [
          "Las listas con decenas de opciones pueden servir para orientarte, pero no reemplazan la pregunta correcta: cual de estas lentes me deja trabajar mejor en mis condiciones reales. Una optica excelente sobre el papel puede ser poco practica para tu flujo.",
          "Tambien conviene no obsesionarse con el desenfoque. Una buena lente para retrato no es solo la que separa el fondo, sino la que te permite construir una relacion natural con la persona y repetir resultados con consistencia."
        ]
      }
    ],
    faq: [
      {
        question: "El 85 mm es siempre la mejor lente para retrato",
        answer: "No. Es una focal muy querida porque equilibra separacion, perspectiva y comodidad, pero no siempre encaja en interiores pequeños o en retrato ambiental."
      },
      {
        question: "Para empezar conviene un fijo o un zoom",
        answer: "Si quieres aprender rapido una manera concreta de mirar, un fijo puede ayudarte mucho. Si necesitas flexibilidad porque trabajas en espacios cambiantes, un zoom corto tambien puede tener sentido."
      }
    ],
    related: [
      "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres",
      "conceptos-basicos/guia-para-principiantes-de-lentes-de-camara-partes-funciones-y-tipos"
    ]
  },
  {
    slug: "conceptos-basicos/shutter-significado",
    category: "conceptos-basicos",
    title: "Shutter significado: que quiere decir en fotografia y por que importa",
    description: "Que significa shutter en fotografia, como se relaciona con el obturador y que cambia en la imagen.",
    kicker: "Glosario",
    intro: "Shutter es la palabra inglesa que veras una y otra vez en menus, tutoriales y fichas tecnicas. En fotografia se refiere al obturador y, sobre todo, al tiempo durante el que la camara deja pasar luz para construir la exposicion.",
    readTime: "6 min",
    updatedAt: "2026-04-14",
    heroStat: "Tiempo de luz",
    heroLabel: "el termino ingles del obturador",
    summary: [
      "Shutter suele usarse para hablar del obturador y de la velocidad de obturacion.",
      "Ese tiempo influye directamente en movimiento, nitidez y cantidad de luz.",
      "Entender el termino evita perderse cuando lees ajustes o cursos en ingles."
    ],
    sections: [
      {
        title: "Que significa en la practica",
        paragraphs: [
          "Cuando ves shutter speed, la idea importante no es la traduccion literal sino la consecuencia visual. Una velocidad alta congela mejor la accion; una velocidad baja deja entrar mas luz y puede registrar movimiento.",
          "Por eso shutter aparece siempre unido a exposicion y a control del gesto. No es una palabra aislada, sino una parte central del lenguaje fotografico."
        ],
        bullets: [
          "Velocidad alta: mas congelacion.",
          "Velocidad baja: mas luz y mas riesgo de movimiento.",
          "La eleccion depende de la escena, no de una cifra fija."
        ]
      },
      {
        title: "Donde suele generar confusion",
        bullets: [
          "Confundir shutter con el disparador del dedo.",
          "Pensar que solo afecta a la luz y no al movimiento.",
          "Leer tutoriales en ingles sin relacionarlo con obturador o velocidad."
        ]
      }
    ],
    faq: [
      {
        question: "Shutter y shutter speed son lo mismo",
        answer: "No exactamente. Shutter alude al obturador; shutter speed se refiere de forma especifica a la velocidad de obturacion."
      },
      {
        question: "Por que importa aprender este termino en ingles",
        answer: "Porque aparece continuamente en menus, videos y articulos. Entenderlo te ayuda a seguir mejor cualquier recurso tecnico."
      }
    ],
    related: ["conceptos-basicos/que-es-el-obturador"]
  },
  {
    slug: "conceptos-basicos/que-es-un-archivo-arw-y-como-abrir-uno",
    category: "conceptos-basicos",
    title: "Que es un archivo ARW y como abrirlo correctamente",
    description: "Que guarda un archivo ARW de Sony, con que programas se abre y como integrarlo en un flujo ordenado.",
    kicker: "RAW",
    intro: "ARW es el formato RAW habitual en muchas camaras Sony. Guardar ese archivo significa conservar mucha mas informacion que una JPG de camara, pero tambien obliga a trabajar con software compatible y un flujo minimo de archivo y revelado.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "RAW Sony",
    heroLabel: "mas margen antes de exportar",
    summary: [
      "Un archivo ARW conserva datos del sensor para revelar con mas flexibilidad.",
      "Se puede abrir con software de Adobe, Capture One y varias alternativas gratuitas.",
      "El punto importante no es solo abrirlo, sino no romper el flujo al convertirlo sin pensar."
    ],
    sections: [
      {
        title: "Que contiene un ARW",
        paragraphs: [
          "Un ARW no es una imagen final cerrada, sino un archivo con datos de captura. Por eso te permite ajustar balance de blancos, exposicion, contraste y recuperacion de luces con mucho mas margen que una JPG.",
          "A cambio, necesitas un programa que interprete correctamente ese RAW. Un visor cualquiera puede abrir una miniatura, pero no siempre te dara una lectura fiel para trabajar."
        ],
        bullets: [
          "Mas informacion tonal y de color.",
          "Mayor margen de revelado.",
          "Archivos mas pesados y dependientes de software compatible."
        ]
      },
      {
        title: "Con que programas abrirlo",
        table: {
          columns: ["Programa", "Punto fuerte", "Para quien encaja"],
          rows: [
            ["Adobe Camera Raw o Lightroom", "Revelado y catalogo", "Flujos generales y trabajo frecuente"],
            ["Capture One", "Color, sesiones y control fino", "Retrato y trabajo de estudio o tethering"],
            ["Sony Imaging Edge", "Compatibilidad oficial", "Quien quiere una opcion directa de la marca"],
            ["Darktable o RawTherapee", "Alternativas gratuitas", "Quien quiere revelar sin suscripcion"]
          ]
        }
      },
      {
        title: "Como mantener un flujo limpio",
        bullets: [
          "Guarda siempre el ARW original en una carpeta maestra.",
          "Revela sobre el RAW y exporta despues a JPG o TIFF segun destino.",
          "No uses la exportacion como sustituto del archivo base.",
          "Organiza nombres, carpetas y copias desde la importacion."
        ]
      }
    ],
    faq: [
      {
        question: "Un ARW tiene mas calidad que una JPG",
        answer: "Tiene mas informacion para editar con margen. La calidad final depende de como captures y reveles la imagen."
      },
      {
        question: "Conviene convertir el ARW nada mas importarlo",
        answer: "Normalmente no. Lo mejor es conservarlo como archivo maestro y exportar copias finales solo cuando sepas el uso que van a tener."
      }
    ],
    related: [
      "post-produccion/que-es-un-archivo-cr3-y-como-abrir-uno",
      "consejos/que-es-un-archivo-nef-y-como-abrir-uno"
    ]
  },
  {
    slug: "conceptos-basicos/como-tomar-buenas-fotografias-10-pasos-infalibles",
    category: "conceptos-basicos",
    title: "Como tomar buenas fotografias: una guia practica para mejorar de verdad",
    description: "Diez pasos utiles para mejorar tus fotos con mejor observacion, tecnica basica y decisiones mas limpias.",
    kicker: "Base",
    intro: "No existen pasos infalibles en fotografia, pero si hay habitos que casi siempre mejoran el resultado: mirar mas despacio, decidir mejor la luz, simplificar el encuadre y revisar con honestidad lo que no funciono. La mejora suele ser acumulativa, no espectacular.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "Mirar mejor",
    heroLabel: "la calidad suele crecer cuando la decision pesa mas que el impulso",
    summary: [
      "Las fotos mejoran mas por observacion y criterio que por trucos rapidos.",
      "Luz, encuadre y momento siguen siendo las tres bases mas utiles.",
      "Revisar errores con calma acorta mucho el tiempo de aprendizaje."
    ],
    sections: [
      {
        title: "Diez pasos que si suelen ayudar",
        bullets: [
          "Mira la luz antes de mirar el sujeto.",
          "Acercate o alejate hasta que el encuadre tenga sentido.",
          "Limpia el fondo antes de disparar.",
          "Decide que parte de la escena importa de verdad.",
          "No cambies todos los ajustes a la vez.",
          "Haz una serie corta y compara.",
          "Revisa bordes y esquinas.",
          "Aprende a esperar un gesto o una mejor posicion.",
          "Edita con moderacion.",
          "Analiza tus fallos sin excusas."
        ]
      },
      {
        title: "Que suele estropear una foto aunque la tecnica este bien",
        paragraphs: [
          "Muchas imagenes fallan no por falta de equipo, sino por una suma de pequenas decisiones flojas: fondo confuso, punto de interes impreciso, encuadre precipitado o un gesto anodino.",
          "Por eso conviene entrenar el ojo tanto como la tecnica. Una exposicion correcta no compensa una mirada perezosa."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta una camara buena para mejorar",
        answer: "No demasiado al principio. Con una herramienta modesta ya puedes aprender luz, encuadre, distancia y timing."
      },
      {
        question: "Que deberia practicar primero",
        answer: "Luz, encuadre y lectura del fondo. Son tres cosas que mejoran casi cualquier fotografia."
      }
    ],
    related: ["conceptos-basicos/que-es-la-exposicion", "composicion/los-10-elementos-de-la-composicion-en-fotografia"]
  },
  {
    slug: "consejos/abreviaturas-de-lentes-nikon-y-lo-que-significan-una-guia-facil",
    category: "consejos",
    title: "Abreviaturas de lentes Nikon y lo que significan",
    description: "Guia clara para entender las siglas mas comunes de los objetivos Nikon y comprar con menos confusion.",
    kicker: "Nomenclatura",
    intro: "Las siglas de Nikon parecen mas complicadas de lo que son. En realidad describen montura, tipo de enfoque, estabilizacion, formato y alguna caracteristica optica. Si las separas bien, leer un objetivo deja de ser un jeroglifico.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Leer antes de comprar",
    heroLabel: "las siglas importan cuando cambian compatibilidad",
    summary: [
      "No todas las abreviaturas tienen el mismo peso: algunas afectan de verdad al uso y otras son secundarias.",
      "Entender formato, enfoque y estabilizacion evita muchas compras equivocadas.",
      "La mejor forma de leer un objetivo es ir de lo importante a lo accesorio."
    ],
    sections: [
      {
        title: "Las siglas que conviene mirar primero",
        table: {
          columns: ["Sigla", "Que indica", "Por que importa"],
          rows: [
            ["DX o FX", "Formato de sensor pensado para la lente", "Condiciona compatibilidad y angulo de vision"],
            ["AF-S o AF-P", "Tipo de motor de enfoque", "Afecta velocidad, ruido y compatibilidad con algunos cuerpos"],
            ["VR", "Estabilizacion optica", "Ayuda en velocidades bajas y teleobjetivos"],
            ["Micro", "Objetivo pensado para macro", "Indica capacidad de enfoque cercano"]
          ]
        }
      },
      {
        title: "Como leer el nombre completo de una lente",
        paragraphs: [
          "Lo practico es empezar por la focal y la apertura maxima, porque ahi esta buena parte del caracter de la lente. Despues revisa si es DX o FX, que motor de enfoque monta y si tiene VR.",
          "Todo lo demas tiene valor, pero rara vez pesa tanto como saber si la lente es compatible con tu camara y si responde al tipo de fotografia que haces."
        ],
        bullets: [
          "Primero focal y apertura.",
          "Despues formato y compatibilidad.",
          "Luego enfoque, estabilizacion y detalles adicionales."
        ]
      },
      {
        title: "Errores tipicos al interpretar siglas Nikon",
        bullets: [
          "Pensar que mas siglas significa automaticamente mejor lente.",
          "Confundir DX con una lente inutil en FX en vez de entender sus limitaciones.",
          "Comprar una optica sin revisar si el cuerpo aprovecha bien el motor de enfoque.",
          "Dar por hecho que VR sustituye una buena tecnica de disparo."
        ]
      }
    ],
    faq: [
      {
        question: "Que siglas deberia aprender primero",
        answer: "DX o FX, AF-S o AF-P y VR. Con esas ya entiendes compatibilidad, enfoque y estabilizacion, que es lo que mas pesa al comparar objetivos."
      },
      {
        question: "Las siglas Nikon cambian la calidad de imagen por si solas",
        answer: "No. Algunas describen funciones o formato. La calidad real depende del diseño optico, la construccion y como usas la lente en tu camara."
      }
    ],
    related: ["conceptos-basicos/guia-para-principiantes-de-lentes-de-camara-partes-funciones-y-tipos"]
  },
  {
    slug: "inspiracion/12-increibles-juegos-de-fotografia-para-jugar",
    category: "inspiracion",
    title: "Juegos de fotografia para entrenar mirada, rapidez y creatividad",
    description: "Ideas de juegos fotograficos para practicar con restricciones utiles y salir de la repeticion.",
    kicker: "Practica",
    intro: "Los juegos fotograficos funcionan cuando obligan a mirar de otra manera y a resolver una pequena limitacion real. No son una coleccion de ocurrencias, sino un modo ligero de entrenar observacion, velocidad de decision y capacidad para improvisar con sentido.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Limitar para crear",
    heroLabel: "una restriccion buena suele despertar mas que una libertad infinita",
    summary: [
      "Los mejores juegos hacen trabajar la mirada, no solo la ocurrencia.",
      "Funcionan muy bien para salir del bloqueo y practicar en grupo.",
      "La clave es imponer una regla clara y luego revisar los resultados con criterio."
    ],
    sections: [
      {
        title: "Que tipo de juegos merece la pena probar",
        bullets: [
          "Una sola focal durante toda la salida.",
          "Buscar solo un color dominante.",
          "Hacer una serie de cinco imagenes sobre un mismo gesto.",
          "Fotografiar un tema cotidiano desde diez distancias distintas."
        ]
      },
      {
        title: "Como hacer que aporten de verdad",
        paragraphs: [
          "El juego mejora mucho cuando al final revisas las fotos y te preguntas que decision funciono y cual no. Sin esa parte, la practica se queda en pasarlo bien y poco mas.",
          "Tambien conviene elegir restricciones que esten cerca del tipo de fotografia que quieres mejorar. Asi la transferencia al trabajo real es mas directa."
        ]
      }
    ],
    faq: [
      {
        question: "Sirven tambien para fotografos con experiencia",
        answer: "Si. De hecho son muy utiles para romper automatismos y probar maneras distintas de resolver escenas conocidas."
      },
      {
        question: "Es mejor practicarlos en grupo o a solas",
        answer: "Las dos opciones sirven. En grupo suelen aportar energia y comparacion; a solas permiten una revision mas tranquila."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "conceptos-basicos/como-tomar-buenas-fotografias-10-pasos-infalibles"]
  },
  {
    slug: "inspiracion/los-22-mejores-fotografos-de-bellas-artes-que-debes-conocer",
    category: "inspiracion",
    title: "Fotografos de bellas artes para estudiar con calma",
    description: "Autores clave de fotografia artistica para ampliar referencias y entender relaciones entre idea, forma y serie.",
    kicker: "Referencias",
    intro: "La fotografia de bellas artes obliga a pensar mas alla de la imagen suelta. Importan la secuencia, la forma de presentar, la relacion entre concepto y materia visual y la capacidad de sostener una idea en el tiempo. Por eso este campo resulta tan util para afinar criterio.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Forma e idea",
    heroLabel: "la fotografia artistica se sostiene cuando ambas avanzan juntas",
    summary: [
      "Estas referencias ayudan a salir de una mirada solo tecnica o decorativa.",
      "Conviene estudiar como conectan concepto, cuerpo de obra y edicion.",
      "La mejor referencia es la que te obliga a pensar mejor tus propias decisiones."
    ],
    sections: [
      {
        title: "Que mirar en estos autores",
        bullets: [
          "Como repiten o transforman motivos.",
          "Que papel tiene el color, el soporte y la secuencia.",
          "Como equilibran idea y fuerza visual.",
          "Que tipo de distancia toman respecto al sujeto."
        ]
      },
      {
        title: "Por que estudiar bellas artes mejora cualquier fotografia",
        paragraphs: [
          "Porque ensena a pensar series, no solo imagenes aisladas. Tambien obliga a justificar por que una foto existe y que lugar ocupa dentro de un cuerpo de trabajo.",
          "Incluso si haces retrato, calle o paisaje, esa forma de pensar la serie y la edicion aporta mucha solidez."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta entender mucho arte para aprovechar estas referencias",
        answer: "No. Basta con mirar con paciencia, leer algo de contexto y preguntarte que decisiones sostienen la obra."
      },
      {
        question: "Que conviene copiar de estos autores",
        answer: "No la superficie. Lo util es entender metodo, coherencia y relacion entre idea y forma."
      }
    ],
    related: ["inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas", "inspiracion/las-15-citas-mas-importantes-de-susan-sontag-sobre-fotografia"]
  },
  {
    slug: "consejos/explicacion-del-boton-af-on",
    category: "consejos",
    title: "Boton AF-ON: que hace y cuando merece la pena usarlo",
    description: "Que es el boton AF-ON, como funciona el enfoque trasero y en que situaciones da mas control.",
    kicker: "Enfoque",
    intro: "AF-ON sirve para separar el enfoque del boton de disparo. Ese cambio parece pequeño, pero puede modificar bastante la forma de trabajar en accion, retrato o escenas donde recompones con frecuencia.",
    readTime: "7 min",
    updatedAt: "2026-04-14",
    heroStat: "Back-button focus",
    heroLabel: "enfocar con una mano y disparar con otra logica",
    summary: [
      "Permite decidir cuando enfocar sin depender de media pulsacion en el disparador.",
      "Puede dar mas control en seguimiento, recomposicion y escenas cambiantes.",
      "No es obligatorio para todo el mundo: depende de tus habitos y del tipo de foto que haces."
    ],
    sections: [
      {
        title: "Que cambia respecto al disparador tradicional",
        paragraphs: [
          "Con el ajuste clasico, media pulsacion del disparador enfoca y pulsacion completa dispara. Con AF-ON puedes asignar el enfoque a un boton trasero y dejar el disparador solo para hacer la foto.",
          "Eso evita reenfoques accidentales y te permite mantener o soltar el foco segun la situacion, sin mezclar ambas acciones en el mismo gesto."
        ],
        bullets: [
          "Mas control al recomponer.",
          "Menos riesgo de reenfocar por error.",
          "Transicion mas clara entre enfoque unico y seguimiento."
        ]
      },
      {
        title: "Cuando suele ser mas util",
        table: {
          columns: ["Situacion", "Por que ayuda", "Que notar"],
          rows: [
            ["Accion", "Separas seguimiento y disparo", "Mas control sobre cuando mantener AF continuo"],
            ["Retrato", "Puedes enfocar y recomponer sin repetir", "Ritmo mas tranquilo"],
            ["Calle o evento", "La escena cambia rapido", "Menos errores al disparar varias veces"],
            ["Paisaje", "A veces aporta poco", "Si enfocas una vez y no vuelves a tocarlo"]
          ]
        }
      },
      {
        title: "Lo que cuesta al principio",
        bullets: [
          "Durante unos dias el gesto resulta poco natural.",
          "Si no reconfiguras bien el disparador puedes duplicar funciones.",
          "En usos muy sencillos puede parecer innecesario hasta que le coges el ritmo."
        ]
      }
    ],
    faq: [
      {
        question: "AF-ON mejora la nitidez por si solo",
        answer: "No. Mejora el control del enfoque. La nitidez sigue dependiendo de velocidad, tecnica, modo AF y precision sobre el sujeto."
      },
      {
        question: "Todo fotografo deberia usar enfoque trasero",
        answer: "No necesariamente. Es muy util para mucha gente, pero si tu flujo es simple y te va bien el disparador tradicional no tienes por que forzarlo."
      }
    ],
    related: ["equipo/que-es-el-boton-ae-l-y-af-l-en-una-nikon-dslr"]
  },
  {
    slug: "composicion/plano-semisubjetivo",
    category: "composicion",
    title: "Plano semisubjetivo: que es y cuando funciona",
    description: "Como entender el plano semisubjetivo y que aporta al encuadre y al punto de vista.",
    kicker: "Lenguaje visual",
    intro: "El plano semisubjetivo se situa en una zona muy interesante del lenguaje visual: no muestra exactamente lo que ve un personaje, pero tampoco observa la escena desde una distancia completamente externa. Esa mezcla de cercania y contexto es lo que le da valor.",
    readTime: "5 min",
    updatedAt: "2026-04-15",
    heroStat: "Mirada intermedia",
    heroLabel: "sugerir una perspectiva sin encerrarla del todo",
    summary: [
      "Aporta implicacion sin perder del todo la lectura espacial.",
      "Funciona bien cuando quieres acercar al espectador a una experiencia concreta.",
      "Es util para pensar punto de vista tanto en foto como en narracion visual."
    ],
    sections: [
      {
        title: "Que lo diferencia de otros puntos de vista",
        bullets: [
          "No es una vision totalmente objetiva.",
          "No sustituye por completo la mirada del personaje.",
          "Permite mantener informacion del entorno.",
          "Suele crear una cercania mas sugerida que literal."
        ]
      },
      {
        title: "Cuando suele funcionar mejor",
        paragraphs: [
          "Resulta muy util cuando quieres que la escena se sienta vivida desde dentro sin perder orientacion. En fotografia puede traducirse en angulos, distancias o colocaciones de camara que acercan emocionalmente a la accion sin convertir la imagen en puro efecto.",
          "Tambien ayuda a construir continuidad visual cuando una serie necesita variar la distancia al sujeto sin romper del todo la sensacion de presencia."
        ]
      }
    ],
    faq: [
      {
        question: "Es un recurso solo de cine",
        answer: "No. El termino viene mucho del lenguaje audiovisual, pero ayuda tambien a pensar fotografia, secuencia y punto de vista en series."
      },
      {
        question: "Tiene que notarse mucho",
        answer: "No. A menudo funciona mejor cuando la sensacion esta presente sin volverse una demostracion evidente."
      }
    ],
    related: ["composicion/pie-de-foto-ejemplos", "conceptos-basicos/regla-de-la-mirada"]
  },
  {
    slug: "equipo/opciones-raw-comprimidas-sin-comprimir-y-comprimidas-sin-perdidas",
    category: "equipo",
    title: "RAW comprimido, sin comprimir y comprimido sin perdidas: diferencias reales",
    description: "Que cambia entre los distintos tipos de RAW y como elegir segun edicion, almacenamiento y volumen de trabajo.",
    kicker: "Archivo",
    intro: "Muchas camaras permiten elegir entre RAW sin comprimir, comprimido y comprimido sin perdidas. Detras de esos nombres hay una decision muy practica: cuanto peso de archivo aceptas, que margen de edicion necesitas y cuanta velocidad quieres en tu flujo.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Peso y flujo",
    heroLabel: "la opcion correcta depende del uso",
    summary: [
      "No todos los RAW ocupan lo mismo ni se comportan igual al editar grandes volumenes.",
      "Comprimido sin perdidas suele ser un equilibrio muy sensato cuando la camara lo ofrece.",
      "La eleccion buena cambia si haces miles de fotos, trabajas con deportes o necesitas maxima flexibilidad en postproduccion."
    ],
    sections: [
      {
        title: "Que significa cada opcion",
        table: {
          columns: ["Tipo", "Que busca", "Que implica"],
          rows: [
            ["Sin comprimir", "Guardar todo tal cual", "Archivos mas pesados y mas consumo de tarjeta y disco"],
            ["Comprimido sin perdidas", "Reducir peso sin sacrificar informacion util", "Buen equilibrio para muchos flujos"],
            ["Comprimido", "Ahorrar mas espacio", "Puede tener sentido si priorizas eficiencia y el margen extra no te compensa"]
          ]
        }
      },
      {
        title: "Como elegir con sentido",
        paragraphs: [
          "Si haces trabajo comercial exigente, mucho retoque o quieres la maxima tranquilidad posible, la opcion sin comprimir o sin perdidas suele ser la mas razonable. Si produces grandes volumenes y necesitas agilidad de copia y archivo, una compresion bien resuelta puede ser mejor decision.",
          "Tambien importa tu equipo de trabajo. Archivos mas pesados exigen mas almacenamiento, tarjetas mas amplias y un ordenador capaz de moverlos con soltura."
        ],
        bullets: [
          "Piensa en volumen de disparo antes que en teoria abstracta.",
          "Relaciona la eleccion con tu forma de revelar.",
          "Calcula coste real en tarjetas, copias y archivo."
        ]
      },
      {
        title: "Cuando la diferencia se nota de verdad",
        bullets: [
          "En sesiones largas donde el buffer y el almacenamiento importan.",
          "En trabajos con mucho recorte o revelado fino de altas luces y sombras.",
          "En flujos donde guardas originales durante años.",
          "En ordenadores justos que sufren con archivos demasiado pesados."
        ]
      }
    ],
    faq: [
      {
        question: "La opcion sin comprimir siempre es la mejor",
        answer: "No siempre. Es la mas conservadora, pero no necesariamente la mas eficiente. Muchas veces comprimido sin perdidas ofrece el mejor equilibrio entre peso y calidad."
      },
      {
        question: "La compresion RAW arruina la imagen",
        answer: "No por definicion. Depende del tipo de compresion que ofrezca la camara y del margen de edicion que necesites en tu trabajo real."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar"]
  },
  {
    slug: "post-produccion/como-arreglar-fotos-granuladas-en-photoshop-y-lightroom",
    category: "post-produccion",
    title: "Como arreglar fotos granuladas en Photoshop y Lightroom sin destrozarlas",
    description: "Que hacer cuando una foto tiene demasiado grano o ruido y como corregirlo sin plastificar la imagen.",
    kicker: "Ruido",
    intro: "Corregir una foto granulada no consiste en llevar un deslizador al maximo. La idea es recuperar limpieza manteniendo detalle, textura y una sensacion fotografica creible. Cuando la reduccion de ruido se pasa, la imagen parece encerada y pierde vida.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Limpiar con medida",
    heroLabel: "reducir ruido siempre implica negociar con el detalle",
    summary: [
      "La correccion buena busca equilibrio, no desaparicion total del ruido.",
      "Lightroom suele servir para la base y Photoshop para remates mas localizados.",
      "Antes de corregir conviene entender si el problema viene de ISO, subexposicion o compresion."
    ],
    sections: [
      {
        title: "Por donde conviene empezar",
        bullets: [
          "Ajusta exposicion general antes de reducir ruido.",
          "Trabaja primero en Lightroom o Camera Raw.",
          "Amplia al cien por cien para revisar textura real.",
          "No intentes igualar toda la imagen si unas zonas aguantan mas ruido que otras."
        ]
      },
      {
        title: "Cuando Photoshop aporta mas",
        paragraphs: [
          "Photoshop entra mejor cuando necesitas corregir zonas concretas, separar texturas o suavizar solo ciertos fondos y no la imagen entera. Ahi las capas y mascaras marcan la diferencia.",
          "Tambien ayuda cuando el ruido convive con artefactos, halos o defectos de compresion que un revelador basico no resuelve con tanta precision."
        ]
      }
    ],
    faq: [
      {
        question: "Siempre hay que eliminar todo el grano",
        answer: "No. Un poco de grano puede ser perfectamente aceptable e incluso agradable si la imagen conserva detalle y coherencia."
      },
      {
        question: "Que estropea mas una foto, el ruido o la sobrecorreccion",
        answer: "Muy a menudo la sobrecorreccion. Una imagen demasiado limpia pero blanda y plastificada suele envejecer peor."
      }
    ],
    related: ["post-produccion/que-es-adobe-camera-raw-y-como-empezar", "post-produccion/como-utilizar-las-curvas-en-lightroom-el-tutorial-completo"]
  },
  {
    slug: "inspiracion/como-fotografiar-niebla-12-consejos-para-una-sesion-de-fotos-de-niebla-mistica",
    category: "inspiracion",
    title: "Como fotografiar niebla y aprovechar su atmosfera sin perder forma",
    description: "Consejos para fotografiar niebla con capas, siluetas, exposicion cuidada y una lectura mas limpia.",
    kicker: "Atmosfera",
    intro: "La niebla simplifica y complica a la vez. Limpia el fondo, separa planos y crea atmosfera, pero tambien borra estructura y puede dejar la imagen plana si no encuentras una silueta, una linea o un contraste que la sostenga.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Capas suaves",
    heroLabel: "la niebla funciona mejor cuando todavia queda algo que leer",
    summary: [
      "La niebla es muy util para simplificar una escena y crear profundidad por capas.",
      "Siluetas, arboles, caminos y luces puntuales suelen funcionar especialmente bien.",
      "Conviene vigilar exposicion y contraste para no dejar la foto lavada."
    ],
    sections: [
      {
        title: "Que escenas suelen rendir mejor",
        bullets: [
          "Arboles aislados o grupos con forma clara.",
          "Carreteras, senderos y lineas que desaparecen.",
          "Figura humana pequena dentro del paisaje.",
          "Luz de amanecer con planos separados por distancia."
        ]
      },
      {
        title: "Como hacer que no se quede plana",
        paragraphs: [
          "La clave suele estar en encontrar un punto de anclaje: una silueta, una masa oscura, una luz o una linea que organice la imagen. Sin eso, la niebla corre el riesgo de volverse solo una capa blanca bonita pero vacia.",
          "Tambien ayuda revisar el histograma y contrastar ligeramente despues, siempre sin destruir la suavidad propia de la escena."
        ]
      }
    ],
    faq: [
      {
        question: "Hay que subexponer o sobreexponer",
        answer: "Depende de la escena, pero suele ser importante revisar que la niebla quede luminosa sin quemar y que las formas principales sigan leyendo bien."
      },
      {
        question: "Que focal suele funcionar mejor",
        answer: "Tanto un tele como un angular pueden ir muy bien. El tele comprime capas; el angular ayuda a incluir recorrido y entorno."
      }
    ],
    related: ["conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos", "paisaje-naturaleza/paisajes-con-lineas"]
  },
  {
    slug: "equipo/que-es-el-zapato-frio-y-como-puedes-usarlo",
    category: "equipo",
    title: "Que es el zapato frio y como puedes usarlo",
    description: "Que es una zapata fria, para que sirve y que accesorios suele sujetar en foto y video.",
    kicker: "Accesorios",
    intro: "La zapata fria es un soporte fisico para montar accesorios sobre la camara o sobre una jaula sin transmitir corriente ni senal. Es un detalle pequeno de equipo, pero muy util para ordenar un montaje ligero de microfono, luz, monitor o adaptador.",
    readTime: "5 min",
    updatedAt: "2026-04-15",
    heroStat: "Montaje simple",
    heroLabel: "sujetar un accesorio no siempre implica conectarlo",
    summary: [
      "Sirve para montar accesorios cuando solo necesitas soporte fisico.",
      "Conviene distinguirla bien de la zapata caliente con contactos electronicos.",
      "Es especialmente util en configuraciones ligeras de video y contenido."
    ],
    sections: [
      {
        title: "Que suele montarse en una zapata fria",
        bullets: [
          "Microfonos compactos.",
          "Luces LED pequenas.",
          "Monitores ligeros con adaptador.",
          "Soportes para movil o receptores inalambricos."
        ]
      },
      {
        title: "Que conviene revisar antes de usarla",
        paragraphs: [
          "Aunque parezca un accesorio sencillo, importa mucho la solidez del anclaje. Un soporte flojo puede acabar moviendo el accesorio o incluso soltandolo en plena grabacion.",
          "Tambien conviene no sobrecargar una sola zapata con peso excesivo. Para configuraciones mayores, una jaula o un brazo bien montado suele ser mejor solucion."
        ]
      }
    ],
    faq: [
      {
        question: "Una zapata fria alimenta el accesorio",
        answer: "No. Solo lo sujeta. Si el accesorio necesita energia o senal, tendra que conectarse por otro medio."
      },
      {
        question: "Se puede poner en cualquier camara",
        answer: "Si tiene zapata compatible o adaptador, normalmente si. Lo importante es que el accesorio no sobrepase lo que ese punto puede aguantar."
      }
    ],
    related: ["accesorios-de-fotografia/registrar-dron-dji", "equipo/lista-de-camaras-con-gps-incorporado-y-algunos-consejos-sobre-etiquetado-geografico"]
  },
  {
    slug: "consejos/que-es-un-archivo-nef-y-como-abrir-uno",
    category: "consejos",
    title: "Qué es un archivo NEF y cómo abrirlo sin complicarte",
    description: "Qué es el formato NEF de Nikon, con qué programas se abre y cómo trabajar con él sin romper tu flujo.",
    kicker: "RAW",
    intro: "NEF es el formato RAW de Nikon. Más que un archivo extraño, es la base desde la que puedes ajustar exposición, color y detalle con bastante más margen que en un JPG.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "RAW Nikon",
    heroLabel: "más margen antes de revelar",
    summary: [
      "NEF guarda la captura sin procesar de la cámara y conserva más información tonal y de color.",
      "Se abre con programas compatibles como Nikon NX Studio, Adobe Camera Raw, Lightroom o Capture One.",
      "La clave no es solo abrirlo, sino mantener un flujo ordenado desde importación hasta exportación."
    ],
    sections: [
      {
        title: "Qué hace distinto a un NEF",
        paragraphs: [
          "Un archivo NEF contiene los datos RAW que registra la cámara Nikon antes de convertirlos en una imagen final. Eso te da más margen para corregir exposición, recuperar altas luces, afinar balance de blancos o ajustar contraste sin castigar tanto el archivo.",
          "No significa que un NEF sea mejor en cualquier situación, pero sí te da más recorrido cuando la luz era difícil, cuando buscas una edición cuidada o cuando quieres un resultado final más consistente."
        ],
        bullets: [
          "Guarda más información que un JPG de cámara.",
          "Permite un revelado más flexible.",
          "Necesita software compatible para verse y editarse bien."
        ]
      },
      {
        title: "Con qué programas abrirlo",
        table: {
          columns: ["Programa", "Qué resuelve bien", "Para quién encaja"],
          rows: [
            ["Nikon NX Studio", "Compatibilidad nativa y ajustes básicos", "Quien quiere una opción oficial y directa"],
            ["Adobe Camera Raw o Lightroom", "Revelado, organización y exportación", "Flujos generales de fotografía y edición"],
            ["Capture One", "Color, sesiones y tethering", "Usuarios que trabajan retrato o sesiones con más control"],
            ["RawTherapee o Darktable", "Alternativas gratuitas de revelado", "Quien busca un flujo sin suscripción"]
          ]
        }
      },
      {
        title: "Cómo integrarlo en un flujo limpio",
        paragraphs: [
          "Lo primero es importar el archivo y decidir dónde vivirán los originales. Después toca separar tres cosas: el archivo maestro, el revelado y la exportación final. Si mezclas todo desde el principio, es fácil perder versiones o acabar exportando encima del original.",
          "En la práctica funciona bien mantener una carpeta con los NEF intactos, una seleccionón de favoritos o descartes y una carpeta de exportación solo para JPG o TIFF terminados."
        ],
        bullets: [
          "Conserva siempre el NEF original.",
          "Haz el revelado sobre el RAW, no sobre un JPG exportado.",
          "Exporta según destino: web, impresión o entrega a cliente."
        ]
      },
      {
        title: "Errores que dan problemas",
        bullets: [
          "Convertir el archivo demasiado pronto sin saber para qué lo necesitas.",
          "Editar copias sueltas y perder la referencia del original.",
          "Suponer que cualquier visor gratuito interpreta el color igual de bien.",
          "Borrar los RAW una vez exportado el JPG."
        ]
      }
    ],
    faq: [
      {
        question: "¿Hace falta convertir un NEF para verlo",
        answer: "No siempre. Si usas un programa compatible, puedes abrirlo y revelarlo directamente. Solo tiene sentido convertirlo cuando tu flujo o tu software lo exigen."
      },
      {
        question: "¿Es mejor disparar en NEF o en JPG",
        answer: "Depende del uso. Si buscas rapidez absoluta y edición mínima, JPG puede bastar. Si quieres más margen en revelado, el NEF ofrece mucha más flexibilidad."
      }
    ],
    related: [
      "post-produccion/que-es-un-archivo-cr3-y-como-abrir-uno",
      "conceptos-basicos/que-es-un-archivo-arw-y-como-abrir-uno"
    ]
  },
  {
    slug: "conceptos-basicos/que-es-una-lente-gran-angular-y-cuando-usar-una",
    category: "conceptos-basicos",
    title: "Que es una lente gran angular y cuando usarla",
    description: "Como funciona un gran angular, que cambia en la perspectiva y en que escenas aporta de verdad.",
    kicker: "Optica",
    intro: "Un gran angular no sirve solo para meter mas cosas dentro del encuadre. Cambia la relacion entre planos, exagera la sensacion de espacio y obliga a componer con mucho mas cuidado porque todo entra y todo pesa.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Espacio y perspectiva",
    heroLabel: "una focal amplia siempre modifica como se siente la escena",
    summary: [
      "Amplia el campo de vision y hace mas marcada la relacion entre cerca y lejos.",
      "Puede ser muy util en paisaje, interior, arquitectura y retrato ambiental.",
      "Si se usa sin criterio, deforma, distrae y llena de ruido visual."
    ],
    sections: [
      {
        title: "Cuando suele aportar mas",
        bullets: [
          "Paisaje con primer plano interesante.",
          "Interiores donde hace falta aire.",
          "Arquitectura y espacios donde importa la amplitud.",
          "Escenas ambientales donde el entorno forma parte del retrato."
        ]
      },
      {
        title: "Que errores aparecen mucho",
        paragraphs: [
          "El mas comun es pensar que por ser gran angular todo queda mejor de inmediato. En realidad exige ordenar mejor el encuadre, vigilar bordes y decidir que elemento cercano sostiene la imagen.",
          "Tambien conviene no acercarse sin pensar a personas o formas delicadas, porque la deformacion puede volverse agresiva muy rapido."
        ]
      }
    ],
    faq: [
      {
        question: "Un gran angular siempre deforma",
        answer: "La perspectiva cambia sobre todo por la distancia a la que te colocas. Pero si, estas lentes facilitan que esa deformacion se note mas si no se usan con cuidado."
      },
      {
        question: "Sirve para retrato",
        answer: "Para retrato ambiental si. Para retrato cerrado suele exigir bastante cuidado si no quieres deformar demasiado rasgos y proporciones."
      }
    ],
    related: ["conceptos-basicos/guia-para-principiantes-de-lentes-de-camara-partes-funciones-y-tipos", "resenas/nikon-20mm-f-1-8g-ed"]
  },
  {
    slug: "accesorios-de-fotografia/registrar-dron-dji",
    category: "accesorios-de-fotografia",
    title: "Registrar un dron DJI: qué revisar antes de volar",
    description: "Qué comprobar antes de usar un dron DJI: registro, identificación, categoría de vuelo y límites básicos de seguridad.",
    kicker: "Dron",
    intro: "La parte administrativa del dron importa tanto como la técnica. Antes de despegar hay que saber si tu equipo y tu operación exigen registro, identificación y condiciones concretas de vuelo.",
    readTime: "8 min",
    updatedAt: "2026-04-14",
    heroStat: "Norma + seguridad",
    heroLabel: "mínimo imprescindible antes de volar",
    summary: [
      "Registrar un dron forma parte del uso responsable y no es un simple trámite menor.",
      "Hay que revisar normativa, tipo de operación, identificación del piloto y del equipo.",
      "Que un dron pueda volar técnicamente no significa que pueda hacerlo en cualquier lugar."
    ],
    sections: [
      {
        title: "Qué revisar antes de pensar en el vuelo",
        paragraphs: [
          "Lo primero es identificar el modelo concreto del dron, su peso, la categoría en la que encaja y el tipo de uso que vas a darle. No es lo mismo un uso recreativo básico que una operación con grabación en una zona sensible o cerca de personas.",
          "A partir de ahí toca revisar la normativa aplicable en tu país, si el piloto necesita estar registrado, si el dron requiere identificación visible y si hay restricciones sobre altura, proximidad a aeropuertos o espacios protegidos."
        ],
        bullets: [
          "Modelo y peso del dron.",
          "Tipo de uso: recreativo o con otra finalidad.",
          "Registro e identificación exigidos.",
          "Zona y condiciones de vuelo."
        ]
      },
      {
        title: "Documentación y preparación básica",
        table: {
          columns: ["Elemento", "Para qué sirve", "Qué revisar"],
          rows: [
            ["Registro del piloto", "Vincular la operación a una persona responsable", "Si es obligatorio en tu caso"],
            ["Identificación del dron", "Relacionar el equipo con su propietario", "Número o sistema exigido por la norma"],
            ["Manual y app del fabricante", "Configurar y actualizar el dron", "Firmware, geocercas y avisos"],
            ["Seguro o cobertura", "Reducir riesgos ante daños", "Si la actividad lo necesita o lo exige la ley"]
          ]
        }
      },
      {
        title: "Dónde suelen empezar los problemas",
        paragraphs: [
          "Muchos errores no nacen en el aire, sino antes. El piloto da por hecho que su dron está listo, pero no ha revisado restricciones locales, no conoce la categoría del equipo o no ha actualizado el firmware y la aplicación le bloquea funciones.",
          "También es frecuente confundir la capacidad técnica del dron con el permiso real para operar. Una cámara estable y un buen alcance no sustituyen la lectura de la normativa."
        ],
        bullets: [
          "No revisar la zona de vuelo antes de desplazarte.",
          "Despegar con batería, firmware o mapas sin comprobar.",
          "Ignorar limitaciones por proximidad a aeropuertos o núcleos urbanos.",
          "Pensar que un uso recreativo elimina toda obligación."
        ]
      }
    ],
    faq: [
      {
        question: "¿Todos los drones DJI necesitan el mismo tipo de registro",
        answer: "No. Las obligaciones cambian según el peso, la categoría y el tipo de operación. Lo importante es mirar el modelo concreto y la normativa vigente donde vayas a volar."
      },
      {
        question: "¿Basta con configurar el dron en la app de DJI",
        answer: "No. La app ayuda a activar, actualizar y conocer limitaciones, pero no sustituye la obligación de revisar la normativa y preparar el vuelo con criterio."
      }
    ],
    related: ["equipo/que-es-el-zapato-frio-y-como-puedes-usarlo"]
  },
  {
    slug: "inspiracion/los-25-fotografos-deportivos-mas-influyentes-a-seguir",
    category: "inspiracion",
    title: "Fotografos deportivos influyentes para estudiar ritmo, gesto y anticipacion",
    description: "Seleccion de fotografos deportivos que merece la pena estudiar para aprender accion, timing y construccion de intensidad.",
    kicker: "Referencias",
    intro: "La fotografia deportiva ensena algo valioso incluso si no trabajas en deporte: como anticipar un gesto, leer una direccion de movimiento y decidir en medio del caos. Los buenos referentes del genero ayudan a entender que la accion fuerte no depende solo de la rafaga, sino de saber donde ponerse y que esperar.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "Timing y lectura",
    heroLabel: "las mejores fotos de deporte suelen nacer antes del disparo",
    summary: [
      "Estos autores combinan anticipacion, acceso y lectura narrativa.",
      "Estudiarlos mejora mucho la manera de trabajar accion y seleccion posterior.",
      "La referencia buena es la que te ensena a decidir mejor, no solo a admirar el resultado."
    ],
    sections: [
      {
        title: "Que conviene mirar en estos fotografos",
        bullets: [
          "Momento exacto del gesto y no solo espectacularidad.",
          "Posicion desde la que leen la accion.",
          "Uso del fondo para limpiar intensidad y direccion.",
          "Capacidad para contar algo mas que una jugada aislada."
        ]
      },
      {
        title: "Por que estudiar deporte mejora otras disciplinas",
        paragraphs: [
          "Porque obliga a entrenar reflejos utiles para calle, concierto, documental o cualquier escena cambiante. Aprendes a leer trayectorias, a prever un gesto y a decidir antes de tenerlo delante.",
          "Tambien mejora la seleccion posterior: ver rapido que imagen tiene tension real y cual solo parece espectacular por acumulacion."
        ]
      }
    ],
    faq: [
      {
        question: "Hace falta hacer deporte para aprender de estos autores",
        answer: "No. Muchas de sus lecciones valen para cualquier fotografia de movimiento o de reaccion rapida."
      },
      {
        question: "Que pesa mas en deporte, el equipo o la anticipacion",
        answer: "Las dos cosas importan, pero la anticipacion y la posicion siguen marcando muchisimo mas de lo que parece."
      }
    ],
    related: ["equipo/las-12-mejores-camaras-para-fotografia-de-conciertos", "localizaciones/los-20-fotografos-callejeros-mas-famosos-que-deberias-conocer"]
  }
];
