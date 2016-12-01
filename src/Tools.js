import React from 'react';

class Tools extends React.Component {
    constructor(props) {
        //console.log(props);
      super(props);
      console.log(props);
      this.state = {inicioVentana: props.inicio};

      // This binding is necessary to make `this` work in the callback
      this.handleChangeSlider = this.handleChangeSlider.bind(this);
    }


    handleChangeSlider(event) {
        var inicioVentana = -Math.floor(this.props.anchoGuia * event.target.value / 100);
        this.setState({ inicioVentana: inicioVentana });
        this.props.irA(inicioVentana);
    };


    render() {
        var sliderValue = -Math.floor( this.props.inicio / this.props.anchoGuia  * 100)
        return (
            <div id="tools">
                <input type="range" min="0" max="100" name="slider" id="slider" value={sliderValue} onInput={this.handleChangeSlider}/>[{this.props.inicio} , {sliderValue}]
            </div>
        )
    }
};

export default Tools;
