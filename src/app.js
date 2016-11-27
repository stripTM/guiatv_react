import React from 'react';
import ReactDom from 'react-dom';

const HolaMundo = (props) => (
    <h1>¡React funciona!</h1>
)

ReactDom.render(<HolaMundo />, document.getElementById('app'));
