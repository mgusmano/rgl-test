import React, { useState, useEffect } from "react";
//import { hot } from 'react-hot-loader/root';

import SimpleWrapper from './wrapper/SimpleWrapper'

import ChildWindow from './ChildWindow'
import ContainerWindow from './ContainerWindow'


import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);




//const Responsive2 = WidthProvider(Responsive);
//import ResponsiveReactGridLayout from './react-grid-layout';

const DynamicLayoutx = (props) => {
  const [currentbreakpoint, setCurrentBreakpoint] = useState('lg')
  const [previousbreakpoint, setPreviousBreakpoint] = useState(null)

  const [layouts, SetLayouts] = useState(null)
  const [compacttype, SetCompactType] = useState(null)
  const [items, SetItems] = useState(null)

  useEffect(() => {
    console.log('useEffect',props.layouts)
    console.log('cols',props.cols)
    console.log('breakpoints',props.breakpoints)
    //SetLayouts(props.layouts)

    //SetCompactType('horizontal');
    SetLayouts(props.layouts);
    SetCompactType('vertical');


    SetItems(generateDOM(props.layouts['lg']))

  }, [props.layouts]);

  // const generateDOM2 = (layouts) => {
  //   return layouts.lg.map((l, i) => {
  //   //return layout.map((l, i) => {
  //     return (
  //       <div key={i} data-grid={l}>       
  //         {l.widget.type === 'child' 
  //           ? ( <ChildWindow>{i}-{l.widget.type}</ChildWindow> )
  //           : ( <ContainerWindow layouts={l.children}>{i}-{l.widget.type}</ContainerWindow> )
  //         }       
  //       </div>
  //     )
  //   });
  // }


  const generateDOM = (layout) => {
    //console.log('generateDOM',currentbreakpoint)
    return layout.map((l, i) => {
      return (
        <div key={i} data-grid={l} style={{border:"1px solid blue"}}>       
          {/* <SimpleWrapper key={i} layoutitem={l} item={i}> </SimpleWrapper> */}
          {props.width1val}
        </div>
      )
    });
  }


  const generateDOM8 = () => {


    console.log('generateDOM',currentbreakpoint)
    //console.log(props.layouts)
    return props.layouts[currentbreakpoint].map((l, i) => {
    //return layout.map((l, i) => {
      console.log(l)
      return (
        <div key={i} data-grid={l}>       
          <SimpleWrapper key={i} layoutitem={l} item={i}> </SimpleWrapper>
        </div>
      )
    });
  }

  const generateDOM5 = () => {
    console.log('generateDOM')
    console.log(props.layouts)
    return props.layouts[currentbreakpoint].map((l, i) => {
    //return layout.map((l, i) => {
      return (
        <div key={i} data-grid={l}>       
hi
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

 const onBreakpointChange = (breakpoint) => {
  console.log('onBreakpointChange',props.level,breakpoint)

  if (breakpoint == previousbreakpoint) return

  setCurrentBreakpoint(breakpoint)
  props.breakpointChange(breakpoint)
  setPreviousBreakpoint(breakpoint)

  SetItems(null)

  requestAnimationFrame(function() {
    SetItems(generateDOM(layouts[breakpoint]))

  })


  }

  const onLayoutChange = (layout, layouts) => {
    console.log('onLayoutChange',props.level,layout,layouts)
  };

  return (
    <div style={{display:'flex',flex:'1',overflow:'none'}}>  {props.width1val}  
      {items !== null &&
        <ResponsiveReactGridLayout
          onBreakpointChange={onBreakpointChange}
          onLayoutChange={onLayoutChange}
          level={props.level}
          className="layout"
          rowHeight={30}
          cols={props.cols}
          breakpoints={props.breakpoints}
          margin={[5, 5]}
          resizeHandles={['s','se','e']}
          //layout={props.layouts}
          layouts={layouts}

          isBounded={false}

          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          // useCSSTransforms={this.state.mounted}
          compactType={compacttype}
          // preventCollision={!this.state.compactType}
        >
          {items}
        </ResponsiveReactGridLayout>
      }    
    </div>
  )
}

//{generateDOM(props.layouts)}
//export default hot(DynamicLayout)
export default DynamicLayoutx
