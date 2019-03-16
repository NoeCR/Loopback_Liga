'use strict';

module.exports = function(Jugador) {

    // Metodo que se ejecuta Cuando hacen un findById sobre la clase jugador 'antes', 
    // y establece una nueva propiedad dinamica al modelo
    Jugador.afterRemote('findById', (ctx, jugador, next) => {
        if(jugador.edad >= 25){
            jugador.tipo = 'Veterano';
        }else{
            jugador.tipo = 'Novato';
        }
        next();
    });
};
