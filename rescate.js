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
    truco:'Va bien especialmente ahora, con gimnasio nuevo: ve a la hora a la que irías de verdad, mira cómo está y dónde queda cada máquina. Eso es un dato, no una sesión perdida.'
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
   Desde el 24-11-2026 va a Anytime Fitness: sobre todo al de Les Corts y,
   cuando está en Mataró, al de al lado del Parc Central. Los dos abren
   24 horas, todos los días, con la llave de socio.
   Las franjas salen del «Medidor de ocupación» de la app de Anytime para
   Les Corts (capturas del 24-11-2026): personas de media por hora. Están en
   GIMNASIOS[0].personas; si cambian, cambiar las dos cosas.
   No puede ir a mediodía en días de teletrabajo.
   ========================================================================== */
/* `dias` va en índices de lunes(0) a domingo(6), y `desde`/`hasta` en minutos
   desde medianoche. Está así para que la pestaña Hoy pueda decir a qué hora
   está lleno AHORA MISMO sin tener que interpretar el texto de `cuando`.
   Dentro de un mismo día las franjas no se pisan. */
const FRANJAS = [
  { cuando:'Lunes a jueves, 7:00 - 9:00', corto:'Antes de trabajar hay sitio', nivel:'bien', dias:[0,1,2,3], desde:420, hasta:540, quePasa:'Unas 10-16 personas. Ojo con las 6:00: hay un pico de madrugadores de casi 20.', veredicto:'Un buen extra si un día te despiertas pronto. Con tu sueño irregular, no la base del plan.' },
  { cuando:'Lunes a jueves, 16:00 - 20:00', corto:'Por la tarde, lo más lleno', nivel:'lleno', dias:[0,1,2,3], desde:960, hasta:1200, quePasa:'La hora más llena de la semana: unas 22-24 personas de lunes a miércoles, unas 17-18 el jueves.', veredicto:'Si vas a esta hora, lleva abierto el plan de «está lleno». No es cabezonería tuya: es la hora.' },
  { cuando:'Lunes a jueves, 20:00 - 21:30', corto:'Va bajando', nivel:'bien', dias:[0,1,2,3], desde:1200, hasta:1290, quePasa:'Baja de unas 18 personas a unas 10.', veredicto:'Si sales tarde de trabajar, es mejor esperar a esta hora que ir a las 19:00.' },
  { cuando:'Lunes a jueves, 21:30 - 1:00', corto:'Por la noche, casi vacío', nivel:'vacio', dias:[0,1,2,3], desde:1290, hasta:1500, quePasa:'Menos de 10 personas, y a partir de las 22:00 unas 5.', veredicto:'El hueco vacío de entre semana. Pega con tu horario; solo vigila que no te robe sueño.' },
  { cuando:'Viernes, 16:00 - 20:00', corto:'El viernes por la tarde, hay sitio', nivel:'bien', dias:[4], desde:960, hasta:1200, quePasa:'Unas 12-16 personas: bastante menos que de lunes a miércoles.', veredicto:'La mejor tarde de entre semana para ir al salir de trabajar.' },
  { cuando:'Viernes, 20:00 - 1:00', corto:'El viernes por la noche, vacío', nivel:'vacio', dias:[4], desde:1200, hasta:1500, quePasa:'Menos de 10 personas, y a partir de las 21:00 unas 3-5.', veredicto:'Casi para ti solo, si el viernes te da igual entrenar tarde.' },
  { cuando:'Sábado o domingo, 9:00 - 12:00', corto:'La mañana es lo más lleno del finde', nivel:'bien', dias:[5,6], desde:540, hasta:720, quePasa:'Unas 11-14 personas. Es la hora punta del fin de semana, y aun así hay menos gente que un martes a las 19:00.', veredicto:'Se puede ir sin problema, pero la tarde está más vacía.' },
  { cuando:'Sábado o domingo, 13:00 - 1:00', corto:'Por la tarde, casi vacío', nivel:'vacio', dias:[5,6], desde:780, hasta:1500, quePasa:'Unas 5-10 personas toda la tarde, y menos por la noche.', veredicto:'El mejor rato de la semana entera. Y si estás en Mataró, también es cuando más fácil te pilla ir allí.' },
  { cuando:'Cualquier día, 1:00 - 5:00', corto:'De madrugada, vacío', nivel:'vacio', dias:[0,1,2,3,4,5,6], desde:60, hasta:300, quePasa:'Abre con tu llave las 24 horas. A estas horas hay 0-2 personas.', veredicto:'Está ahí si un día te desvelas, pero no lo conviertas en plan: el sueño manda más que el entreno.' }
];

/* ==========================================================================
   5 bis. TUS DOS GIMNASIOS
   Direcciones de las fichas oficiales de Anytime Fitness (24-11-2026).
   `personas`: media de personas por hora (0-23), de lunes a domingo, leída a
   ojo de las barras del «Medidor de ocupación» de la app de Anytime. Cada día
   tiene un dato exacto (18-19 h) y el resto se saca de la altura de las barras,
   así que es orientativo (±2 personas). El martes no salía su media: se usa la
   forma del miércoles, que es casi igual.
   Mataró aún sin datos: con uno solo, el botón "¿A cuál voy ahora?" no sale.
   ========================================================================== */
const GIMNASIOS = [
  {
    id:'lescorts',
    nombre:'Les Corts',
    direccion:'Carrer del Montnegre, 8-10',
    detalle:'El tuyo, el de casi siempre.',
    personas:[
      /* lun */ [1,0,0,1,5,11,19,14,14,22,22,17,17,22,17,22,23,24,24,24,19,12,8,4],
      /* mar */ [2,1,1,2,5,12,20,16,13,20,19,13,17,21,17,19,22,22,22,22,16,10,6,3],
      /* mié */ [2,1,1,2,5,12,20,16,13,20,19,13,17,21,17,19,22,22,22,22,16,10,6,3],
      /* jue */ [2,1,1,2,4,9,14,10,12,16,16,11,15,15,13,15,16,17,18,18,12,9,5,2],
      /* vie */ [2,1,1,2,4,7,11,11,11,15,13,13,12,11,10,11,13,16,12,13,8,5,3,2],
      /* sáb */ [2,1,1,1,2,3,7,10,11,13,14,11,8,7,7,8,9,9,6,7,3,2,2,2],
      /* dom */ [1,1,1,1,2,3,6,8,10,11,11,11,8,5,5,7,7,10,10,8,7,2,2,2]
    ]
  },
  {
    id:'mataro',
    nombre:'Mataró',
    direccion:'Camí de la Geganta, 7',
    detalle:'El de al lado del Parc Central, para cuando estés en Mataró.',
    personas:null
  }
];


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
