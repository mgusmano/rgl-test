/*eslint eqeqeq: "off"*/
import React, { useEffect, useState, useCallback } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width,height};
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

import AppPure from './AppPure';

const App = (props) => {
  const { height, width } = useWindowDimensions();
  const [currentbreakpoint, setCurrentBreakpoint] = useState(null)
  const [currentcols, setCurrentCols] = useState(null)
  const [currentbreakpoints, setCurrentBreakpoints] = useState(null)
  const [currentnumcols, setCurrentNumcols] = useState(null)
  const [layouts, SetLayouts] = useState(null)
  const [gridlines, SetGridlines] = useState(false)

  const [width1val, setWidth1Val] = useState(null)
  const [width2val, setWidth2Val] = useState(null)
  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        setWidth1Val(e.detail.payload)
        window['width1val'] = e.detail.payload
        break;
      case 'width2':
        setWidth2Val(e.detail.payload)
        break;
      default:
        break;
    }
  }, [])

  useEffect(() => {
    SetLayouts(props.layouts)

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
  }, [onMessage]);

  const onClick = (e) => {
    import('./layouts/'+e.target.innerText)
    .then(obj => {
      var t = obj.default()
      SetLayouts(null)

      requestAnimationFrame(function() {
        console.log(e.target.innerText,': layouts',t)
        SetLayouts(t)
      })
    })
    .catch(err => {console.log(err)})
  }

  const onGridLines = (e) => {
    console.log('onGridLines')
    if (window['processsvg'] !== true) {
      window['processsvg'] = true
    }
    else {
      window['processsvg'] = false
    }
    console.log( window['processsvg'])
    SetGridlines(window['processsvg'])

    SetLayouts(null)

    requestAnimationFrame(function() {
      SetLayouts(layouts)
    })


  }

  const breakpointChange = (parms) => {
    window['currentbreakpoint'] = parms.breakpoint
    setCurrentBreakpoint(parms.breakpoint)
    setCurrentNumcols(parms.numcols)
  };

  const parmsChange = (parms) => {
    window['breakpoints'] = parms.breakpoints
    window['cols'] = parms.cols

    //console.log('parms.cols',parms.cols)
    //console.log('parms.breakpoints',parms.breakpoints)
    //console.log('parms.numcols',parms.numcols)

    setCurrentCols(parms.cols)
    setCurrentBreakpoints(parms.breakpoints)
    setCurrentNumcols(parms.numcols)
  };

  return (
    <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

      <div style={{height:'50px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
        <div style={{fontSize:'24px',margin:'10px'}}>Dynamic Layout Use Case Examples</div>
      </div>

      <div style={{flex:'1',display:'flex',flexDirection:'row'}}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'300px',background:'black',color:'white',border:'0px solid red'}}>
 
          <div style={{display:'flex',flexDirection:'column',margin:'10px'}}>
            toolkit<br/><br/>   
            <button onClick={onClick}>Container</button>
            <button onClick={onClick}>Absolute</button>
            <button onClick={onClick}>One</button>
            <button onClick={onClick}>Two</button>
            <button onClick={onClick}>Breakpoints</button>   

            <br/><br/>  
            <button onClick={onGridLines}>Grid Lines {gridlines.toString()}</button>  

            {/* <button onClick={SetLayouts(null)}>Clear</button> */}  
          </div>

 

        </div>

        <div style={{flex:'1',display:'flex',border:'0px solid green'}}>
          {layouts !== null &&          
          <AppPure 
            layouts={layouts}
            width={width-300-300}
            currentbreakpoint={currentbreakpoint}
            breakpointChange={breakpointChange}
            parmsChange={parmsChange}
          ></AppPure>
          }
        </div>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'300px',background:'black',color:'white',border:'0px solid red',xoverflow:'auto'}}>
       
          <div style={{flex:'1',xdisplay:'flex',xflexDirection:'column',overflow:'auto'}}> 
              {layouts !== null &&  
                <pre style={{height:'400px'}}>{JSON.stringify(layouts,null,2)}</pre>
              }
          </div>

          <div style={{flex:'1',display:'flex',flexDirection:'column',marginTop:'60px'}}> 
            <div style={{fontSize:'11px'}}>{JSON.stringify(currentcols)}</div>
            <div style={{fontSize:'11px'}}>{JSON.stringify(currentbreakpoints)}</div>
            <br/>
            <div>Window Width:{width} </div>
            <div>Window Height: {height}</div>
            <div>Dashboard Width:{width1val} </div>
            <div>Container Width: {width2val}</div>
            <div>Current Breakpoint: {currentbreakpoint}</div>
            <div>Current numcols: {currentnumcols}</div>

          </div>
 
        </div>

      </div>

    </div>
  )
}
//export default hot(App)
export default App
