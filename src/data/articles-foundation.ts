import type { Article } from "./types";

export const foundationArticles: Article[] = [
  {
    slug: "documentos-de-identidad/tamano-carnet-medidas",
    category: "documentos-de-identidad",
    title: "Tamano carnet: medidas, proporciones y pixeles para imprimir bien",
    description: "Guia rapida y util para saber cuanto mide una foto carnet en milimetros, centimetros y pixeles segun la resolucion.",
    kicker: "Utilidad",
    intro: "La mayoria de errores en una foto carnet no vienen de la camara, sino del tamano final, el recorte y la resolucion. Esta guia esta pensada para resolverlo en minutos y sin dar vueltas.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "32 x 26 mm",
    heroLabel: "medida habitual en Espana",
    summary: [
      "La medida mas habitual en Espana es 32 x 26 mm, aunque algunos organismos piden 35 x 45 mm.",
      "Para imprimir limpio necesitas calcular pixeles segun el DPI de salida, no solo el tamano fisico.",
      "Una foto carnet util debe combinar tabla, recorte visual y calculadora de conversion."
    ],
    sections: [
      {
        title: "Medidas mas usadas",
        intro: "Antes de recortar nada, confirma el requisito exacto del organismo o documento.",
        table: {
          caption: "Tamanos de referencia",
          columns: ["Uso", "Milimetros", "Centimetros", "Pixeles a 300 dpi"],
          rows: [
            ["Carnet habitual en Espana", "32 x 26", "3,2 x 2,6", "378 x 307"],
            ["Pasaporte y visado frecuentes", "35 x 45", "3,5 x 4,5", "413 x 531"],
            ["Formato cuadrado para tramites online", "600 x 600 px", "-", "600 x 600"]
          ]
        }
      },
      {
        title: "Que hace que una foto carnet salga bien",
        cards: [
          {
            title: "Fondo limpio",
            text: "Si el fondo no es uniforme, el recorte se nota sucio incluso aunque el tamano sea correcto."
          },
          {
            title: "Rostro bien proporcionado",
            text: "No solo importa el tamano del archivo: la cabeza debe ocupar la zona esperada dentro del encuadre."
          },
          {
            title: "Resolucion suficiente",
            text: "Para imprimir, 300 dpi sigue siendo una referencia segura. Por debajo puedes perder nitidez."
          }
        ]
      },
      {
        title: "Como preparar el archivo final",
        paragraphs: [
          "Empieza con una foto bien iluminada, preferiblemente frontal y con una focal que no deforme el rostro. Despues recorta segun la proporcion requerida y exporta la imagen al tamano exacto en pixeles para la salida final.",
          "Si vas a imprimir varias fotos en una misma hoja, deja margenes de corte consistentes y evita reescalar varias veces el archivo. Un unico exportado final reduce errores."
        ],
        bullets: [
          "Recorta primero por proporcion.",
          "Ajusta despues el tamano en pixeles.",
          "Exporta en JPG de calidad alta o PNG si el tramite es digital."
        ]
      },
      {
        title: "Que suele fallar en tramites online",
        bullets: [
          "Subir un archivo demasiado pesado o demasiado pequeno.",
          "Usar una foto con recorte automatico que corta pelo o barbilla.",
          "Enviar fondo gris o con sombras cuando se exige fondo liso.",
          "Confiar en una captura de movil sin revisar proporcion final."
        ]
      }
    ],
    faq: [
      {
        question: "La foto carnet siempre mide 32 x 26 mm",
        answer: "No. Es una medida frecuente en Espana, pero muchos tramites usan 35 x 45 mm. Hay que revisar el requisito concreto del documento."
      },
      {
        question: "Cuantos pixeles necesito para imprimir una foto carnet",
        answer: "Depende del tamano fisico y del DPI. Por ejemplo, 32 x 26 mm a 300 dpi son aproximadamente 378 x 307 pixeles."
      },
      {
        question: "Vale la misma foto para todos los documentos",
        answer: "No siempre. Cambian tamano, fondo, encuadre o incluso expresion permitida segun el tramite."
      }
    ],
    related: [
      "conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm",
      "edicion-digital/digitalizar-imagenes"
    ]
  },
  {
    slug: "conceptos-basicos/que-tan-grande-es-una-foto-de-4-x-6-tamano-real-en-pixeles-pulgadas-cm-y-mm",
    category: "conceptos-basicos",
    title: "Que tan grande es una foto de 4 x 6: tamano real en pixeles, pulgadas, cm y mm",
    description: "Medidas exactas de una foto 4x6 y tabla de equivalencias para imprimir o preparar archivos digitales.",
    kicker: "Formato",
    intro: "4 x 6 es uno de los tamanos mas comunes para impresion domestica y laboratorios, pero mucha gente mezcla pulgadas, centimetros y resolucion. Aqui queda todo claro.",
    readTime: "6 min",
    updatedAt: "2026-04-15",
    heroStat: "10,16 x 15,24 cm",
    heroLabel: "equivalencia exacta de 4 x 6 pulgadas",
    summary: [
      "4 x 6 pulgadas equivalen a 10,16 x 15,24 cm.",
      "A 300 dpi, el tamano recomendado es 1200 x 1800 pixeles.",
      "Merece la pena preparar el archivo ya al tamano final para evitar reescalados automaticos del laboratorio."
    ],
    sections: [
      {
        title: "Equivalencias directas",
        table: {
          columns: ["Unidad", "Ancho", "Alto"],
          rows: [
            ["Pulgadas", "4", "6"],
            ["Centimetros", "10,16", "15,24"],
            ["Milimetros", "101,6", "152,4"],
            ["Pixeles a 300 dpi", "1200", "1800"]
          ]
        }
      },
      {
        title: "Que resolucion usar",
        paragraphs: [
          "Si la foto es para impresion estandar, 300 dpi sigue siendo el punto de partida mas seguro. Para un 4 x 6 eso te lleva a 1200 x 1800 pixeles.",
          "Si el archivo va a verse solo en pantalla, no necesitas arrastrar el peso de impresion. Aun asi, para pedidos online suele ser mejor subir el tamano completo."
        ],
        bullets: [
          "Impresion correcta: 1200 x 1800 px.",
          "Uso rapido digital: 800 x 1200 px puede valer.",
          "No recortes despues de redimensionar si puedes evitarlo."
        ]
      },
      {
        title: "Errores comunes",
        cards: [
          {
            title: "Confundir 4x6 con 6x4",
            text: "La orientacion cambia. Si imprimes en vertical o horizontal, confirma que lado va primero."
          },
          {
            title: "Subir imagenes demasiado pequenas",
            text: "El laboratorio reescala y puede anadir artefactos o falta de nitidez."
          },
          {
            title: "Usar proporciones equivocadas",
            text: "Si la foto original no respeta la proporcion 2:3 acabaras recortando caras, manos o bordes importantes."
          }
        ]
      },
      {
        title: "Cuando preparar una copia aparte",
        paragraphs: [
          "Si la imagen viene de una camara con proporcion distinta o si ya esta editada para otro destino, merece la pena sacar una copia especifica para 4x6. Asi controlas personalmente el recorte y no dejas esa decision al laboratorio.",
          "Tambien es buena idea hacer una exportacion aparte si vas a pedir muchas copias y quieres revisar nitidez y color antes de lanzar todo el pedido."
        ]
      }
    ],
    faq: [
      {
        question: "4 x 6 y 10 x 15 es lo mismo",
        answer: "Se usan casi como equivalentes en impresion fotografica, aunque la conversion exacta en centimetros es 10,16 x 15,24."
      },
      {
        question: "Puedo imprimir una foto vertical en 4x6",
        answer: "Si. Lo importante es respetar la proporcion 2:3 y decidir bien la orientacion antes de exportar."
      }
    ],
    related: [
      "documentos-de-identidad/tamano-carnet-medidas",
      "conceptos-basicos/que-es-el-obturador"
    ]
  },
  {
    slug: "conceptos-basicos/que-es-el-obturador",
    category: "conceptos-basicos",
    title: "Que es el obturador y como afecta al movimiento, la luz y el aspecto final",
    description: "Explicacion clara de que hace el obturador y como usar la velocidad para congelar o sugerir movimiento.",
    kicker: "Fundamento",
    intro: "Hablar de obturador es hablar de tiempo. Tiempo de entrada de luz, tiempo de movimiento y tiempo de reaccion visual de la imagen final.",
    readTime: "5 min",
    updatedAt: "2026-04-15",
    heroStat: "1/1000 a 1 s",
    heroLabel: "rango tipico de uso consciente",
    summary: [
      "La velocidad de obturacion controla cuanto tiempo se expone el sensor a la luz.",
      "Velocidades rapidas congelan accion; velocidades lentas dejan estela o desplazamiento.",
      "No se decide sola: siempre se relaciona con apertura, ISO y movimiento del sujeto."
    ],
    sections: [
      {
        title: "Como pensar la velocidad",
        paragraphs: [
          "Si el sujeto se mueve rapido y quieres nitidez, necesitas una velocidad alta. Si lo que buscas es sensacion de paso, transito o energia, una velocidad mas lenta puede ser mejor.",
          "La misma velocidad puede funcionar bien o mal segun la focal, la distancia y la direccion del movimiento."
        ],
        bullets: [
          "1/1000 o mas: deporte, accion rapida, fauna.",
          "1/125 a 1/250: calle, retrato con margen, escena general.",
          "1/30 o menos: barridos, agua, noche, intencion de movimiento."
        ]
      },
      {
        title: "Errores tipicos",
        cards: [
          {
            title: "Subir velocidad sin mirar ISO",
            text: "Puedes congelar el gesto, pero tambien destrozar ruido y rango dinamico."
          },
          {
            title: "No considerar la focal",
            text: "A mas focal, mas facil que aparezca trepidacion si disparas a mano."
          },
          {
            title: "Buscar nitidez cuando la escena pide ritmo",
            text: "A veces una imagen gana precisamente cuando dejas respirar el movimiento."
          }
        ]
      },
      {
        title: "Que relacion tiene con la camara en mano",
        paragraphs: [
          "El obturador no solo responde al movimiento del sujeto. Tambien manda mucho cuando disparas sin apoyo, porque cualquier vibracion de tus manos puede aparecer como trepidacion si la velocidad se queda corta.",
          "Por eso conviene pensar siempre la velocidad junto a la focal y a la estabilidad real con la que estas trabajando."
        ]
      }
    ],
    faq: [
      {
        question: "Que diferencia hay entre desenfoque de movimiento y trepidacion",
        answer: "El desenfoque de movimiento viene del sujeto; la trepidacion suele venir del movimiento de la camara al disparar."
      },
      {
        question: "Siempre es mejor una velocidad alta",
        answer: "No. Si la escena gana con sensacion de paso o energia, una velocidad mas lenta puede ser una decision mucho mas interesante."
      }
    ],
    related: [
      "conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos",
      "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres"
    ]
  }
];
