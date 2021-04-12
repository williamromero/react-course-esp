import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './components/useEffect/SimpleForm';
import FormWCHook from './components/useEffect/FormWCHook';
import CounterApp from './components/useState/CounterApp';
import CounterWCHook from './components/useState/CounterWCHook';
import './css/index.css'
import HooksApp from './HooksApp';

ReactDOM.render(
  <FormWCHook />,
  document.getElementById('root')
);
