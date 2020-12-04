import React, { useState, useEffect } from "react";
//import { hot } from 'react-hot-loader/root';

import SimpleWrapper from './wrapper/SimpleWrapper'

import ChildWindow from './ChildWindow'
import ContainerWindow from './ContainerWindow'


import { Responsive, WidthProvider } from './react-grid-layout';
//import WidthProvider from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);




//const Responsive2 = WidthProvider(Responsive);
//import ResponsiveReactGridLayout from './react-grid-layout';

const DynamicLayout2 = (props) => {
 // const [layouts, SetLayouts] = useState(null)
  const [compacttype, SetCompactType] = useState(null)

  useEffect(() => {
    console.log('useEffect',props.layouts)
    //SetLayouts(props.layouts)

    SetCompactType('horizontal');
  }, [props.layout]);

  const generateDOM = (layouts) => {
    return layouts.lg.map((l, i) => {
    //return layout.map((l, i) => {
      return (
        <div key={i} data-grid={l}>       
          {l.widget.type === 'child' 
            ? ( <ChildWindow>{i}-{l.widget.type}</ChildWindow> )
            : ( <ContainerWindow layouts={l.children}>{i}-{l.widget.type}</ContainerWindow> )
          }       
        </div>
      )
    });
  }

  const generateDOM2 = () => {
    console.log('generateDOM')
    console.log(props.layouts)
    return props.layouts.lg.map((l, i) => {
    //return layout.map((l, i) => {
      return (
        <div key={i} data-grid={l}>       
          <SimpleWrapper key={i} layoutitem={l} item={i}> </SimpleWrapper>
        </div>
      )
    });
  }

  // const generateDOM3 = () => {
  //   console.log(layouts)
  //   return layouts.lg.map((l, i) => {
  //   //return layout.map((l, i) => {
  //     console.log(l)
  //     return (
  //       <SimpleWrapper key={i} layoutitem={l} item={i}>       
     
  //       </SimpleWrapper>
  //     )
  //   });
  // }

  //cols={{ lg: 12, md: 4, sm: 2, xs: 4, xxs: 2 }}
 // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}

  return (
    <>      
      {props.layouts !== null &&
        <ResponsiveReactGridLayout
          level={props.level}
          className="layout"
          rowHeight={30}
          cols={{ lg: 12, md: 6, sm: 6, xs: 6, xxs: 2 }}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 380, xxs: 0}}
          margin={[5, 5]}
          resizeHandles={['s','se','e']}
          //layout={props.layouts}

          isBounded={true}
          //layouts={layouts}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          // useCSSTransforms={this.state.mounted}
          compactType={compacttype}
          // preventCollision={!this.state.compactType}
        >
          {generateDOM(props.layouts)}
        </ResponsiveReactGridLayout>
      }    
    </>
  )
}
//export default hot(DynamicLayout)
export default DynamicLayout2
