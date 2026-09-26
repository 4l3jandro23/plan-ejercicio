/* ==========================================================================
   Plan de Ejercicio — RESCATE
   --------------------------------------------------------------------------
   Este archivo existe por una frase suya: "llevo 3 meses sin ir al gym,
   principalmente porque el gym está muy lleno y me agobia".

   Eso no es falta de ganas. Es un plan que solo tiene una entrada — ir al
   gimnasio a la hora que está a reventar — y cuando esa entrada se bloquea,
   la semana entera se va a cero. Lo que hay aquí son las otras entradas.

   Reglas de tono, las mismas que en la app de alimentación:
   cero moralina, cero "tú puedes", cero "no pasa nada, mañana lo intentas".
   Todo lo de aquí es una sesión de verdad, no un premio de consolación.
   ========================================================================== */


/* ==========================================================================
   1. ESTÁ LLENO
   Estás allí (o de camino) y no hay máquinas. Planes que NO dependen de
   encontrar sitio. El objetivo aquí no es entrenar bien: es no dar media
   vuelta, porque dar media vuelta una vez es lo que se convierte en tres meses.
   ========================================================================== */
const LLENO = [
  {
    id:'tres-libres', icono:'i-pesa', min:20, cuenta:'minima',
    nombre:'Las tres que estén libres',
    resumen:'Da igual cuáles. Tres máquinas, tres series de cada, te vas.',
    pasos:[
      'Entra y da UNA vuelta. No dos. Apunta mentalmente las tres primeras máquinas de tu rutina que veas libres.',
      'Empieza por esas tres, en el orden que sea. El orden de la rutina no importa nada: es una convención, no una regla.',
      'Tres series de diez en cada una. Descanso de un minuto.',
      'Cuando acabes las tres, te vas. Aunque lleves quince minutos. Aunque haya quedado libre otra.'
    ],
    porQue:'Tu rutina son seis ejercicios porque seis cubren todo el cuerpo, no porque menos de seis no valga. Tres máquinas es el 100% de una sesión mínima, y la app la guarda exactamente igual que una completa.',
    truco:'Si te agobia decidir cuáles, usa esta regla y no la discutas: las tres primeras libres que veas al entrar.'
  },
  {
    id:'cero-maquinas', icono:'i-cinta', min:25, cuenta:'cinta',
    nombre:'Plan sin máquinas',
    resumen:'Cinta en cuesta y colchoneta. Nunca hay cola para esto.',
    pasos:[
      'Cinta: 20 minutos andando en cuesta, al nivel que te toque. Si todas las cintas están pilladas, bici estática o elíptica, da igual.',
      'Colchoneta: dos planchas de 30 segundos.',
      'Y ya está. Fuera.'
    ],
    porQue:'La zona de cardio y la de colchonetas son las dos únicas que casi nunca se llenan del todo, porque hay muchas unidades. Además esto es literalmente lo que mejor se te da: 106 de tus 140 entrenos registrados eran caminar.',
    truco:'Si te da rabia "no haber hecho pesas": esta sesión es la que más le sirve a tu colesterol de todas las que puedes hacer. No es el plan B de nada.'
  },
  {
    id:'sustitutos', icono:'i-cambiar', min:30, cuenta:'fuerza',
    nombre:'Cambiar la máquina, no el plan',
    resumen:'Cada ejercicio tiene dos o tres máquinas que valen igual.',
    pasos:[
      'No esperes de pie al lado de nadie. Nunca. Es lo que más agobia y no hace falta.',
      'Mira la lista de abajo, coge la alternativa que esté libre y sigue.',
      'Si de un grupo no hay ninguna libre, sáltate ese grupo entero y sigue con el siguiente. Vuelves al final si te apetece.'
    ],
    porQue:'La gente se atasca porque piensa que la rutina es una lista cerrada. No lo es: lo que importa es tocar cada zona del cuerpo, y a cada zona se llega por dos o tres sitios distintos.',
    truco:'Esta es la que te va a servir más veces. Míratela una vez con calma en casa y luego ya la sabes.',
    verSustitutos:true
  },
  {
    id:'diez-minutos', icono:'i-reloj', min:10, cuenta:'minima',
    nombre:'La regla de los diez minutos',
    resumen:'Si en diez minutos no has empezado nada, plan cinta y te vas.',
    pasos:[
      'Miras el reloj al entrar.',
      'Si a los diez minutos sigues dando vueltas buscando hueco, se acabó la búsqueda.',
      'Te vas a la cinta, 15 minutos en cuesta, y a casa.'
    ],
    porQue:'Deambular por un gimnasio lleno buscando sitio es lo que genera el agobio, no el ejercicio. Los diez minutos son un tope para que ese estado no se alargue: es una decisión que ya está tomada antes de entrar.',
    truco:'Ponte el temporizador del móvil al entrar si hace falta. Suena raro y funciona.'
  },
  {
    id:'un-ejercicio', icono:'i-rayo', min:6, cuenta:'minima',
    nombre:'Un ejercicio y fuera',
    resumen:'Entras, haces uno, te vas. Cuenta como sesión.',
    pasos:[
      'La primera máquina libre que veas de tu rutina.',
      'Dos series. Ya.',
      'A la calle.'
    ],
    porQue:'Esto no es por el ejercicio, es por la puerta: lo caro de ir al gimnasio no son las pesas, es cruzar la entrada. Cada vez que la cruzas, la siguiente vez cuesta menos. Seis minutos mantienen viva la costumbre; tres meses sin cruzarla la matan.',
    truco:'Los días de agobio de verdad, esta es la buena. No la de tres máquinas: esta.'
  },
  {
    id:'me-voy', icono:'i-andar', min:30, cuenta:'caminar',
    nombre:'No puedo. Me voy',
    resumen:'Vale. Vuelve andando y eso cuenta como sesión.',
    pasos:[
      'Sales.',
      'En vez de coger el metro o el bus, vuelves andando. Treinta minutos a paso vivo.',
      'Lo marcas como caminar en la app y se acabó el tema.'
    ],
    porQue:'Hay días en que entrar y estar ahí dentro es más de lo que puedes. Eso pasa y no significa nada. Lo que sí significa algo es lo que haces en los quince minutos siguientes: si vuelves andando, el día cuenta y mañana no arrastras nada. Si vuelves en metro pensando que la has liado, mañana tampoco vas.',
    truco:'Esta es exactamente la misma idea que en la app de comida: lo que rompe el plan no es la sesión que no hiciste, es el "ya da igual" de después.'
  }
];


/* ==========================================================================
   2. SUSTITUTOS POR ZONA
   Para llevarlo abierto en el móvil dentro del gimnasio. Los nombres van
   también en inglés porque es lo que pone escrito en las máquinas.
   ========================================================================== */
const SUSTITUTOS = [
  {
    zona:'Piernas', tuyo:'Prensa de piernas', ingles:'Leg Press',
    opciones:[
      { m:'Extensión de cuádriceps', en:'Leg Extension', nota:'La de sentado estirando las piernas hacia delante. Suele estar más libre que la prensa.' },
      { m:'Curl femoral', en:'Leg Curl', nota:'La misma idea al revés: doblas las piernas hacia atrás. Con esta y la anterior cubres lo que hace la prensa.' },
      { m:'Cinta en cuesta', en:'—', nota:'Si no hay ninguna libre: 15 minutos al 10-12% de cuesta trabajan la pierna de verdad.' }
    ]
  },
  {
    zona:'Espalda', tuyo:'Jalón al pecho', ingles:'Lat Pulldown',
    opciones:[
      { m:'Remo sentado', en:'Seated Row', nota:'Es el número 4 de tu propia rutina. Si el jalón está pillado, haz este y vuelve luego.' },
      { m:'Cualquier polea de tirar', en:'Cable Row / Pulldown', nota:'Si te puedes sentar y tirar de un cable hacia ti, sirve. No hace falta que sea la máquina exacta.' },
      { m:'Remo con pecho apoyado', en:'Chest Supported Row', nota:'La que tiene una almohadilla donde apoyas el pecho. Es de las más fáciles de hacer bien.' },
      { m:'Dominadas asistidas', en:'Assisted Pull-up / Assisted Dip-Chin', nota:'La máquina donde te arrodillas en una plataforma que te empuja hacia arriba. Es el mismo movimiento que el jalón pero al revés. Más peso en la máquina = más fácil.' },
      { m:'Jalón en otra polea alta', en:'Cable Station / Functional Trainer', nota:'Cualquier polea con el cable arriba: engancha una barra o una cuerda, arrodíllate delante y tira hacia el pecho. Igual que el jalón, sin su asiento.' },
      { m:'Remo con mancuerna', en:'One-arm Dumbbell Row', nota:'Una rodilla y una mano en un banco, la mancuerna en la otra mano, y tiras de ella hacia la cadera. 10-12 por brazo. Mancuernas siempre hay.' }
    ]
  },
  {
    zona:'Pecho', tuyo:'Press de pecho', ingles:'Chest Press',
    opciones:[
      { m:'Contractor de pecho', en:'Pec Deck / Butterfly', nota:'Donde juntas los brazos por delante. Más fácil todavía que el press y casi siempre hay una libre.' },
      { m:'Press inclinado', en:'Incline Chest Press', nota:'El mismo movimiento un poco más hacia arriba. Vale igual.' },
      { m:'Flexiones en la colchoneta', en:'—', nota:'Con las rodillas apoyadas si hace falta. En la zona de colchonetas siempre hay hueco.' }
    ]
  },
  {
    zona:'Hombro', tuyo:'Press de hombros', ingles:'Shoulder Press',
    opciones:[
      { m:'Sáltatelo', en:'—', nota:'En serio. Es el menos importante de los seis y el hombro ya trabaja en el press de pecho. Saltárselo no rompe nada.' },
      { m:'Elevaciones laterales', en:'Lateral Raise', nota:'Con dos mancuernas ligeras, de pie, subiendo los brazos a los lados. Con 4 o 5 kg sobra.' }
    ]
  },
  {
    zona:'Centro del cuerpo', tuyo:'Plancha', ingles:'—',
    opciones:[
      { m:'La misma plancha', en:'—', nota:'La zona de colchonetas no se llena nunca. Esta siempre la puedes hacer.' }
    ]
  }
];


/* ==========================================================================
   3. HOY NO VOY AL GIMNASIO
   El gimnasio no es el plan: es UN sitio donde ejecutar el plan.
   ========================================================================== */
const NO_VOY = [
  {
    id:'casa-20', icono:'i-casa', min:28, modo:'casa',
    nombre:'La rutina de casa entera',
    resumen:'Seis ejercicios, sin material, en el salón.',
    porQue:'Es la misma estructura que la del gimnasio: piernas, espalda, pecho, hombro y centro. Cambian las herramientas, no el entreno.',
    truco:'Se hace con una silla y una toalla. Nada más.'
  },
  {
    id:'casa-8', icono:'i-rayo', min:8, modo:'express',
    nombre:'Ocho minutos y ya',
    resumen:'Tres ejercicios, una serie de cada.',
    porQue:'Ocho minutos es menos de lo que tardas en decidir si entrenas o no. Ese es justo el punto: quitarle la decisión de en medio.',
    truco:'Para los días en que la respuesta honesta es "no". Esta le gana a no hacer nada por muchísimo.'
  },
  {
    id:'andar-30', icono:'i-andar', min:30, marca:'caminar',
    nombre:'Salir a andar 30 minutos',
    resumen:'Paso vivo, sin parar, sin ruta especial.',
    porQue:'Es lo que mejor se te da y lo que más te ha durado: 106 de tus 140 entrenos eran esto. Y para el colesterol es de lo más útil que puedes hacer.',
    truco:'Ponte un podcast y sal por la puerta sin decidir a dónde. Decidir la ruta es una excusa más para no salir.'
  },
  {
    id:'escaleras', icono:'i-escaleras', min:10, marca:'caminar',
    nombre:'Escaleras de tu edificio',
    resumen:'Subir y bajar diez minutos. No hace falta ni salir.',
    porQue:'Subir escaleras es de los esfuerzos más intensos que existen sin material. Diez minutos suben las pulsaciones más que media hora andando en llano.',
    truco:'Sube andando, baja tranquilo. Bajar deprisa es lo que carga las rodillas, no subir.'
  },
  {
    id:'reconocimiento', icono:'i-buscar', min:10, marca:'reconocimiento',
    nombre:'Solo ir a mirar',
    resumen:'Entrar, dar una vuelta, salir. Cuenta como sesión.',
    porQue:'Después de tres meses fuera, lo que cuesta no es el ejercicio: es entrar. Esta sesión desactiva eso y nada más, que ya es bastante.',
    truco:'Va bien especialmente si estás pensando en cambiarte de gimnasio: ve a la hora a la que irías de verdad y mira cómo está. Eso es un dato, no una sesión perdida.'
  },
  {
    id:'respirar', icono:'i-respirar', min:2,
    nombre:'Nada. Dos minutos de respirar',
    resumen:'Ni entreno ni marca nada. Solo bajar el pulso.',
    porQue:'A veces lo que hay no es pereza: es que vienes acelerado y todo te parece cuesta arriba. Dos minutos cambian eso más de lo que parece.',
    truco:'Después de esto puedes decidir otra vez. A veces sale que sí.'
  }
];


/* ==========================================================================
   4. ANDAR EN SERIO
   Su punto fuerte real, ascendido de premio de consolación a plan principal.
   En Roma hizo 36 km en un día casi sin agujetas: la base aeróbica es buena.
   ========================================================================== */
const ANDAR = [
  {
    nombre:'30 minutos a paso vivo', min:30, icono:'i-andar',
    como:'Sin parar y a un ritmo en el que puedas hablar pero no cantar.',
    nota:'Es el formato base. Si solo haces uno, este.'
  },
  {
    nombre:'Volver del trabajo andando', min:35, icono:'i-reloj',
    como:'Bájate dos o tres paradas antes y haz el resto a pie.',
    nota:'El que menos se salta, porque no hay que sacar tiempo de ningún sitio: ese tiempo ya estaba ocupado en desplazarte.'
  },
  {
    nombre:'Dos tandas de 15', min:30, icono:'i-cambiar',
    como:'Quince por la mañana y quince por la tarde, o antes y después de comer.',
    nota:'Vale exactamente igual que los 30 seguidos. Si media hora te parece mucho, pártela.'
  },
  {
    nombre:'Cuestas de verdad', min:50, icono:'i-fuego',
    como:'La Carretera de les Aigües, Montjuïc o el Turó de la Rovira. Cuesta continua, vistas y sin coches.',
    nota:'De finde. Andar en cuesta de verdad es más duro que la cinta, y es de lo poco que te va a apetecer repetir.'
  },
  {
    nombre:'Ruta larga sin objetivo', min:90, icono:'i-corazon',
    como:'El Passeig Marítim de punta a punta, o cruzar la ciudad hasta donde te canses.',
    nota:'En Roma hiciste 36 km en un día casi sin agujetas. Esto lo tienes de sobra: úsalo cuando te apetezca, no como castigo.'
  }
];


/* ==========================================================================
   5. CUÁNDO ESTÁ VACÍO
   Datos suyos, no generales: no puede ir a mediodía en días de teletrabajo,
   y su gimnasio está lleno de 17:00 a 22:30 entre semana. Abre 6:00-1:00.
   Corregido el 20-09-2026 con las gráficas de Google Maps: lo de "el viernes
   a las 15:30 está vacío" no era verdad, y estaba escrito en cuatro sitios.
   ========================================================================== */
/* `dias` va en índices de lunes(0) a domingo(6), y `desde`/`hasta` en minutos
   desde medianoche. Está así para que la pestaña Hoy pueda decir a qué hora
   está lleno AHORA MISMO sin tener que interpretar el texto de `cuando`.
   Una sola fuente: si cambia un horario, cambia en los dos sitios. */
const FRANJAS = [
  { cuando:'Entre semana, 6:45 - 8:00', corto:'Antes de trabajar está vacío', nivel:'vacio', dias:[0,1,2,3,4], desde:405, hasta:480, quePasa:'Está prácticamente vacío. Lo confirma la gráfica de Google: es la hora más floja del día.', veredicto:'El mejor hueco real que tienes. Un extra, no la base: con tu sueño irregular no lo vas a sostener todas las semanas, pero un día suelto que te despiertes pronto, es oro.' },
  { cuando:'Entre semana, 23:00 - 00:30', corto:'Después de cenar ya ha bajado', nivel:'bien', dias:[0,1,2,3], desde:1380, hasta:1470, quePasa:'A las 22:00 todavía hay bastante gente. La caída de verdad empieza sobre las 23:00.', veredicto:'Funciona, pero entrenar tan tarde te descoloca el sueño, y el sueño ya lo tienes movido. Como excepción, no como plan.' },
  { cuando:'Entre semana, 17:00 - 22:30', corto:'Por la tarde no hay nada que hacer', nivel:'lleno', dias:[0,1,2,3], desde:1020, hasta:1350, quePasa:'Sube desde las 16:00 y no baja hasta pasadas las 22:00. El pico va de 19:00 a 21:00.', veredicto:'Es la franja que llevas años intentando y es la razón por la que estuviste tres meses sin ir. No es cabezonería tuya: es que a esa hora no cabe la gente.' },
  { cuando:'Viernes, 15:00 - 21:00', corto:'Al salir de trabajar ya hay gente', nivel:'lleno', dias:[4], desde:900, hasta:1260, quePasa:'Aquí la app se equivocaba. Decía que las 15:30 del viernes eran tu hueco vacío, y la gráfica de Google dice que a esa hora ya va por tres cuartos de su hora más llena, subiendo.', veredicto:'Sigue siendo mejor que las 19:00 de un martes, pero no es el sitio vacío que ponía aquí antes. Si vas el viernes al salir de trabajar, ve sabiendo que habrá gente.' },
  { cuando:'Viernes, 21:00 - 00:30', corto:'El viernes se vacía antes que el resto', nivel:'bien', dias:[4], desde:1260, hasta:1470, quePasa:'El viernes se vacía antes que el resto de días: a partir de las 21:00 cae rápido.', veredicto:'Si el viernes te da igual entrenar tarde, este rato es bastante mejor que la salida del trabajo.' },
  { cuando:'Sábado o domingo, 8:00 - 11:00', corto:'Por la mañana, lo más tranquilo', nivel:'bien', dias:[5,6], desde:480, hasta:660, quePasa:'Abre a las 6:00 también el fin de semana, y las primeras horas son las más flojas.', veredicto:'Lo mejor del fin de semana. De tu gimnasio no tengo la gráfica del finde: esto sale de la de L\'Illa, donde el mediodía (12:00-14:00) es lo más lleno del día y la tarde se queda a media altura.' }
];

/* ==========================================================================
   5 bis. LAS GRÁFICAS DE GOOGLE, LOS DOS GIMNASIOS
   Leídas de las gráficas de "horas punta" de Google Maps el 20-09-2026. Cada
   número es el % respecto a la hora MÁS llena de ESE gimnasio, que es como las
   dibuja Google. Por eso sirven para ver CUÁNDO se vacía cada uno, y no para
   decir cuál de los dos tiene menos gente en total: eso Google no lo dice.
   Son una lectura a ojo de la gráfica, así que valen como orientación.
   FRANJAS de arriba es el resumen en palabras de la curva de Berlín: si un día
   cambia una, hay que cambiar la otra.
   ========================================================================== */
const GIMNASIOS = [
  {
    id:'berlin',
    nombre:'Berlín',
    detalle:'El tuyo, el que ya pagas.',
    curvas:{
      semana:  {6:15, 7:25, 8:30, 9:35, 10:38, 11:40, 12:38, 13:40, 14:45, 15:48, 16:58, 17:72, 18:85, 19:95, 20:100, 21:92, 22:75, 23:45, 24:30},
      viernes: {6:12, 7:30, 8:45, 9:50, 10:52, 11:52, 12:50, 13:55, 14:62, 15:72, 16:80, 17:90, 18:92, 19:88, 20:82, 21:68, 22:52, 23:38, 24:28},
      finde:   null
    }
  },
  {
    id:'illa',
    nombre:"L'Illa Diagonal",
    detalle:'Fitness Park, en el centro comercial. Tiene zona de boxeo.',
    curvas:{
      semana:  {6:20, 7:45, 8:48, 9:42, 10:40, 11:42, 12:42, 13:48, 14:55, 15:68, 16:72, 17:82, 18:90, 19:88, 20:85, 21:75, 22:52, 23:35, 24:38},
      viernes: {6:10, 7:35, 8:38, 9:32, 10:38, 11:45, 12:42, 13:48, 14:55, 15:62, 16:72, 17:68, 18:80, 19:92, 20:95, 21:85, 22:58, 23:38, 24:30},
      finde:   {6:18, 7:28, 8:30, 9:35, 10:45, 11:50, 12:62, 13:65, 14:60, 15:48, 16:42, 17:45, 18:50, 19:52, 20:48, 21:38, 22:32, 23:28, 24:25}
    }
  }
];


/* ==========================================================================
   6. ¿ME CAMBIO DE GIMNASIO?
   Lo ha planteado él. Se responde con la pregunta que de verdad decide, que
   no es "qué gimnasio" sino "a qué hora".
   ========================================================================== */
const DECISION = {
  intro:'Llevas tres meses sin ir y el motivo que das es que está lleno. Antes de mirar otros gimnasios hay una pregunta que decide todo lo demás.',
  pregunta:'¿A qué hora irías al gimnasio nuevo?',
  clave:'Si la respuesta es "sobre las siete u ocho de la tarde", cambiar de gimnasio no te va a servir de nada: a esa hora, en septiembre, en Barcelona, están llenos todos. Los baratos más, pero todos. Estarías pagando una matrícula nueva por el mismo problema.',
  opciones:[
    {
      titulo:'Quedarte y cambiar la hora',
      coste:'0 €',
      icono:'i-reloj',
      aFavor:[
        'Ya lo tienes pagado y ya sabes dónde está cada máquina.',
        'A partir de las 22:00 entre semana se vacía, y esa hora no la has probado en serio.',
        'Abre de 6:00 a 1:00 todos los días del año: horario hay de sobra.'
      ],
      enContra:[
        'Depende de que el viernes salgas puntual de trabajar.',
        'Si el problema no era la hora sino que no te apetece ir, esto no lo arregla.'
      ],
      queHacer:'Pruébalo tres veces a última hora. No tres semanas de plan completo: tres días sueltos.'
    },
    {
      titulo:'Cambiarte de gimnasio',
      coste:'Suele ser 40-60 €/mes en uno menos lleno, más matrícula',
      icono:'i-tienda',
      aFavor:[
        'Los centros deportivos municipales y los gimnasios pequeños de barrio tienen bastante menos gente que las cadenas baratas.',
        'Empezar en un sitio nuevo, sin la sensación de "aquí ya he fallado", a veces sí ayuda.'
      ],
      enContra:[
        'Cuesta el doble o más, y llevas tres meses pagando uno que no pisas: el dinero no es el primer problema a resolver.',
        'A las 19:00 de un martes de septiembre está lleno cualquier gimnasio de Barcelona.',
        'Es tu patrón conocido: empezar de cero muy fuerte y a las tres semanas cero otra vez.'
      ],
      queHacer:'Si lo haces, ve a verlo ANTES de pagar nada, y ve a la hora exacta a la que irías de verdad. No a las 11 de la mañana de un sábado.'
    },
    {
      titulo:'Dejarlo y montarlo fuera del gimnasio',
      coste:'0 €/mes, o unos 60-80 € una vez en material',
      icono:'i-casa',
      aFavor:[
        'Se acaba de golpe el problema de la gente, del horario y del desplazamiento.',
        'Andar es lo que más te ha durado en la vida: 106 de tus 140 entrenos.',
        'Con un par de mancuernas ajustables y una banda elástica cubres la fuerza de sobra para tu nivel.',
        'Te ahorras 27 € al mes que ahora mismo estás tirando.'
      ],
      enContra:[
        'En casa hay que decidir empezar. En el gimnasio, el hecho de haber ido ya decide por ti.',
        'Sin máquinas guiadas tienes que fijarte más en cómo haces el movimiento, y eso es justo lo que te da apuro.'
      ],
      queHacer:'Si te decides por aquí, da de baja el gimnasio el mismo día. Dejarlo "por si acaso" es pagar por la culpa.'
    }
  ],
  recomendacion:'Antes de pagar nada, prueba dos cosas que son gratis: ir un día entre semana a partir de las 22:00, y mirar en Google Maps la gráfica de horas punta del gimnasio al que irías, a la hora a la que irías de verdad. Si a tu hora ninguno está mejor, el problema no era el gimnasio — y entonces la buena es la tercera, no la segunda: darte de baja y montarlo en casa, con andar como base. Cambiar de gimnasio es la única de las tres que cuesta dinero y no responde nada.'
};


/* ==========================================================================
   7. FRASES
   Se enseña una al azar en la hoja de rescate. Nada de "tú puedes".
   ========================================================================== */
const FRASES_AGOBIO = [
  'Tres meses sin ir no son tres meses de fracaso. Son tres meses de dato: esa hora no funciona.',
  'La sesión buena no es la mejor. Es la que haces.',
  'Nadie del gimnasio se acuerda de ti al salir. Ni de ti ni de nadie.',
  'Volver no tiene ceremonia. Es solo el día siguiente al que no fuiste.',
  'Si está lleno, no es culpa tuya ni es una prueba de carácter. Es un problema de aforo.',
  'Lo que rompe el plan no es el día que faltas: es el "ya da igual" de después.',
  'Seis minutos cuentan. Cero no.'
];
