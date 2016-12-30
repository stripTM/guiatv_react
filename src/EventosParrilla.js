import React, { Component, PropTypes } from 'react';
import EventosCanal from './EventosCanal';
//import clickDrag from 'react-clickdrag';

class EventosParrilla extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastPositionX: 0,
            lastPositionY: 0,
            isMouseDown: false,
            isMoving: false,
            mouseDownPositionX: 0,
            mouseDownPositionY: 0,
            moveDeltaX: 0,
            moveDeltaY: 0
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(e) {
        // only left mouse button
        if (e.button === 0) {
            var pt = e.changedTouches && e.changedTouches[0] || e;

            this.setMousePosition(pt.clientX, pt.clientY);

            //onDragStart(e);
        }
    }
    handleMouseMove(e) {
        if (this.state.isMouseDown) {
            var pt = e.changedTouches && e.changedTouches[0] || e;

            this.setState({
                isMoving: true,
                moveDeltaX: pt.clientX - this.state.mouseDownPositionX,
                moveDeltaY: pt.clientY - this.state.mouseDownPositionY
            });

            //onDragMove(e);
            this.onDragMove(e);
        }
    }
    handleMouseUp(e) {
        if (this.state.isMouseDown) {
            this.setState({
                isMouseDown: false,
                isMoving: false
            });

            //onDragStop(e);
            this.onDragMove(e);
        }
    }

    setMousePosition(x, y) {
        this.setState({
            isMouseDown: true,
            isMoving: false,
            mouseDownPositionX: x,
            mouseDownPositionY: y,
            moveDeltaX: 0,
            moveDeltaY: 0
        });
    }

    onDragMove(e) {
        if(this.state.isMoving) {
            this.setState({
                currentX: this.state.lastPositionX + this.state.moveDeltaX,
                currentY: this.state.lastPositionY + this.state.moveDeltaY
            });
            this.props.irA(this.state.currentX || this.props.inicioParrilla);
        }
        else {
            this.setState({
                lastPositionX: this.props.inicioParrilla,
                lastPositionY: 0
                //lastPositionX: this.state.mouseDownPositionX,
                //lastPositionY: this.state.mouseDownPositionY
            });
        }
    }

    render() {
        const eventosCanal = this.props.canales.map(
            canal => <EventosCanal key={canal.id} eventos={canal.eventos}/>
        );
        var translation = 'translate('+this.props.inicioParrilla+'px, 0px)';

        return (
            <div id="eventos"
                draggable={true}
                style={{transform: translation}}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseUp}
                onTouchStart={this.handleMouseDown}
                onTouchMove={this.handleMouseMove}
                onTouchEnd={this.handleMouseUp}
                >
                <ul>{eventosCanal}</ul>
            </div>
        )
    }
};

EventosParrilla.propTypes = {
  canales: PropTypes.array.isRequired,
  inicioParrilla: PropTypes.number.isRequired,
  irA: PropTypes.func.isRequired
}

//export default clickDrag(EventosParrilla, {touch: true});

export default EventosParrilla;
