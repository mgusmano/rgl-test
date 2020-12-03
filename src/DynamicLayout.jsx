import React, { useState, useEffect } from "react";
//import { hot } from 'react-hot-loader/root';


import ChildWindow from './ChildWindow'
import ContainerWindow from './ContainerWindow'

//import ReactGridLayout from './react-grid-layout';

import { Responsive, WidthProvider } from 'react-grid-layout';
//import WidthProvider from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);




//const Responsive2 = WidthProvider(Responsive);
//import ResponsiveReactGridLayout from './react-grid-layout';

const DynamicLayout = (props) => {
  const [layouts, SetLayouts] = useState(null)
  const [compacttype, SetCompactType] = useState(null)

  useEffect(() => {
    SetLayouts(props.layout)
    SetCompactType('horizontal');
  }, [props.layout]);

  const generateDOM = () => {
    return layouts.lg.map((l, i) => {
    //return layout.map((l, i) => {
      return (
        <div key={i} className={l.static ? "static" : ""}>       
          {l.widget.type === 'child' 
            ? ( <ChildWindow>{i}-{l.widget.type}</ChildWindow> )
            : ( <ContainerWindow layout={l.children}>{i}-{l.widget.type}</ContainerWindow> )
          }       
        </div>
      )
    });
  }

  //cols={{ lg: 12, md: 4, sm: 2, xs: 4, xxs: 2 }}
 // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}

  return (
    <>      
      {layouts !== null &&
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight={30}
          cols={{ lg: 12, md: 6, sm: 6, xs: 6, xxs: 2 }}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          margin={[5, 5]}
          resizeHandles={['s','se','e']}

          isBounded={true}
          layouts={layouts}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          // useCSSTransforms={this.state.mounted}
          compactType={compacttype}
          // preventCollision={!this.state.compactType}
        >
          {generateDOM()}
        </ResponsiveReactGridLayout>
      }    
    </>
  )
}
//export default hot(DynamicLayout)
export default DynamicLayout
