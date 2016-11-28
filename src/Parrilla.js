import React from 'react';
import Canales from './Canales';
import EventosParrilla from './EventosParrilla';

class Parrilla extends React.Component {
    render() {
        return (
            <div id="parrilla">
                <Canales canales={this.props.canales}/>
                <EventosParrilla canales={this.props.canales} inicioParrilla={this.props.inicioParrilla}/>
            </div>
        )
    }
};

export default Parrilla;
