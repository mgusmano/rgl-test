import React, { useEffect, useState } from 'react'
import DynamicLayout from './DynamicLayout.jsx';
//const Ext = window['Ext']

const ContainerWindow = (props) => {
  const [layouts, SetLayouts] = useState(null)

  useEffect(() => {
    console.log(props.layouts)
    SetLayouts(props.layouts)
  }, [props.layouts]);
  
    return (   
       <>   
      {layouts !== null &&

        <div 
          style={{
            width:'100%',
            height:'100%',
            border:'0px solid blue',
            overflow:'auto'
          }} 
        >
            <DynamicLayout level={2} layouts={layouts}/>
        </div> 
      }
          </>   
    )
}

export default ContainerWindow