import type { Article } from "./types";

export const editorialArticles: Article[] = [
  {
    slug: "conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos",
    category: "conceptos-basicos",
    title: "Que son los filtros ND, cuando usarlos y como elegir uno sin complicarte",
    description: "Guia practica para entender los filtros ND y utilizarlos en paisaje, video o largas exposiciones.",
    kicker: "Tecnica",
    intro: "Un filtro ND no hace la foto por ti, pero te da margen para decidir exposicion cuando la luz te empuja justo en la direccion contraria.",
    readTime: "8 min",
    updatedAt: "2026-04-15",
    heroStat: "3 pasos a 10 pasos",
    heroLabel: "reduccion habitual de luz",
    summary: [
      "Un filtro ND reduce la luz que entra en el objetivo sin cambiar el color de la escena de forma intencionada.",
      "Se usa sobre todo para largas exposiciones, video con obturacion controlada y aperturas amplias en mucha luz.",
      "Comprar por densidad sin pensar en el uso suele acabar en una mala eleccion."
    ],
    sections: [
      {
        title: "Para que sirve un ND de verdad",
        bullets: [
          "Alargar la velocidad en agua, nubes o gente en movimiento.",
          "Mantener apertura amplia a pleno sol.",
          "Respetar la regla del 180 en video sin cerrar diafragma en exceso."
        ],
        paragraphs: [
          "La idea central es sencilla: si la escena ya esta demasiado iluminada para la velocidad o apertura que quieres, el ND te devuelve control."
        ]
      },
      {
        title: "Que densidad elegir",
        table: {
          columns: ["Densidad", "Pasos", "Uso tipico"],
          rows: [
            ["ND8", "3", "Video exterior, retrato en sol suave"],
            ["ND64", "6", "Agua en movimiento, paisaje con luz media"],
            ["ND1000", "10", "Largas exposiciones marcadas en pleno dia"]
          ]
        }
      },
      {
        title: "Como usarlo sin frustrarte",
        cards: [
          {
            title: "Enfoca antes",
            text: "Con ND densos puede costar enfocar. Haz el enfoque primero y luego coloca el filtro."
          },
          {
            title: "Tapa entradas de luz",
            text: "En exposiciones largas, cualquier fuga por visor o acoples arruina contraste y negros."
          },
          {
            title: "Haz una prueba base",
            text: "Mide la exposicion sin filtro y calcula despues el tiempo nuevo en funcion de los pasos."
          }
        ]
      },
      {
        title: "Errores que suelen arruinar la experiencia",
        bullets: [
          "Comprar un ND demasiado denso para el uso real y terminar usandolo muy pocas veces.",
          "Montarlo sin limpiar lente y filtro, con manchas que luego se vuelven muy visibles.",
          "Olvidar recalcular la exposicion y disparar a ciegas en largas exposiciones.",
          "Pensar que un ND arregla una luz mala cuando el problema es la escena."
        ]
      }
    ],
    faq: [
      {
        question: "Es mejor un ND fijo o variable",
        answer: "Depende del uso. En video y trabajo ligero un variable puede ser muy comodo. Para largas exposiciones y maxima consistencia, muchos fotografos prefieren filtros fijos."
      },
      {
        question: "Un filtro ND cambia el color de la foto",
        answer: "Idealmente no, pero algunos filtros pueden introducir dominantes. Cuanta mas calidad tenga el filtro, mas facil es mantener un color neutro."
      }
    ],
    related: [
      "conceptos-basicos/que-es-el-obturador",
      "post-produccion/que-es-adobe-camera-raw-y-como-empezar"
    ]
  },
  {
    slug: "composicion/pie-de-foto-ejemplos",
    category: "composicion",
    title: "Pie de foto: ejemplos, estructura y claves para escribir uno que sume",
    description: "Ejemplos de pie de foto y una estructura clara para contextualizar sin estropear la imagen.",
    kicker: "Narrativa",
    intro: "Un buen pie de foto no repite lo obvio. Anade contexto, intencion o lectura y mejora la relacion entre imagen y texto.",
    readTime: "7 min",
    updatedAt: "2026-04-15",
    heroStat: "3 capas",
    heroLabel: "contexto, dato e intencion",
    summary: [
      "Un pie de foto util no describe lo que ya se ve, sino lo que ayuda a interpretar mejor la imagen.",
      "Puede informar, situar, aportar un dato tecnico o sugerir una lectura.",
      "Cuanto mejor es la foto, mas precisa y breve puede ser la leyenda."
    ],
    sections: [
      {
        title: "Una estructura simple que funciona",
        bullets: [
          "Que estamos viendo o desde dnde miramos.",
          "Que dato anade valor real.",
          "Que lectura o intencion dejas abierta."
        ],
        paragraphs: [
          "No hace falta usar siempre las tres capas, pero si entender que el pie de foto debe justificar su existencia."
        ]
      },
      {
        title: "Ejemplos",
        cards: [
          {
            title: "Documental",
            text: "Una vecina espera la apertura del mercado central de Valencia pocos minutos despues del amanecer."
          },
          {
            title: "Viaje",
            text: "La niebla entra desde el valle y reduce la ciudad a una secuencia de planos suaves."
          },
          {
            title: "Retrato",
            text: "Marc sostiene la mirada justo antes de romper la pose y volver a moverse."
          }
        ]
      },
      {
        title: "Que es mejor evitar",
        bullets: [
          "Describir literalmente lo que ya es evidente.",
          "Sobrecargar la imagen con un tono grandilocuente.",
          "Meter demasiados datos tecnicos si no aportan lectura."
        ],
        quote: {
          text: "El pie de foto no tiene que competir con la imagen. Su trabajo es afinarla.",
          author: "Redaccion"
        }
      },
      {
        title: "Cuanto debera ocupar",
        paragraphs: [
          "La longitud ideal depende del contexto. En prensa o documental puede necesitar mas dato; en una galeria editorial suele funcionar mejor una leyenda breve y muy precisa.",
          "La pregunta util no es si el pie es corto o largo, sino si aporta algo que la imagen no esta dando por si sola."
        ]
      }
    ],
    faq: [
      {
        question: "Un pie de foto puede ser subjetivo",
        answer: "S, si el contexto lo permite. Lo importante es que no se vuelva confuso ni robe protagonismo a la imagen."
      },
      {
        question: "Cuando conviene anadir datos tecnicos",
        answer: "Cuando esos datos ayudan realmente a entender como se hizo la foto o por que esa decision importa. Si no suman lectura, mejor dejarlos fuera."
      }
    ],
    related: [
      "inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas",
      "retrato/las-25-mejores-poses-masculinas-guia-para-fotografiar-hombres"
    ]
  },
  {
    slug: "inspiracion/que-es-un-ensayo-fotografico-17-ejemplos-e-ideas",
    category: "inspiracion",
    title: "Que es un ensayo fotografico: como construir una serie con intencion",
    description: "Guia para entender que define un ensayo fotografico y como pasar de fotos sueltas a una secuencia con direccion.",
    kicker: "Cultura visual",
    intro: "Un ensayo fotografico no es una carpeta con imagenes bonitas del mismo tema. Es una secuencia con una idea detras y un orden que sostiene esa idea.",
    readTime: "9 min",
    updatedAt: "2026-04-15",
    heroStat: "Idea + secuencia",
    heroLabel: "la diferencia entre serie y coleccion",
    summary: [
      "Un ensayo fotografico parte de una pregunta, una mirada o una tension, no solo de un tema.",
      "La edicion y el orden de las imagenes son tan importantes como las fotos individuales.",
      "La variedad dentro de una misma intencion visual da respiracion a la secuencia."
    ],
    sections: [
      {
        title: "Que convierte una serie en ensayo",
        paragraphs: [
          "El ensayo aparece cuando las imagenes dialogan entre si y construyen algo que ninguna foto explica sola. Puede ser un lugar, una rutina, una persona o una transformacion, pero necesita una idea de lectura."
        ],
        bullets: [
          "Una pregunta o premisa clara.",
          "Una seleccion con ritmo y contraste.",
          "Un cierre o apertura que deje sentido."
        ]
      },
      {
        title: "17 ideas de partida",
        cards: [
          { title: "Un oficio a una hora concreta", text: "Seguir como cambia un trabajo antes, durante y despues del momento clave." },
          { title: "El mismo lugar en distintos usos", text: "Registrar como se transforma un espacio segun la gente que lo ocupa." },
          { title: "Pequenos rituales domasticos", text: "Trabajar la repeticion, el detalle y la intimidad sin convertirlo en postal." },
          { title: "Luz y transito en una calle", text: "Ver como cambia el lugar a traves del movimiento y la densidad humana." }
        ]
      },
      {
        title: "Como editar la secuencia",
        bullets: [
          "Abre con una imagen que coloque la atmasfera.",
          "Alterna planos generales, medios y detalles.",
          "Evita repeticiones visuales si no aportan ritmo.",
          "Cierra con una imagen que expanda o concentre la lectura."
        ]
      },
      {
        title: "Errores muy comunes al empezar",
        bullets: [
          "Confundir tema con idea y disparar sin una pregunta real detras.",
          "Repetir el mismo tipo de plano hasta agotar la serie.",
          "Querer cerrar demasiado pronto una secuencia que todavia no ha madurado.",
          "Editar por apego a fotos sueltas en lugar de pensar en el conjunto."
        ]
      }
    ],
    faq: [
      {
        question: "Cuantas fotos necesita un ensayo fotografico",
        answer: "No hay una cifra obligatoria. Lo importante es que la secuencia tenga ritmo y sentido, no llegar a un numero concreto."
      },
      {
        question: "Hace falta que todas las fotos sean muy distintas",
        answer: "No. Necesitan variedad suficiente para respirar, pero tambien coherencia visual e intencional para sostener la serie."
      }
    ],
    related: [
      "composicion/pie-de-foto-ejemplos",
      "conceptos-basicos/que-son-los-filtros-nd-cuando-y-como-usarlos"
    ]
  }
];
