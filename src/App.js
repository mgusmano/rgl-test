
import React, { useEffect, useState, useCallback } from "react";
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useGlobalState } from './globalstate/GlobalStateProvider'
import DynamicLayout from './DynamicLayout';

const App = (props) => {
  const [{toolkitTitle, width}, dispatch] = useGlobalState();
  //const history = useHistory();
  //const location = useLocation();

  //const [currentBreakpoint, SetCurrentBreakpoint] = useState(null)
  //const [compactType, SetCompactType] = useState(null)
  //const [mounted, SetMounted] = useState(false)
  //const [layouts, SetLayouts] = useState(null)

  const [width1val, setWidth1Val] = useState(null)
  const [width2val, setWidth2Val] = useState(null)
  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        console.log('got it')
        setWidth1Val(e.detail.payload)
        break;
      case 'width2':
        console.log('got it')
        setWidth2Val(e.detail.payload)
        break;
      default:
        break;
    }
  }, [])


  useEffect(() => {
    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };

  }, []);


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

  // const onNewLayout = () => {
  //  // SetLayouts({ lg: generateLayout() })
  //   // this.setState({
  //   //   layouts: { lg: generateLayout() }
  //   // });
  // }

  // const onDrop = (elemParams) => {
  //   alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  // };


  return (

      <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

        <div style={{height:'50px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
          titlebar {toolkitTitle} {width1val} {width2val}
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
          <div style={{width:'200px',background:'black',color:'white',border:'0px solid red'}}>
            toolkit<br/><br/>         
          use cases will be here<br/><br/>
          1 - container component<br/><br/>
          </div>
          <div style={{flex:'1',border:'0px solid red'}}>
          {props.layouts !== null &&
         
           <DynamicLayout level={1} layout={props.layout}/>

            // <ResponsiveReactGridLayout
            //   // {...this.props}
            //   className="layout"
            //   rowHeight={30}
            //   onLayoutChange={function() {}}
            //   cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            //   isBounded={true}
            //   layouts={layouts}
            //   onBreakpointChange={onBreakpointChange}
            //   onLayoutChange={onLayoutChange}
            //   onDrop={onDrop}
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
