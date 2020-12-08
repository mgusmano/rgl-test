/*eslint eqeqeq: "off"*/
import React, { useEffect, useState, useCallback } from "react";
import AppPure from './AppPure';
import useWindowDimensions from './WindowDimension'

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {width,height};
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   return windowDimensions;
// }

const App = (props) => {
  const { height, width } = useWindowDimensions();
  const [headerheight, SetHeaderHeight] = useState(null)
  const [leftwidth, SetLeftWidth] = useState(null)
  const [rightwidth, SetRightWidth] = useState(null)

  const [totallayout, SetTotalLayout] = useState(null)
  const [currentbreakpoint, setCurrentBreakpoint] = useState(null)
  const [currentcols, setCurrentCols] = useState(null)
  const [currentbreakpoints, setCurrentBreakpoints] = useState(null)
  const [currentnumcols, setCurrentNumcols] = useState(null)
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
    SetHeaderHeight(50)
    SetLeftWidth(300)
    SetRightWidth(300)

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
  }, [onMessage]);

  const onClick = (e) => {
    import('./layouts/'+e.target.innerText)
    .then(obj => {
      SetTotalLayout(null)

      var layouts = {lg:[{ x:0,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} }]}
      try {layouts = obj.layouts()}catch(e) {}

      var cols = { lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
      try {cols = obj.cols()}catch(e) {console.log('no cols')}

      var breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
      try {breakpoints = obj.breakpoints()}catch(e) {}

      requestAnimationFrame(function() {
        SetTotalLayout({
          cols,
          breakpoints,
          layouts,
          width: width - leftwidth - rightwidth,
          level: 1
        })
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
    //console.log( window['processsvg'])
    SetGridlines(window['processsvg'])

    SetTotalLayout(null)

    if (totallayout !== null) {
      requestAnimationFrame(function() {
        SetTotalLayout({
          cols: totallayout.cols,
          breakpoints: totallayout.breakpoints,
          layouts: totallayout.layouts,
          width: width - leftwidth - rightwidth,
          level: 1
        })
      })
    }
  }

  const parmsChange = (parms) => {
    setCurrentCols(parms.cols)
    setCurrentBreakpoints(parms.breakpoints)
    setCurrentNumcols(parms.numcols)
    setCurrentBreakpoint(parms.currentbreakpoint)
  };

  return (
    <div style={{flex: 1,display:'flex',flexDirection:'column',border:'0px solid green',xwidth:'100%',xheight:'100%',margin:'0'}}>

      <div style={{height:headerheight+'px',background:'rgb(230, 230, 230)',display:'flex',flexDirection:'row'}}>
        <div style={{fontSize:'24px',margin:'10px'}}>Dynamic Layout Use Case Examples</div>
      </div>

      <div style={{flex:'1',display:'flex',flexDirection:'row'}}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:leftwidth+'px',background:'black',color:'white',border:'0px solid red'}}>
 
          <div style={{display:'flex',flexDirection:'column',margin:'10px'}}>
            toolkit<br/><br/>   
            <button onClick={onClick}>Container</button>
            <button onClick={onClick}>Absolute</button>
            <button onClick={onClick}>One</button>
            <button onClick={onClick}>Two</button>
            <button onClick={onClick}>Breakpoints</button>
            <button onClick={onClick}>Children</button>

            <br/><br/>  
            <button onClick={onGridLines}>Grid Lines {gridlines.toString()}</button>  

            {/* <button onClick={SetLayouts(null)}>Clear</button> */}  
          </div>

        </div>

        <div style={{flex:'1',display:'flex',border:'0px solid green',overflow:'auto',width:'100%'}}>
        <div style={{flex:'1',xdisplay:'flex',border:'0px solid green',xminWidth:'800px'}}>
          {totallayout !== null &&          
          <AppPure 
            totallayout={totallayout}
            parmsChange={parmsChange}
          ></AppPure>
          }
        </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:rightwidth+'px',background:'black',color:'white',border:'0px solid red',xoverflow:'auto'}}>
       
          <div style={{flex:'1',xdisplay:'flex',xflexDirection:'column',overflow:'auto'}}> 
            {totallayout !== null &&  
              <pre style={{height:'400px'}}>{JSON.stringify(totallayout.layouts,null,2)}</pre>
            }
          </div>

          <div style={{flex:'1',display:'flex',flexDirection:'column',marginTop:'60px'}}> 
            <div style={{fontSize:'11px'}}>{JSON.stringify(currentcols)}</div>
            <div style={{fontSize:'11px'}}>{JSON.stringify(currentbreakpoints)}</div>
            <br/>
            <div>Window Width:{width} </div>
            <div>Window Height: {height}</div>
            <br/>
            <div>Center Width:{width-leftwidth-rightwidth} </div>
            <div>Center Height:{height-headerheight} </div>
            <br/>
            <div>Dashboard Width:{width1val} </div>
            <br/>
            <div>Current Breakpoint: {currentbreakpoint}</div>
            <div>Current numcols: {currentnumcols}</div>
            <br/>
            <div>Container Width: {width2val}</div>
          </div>
 
        </div>

      </div>

    </div>
  )
}
//export default hot(App)
export default App
