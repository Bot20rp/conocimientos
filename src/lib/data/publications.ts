import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "p1",
    slug: "guia-completa-python-para-estudiantes",
    title: "Python desde cero: la guía completa que me hubiera gustado tener",
    subtitle: "Todo lo que necesitas para arrancar, sin rodeos ni términos de más.",
    excerpt:
      "Sintaxis, tipos, funciones, listas, diccionarios y buenas prácticas para pasar tu primer semestre de programación sin frustrarte.",
    categoryId: "programacion",
    authorId: "u1",
    readTime: 12,
    publishedAt: "Hace 2 días",
    views: 4820,
    comments: 46,
    favorites: 1284,
    tags: ["python", "programación", "principiantes"],
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    featured: true,
    difficulty: "Principiante",
    courseCode: "INF120",
    blocks: [
      {
        type: "paragraph",
        text: "Python es el primer lenguaje que recomiendan en casi todas las universidades, y no es casualidad: su sintaxis se lee como inglés, tiene una comunidad enorme y resuelve tareas reales desde el día uno. Pero arrancar sigue siendo abrumador si mezclas tutoriales viejos con consejos de Twitter.",
      },
      {
        type: "heading",
        level: 2,
        text: "¿Por qué Python y no otro lenguaje?",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Curva de aprendizaje corta: menos símbolos raros, más palabras que ya conoces.",
          "Demanda laboral alta en ciencia de datos, IA y desarrollo backend.",
          "Ecosistema gigante: casi cualquier problema ya tiene una librería.",
          "Ideal para prototipar ideas sin pasar horas en configuración.",
        ],
      },
      {
        type: "alert",
        variant: "info",
        title: "Consejo de arranque",
        text: "No instales todo 'a lo loco'. Usa la versión 3.12+ desde python.org o un administrador como uv. El resto lo resuelves cuando lo necesites.",
      },
      {
        type: "heading",
        level: 2,
        text: "Los bloques que de verdad usas cada día",
      },
      {
        type: "paragraph",
        text: "Olvídate de memorizar la librería estándar completa. Con estas piezas resuelves el 90% de tus ejercicios: variables y tipos, condiciones, ciclos, funciones y las dos estructuras estrella: listas y diccionarios.",
      },
      {
        type: "code",
        language: "python",
        code: "# Listas: colecciones ordenadas\nestudiantes = [\"Ana\", \"Bruno\", \"Carla\"]\nestudiantes.append(\"Diego\")\nprint(estudiantes[0])  # Ana\n\n# Diccionarios: datos clave -> valor\nnotas = {\"Ana\": 18, \"Bruno\": 16, \"Carla\": 19}\nfor nombre, nota in notas.items():\n    print(f\"{nombre}: {nota}\")\n\n# Comprensión de listas: compacto y legible\npares = [n for n in range(10) if n % 2 == 0]\nprint(pares)  # [0, 2, 4, 6, 8]",
      },
      {
        type: "heading",
        level: 3,
        text: "Errores típicos de principiante",
      },
      {
        type: "checklist",
        items: [
          { text: "Confundir = (asignación) con == (comparación)", done: true },
          { text: "Mezclar tabulaciones y espacios en la indentación", done: true },
          { text: "Nombrar variables con palabras reservadas (list, dict)", done: false },
          { text: "No cerrar paréntesis y corchetes al mismo nivel", done: false },
        ],
      },
      {
        type: "alert",
        variant: "warning",
        title: "El error más común",
        text: "Un indentación mezclada lanza 'IndentationError'. Configura tu editor para convertir tabulaciones en 4 espacios y jamás lo volverás a sufrir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Siguientes pasos recomendados",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Resuelve 10 ejercicios por semana en plataformas como Exercism o Project Euler.",
          "Construye un mini proyecto: una calculadora de notas o un organizador de tareas.",
          "Aprende Git básico cuanto antes; te salvará la vida en trabajos grupales.",
          "Únete a una comunidad local o a los canales de la plataforma para desbloquearte rápido.",
        ],
      },
      {
        type: "quote",
        text: "No memorices código. Entiende el problema, y el código será la consecuencia.",
        author: "Regla de oro de todo docente de programación",
      },
    ],
  },
  {
    id: "p2",
    slug: "redes-neuronales-explicadas-con-dibujos",
    title: "Redes neuronales explicadas con dibujos y cero miedo",
    subtitle: "Si entiendes una multiplicación, entiendes una red neuronal.",
    excerpt:
      "Neuronas, pesos, sesgos, activación y backpropagation contados como si estuviéramos en una pizarra de café.",
    categoryId: "ia",
    authorId: "u2",
    readTime: 9,
    publishedAt: "Hace 4 días",
    views: 9340,
    comments: 89,
    favorites: 2310,
    tags: ["IA", "machine-learning", "deep-learning"],
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    featured: true,
    difficulty: "Intermedio",
    blocks: [
      {
        type: "paragraph",
        text: "Cuando alguien dice 'red neuronal', tu mente dibuja una maraña de círculos y flechas. En el fondo es mucho más simple: una red es una función enorme compuesta por muchas funciones pequeñas. Hoy la vamos a desarmar pieza por pieza.",
      },
      {
        type: "heading",
        level: 2,
        text: "La neurona artificial",
      },
      {
        type: "paragraph",
        text: "Una neurona recibe varias entradas, les asigna un peso a cada una, las suma, le añade un sesgo y pasa el resultado por una función de activación. Eso es todo. La 'inteligencia' no está en la neurona, sino en los valores de esos pesos.",
      },
      {
        type: "diagram",
        title: "Flujo dentro de una neurona",
        nodes: [
          "Entradas x1, x2, x3",
          "Multiplicar por pesos w1, w2, w3",
          "Sumar todo + sesgo b",
          "Función de activación",
          "Salida hacia la siguiente capa",
        ],
      },
      {
        type: "math",
        formula: "y = activación( w₁·x₁ + w₂·x₂ + w₃·x₃ + b )",
      },
      {
        type: "heading",
        level: 3,
        text: "¿Y cómo aprende?",
      },
      {
        type: "paragraph",
        text: "El entrenamiento es un ciclo de ensayo y error. La red hace una predicción, compara con el resultado esperado usando una función de pérdida, y ajusta los pesos un poquito en la dirección que reduce el error. Ese ajuste, paso a paso, es la retropropagación.",
      },
      {
        type: "table",
        headers: ["Concepto", "Analogía", "Rol"],
        rows: [
          ["Pesos", "Volumen de una perilla", "Cuánto importa cada entrada"],
          ["Sesgo", "Ajuste fino del cero", "Permite activar sin estímulo"],
          ["Activación", "Interruptor", "Introduce no linealidad"],
          ["Pérdida", "Distancia al objetivo", "Mide qué tan mal va"],
          ["Backpropagation", "Regreso corrigiendo", "Actualiza los pesos"],
        ],
      },
      {
        type: "alert",
        variant: "success",
        title: "Luz al final del túnel",
        text: "No necesitas dominar el cálculo para intuir el proceso. El gradiente te dice 'cuánto cambia el error si muevo este peso'. Eso es todo.",
      },
      {
        type: "code",
        language: "python",
        code: "import torch\nimport torch.nn as nn\n\nmodelo = nn.Sequential(\n    nn.Linear(3, 16),   # 3 entradas -> 16 neuronas\n    nn.ReLU(),\n    nn.Linear(16, 1),   # 16 -> 1 salida\n)\n\noptimizador = torch.optim.SGD(modelo.parameters(), lr=0.01)\nperdida = nn.MSELoss()\n\nfor epoca in range(100):\n    prediccion = modelo(X)\n    error = perdida(prediccion, y)\n    optimizador.zero_grad()\n    error.backward()      # retropropagación\n    optimizador.step()    # actualizar pesos",
      },
      {
        type: "quote",
        text: "Una red neuronal bien entrenada es una función que aprendió un patrón que a ti te costaría escribir a mano.",
      },
    ],
  },
  {
    id: "p3",
    slug: "derivadas-integrales-que-si-usaras",
    title: "Derivadas e integrales que sí vas a usar (con ejemplos reales)",
    subtitle: "Del problema a la fórmula, sin perderte en la notación.",
    excerpt:
      "Optimización, tasas de cambio y acumulación explicadas con casos concretos de tu carrera, no con funciones abstractas.",
    categoryId: "matematicas",
    authorId: "u2",
    readTime: 8,
    publishedAt: "Hace 1 semana",
    views: 5610,
    comments: 38,
    favorites: 1120,
    tags: ["cálculo", "matemáticas", "estudio"],
    gradient: "from-indigo-500 via-violet-600 to-purple-600",
    featured: true,
    difficulty: "Intermedio",
    courseCode: "MAT101",
    blocks: [
      {
        type: "paragraph",
        text: "Cálculo no se enseña mal por maldad; se enseña abstracto por comodidad. Aquí vamos a invertir el orden: primero el problema de la vida real, después la herramienta. Así las fórmulas dejan de ser conjuros.",
      },
      {
        type: "heading",
        level: 2,
        text: "La derivada es una tasa de cambio",
      },
      {
        type: "paragraph",
        text: "Si manejas y tu velocidad es de 60 km/h, esa velocidad es la derivada de la posición respecto al tiempo: cuánto cambia la posición en cada instante. Cuando calculas una derivada, preguntas '¿qué tan rápido cambia esto ahora mismo?'.",
      },
      {
        type: "heading",
        level: 3,
        text: "Dónde la usas en cada carrera",
      },
      {
        type: "table",
        headers: ["Carrera", "Problema real", "Herramienta"],
        rows: [
          ["Ingeniería", "Máximo beneficio de un producto", "Derivada igual a cero"],
          ["Economía", "Costo marginal", "Derivada del costo total"],
          ["Biología", "Crecimiento de una población", "Ecuación diferencial"],
          ["Arquitectura", "Curvatura de una estructura", "Segunda derivada"],
          ["Física", "Velocidad y aceleración", "Derivada de posición"],
        ],
      },
      {
        type: "math",
        formula: "f'(x) = lim_{h→0} [ f(x+h) − f(x) ] / h",
      },
      {
        type: "heading",
        level: 2,
        text: "La integral es una acumulación",
      },
      {
        type: "paragraph",
        text: "Si la derivada responde 'qué tan rápido cambia', la integral responde 'cuánto se acumuló'. Sumar velocidad a lo largo del tiempo te da distancia; sumar tasas de flujo te da volumen. Por eso el Teorema Fundamental conecta ambos mundos: integrar es el inverso de derivar.",
      },
      {
        type: "alert",
        variant: "info",
        title: "Truco de examen",
        text: "Antes de integrar algo, pregúntate qué se está acumulando. Si puedes contestar con una frase, ya sabes qué unidades esperar del resultado.",
      },
      {
        type: "checklist",
        items: [
          { text: "Regla de la potencia: derivar xⁿ → n·xⁿ⁻¹", done: true },
          { text: "Regla de la cadena: deriva afuera, luego adentro", done: true },
          { text: "Sustitución u para integrales compuestas", done: false },
          { text: "Integración por partes cuando hay producto de funciones", done: false },
        ],
      },
      {
        type: "code",
        language: "python",
        code: "import sympy as sp\n\nx = sp.Symbol(\"x\")\nf = x**3 + 2*x - 1\n\nprint(\"Derivada:\", sp.diff(f, x))        # 3*x**2 + 2\nprint(\"Integral:\", sp.integrate(f, x))   # x**4/4 + x**2 - x\nprint(\"Límite:\", sp.limit((1 + 1/x)**x, x, sp.oo))  # E",
      },
      {
        type: "quote",
        text: "Aprende la idea primero y la notación después. La notación es el idioma, no el contenido.",
      },
    ],
  },
  {
    id: "p4",
    slug: "sql-desde-cero-hasta-joins-avanzados",
    title: "SQL desde cero hasta JOINs que no te hagan llorar",
    subtitle: "El lenguaje que toda base de datos habla, con ejemplos ejecutables.",
    excerpt:
      "SELECT, filtros, agregaciones y las combinaciones entre tablas explicadas con diagramas y consultas listas para copiar.",
    categoryId: "bases-datos",
    authorId: "u4",
    readTime: 11,
    publishedAt: "Hace 2 semanas",
    views: 7210,
    comments: 57,
    favorites: 1895,
    tags: ["SQL", "bases de datos", "backend"],
    gradient: "from-teal-500 via-emerald-600 to-green-600",
    featured: false,
    difficulty: "Principiante",
    courseCode: "INF312",
    blocks: [
      {
        type: "paragraph",
        text: "SQL lleva más de 40 años en producción y sigue siendo la habilidad más pedida en perfiles de datos y backend. La buena noticia: la sintaxis base cabe en una tarde. La mala: la gente se atasca en los JOINs. Vamos a resolver eso.",
      },
      {
        type: "heading",
        level: 2,
        text: "El esqueleto de toda consulta",
      },
      {
        type: "code",
        language: "sql",
        code: "SELECT columna1, columna2\nFROM tabla\nWHERE condicion\nGROUP BY columna\nHAVING condicion_grupal\nORDER BY columna\nLIMIT 10;",
      },
      {
        type: "paragraph",
        text: "El orden de escritura no es el orden de ejecución. La base de datos primero lee el FROM, luego filtra con WHERE, agrupa, calcula agregaciones, y recién al final elige columnas y ordena. Entender eso te evita errores tontos.",
      },
      {
        type: "diagram",
        title: "Orden de ejecución de una consulta",
        nodes: [
          "FROM + JOINs: prepara las tablas",
          "WHERE: filtra filas individuales",
          "GROUP BY: agrupa",
          "HAVING: filtra grupos",
          "SELECT: calcula columnas finales",
          "ORDER BY y LIMIT: organiza y recorta",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "JOINs, de una vez por todas",
      },
      {
        type: "table",
        headers: ["JOIN", "Qué devuelve", "Cuándo usarlo"],
        rows: [
          ["INNER JOIN", "Solo filas que coinciden", "Relaciones que deben existir"],
          ["LEFT JOIN", "Todas las de la izquierda + coincidencias", "Cuando quieres conservar todo de una tabla"],
          ["RIGHT JOIN", "Todas de la derecha + coincidencias", "Raro; mejor invierte el LEFT"],
          ["FULL OUTER JOIN", "Todo, con huecos donde falte", "Comparar listas completas"],
        ],
      },
      {
        type: "code",
        language: "sql",
        code: "-- Estudiantes con el curso al que están inscritos\nSELECT e.nombre, c.titulo\nFROM estudiantes e\nLEFT JOIN inscripciones i ON i.estudiante_id = e.id\nLEFT JOIN cursos c ON c.id = i.curso_id\nORDER BY e.nombre;",
      },
      {
        type: "alert",
        variant: "warning",
        title: "El clásico error",
        text: "Un JOIN mal pensado multiplica filas. Si el resultado te da más filas de las esperadas, revisa si hay duplicados en la clave que estás usando.",
      },
      {
        type: "heading",
        level: 2,
        text: "Agregaciones para analizar",
      },
      {
        type: "code",
        language: "sql",
        code: "SELECT categoria, COUNT(*) AS total, AVG(precio) AS promedio\nFROM productos\nWHERE activo = 1\nGROUP BY categoria\nHAVING COUNT(*) > 5\nORDER BY total DESC;",
      },
      {
        type: "quote",
        text: "Si puedes explicar tu JOIN dibujando dos cajas y una flecha, puedes explicar cualquier consulta.",
      },
    ],
  },
  {
    id: "p5",
    slug: "modelo-tcp-ip-en-10-minutos",
    title: "El modelo TCP/IP explicado en 10 minutos (con un viaje de paquete)",
    subtitle: "Sigue la historia de un paquete desde tu navegador hasta el servidor.",
    excerpt:
      "Capas, direcciones IP, puertos y DNS contados como una entrega de paquetería. Ideal para tu primer examen de redes.",
    categoryId: "redes",
    authorId: "u6",
    readTime: 6,
    publishedAt: "Hace 1 semana",
    views: 3980,
    comments: 22,
    favorites: 740,
    tags: ["redes", "TCP/IP", "protocolos"],
    gradient: "from-cyan-500 via-sky-600 to-blue-600",
    featured: false,
    difficulty: "Principiante",
    courseCode: "INF433",
    blocks: [
      {
        type: "paragraph",
        text: "Cada vez que abres una página, un montón de 'cajitas' viajan por cables y ondas. El modelo TCP/IP es el mapa de ese viaje: cuatro capas, cada una con su trabajo y su protocolo. Vamos a seguir un paquete de principio a fin.",
      },
      {
        type: "heading",
        level: 2,
        text: "Las cuatro capas",
      },
      {
        type: "diagram",
        title: "Capa por capa, de arriba a abajo",
        nodes: [
          "Aplicación (HTTP, DNS, SMTP)",
          "Transporte (TCP, UDP) — puertos",
          "Red (IP) — direcciones",
          "Enlace (Ethernet, WiFi) — MAC",
        ],
      },
      {
        type: "table",
        headers: ["Capa", "Protagonista", "Unidad"],
        rows: [
          ["Aplicación", "HTTP", "Mensaje"],
          ["Transporte", "TCP", "Segmento"],
          ["Red", "IP", "Paquete"],
          ["Enlace", "Ethernet", "Trama"],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "El viaje del paquete",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Escribes una URL y el DNS la convierte en una dirección IP.",
          "Tu navegador abre una conexión TCP hacia el puerto 443 del servidor.",
          "Los paquetes se fragmentan y cada uno lleva su IP de origen y destino.",
          "Los routers deciden la mejor ruta usando la capa de red.",
          "Cada salto reempaqueta la trama con la dirección MAC correcta.",
          "El servidor responde y el viaje se repite en sentido inverso.",
        ],
      },
      {
        type: "alert",
        variant: "success",
        title: "Regla de oro del TCP",
        text: "TCP garantiza la entrega: si un segmento se pierde, el receptor lo detecta y se reenvía. UDP no: rápido pero sin garantías. Por eso el video en vivo tolera UDP y un banco exige TCP.",
      },
      {
        type: "code",
        language: "bash",
        code: "# Ver el camino de tus paquetes\n$ tracert ejemplo.com          # Windows\n$ traceroute ejemplo.com       # Linux / macOS\n\n# Ver conexiones activas\n$ netstat -an | grep 443",
      },
      {
        type: "quote",
        text: "El modelo TCP/IP no es para memorizar capas; es para saber en qué piso está el problema cuando algo falla.",
      },
    ],
  },
  {
    id: "p6",
    slug: "seguridad-contrasenas-2fa-y-phishing",
    title: "Seguridad básica: contraseñas, 2FA y cómo no caer en phishing",
    subtitle: "Lo que deberían enseñarte el primer día, no después del primer susto.",
    excerpt:
      "Gestores de contraseñas, doble factor, correos sospechosos y hábitos que te ahorran dolores de cabeza.",
    categoryId: "seguridad",
    authorId: "u8",
    readTime: 7,
    publishedAt: "Hace 5 días",
    views: 6150,
    comments: 31,
    favorites: 1502,
    tags: ["seguridad", "phishing", "contraseñas"],
    gradient: "from-rose-500 via-red-600 to-orange-600",
    featured: false,
    difficulty: "Principiante",
    courseCode: "INF462",
    blocks: [
      {
        type: "paragraph",
        text: "El 80% de las cuentas comprometidas lo son por contraseñas reutilizadas o por phishing, no por hackeos de película. La buena noticia: ambas cosas se arreglan con hábitos simples.",
      },
      {
        type: "heading",
        level: 2,
        text: "Contraseñas: el gestor es tu amigo",
      },
      {
        type: "checklist",
        items: [
          { text: "Cada cuenta con una contraseña única", done: true },
          { text: "Largas (>14 caracteres) antes que complicadas", done: true },
          { text: "Nunca palabras del diccionario ni fechas personales", done: true },
          { text: "Un gestor de contraseñas para recordar todas", done: false },
        ],
      },
      {
        type: "alert",
        variant: "warning",
        title: "El mito del símbolo",
        text: "Una contraseña larga con palabras aleatorias ('cobre banjo nube 7') resiste más que una corta con símbolos ('P@ss!1'). La longitud gana.",
      },
      {
        type: "heading",
        level: 2,
        text: "El doble factor no es opcional",
      },
      {
        type: "paragraph",
        text: "Aunque roben tu contraseña, el segundo factor los detiene. Prioriza aplicaciones autenticadoras o llaves de seguridad sobre SMS, que se pueden interceptar. Actívalo al menos en tu correo, tu banco y tus redes.",
      },
      {
        type: "table",
        headers: ["Método", "Seguridad", "Comodidad"],
        rows: [
          ["SMS", "Baja", "Alta"],
          ["App autenticadora", "Media-alta", "Media"],
          ["Llave FIDO2", "Alta", "Alta (pero cuesta dinero)"],
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Detectar phishing en 3 segundos",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Revisa el remitente real, no solo el nombre mostrado.",
          "Desconfía de urgencia y amenazas ('tu cuenta se bloqueará hoy').",
          "Pasa el cursor sobre los enlaces y verifica el dominio antes de hacer clic.",
          "Si el correo pide tu contraseña, es phishing: los servicios nunca la piden.",
        ],
      },
      {
        type: "quote",
        text: "La mejor defensa no es la tecnología, es la pausa de tres segundos antes de hacer clic.",
      },
    ],
  },
  {
    id: "p7",
    slug: "html-css-moderno-primeros-pasos",
    title: "HTML y CSS moderno: tu primer sitio web en una tarde",
    subtitle: "Flexbox, Grid y buenas prácticas de accesibilidad desde el primer archivo.",
    excerpt:
      "Estructura semántica, estilos modernos con variables y un layout responsivo que se ve bien en el celular y en la laptop.",
    categoryId: "desarrollo-web",
    authorId: "u1",
    readTime: 10,
    publishedAt: "Hace 3 días",
    views: 8840,
    comments: 64,
    favorites: 2105,
    tags: ["HTML", "CSS", "frontend"],
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    featured: false,
    difficulty: "Principiante",
    courseCode: "INF513",
    blocks: [
      {
        type: "paragraph",
        text: "HTML define la estructura, CSS el aspecto, y JavaScript el comportamiento. Hoy nos quedamos con los dos primeros y construimos una página que se adapta a cualquier pantalla, sin frameworks y sin dolor.",
      },
      {
        type: "heading",
        level: 2,
        text: "Semántica primero",
      },
      {
        type: "paragraph",
        text: "Usa etiquetas que tengan significado: header, nav, main, article, footer. No solo es buena práctica: ayuda al SEO y a los lectores de pantalla. Un <div> para todo es técnicamente válido y humanamente horrible.",
      },
      {
        type: "code",
        language: "html",
        code: "<header>\n  <nav aria-label=\"Principal\">\n    <a href=\"/\">Inicio</a>\n    <a href=\"/blog\">Blog</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h1>Mi primer sitio</h1>\n    <p>Bienvenido, mundo.</p>\n  </article>\n</main>\n\n<footer>© 2026</footer>",
      },
      {
        type: "heading",
        level: 3,
        text: "CSS con variables y un layout moderno",
      },
      {
        type: "code",
        language: "css",
        code: ":root {\n  --color-primario: #6d5efc;\n  --radio: 12px;\n}\n\nbody {\n  font-family: system-ui, sans-serif;\n  margin: 0;\n}\n\n.tarjetas {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.tarjeta {\n  border: 1px solid oklch(0% 0 0 / 0.08);\n  border-radius: var(--radio);\n  padding: 24px;\n}",
      },
      {
        type: "alert",
        variant: "success",
        title: "Hábito que te va a premiar",
        text: "Abre tu sitio en el modo responsive del navegador mientras codificas. Ver el breakpoint romperse a tiempo es gratis; arreglarlo al final no lo es.",
      },
      {
        type: "diagram",
        title: "Grid que se adapta solo",
        nodes: [
          "auto-fit",
          "minmax(240px, 1fr)",
          "Menos columnas en móvil",
          "Más columnas en desktop",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Checklist de lanzamiento",
      },
      {
        type: "checklist",
        items: [
          { text: "Al menos un <h1> por página", done: true },
          { text: "Imágenes con atributo alt descriptivo", done: true },
          { text: "Contraste de colores suficiente", done: false },
          { text: "Navegación usable con teclado", done: false },
        ],
      },
      {
        type: "quote",
        text: "El diseño no es cómo se ve, es cómo funciona. Y en la web, funciona cuando todos pueden usarlo.",
      },
    ],
  },
  {
    id: "p8",
    slug: "analisis-datos-con-pandas",
    title: "Análisis de datos con pandas: de la hoja de cálculo al DataFrame",
    subtitle: "Carga, limpia, agrupa y visualiza tus datos como un analista.",
    excerpt:
      "DataFrames, filtros, groupby y gráficos rápidos con datos reales de notas de clase.",
    categoryId: "ciencia-datos",
    authorId: "u4",
    readTime: 9,
    publishedAt: "Hace 4 días",
    views: 5270,
    comments: 29,
    favorites: 1310,
    tags: ["pandas", "python", "datos"],
    gradient: "from-fuchsia-500 via-pink-600 to-rose-600",
    featured: false,
    difficulty: "Intermedio",
    courseCode: "MAT302",
    blocks: [
      {
        type: "paragraph",
        text: "Pandas es a Python lo que la hoja de cálculo a Excel, pero con superpoderes. Un DataFrame es una tabla con filas y columnas etiquetadas, y con él haces en tres líneas lo que en Excel era una macro.",
      },
      {
        type: "heading",
        level: 2,
        text: "Tu primer DataFrame",
      },
      {
        type: "code",
        language: "python",
        code: "import pandas as pd\n\nnotas = pd.DataFrame({\n    \"estudiante\": [\"Ana\", \"Bruno\", \"Carla\", \"Ana\"],\n    \"curso\": [\"Cálculo\", \"Cálculo\", \"Física\", \"Física\"],\n    \"nota\": [18, 14, 16, 15],\n})\n\nprint(notas)\n\n# Promedio por curso\nprint(notas.groupby(\"curso\")[\"nota\"].mean())\n\n# Solo aprobados\nprint(notas[notas[\"nota\"] >= 14])",
      },
      {
        type: "heading",
        level: 3,
        text: "El flujo que usas todos los días",
      },
      {
        type: "diagram",
        title: "Pipeline de análisis",
        nodes: [
          "Cargar datos (read_csv, read_excel)",
          "Inspeccionar (head, info, describe)",
          "Limpiar (nulos, duplicados, tipos)",
          "Transformar (filtros, groupby)",
          "Visualizar (matplotlib, seaborn)",
        ],
      },
      {
        type: "alert",
        variant: "info",
        title: "Antes de analizar",
        text: "Siempre ejecuta .info() y .describe(). El 80% de los datos 'raros' se descubren ahí, antes de que arruinen tus conclusiones.",
      },
      {
        type: "table",
        headers: ["Operación", "Excel", "pandas"],
        rows: [
          ["Filtrar", "Filtro automático", "df[df['nota'] > 14]"],
          ["Agrupar", "Tabla dinámica", "df.groupby('curso').mean()"],
          ["Ordenar", "Ordenar y filtrar", "df.sort_values('nota')"],
          ["Sin nulos", "—", "df.dropna()"],
        ],
      },
      {
        type: "code",
        language: "python",
        code: "import matplotlib.pyplot as plt\n\nnotas[\"curso\"].value_counts().plot.bar()\nplt.title(\"Exámenes por curso\")\nplt.show()",
      },
      {
        type: "quote",
        text: "Los datos no hablan; responden. Y responden mejor cuando tu pregunta es clara.",
      },
    ],
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getFeaturedPublications(): Publication[] {
  return publications.filter((p) => p.featured);
}

export function getPublicationsByCategory(categoryId: string): Publication[] {
  return publications.filter((p) => p.categoryId === categoryId);
}
