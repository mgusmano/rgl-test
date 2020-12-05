/*eslint eqeqeq: "off"*/
import React, { useEffect, useState, useCallback } from "react";



//import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


//









//import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useGlobalState } from './globalstate/GlobalStateProvider'
import DynamicLayout from './DynamicLayout';
import AppPure from './AppPure';

import Absolute from './layouts/Absolute'
import Container from './layouts/Container'
import Single from './layouts/Single'
import Breakpoints from './layouts/Breakpoints'
import Two from './layouts/Two'

import Simple from './wrapper/Simple'


import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const App = (props) => {
  const { height, width } = useWindowDimensions();
  const [items, SetItems] = useState(null)
  const [currentbreakpoint, setCurrentBreakpoint] = useState(null)
  const [{toolkitTitle}] = useGlobalState();
  //const history = useHistory();
  //const location = useLocation();

  //const [currentBreakpoint, SetCurrentBreakpoint] = useState(null)
  //const [compactType, SetCompactType] = useState(null)
  //const [mounted, SetMounted] = useState(false)

  const [width1val, setWidth1Val] = useState(null)
  const [width2val, setWidth2Val] = useState(null)
  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        setWidth1Val(e.detail.payload)
        break;
      case 'width2':
        setWidth2Val(e.detail.payload)
        break;
      default:
        break;
    }
  }, [])

  const [cols, SetCols] = useState(null)
  const [breakpoints, SetBreakpoints] = useState(null)
  const [layouts, SetLayouts] = useState(null)

  // const generateDOM = (layout) => {
  //   //console.log('generateDOM',currentbreakpoint)
  //   return layout.map((l, i) => {
  //     return (
  //       <div key={i} data-grid={l} style={{border:"1px solid blue"}}>       
  //         {/* <SimpleWrapper key={i} layoutitem={l} item={i}> </SimpleWrapper> */}
  //         {props.width1val}
  //       </div>
  //     )
  //   });
  // }

  useEffect(() => {
    //SetCols({ lg: 12, md: 4, sm: 6, xs: 6, xxs: 1 })
    //SetBreakpoints({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })

    //SetCols({ lg: 12, md: 6 })
    //SetBreakpoints({ lg: 1200, md: 996 })


    //console.log(props.layouts)
    SetLayouts(props.layouts)


    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
  }, [onMessage]);


  const onClick = (who) => {
    SetLayouts(null)

    requestAnimationFrame(function() {
      switch (who) {
        case 'Absolute':
          SetLayouts(Absolute())
          break
        case 'Container':
          SetLayouts(Container())
          break
          case 'Single':
            SetLayouts(Single())
            break
          case 'Breakpoints':
            SetLayouts(Breakpoints())
            break
          case 'Two':
            SetLayouts(Two())
            //SetItems(generateDOM(Two()['lg']))

            break
          case 'Clear':
            SetLayouts(null)
            break
        default:
          console.log('other')
      }
    })

  }

 

  const breakpointChange = (breakpoint) => {
    console.log(breakpoint)
    setCurrentBreakpoint(breakpoint)
  };

  return (
      <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

        <div style={{height:'50px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
          {/* titlebar {toolkitTitle} */}
          <div style={{fontSize:'24px',margin:'10px'}}>Dynamic Layout Use Case Examples:  window width: {width} ~ height: {height}</div>
          <div>
      
    </div>

          {/* <div>
            Current Breakpoint: {currentBreakpoint} (
            {props.cols[currentBreakpoint]} columns)}
          </div>
          <div>
            Compaction type:{" "}
            {_.capitalize(compactType) || "No Compaction"}
          </div>
          <button onClick={onNewLayout}>Generate New Layout</button>
          <button onClick={onCompactTypeChange}>
            Change Compaction Type
          </button> */}
        </div>

        <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
          <div style={{width:'300px',background:'black',color:'white',border:'0px solid red'}}>

            <div style={{display:'flex',flexDirection:'column',margin:'10px'}}>
              toolkit<br/><br/>  
              <div>Dashboard Width:{width1val} </div>
              <div>Container Width: {width2val}</div>
              <div>Current Breakpoint: {currentbreakpoint}</div>

              <br/>  
              <button onClick={() => onClick('Container')}>Container Component</button>
              <button onClick={() => onClick('Absolute')}>Absolute Widget</button>
              <button onClick={() => onClick('Single')}>Single</button>
              <button onClick={() => onClick('Breakpoints')}>Breakpoints</button>
              <button onClick={() => onClick('Two')}>Two</button>
              <button onClick={() => onClick('Clear')}>Clear</button>
              <div style={{overflow:'auto',height:'500px',marginTop:'10px'}}>
              <pre>{JSON.stringify(layouts,null,2)}</pre>
              </div>
             
            </div>
          </div>
          <div style={{flex:'1',display:'flex',border:'5px solid green'}}>
          {layouts !== null &&  
          
          <AppPure layouts={layouts} width={width-300} currentbreakpoint={currentbreakpoint} breakpointChange={breakpointChange}></AppPure>
          
//          <DynamicLayout width1val={width1val} level={1} layouts={layouts} cols={cols} breakpoints={breakpoints} breakpointChange={breakpointChange}/>

            // <ResponsiveReactGridLayout
            //   // {...this.props}
            //   className="layout"
            //   rowHeight={30}
            //   //onLayoutChange={function() {}}
            //   cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            //   isBounded={true}
            //   layouts={layouts}
            //   //onBreakpointChange={onBreakpointChange}
            //   //onLayoutChange={onLayoutChange}
            //   //onDrop={onDrop}
            //   // WidthProvider option
            //   measureBeforeMount={false}
            //   // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
            //   // and set `measureBeforeMount={true}`.
            //   // useCSSTransforms={this.state.mounted}
            //   compactType={null}
            //   // preventCollision={!this.state.compactType}
            // >
            //          {items}
            // </ResponsiveReactGridLayout>
          }
          </div>
        </div>

      </div>

  )
}
//export default hot(App)
export default App
