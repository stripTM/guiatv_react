import React from 'react';

class Eventos extends React.Component {
    render() {
        var descripcion = "(" + this.props.inicio + "," + this.props.duracion + ")";
        var contenido = "";
        var classEvento = "evento";
        if (this.props.duracion > 100){
            contenido = <span>{descripcion}</span>
        }
        else {
            contenido = <span title={descripcion}>+</span>
            classEvento += " miniEvento";
        }

        return (
            <li className={classEvento} style={{transform: "translate(" + this.props.inicio + "px, 0)", width: this.props.duracion + 'px'}}>{contenido ? contenido : '*'}</li>
        )
    }
};

export default Eventos;
