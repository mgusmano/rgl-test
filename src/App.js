// @flow
import React, { useEffect } from "react";
//import { hot } from 'react-hot-loader/root';
//import _ from "lodash";
//import _ from "lodash";
//import Responsive from './react-grid-layout/build/ResponsiveReactGridLayout';
//import Responsive from 'react-grid-layout';
//import WidthProvider from 'react-grid-layout';
//import {CompactType, Layout} from 'react-grid-layout';
import DynamicLayout from './DynamicLayout';
//import ChildWindow from './ChildWindow'
//const ResponsiveReactGridLayout = WidthProvider(Responsive);
//import ResponsiveReactGridLayout from './react-grid-layout';

const App = (props) => {
  //const [currentBreakpoint, SetCurrentBreakpoint] = useState(null)
  //const [compactType, SetCompactType] = useState(null)
  //const [mounted, SetMounted] = useState(false)
  //const [layouts, SetLayouts] = useState(null)

  useEffect(() => {

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
          titlebar
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
         
           <DynamicLayout layout={props.layout}/>

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
