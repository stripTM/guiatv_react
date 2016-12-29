import React from 'react';
import Eventos from './Eventos';
import shallowCompare from 'react-addons-shallow-compare'

class EventosCanal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
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
