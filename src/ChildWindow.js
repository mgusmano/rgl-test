import React, { useEffect  } from 'react'
//const Ext = window['Ext']

const ChildWindow = (props) => {

   
    useEffect(() => {

    }, []);
  
    var l = props.layoutitem
    return (
        <div 
          style={{
            fontSize:'11px',
            width:'100%',
            height:'100%',
            border:'0px solid green',
            overflow:'auto'
          }} 
        >
          {props.item}-{props.layoutitem.widget.type}<br/>
          x:{l.x},y:{l.y}<br/> w:{l.w}, h:{l.h}
        </div> 
    )
}

export default ChildWindow