import React, { Component, PropTypes } from 'react';
import EventosCanal from './EventosCanal';
import clickDrag from 'react-clickdrag';

class EventosParrilla extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastPositionX: 0,
            lastPositionY: 0,
            currentX: 0,
            currentY: 0
        };
    }

    componentWillReceiveProps(nextProps) {

        //this.props.irA(this.props.inicioParrilla + nextProps.dataDrag.moveDeltaX);
        if(nextProps.dataDrag.isMoving) {
            //console.log("dataDrag", nextProps.dataDrag);

            //this.props.irA(this.props.inicioParrilla + nextProps.dataDrag.moveDeltaX);

            this.setState({
                currentX: this.state.lastPositionX + nextProps.dataDrag.moveDeltaX,
                currentY: this.state.lastPositionY + nextProps.dataDrag.moveDeltaY
            });
            console.log("dataDrag", this.state.currentX);
        }
        else {
            console.log("dataDrag sin mover");
            this.setState({
                currentX: this.props.inicioParrilla,
                lastPositionX: this.props.inicioParrilla,
                lastPositionY: this.state.currentY
            });
        }
    }

    render() {
        const eventosCanal = this.props.canales.map(
            canal => <EventosCanal key={canal.id} eventos={canal.eventos}/>
        );
        var translation = 'translate('+this.state.currentX+'px, 0px)';

        return (
            <div id="eventos"
                draggable  ={true}
                style={{transform: translation}}>
                <ul>{eventosCanal}</ul>
            </div>
        )
    }
};

EventosParrilla.propTypes = {
  canales: PropTypes.array.isRequired,
  inicioParrilla: PropTypes.number.isRequired,
  handleNewPosition: PropTypes.func.isRequired
}

export default clickDrag(EventosParrilla, {touch: true});

//export default EventosParrilla;
