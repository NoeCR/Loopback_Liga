'use strict';

module.exports = function(Equipo) {

    // Si en el conexto hay una instancia y tiene la propiedad updates le asignamos 
    // la fecha del servidor en el momento que se cree
    Equipo.observe('before save', (ctx, next) => {
        if(ctx.instance){
            ctx.instance.updated = new Date();
        }
        next();
    });
    // Definimos la funcion remota para añadir un jugador al array del equipo
    Equipo.jugadores = function(idEquipo, idJugador, cb){
        Equipo.findById(idEquipo, (err, equipo) => {
            if(equipo.jugadores.some(jugador => jugador == idJugador)){
                cb('El jugador ya esta en el equipo', null);
            }else{
                equipo.jugadores.push(idJugador);
                equipo.updateAttribute('jugadores', equipo.jugadores, (err, equipo) => {
                    cb(null, equipo);
                });
            }            
        });
        //cb('Operación no realizada', null);
    };
    // BUsca los jugadores de un equipo y los devuelve
    Equipo.listarJugadores = function(idEquipo, cb){
        Equipo.findById(idEquipo, (err, equipo) => {
            Equipo.app.models.Jugador.find({
                where:{
                    id:{
                        inq: equipo.jugadores
                    }
                }            
            }, (err, jugadores) => {
                cb(null, jugadores);
            } 
            );
        });
    };
    // Definición de metodo: descripcion, parametros de entrada aceptados, retorno.
    Equipo.remoteMethod('jugadores', {
        desciption: 'Agregar jugadores al equipo',
        accepts: [
            { 
                arg: 'idEquipo',
                type: 'string'
            },
            {
                arg: 'idJugador',
                type: 'string'
            }
        ],
        returns: {
            arg: 'equipo',
            type: 'object'
        }
    });
    // Definición de metodo: descripcion, parametros de entrada aceptados, 
    // retorno y verbo de la petición
    Equipo.remoteMethod('listarJugadores', {
        description: 'Mostrar jugadores del equipo',
        http: {
            path: '/:idEquipo/jugadores',
            verb: 'get'
        },
        accepts: {
            arg: 'idEquipo',
            type: 'string'
        },
        returns: {
            arg: 'jugadores',
            type: 'object'
        }
    });
};
