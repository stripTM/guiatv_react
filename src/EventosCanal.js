import React from 'react';
import Eventos from './Eventos';

class EventosCanal extends React.Component {
    render() {
        const eventos = this.props.eventos.map(
            eventos => <Eventos key={eventos.id} nombre={eventos.nombre} inicio={eventos.inicio} duracion={eventos.duracion}/>
        );
        return (
            <li className="canal">
                <ul>{eventos}</ul>
            </li>
        )
    }
};

export default EventosCanal;
