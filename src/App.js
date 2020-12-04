/*eslint eqeqeq: "off"*/
import React, { useEffect, useState, useCallback } from "react";
//import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useGlobalState } from './globalstate/GlobalStateProvider'
import DynamicLayout from './DynamicLayout';

const App = (props) => {
  const [{toolkitTitle}] = useGlobalState();
  //const history = useHistory();
  //const location = useLocation();

  //const [currentBreakpoint, SetCurrentBreakpoint] = useState(null)
  //const [compactType, SetCompactType] = useState(null)
  //const [mounted, SetMounted] = useState(false)
  const [layout, SetLayout] = useState(null)

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
    SetLayout(props.layout)




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

  const onContainerComponent = () => {
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
    SetLayout(layout)
  }

  const onAbsoluteWidget = () => {
    var layout = {"lg":[
      {
        "i":"0","x":0,"y":0,"w":2,"h":2,l:1,
        "widget":{"type":"child"},"absoluteLayout":true,
      },
      {
        "i":"1","x":3,"y":0,"w":2,"h":8,l:1,
        "widget":{"type":"child"},"absoluteLayout":false,
      },
    ]}
    SetLayout(layout)
  }

  // const onDrop = (elemParams) => {
  //   alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  // };


  return (

      <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

        <div style={{height:'50px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
          titlebar {toolkitTitle}

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

            <div style={{display:'flex',flexDirection:'column',margin:'10px'}}>
              toolkit<br/><br/>  

              <div>Dashboard Width:{width1val} </div>
              <div>Container Width: {width2val}</div>
              <br/>  
              <div>use cases will be here</div>  
              <br/>  
              <button onClick={onContainerComponent}>Container Component</button>
              <button onClick={onAbsoluteWidget}>Absolute Widget</button>
            </div>
          </div>
          <div style={{flex:'1',border:'0px solid red'}}>
          {props.layouts !== null &&
         
           <DynamicLayout level={1} layout={layout}/>

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
