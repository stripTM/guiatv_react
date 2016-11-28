import React from 'react';

class Eventos extends React.Component {
    render() {
        return (
            <li className="evento" style={{left: this.props.inicio + 'px', width: this.props.duracion + 'px'}}>{this.props.nombre}</li>
        )
    }
};

export default Eventos;
