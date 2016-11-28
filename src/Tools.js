import React from 'react';

class Tools extends React.Component {
    constructor(props) {
        //console.log(props);
      super(props);
      this.state = {inicioVentana: 0};

      // This binding is necessary to make `this` work in the callback
      this.handleChangeSlider = this.handleChangeSlider.bind(this);
    }
    handleChangeSlider(event) {
        //console.log("handleChangeSlider", event.target.value);
        this.setState({ inicioVentana: -Math.floor(this.props.anchoGuia * event.target.value / 100) });
        this.props.ponerInicio(this.state.inicioVentana);
    };


    render() {
        return (
            <div id="tools">
                <input type="range" min="0" max="100" name="slider" id="slider" onInput={this.handleChangeSlider}/>
            </div>
        )
    }
};

export default Tools;
