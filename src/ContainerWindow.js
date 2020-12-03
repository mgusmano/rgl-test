import React, { useEffect, useState } from 'react'
import DynamicLayout from './DynamicLayout.jsx';
//const Ext = window['Ext']

const ContainerWindow = (props) => {
  const [layouts, SetLayouts] = useState(null)

  useEffect(() => {
    SetLayouts(props.layout)
  }, [props.layout]);
  
    return (
        <div 
          style={{
            width:'100%',
            height:'100%',
            border:'0px solid blue',
            overflow:'auto'
          }} 
        >
            <DynamicLayout layout={layouts}/>
        </div> 
    )
}

export default ContainerWindow