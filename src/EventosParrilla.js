import React from 'react';
import EventosCanal from './EventosCanal';

class EventosParrilla extends React.Component {
    constructor(props) {
        //console.log(props);
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.onDragStart = this.onDragStart.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragStart(event) {
        console.log("onDragStart", event);
    }
    onDragEnd(event) {
        console.log("onDragEnd", event);
    }

    render() {
        const eventosCanal = this.props.canales.map(
            canal => <EventosCanal key={canal.id} eventos={canal.eventos}/>
        );

        return (
            <div id="eventos"
                draggable  ={true}
                onDragStart={this.onDragStart}
                onDragEnd  ={this.onDragEnd}
                style={{transform: "translate(" + this.props.inicioParrilla + "px, 0)"}}>
                <ul>{eventosCanal}</ul>
            </div>
        )
    }
};

export default EventosParrilla;
