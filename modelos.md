equipo
    nombre: texto
    logo: texto
    estado: verdadero/falso
    jugadores: arreglo de jugadores
    
jugador
    nombre: texto
    edad: numero
    apodo: texto
    foto: texto
    posición: texto
    dorsal: numero
   *equipo*
    estado: verdadero/falso

*jugadores_equipo* nueva colección para la relación de jugadores-equipos

juego
    local: idEquipo
    visitante: idEquipo
    fecha: fecha
    anotacionesLocal: texto
    anotacionesVisitante: texto
    jugadorDestacado: texto
    estadio: idEstadio

estadio
    nombre: texto
    dirección: texto
    estado: verdadero/falso
    foto: texto