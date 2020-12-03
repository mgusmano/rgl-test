import React, { useEffect  } from 'react'
//const Ext = window['Ext']

const ChildWindow = (props) => {

   
    useEffect(() => {

    }, []);
  
    return (
        <div 
          style={{
            width:'100%',
            height:'100%',
            border:'0px solid green',
            overflow:'auto'
          }} 
        >
            {props.children}
        </div> 
    )
}

export default ChildWindow