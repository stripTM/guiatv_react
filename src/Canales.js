import React from 'react';

class Canales extends React.Component {
    render() {
        //let canalesData = this.props.canales;
        const canales = this.props.canales.map(
            canal => <Canal key={canal.id} id={canal.id} nombre={canal.nombre}/>
        );

        return (
            <div id="canales">
                <ul>
                    {canales}
                </ul>
            </div>
        )
    }
};

export default Canales;
class Canal extends React.Component {
    render() {
        return (
            <li>{this.props.nombre}</li>
        );
    }
}
