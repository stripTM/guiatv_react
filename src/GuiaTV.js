import React from 'react';
import Tools from './Tools';
import Parrilla from './Parrilla';

class GuiaTV extends React.Component {
    constructor() {
        super();

        this.irA = this.irA.bind(this);

        /* Generar información de los canales con sus eventos */
        const ANCHO_GUIA = 10000;
        let canales = [];
        for(var c=1; c<5; c++) {
            var eventos = [],
                duracion;
            for(
                var inicio = 0;
                inicio <= ANCHO_GUIA;

                ) {
                duracion = Math.floor(Math.random() * 1000) + 1;
                inicio = (inicio > ANCHO_GUIA) ? ANCHO_GUIA : inicio;
                eventos.push(
                    {
                        id: c+'-'+inicio,
                        nombre: 'Evento ' + inicio,
                        inicio: inicio,
                        duracion: duracion
                    }
                );
                inicio += duracion;
            }
            canales.push(
                {
                    id: c,
                    nombre: 'Canal ' + c,
                    eventos: eventos
                }
            );
        }
        this.state = {
            canales: canales,
            inicioParrilla: 0
        };
    }

    irA(inicio) {
        //console.log("Poner inicio", inicio);
        this.setState({ inicioParrilla: inicio});
    }

    render() {
        return (
            <section id="guia">
                <Tools anchoGuia="10000"
                    inicio={ this.state.inicioParrilla }
                    irA={ this.irA } />
                <Parrilla
                    canales={ this.state.canales }
                    inicioParrilla={ this.state.inicioParrilla }
                    handleNewPosition={ this.irA } />
            </section>
        )
    }
};

export default GuiaTV;
