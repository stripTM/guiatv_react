import React from 'react';
import Tools from './Tools';
import Parrilla from './Parrilla';

class GuiaTV extends React.Component {
    constructor() {
        super();

        this.ponerInicio = this.ponerInicio.bind(this);

        /* Generar información de los canales con sus eventos */
        let canales = [];
        for(var c=1; c<50; c++) {
            var eventos = [],
                duracion;
            for(
                var inicio = 0;
                inicio <= 10000;
                duracion = Math.floor(Math.random() * 1000) + 1, inicio += duracion
                ) {
                inicio = (inicio > 10000) ? 10000 : inicio;
                eventos.push(
                    {
                        id: c+'-'+inicio,
                        nombre: 'Evento ' + inicio,
                        inicio: inicio,
                        duracion: Math.floor(Math.random() * 1000) + 1
                    }
                );
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

    ponerInicio(inicio) {
        //console.log("Poner inicio", inicio);
        this.setState({ inicioParrilla: inicio});
    }

    render() {
        return (
            <section id="guia">
                <Tools anchoGuia="10000" ponerInicio={this.ponerInicio}/>
                <Parrilla canales={this.state.canales} inicioParrilla={this.state.inicioParrilla}/>
            </section>
        )
    }a
};

export default GuiaTV;
