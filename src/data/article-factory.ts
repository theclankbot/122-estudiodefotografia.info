import type { Article, ArticleSection, FaqItem } from "./types";

type QuickArticleSeed = {
  slug: string;
  category: string;
  title: string;
  description: string;
  kicker: string;
  intro: string;
  heroStat: string;
  heroLabel: string;
  summary: string[];
  related?: string[];
};

type Intent = "glossary" | "guide" | "selection" | "comparison";

const categoryAdvice: Record<string, { frame: string; apply: string[]; mistakes: string[]; faq: FaqItem[] }> = {
  "conceptos-basicos": {
    frame: "Cuando un fundamento queda claro, leer la imagen y tomar decisiones tecnicas resulta mucho mas sencillo.",
    apply: [
      "Llevalo a una escena simple y cambia una sola variable cada vez.",
      "Comprueba que efecto produce en luz, nitidez, profundidad o movimiento.",
      "Relaciona el termino con una decision real de disparo o de edicion."
    ],
    mistakes: [
      "Aprender la palabra y no su efecto visual.",
      "Cambiar demasiadas cosas a la vez.",
      "Pensar que sirve igual en cualquier situacion."
    ],
    faq: [
      {
        question: "Como saber si ya esta claro?",
        answer: "Cuando puedes reconocerlo en una imagen real y explicar que cambia al aplicarlo, la base suele estar asentada."
      }
    ]
  },
  inspiracion: {
    frame: "Una referencia solo aporta de verdad cuando te ayuda a mirar mejor, no cuando se queda en una lista bonita.",
    apply: [
      "Analiza distancia, luz, encuadre, secuencia y tono.",
      "Quédate con una decision concreta que puedas probar en tu trabajo.",
      "Usa la referencia como punto de partida, no como plantilla."
    ],
    mistakes: [
      "Consumir nombres o ejemplos sin estudiarlos.",
      "Copiar la superficie y no la intencion.",
      "Quedarte en la admiracion y no pasar a la practica."
    ],
    faq: [
      {
        question: "Como sacar partido real a una lista de referentes?",
        answer: "Elige pocos ejemplos, estudialos con calma y apunta que decision concreta te interesa trasladar a tu trabajo."
      }
    ]
  },
  equipo: {
    frame: "El equipo se entiende mejor como una herramienta para resolver escenarios concretos, no como una carrera de especificaciones.",
    apply: [
      "Compara cada opcion segun el tipo de fotografia que haces de verdad.",
      "Mira ergonomia, compatibilidad, peso y coste total, no solo la ficha.",
      "Piensa en como afecta a tu flujo antes de comprar o cambiar."
    ],
    mistakes: [
      "Elegir por una sola prestacion llamativa.",
      "Olvidar el ecosistema y el uso real.",
      "Tomar una comparativa como si valiera para todo el mundo."
    ],
    faq: [
      {
        question: "Que pesa mas, la ficha o el uso real?",
        answer: "La ficha ayuda a descartar, pero el uso real es lo que decide si una herramienta encaja o no."
      }
    ]
  },
  "post-produccion": {
    frame: "Editar mejor suele depender mas de orden y criterio que de acumular herramientas o efectos.",
    apply: [
      "Empieza por una base limpia antes de entrar en retoques puntuales.",
      "Revisa la imagen completa y luego al cien por cien.",
      "Piensa siempre en el destino final de la foto o del archivo."
    ],
    mistakes: [
      "Tocar demasiado pronto sin haber diagnosticado el problema.",
      "Aplicar efectos fuertes sin revisar artefactos.",
      "Perder consistencia de una imagen a otra."
    ],
    faq: [
      {
        question: "Por donde merece la pena empezar?",
        answer: "Por la base: exposicion, color general, contraste y limpieza del archivo. Lo fino funciona mejor despues."
      }
    ]
  },
  default: {
    frame: "Lo importante es entender para que sirve esta idea en la practica y como afecta a la imagen o al flujo de trabajo.",
    apply: [
      "Llevala a una situacion real y repetible.",
      "Mide que cambia de verdad en el resultado.",
      "Quedate con lo que puedas aplicar con seguridad."
    ],
    mistakes: [
      "Quedarte en teoria.",
      "Usar una formula sin mirar el contexto.",
      "No revisar si realmente te aporta algo."
    ],
    faq: [
      {
        question: "Hace falta dominarlo desde el primer dia?",
        answer: "No. Suele bastar una base clara y una practica pequena para que la idea empiece a tener sentido."
      }
    ]
  }
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function toSentence(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function detectIntent(seed: QuickArticleSeed): Intent {
  const text = normalizeText(`${seed.title} ${seed.slug} ${seed.kicker}`);

  if (
    text.includes("ideas") ||
    text.includes("fotografos") ||
    text.includes("peliculas") ||
    text.includes("citas") ||
    text.includes("tipos")
  ) {
    return "selection";
  }

  if (
    text.includes("frente a") ||
    text.includes("comparad") ||
    text.includes("comparativa") ||
    text.includes("mejor ") ||
    text.includes("mejores ") ||
    text.includes("resena") ||
    text.includes("opinion") ||
    text.includes("review") ||
    text.includes("gratis")
  ) {
    return "comparison";
  }

  if (
    text.includes("que es ") ||
    text.includes("que significa") ||
    text.includes("significado") ||
    text.includes("definicion") ||
    text.includes("terminos")
  ) {
    return "glossary";
  }

  return "guide";
}

function getAdvice(category: string, intent: Intent) {
  if (categoryAdvice[category]) {
    return categoryAdvice[category];
  }

  if (intent === "selection") {
    return categoryAdvice.inspiracion;
  }

  if (intent === "comparison") {
    return categoryAdvice.equipo;
  }

  return categoryAdvice.default;
}

function summaryCards(seed: QuickArticleSeed) {
  return [
    { title: "Idea principal", text: seed.summary[0] ?? seed.description },
    { title: "Donde aporta", text: seed.summary[1] ?? seed.intro },
    { title: "Que marca la diferencia", text: seed.summary[2] ?? seed.description }
  ];
}

function buildSections(seed: QuickArticleSeed, intent: Intent): ArticleSection[] {
  const advice = getAdvice(seed.category, intent);

  const opening: ArticleSection = {
    title:
      intent === "glossary"
        ? "Que significa exactamente"
        : intent === "selection"
          ? "Por que merece la pena mirar este tema"
          : intent === "comparison"
            ? "Que cambia de una opcion a otra"
            : "Que problema resuelve",
    paragraphs: [seed.intro, toSentence(seed.description), advice.frame],
    bullets: seed.summary
  };

  const middle: ArticleSection =
    intent === "comparison"
      ? {
          title: "Como compararlo con criterio",
          paragraphs: [
            "Una comparacion util no intenta decidir por todo el mundo. Sirve para separar que diferencia afecta al uso real y que diferencia apenas cambia el resultado."
          ],
          table: {
            columns: ["Aspecto", "Que mirar", "Por que pesa"],
            rows: [
              ["Uso real", advice.apply[0], seed.summary[0] ?? "Marca el encaje general."],
              ["Flujo y comodidad", advice.apply[1], seed.summary[1] ?? "Define si te ahorra o te complica trabajo."],
              ["Coste total", advice.apply[2], seed.summary[2] ?? "Importa mas a medio plazo que una sola cifra."]
            ]
          }
        }
      : {
          title:
            intent === "selection"
              ? "Como leer bien esta seleccion"
              : intent === "glossary"
                ? "Donde se vuelve util"
                : "Como abordarlo con orden",
          paragraphs: [
            intent === "selection"
              ? "El valor no esta en memorizar nombres, ejemplos o ideas, sino en detectar que decisiones visuales, tecnicas o de enfoque se repiten y por que siguen funcionando."
              : intent === "glossary"
                ? "La mejor prueba no es repetir la definicion, sino reconocer donde aparece esta idea y que cambia cuando la entiendes mejor."
                : "Una guia practica funciona de verdad cuando te deja una secuencia clara y repetible para llevarla a una escena real."
          ],
          bullets: advice.apply
        };

  const review: ArticleSection = {
    title:
      intent === "selection"
        ? "Que puedes sacar para tu trabajo"
        : intent === "comparison"
          ? "Donde suele encajar mejor"
          : "Que revisar antes de darlo por bueno",
    paragraphs: [
      "La parte importante no es solo entender la explicacion. La diferencia real aparece cuando lo aplicas con criterio y notas una mejora clara en el resultado o en el proceso."
    ],
    cards: summaryCards(seed)
  };

  const closing: ArticleSection = {
    title: "Errores habituales y como evitarlos",
    paragraphs: [
      intent === "selection"
        ? "Las referencias dejan de ser utiles cuando se consumen deprisa y no se traducen a decisiones propias."
        : intent === "comparison"
          ? "Muchas malas decisiones nacen de comparar por costumbre y no por necesidad real."
          : advice.frame
    ],
    bullets: advice.mistakes
  };

  return [opening, middle, review, closing];
}

function buildFaq(seed: QuickArticleSeed, intent: Intent): FaqItem[] {
  const advice = getAdvice(seed.category, intent);
  const extra: Record<Intent, FaqItem[]> = {
    glossary: [
      {
        question: "Por que genera confusion al principio?",
        answer: "Porque suele aparecer como termino tecnico aislado. En cuanto se relaciona con una decision real, se vuelve mucho mas claro."
      }
    ],
    guide: [
      {
        question: "Hace falta dominarlo por completo para empezar?",
        answer: "No. Lo importante es tener una primera forma de aplicarlo con orden y revisarlo despues con calma."
      }
    ],
    selection: [
      {
        question: "Es mejor mirar muchas referencias o pocas?",
        answer: "Pocas y bien estudiadas suelen aportar mucho mas que una acumulacion rapida de nombres o ejemplos."
      }
    ],
    comparison: [
      {
        question: "Tiene sentido decidir solo por precio?",
        answer: "Solo si el uso va a ser muy simple. En cuanto la herramienta condiciona ritmo, calidad o comodidad, el coste total pesa mas."
      }
    ]
  };

  return [...advice.faq, ...extra[intent]].slice(0, 3).map((item, index) => ({
    question: item.question || `Pregunta ${index + 1}`,
    answer: item.answer || seed.summary[index] || seed.intro
  }));
}

function readTimeForIntent(intent: Intent) {
  return intent === "glossary" ? "7 min" : "8 min";
}

export function createQuickArticle(seed: QuickArticleSeed): Article {
  const intent = detectIntent(seed);

  return {
    ...seed,
    readTime: readTimeForIntent(intent),
    updatedAt: "2026-04-14",
    sections: buildSections(seed, intent),
    faq: buildFaq(seed, intent),
    description: seed.description,
    intro: seed.intro,
    heroStat: seed.heroStat,
    heroLabel: seed.heroLabel,
    summary: seed.summary,
    kicker: seed.kicker,
    category: seed.category,
    slug: seed.slug,
    title: seed.title,
    related: seed.related ?? []
  };
}
