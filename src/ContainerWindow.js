import React, { useEffect, useState } from 'react'
//import DynamicLayout from './DynamicLayout.jsx';
//const Ext = window['Ext']
import useWindowDimensions from './WindowDimension'
import AppPure from './DynamicLayout'

const ContainerWindow = (props) => {
  const { height, width } = useWindowDimensions();
  //const [layouts, SetLayouts] = useState(null)
  const [totallayout, SetTotalLayout] = useState(null)

  useEffect(() => {
    //console.log(props.layouts)
    //SetLayouts(props.layouts)

   //var cols = { lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
   //var breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }


    var cols = { lg: 12,sm: 1 }
    var breakpoints = { lg: 500, sm: 0 }


    SetTotalLayout({
      cols,
      breakpoints,
      layouts: props.layouts,
      width: width,
      level: 2
    })



  }, []);
  

  const parmsChange = (parms) => {
    console.log('parmsChange',parms)
  };

  return (   
    <>   
    {totallayout !== null &&
      <div 
        style={{
          width:'100%',
          height:'100%',
          border:'0px solid blue',
          overflow:'auto'
        }} 
      >
        <AppPure 
          totallayout={totallayout}
          parmsChange={parmsChange}
        ></AppPure>
      </div> 
    }
    </>   
  )
}

export default ContainerWindow

