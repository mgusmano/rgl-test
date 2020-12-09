import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './globalstate/GlobalStateProvider';
import "./styles/styles.css";
import "./styles/example-styles.css";
import App from './App';

ReactDOM.render(
  <GlobalStateProvider>
    <App/>
  </GlobalStateProvider>, 
  document.getElementById("root")
) 