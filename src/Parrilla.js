import React, { Component, PropTypes } from 'react';
import Canales from './Canales';
import EventosParrilla from './EventosParrilla';

class Parrilla extends Component {
    render() {
        return (
            <div id="parrilla">
                <Canales canales={this.props.canales}/>
                <EventosParrilla
                    canales={this.props.canales}
                    inicioParrilla={this.props.inicioParrilla}
                    handleNewPosition={ this.props.handleNewPosition } />
            </div>
        )
    }
};

Parrilla.propTypes = {
  canales: PropTypes.array.isRequired,
  inicioParrilla: PropTypes.number.isRequired,
  irA: PropTypes.func.isRequired
}

export default Parrilla;
