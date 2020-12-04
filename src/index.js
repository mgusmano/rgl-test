import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './globalstate/GlobalStateProvider';
import "./styles/styles.css";
import "./styles/example-styles.css";
import App from './App';

var layout = {"lg":[
  {
    "i":"0","x":0,"y":0,"w":4,"h":8,l:1,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
  {
    "i":"1","x":4,"y":0,"w":4,"h":8,l:1,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
  {
    "i":"2","x":8,"y":0,"w":4,"h":8,l:1,
    "widget":{"type":"container"},"absoluteLayout":false,
    children: {lg: [
      {
        "i":"0","x":0,"y":0,"w":2,"h":7,l:2,
        "widget":{"type":"child"},"absoluteLayout":false
      },
      {
        "i":"1","x":2,"y":0,"w":2,"h":7,l:2,
        "widget":{"type":"child"}, "absoluteLayout":false
      },
      {
        "i":"2","x":4,"y":0,"w":2,"h":7,l:2,
        "widget":{"type":"child"}, "absoluteLayout":false
      },
    ]}
  },
  // {
  //   "i":"3","x":0,"y":0,"w":4,"h":6,
  //   "widget":{"type":"child"},"absoluteLayout":true,
  // },
]}

// var layout2 = [
//   {
//     "i":"0","x":0,"y":0,"w":4,"h":8,
//     "widget":{"type":"child"},"absoluteLayout":false,
//   },
//   {
//     "i":"1","x":4,"y":0,"w":4,"h":8,
//     "widget":{"type":"child"},"absoluteLayout":false,
//   },
// ]

ReactDOM.render(
  <GlobalStateProvider>
    <App layout={layout}/>
  </GlobalStateProvider>, 
  document.getElementById("root")
) 