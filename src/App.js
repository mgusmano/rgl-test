/*eslint eqeqeq: "off"*/
import React, { useEffect, useState, useCallback } from "react";
//import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useGlobalState } from './globalstate/GlobalStateProvider'
import DynamicLayout from './DynamicLayout';

import Absolute from './layouts/Absolute'
import Container from './layouts/Container'
import Single from './layouts/Single'

import Simple from './wrapper/Simple'

//import { Responsive, WidthProvider } from './react-grid-layout';
//import WidthProvider from 'react-grid-layout';
//const ResponsiveReactGridLayout = WidthProvider(Responsive);

const App = (props) => {
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

  const [layouts, SetLayouts] = useState(null)
  useEffect(() => {
    console.log(props.layouts)
    SetLayouts(props.layouts)

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
  }, [onMessage]);


  // const onBreakpointChange = (breakpoint) => {
  //   SetCurrentBreakpoint(breakpoint)
  //     // this.setState({
  //     //   currentBreakpoint: breakpoint
  //     // });
  // }

  // const onCompactTypeChange = () => {
  //   // const { compactType: oldCompactType } = this.state;
  //   var oldCompactType = compactType;

  //   const newCompactType =
  //     oldCompactType === "horizontal"
  //       ? "vertical"
  //       : oldCompactType === "vertical"
  //       ? null
  //       : "horizontal";
  //   //tis.setState({ compactType });
  //   SetCompactType(newCompactType)
  // }

  // const onLayoutChange = (layout, layouts) => {
  //   //this.props.onLayoutChange(layout, layouts);
  // }

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
          case 'Clear':
            SetLayouts(null)
            break
        default:
          console.log('other')
      }

    })

  }

  //

  const generateDOM = () => {
    console.log('generateDOM')
    console.log(layouts)
    return layouts.lg.map((l, i) => {
      return (
        <div 
          key={i}
          data-grid={layouts.lg[i]}

          style={{
            background: 'rgb(5,55,75)',
            color: 'white',
            border: '1px solid lightgray',
            height:'100%',
            borderRadius: '5px 5px 5px 5px',
            fontSize: '18px',
            padding: '0',
            xheight: '20px',
            display:'flex',
            justifyContent:'space-between',
        }}



        >       
hi
        </div>
      )
    });
  }

  // const onDrop = (elemParams) => {
  //   alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  // };

  return (
      <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

        <div style={{height:'50px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
          {/* titlebar {toolkitTitle} */}
          <div style={{fontSize:'24px',margin:'10px'}}>Dynamic Layout Use Case Examples</div>

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

              <br/>  
              <button onClick={() => onClick('Container')}>Container Component</button>
              <button onClick={() => onClick('Absolute')}>Absolute Widget</button>
              <button onClick={() => onClick('Single')}>Single</button>
              <button onClick={() => onClick('Clear')}>Clear</button>
              <div style={{overflow:'auto',height:'500px',marginTop:'10px'}}>
              <pre>{JSON.stringify(layouts,null,2)}</pre>
              </div>
             
            </div>
          </div>
          <div style={{flex:'1',display:'flex',border:'0px solid green'}}>
          {layouts !== null &&    
           <DynamicLayout level={1} layouts={layouts}/>

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
            //   {generateDOM()}
            // </ResponsiveReactGridLayout>
          }
          </div>
        </div>

      </div>

  )
}
//export default hot(App)
export default App
