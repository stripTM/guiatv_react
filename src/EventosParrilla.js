import React from 'react';
import EventosCanal from './EventosCanal';

class EventosParrilla extends React.Component {
    render() {
        const eventosCanal = this.props.canales.map(
            canal => <EventosCanal key={canal.id} eventos={canal.eventos}/>
        );

        return (
            <div id="eventos" style={{left: this.props.inicioParrilla +"px"}}>
                <ul>{eventosCanal}</ul>
            </div>
        )
    }
};

export default EventosParrilla;
