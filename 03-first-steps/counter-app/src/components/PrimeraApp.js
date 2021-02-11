import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import '../index.css';

const PrimeraApp = ({ name:nombre='Sin nombre', subtitle }) => {
  
  return (
    <Fragment>
      <div className="content">
        <h1>Hola {nombre}</h1>
        <span> {subtitle} </span>
      </div>
    </Fragment>
  );
}

PrimeraApp.propTypes = {
  name: PropTypes.string.isRequired,
}

PrimeraApp.propTypes = {
  subtitle: PropTypes.string,
}

export default PrimeraApp;
