import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "guia-definitiva-para-estudiar-mejor",
    title: "La guía definitiva para estudiar mejor (sin memorizar todo)",
    excerpt:
      "Técnicas basadas en ciencia cognitiva para aprender más en menos tiempo: repaso espaciado, práctica activa y cómo organizar tu agenda.",
    content: [
      "Estudiar no es leer el mismo apunte cinco veces. La investigación en psicología cognitiva es clara: lo que hace que el conocimiento se fije es recuperarlo de tu memoria, no releerlo. Por eso el repaso espaciado y la práctica activa son las dos herramientas con mejor evidencia.",
      "El repaso espaciado consiste en programar revisiones del material en intervalos crecientes: un día, tres días, una semana, un mes. Cada vez que recuperas la información del cerebro sin mirar el apunte, esa conexión se fortalece. Aplicaciones como Anki automatizan este proceso con tarjetas.",
      "La práctica activa, por su parte, te exige resolver problemas y responder preguntas en lugar de solo subrayar. Cierra el libro, escribe todo lo que recuerdes del tema y solo después compara con tus notas. Los errores que descubras ahí son la parte más valiosa del estudio.",
      "Finalmente, la agenda importa tanto como la técnica. Reserva bloques de 50 minutos con descansos de 10, protege tus horas de sueño y evita la multitarea. Tu memoria consolida mientras duermes, no mientras revisas el celular cada dos minutos.",
    ],
    category: "Métodos de estudio",
    authorId: "u1",
    readTime: 6,
    publishedAt: "Hace 3 días",
    tags: ["estudio", "productividad", "ciencia"],
    gradient: "from-violet-500 via-indigo-500 to-sky-500",
    icon: "study",
    featured: true,
  },
  {
    slug: "que-es-la-ia-generativa",
    title: "¿Qué es la inteligencia artificial generativa y por qué debería importarte?",
    excerpt:
      "Un recorrido claro por los modelos de lenguaje, cómo aprenden y cómo puedes usarlos responsablemente en tu carrera.",
    content: [
      "La inteligencia artificial generativa es el conjunto de modelos capaces de crear contenido nuevo —texto, imágenes, audio— a partir de instrucciones. Los modelos de lenguaje como los que hoy encuentras en asistentes de texto aprenden prediciendo la siguiente palabra a partir de enormes cantidades de texto.",
      "Para el estudiante esto es una herramienta poderosa y a la vez un riesgo. Puede ayudarte a explicarte conceptos difíciles, generar resúmenes o practicar con preguntas. Pero usarlo para entregar tareas sin entenderlas te deja sin la habilidad que precisamente estás en la universidad para desarrollar.",
      "La regla de oro: usa la IA como tutor, no como autopista. Pídele que te explique, que te ponga ejercicios, que critique tu argumento. Lo que escribes, resuelves y decides debe seguir siendo tuyo.",
      "En tu carrera, saber interactuar con estas herramientas será una ventaja competitiva. Aprende a redactar instrucciones claras, a verificar las respuestas y a cuestionar los sesgos. La máquina propone, tú dispones.",
    ],
    category: "Tecnología",
    authorId: "u1",
    readTime: 5,
    publishedAt: "Hace 1 semana",
    tags: ["IA", "tecnología", "futuro"],
    gradient: "from-fuchsia-500 to-purple-500",
    icon: "ai",
    featured: true,
  },
  {
    slug: "calculadora-investigacion-que-no-mienta",
    title: "Cómo redactar un marco teórico que no parezca un copiar y pegar",
    excerpt:
      "Tres estrategias para conectar autores, organizar la información y darle una voz propia a tu sección de antecedentes.",
    content: [
      "El marco teórico es la sección que más se abandona al 'resumir autores'. El resultado: un párrafo por autor, sin conexión, que aburre a quien lo lee. La alternativa es pensar en problemas, no en autores.",
      "Empieza por la pregunta de investigación y descompónla en tres o cuatro conceptos clave. Por cada concepto, busca las posturas que lo abordan, los debates entre ellas y los vacíos que dejan. Así tu marco deja de ser un listado y se convierte en un mapa.",
      "Conecta a los autores con frases que muestren relación: 'contrario a lo que plantea X, Y sostiene...', 'estudios más recientes profundizan...'. Esas transiciones son lo que convierte una lista en un argumento.",
      "Termina cada sección con una conclusión propia: qué te aporta ese debate y cómo orienta tu investigación. Recuerda que el marco teórico debe responder, de forma preliminar, tu pregunta de investigación. Si no lo hace, está fuera de lugar.",
    ],
    category: "Investigación",
    authorId: "u2",
    readTime: 7,
    publishedAt: "Hace 2 semanas",
    tags: ["investigación", "redacción", "tesis"],
    gradient: "from-sky-500 to-indigo-500",
    icon: "research",
  },
  {
    slug: "arquitectura-sostenible-para-principiantes",
    title: "Arquitectura sostenible: principios básicos para tus primeros diseños",
    excerpt:
      "Orientación, materiales locales, eficiencia energética y diseño pasivo. Lo que todo estudiante de arquitectura debería considerar.",
    content: [
      "Diseñar con el clima, no contra él. La arquitectura sostenible empieza por entender el entorno: orientación solar, vientos dominantes y vegetación existente. Un buen diseño pasivo reduce hasta un 40% la necesidad de climatización artificial.",
      "Los materiales importan tanto como las formas. Opta por materiales locales y de bajo impacto: tierra, madera certificada, adobe, piedra. Cada kilómetro que viaja un material se traduce en energía y emisiones.",
      "La eficiencia energética es el tercer pilar. Ventanas bien ubicadas para iluminar sin recalentar, aislamiento térmico correcto y sistemas de agua eficientes. La tecnología ayuda, pero la forma del edificio es la decisión más importante.",
      "Y lo más humano: la sostenibilidad también es social. Un espacio debe ser accesible, seguro y capaz de adaptarse a quienes lo habitan. El edificio más eficiente fracasa si no sirve a su comunidad.",
    ],
    category: "Arquitectura",
    authorId: "u5",
    readTime: 5,
    publishedAt: "Hace 2 semanas",
    tags: ["arquitectura", "sostenibilidad", "diseño"],
    gradient: "from-rose-500 to-pink-500",
    icon: "building",
  },
  {
    slug: "citaciones-normas-apa-y-vancouver",
    title: "APA vs. Vancouver: domina las citas en un fin de semana",
    excerpt:
      "Diferencias clave entre los dos estilos de citación más usados en la universidad y un flujo para no equivocarte nunca.",
    content: [
      "Cada estilo de citación responde a una disciplina. APA nace en la psicología y hoy domina las ciencias sociales; Vancouver es el estándar en ciencias de la salud. La diferencia central está en cómo se citan las fuentes dentro del texto.",
      "En APA usas autor-fecha: (Ríos, 2025). En Vancouver usas números correlativos: [1], [2], y la lista final se ordena por aparición. Parece simple, pero es el error más común en trabajos que de otro modo son excelentes.",
      "El truco: no memorices las reglas, domina la estructura. Identifica el tipo de fuente (libro, artículo, página web), busca el formato correspondiente en la guía oficial y respétalo al pie de la letra. Herramientas como los gestores de referencias te ahorran horas, pero revisa siempre el resultado.",
      "Revisa el manual de tu facultad: muchas exigen citación en estilo adaptado. Cuando tengas dudas, pregúntale a tu asesor antes de entregar. Una lista de referencias impecable habla bien del rigor de todo tu trabajo.",
    ],
    category: "Investigación",
    authorId: "u3",
    readTime: 4,
    publishedAt: "Hace 1 mes",
    tags: ["citación", "APA", "Vancouver"],
    gradient: "from-amber-500 to-orange-500",
    icon: "quote",
  },
  {
    slug: "programar-sin-quemarse",
    title: "Aprender a programar sin quemarte: hoja de ruta realista",
    excerpt:
      "Cómo avanzar en la programación paso a paso, con proyectos pequeños, y manteniendo la motivación en los meses difíciles.",
    content: [
      "Todos los estudiantes de sistemas pasan por el mismo miedo al inicio: 'no soy bueno para esto'. La verdad incómoda es que la programación se aprende en curva, no en línea recta, y los primeros meses son los más frustrantes.",
      "La clave está en el proyecto. No estudies Python 'para aprender Python'; estúdialo para resolver algo: un juego de adivinanzas, un organizador de gastos, un web scraping de tu horario. El objetivo concreto te da retroalimentación y motiva el siguiente paso.",
      "Trabaja en bloques de 45-60 minutos con foco total, y date descansos reales. La práctica distribuida supera a las sesiones maratónicas. Cuando te atores más de 20 minutos en algo, pide ayuda: los grupos de la plataforma existen para eso.",
      "Y lo más importante: documenta tu avance. Repositorios con tus primeros proyectos, un post de lo que aprendiste en la semana. Esa evidencia te va a recordar cuánto has crecido cuando la frustración te haga creer lo contrario.",
    ],
    category: "Programación",
    authorId: "u1",
    readTime: 6,
    publishedAt: "Hace 1 mes",
    tags: ["programación", "Python", "carrera"],
    gradient: "from-emerald-500 to-teal-500",
    icon: "code",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
