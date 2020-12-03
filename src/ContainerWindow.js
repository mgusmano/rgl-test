import React, { useEffect, useState } from 'react'
import DynamicLayout from './DynamicLayout.jsx';
const Ext = window['Ext']

const ContainerWindow = (props) => {
  const [layouts, SetLayouts] = useState(null)

  useEffect(() => {
    SetLayouts(props.layout)
  }, []);
  
    return (
        <div 
          style={{
            width:'100%',
            height:'100%',
            border:'1px solid blue',
            overflow:'auto'
          }} 
        >
            <DynamicLayout layout={props.layout}/>
        </div> 
    )
}

export default ContainerWindow