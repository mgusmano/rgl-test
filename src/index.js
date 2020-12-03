import React from 'react';
import ReactDOM from 'react-dom';
//import "style-loader!css-loader!./styles/styles.css";
//import "style-loader!css-loader!./styles/example-styles.css";
import "./styles/styles.css";
import "./styles/example-styles.css";
import App from './App';

var layout = {"lg":[
  {
    "i":"0","x":0,"y":0,"w":4,"h":8,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
  {
    "i":"1","x":4,"y":0,"w":4,"h":8,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
  {
    "i":"2","x":8,"y":0,"w":4,"h":8,
    "widget":{"type":"container"},"absoluteLayout":false,
    children: {lg: [
      {
        "i":"0","x":0,"y":0,"w":2,"h":7,
        "widget":{"type":"child"},"absoluteLayout":false
      },
      {
        "i":"1","x":2,"y":0,"w":2,"h":7,
        "widget":{"type":"child"}, "absoluteLayout":false
      },
      {
        "i":"2","x":4,"y":0,"w":2,"h":7,
        "widget":{"type":"child"}, "absoluteLayout":false
      },
    ]}
  },
  // {
  //   "i":"3","x":0,"y":0,"w":4,"h":6,
  //   "widget":{"type":"child"},"absoluteLayout":true,
  // },
]}

var layout2 = [
  {
    "i":"0","x":0,"y":0,"w":4,"h":8,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
  {
    "i":"1","x":4,"y":0,"w":4,"h":8,
    "widget":{"type":"child"},"absoluteLayout":false,
  },
]

const gridProps = window.gridProps || {};
gridProps.layout = layout
console.log(JSON.stringify(gridProps.layout))

ReactDOM.render(
    <App layout={gridProps.layout}/>,
  document.getElementById('root')
);
