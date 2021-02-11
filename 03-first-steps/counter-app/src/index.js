import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';

const divRoot = document.querySelector("#app");
ReactDOM.render(<CounterApp value={10} />, divRoot);

// import PrimeraApp from './components/PrimeraApp';
// ReactDOM.render(<PrimeraApp name="William" subtitle="Aquí va el subtitulo" />, divRoot);
