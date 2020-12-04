import React, { useEffect  } from 'react'
import ChildWindow from '../ChildWindow'
import ContainerWindow from '../ContainerWindow'


const SimpleWrapper = (props) => {

   
    useEffect(() => {
        console.log('props',JSON.stringify(props.layoutitem))

    }, []);
  
    return (
        <div 
      
        style={{
            background: 'rgb(5,55,75)',
            color: 'white',
            border: '1px solid lightgray',
            height:'100%',
            borderRadius: '5px 5px 5px 5px',
            fontSize: '18px',
            padding: '0',
            xheight: '20px',
            display:'flex',
            justifyContent:'space-between',
        }}
           

        >
        {props.layoutitem.widget.type === 'child' 
            ? ( <ChildWindow layoutitem={props.layoutitem}>{props.item}-{props.layoutitem.widget.type}</ChildWindow> )
            : ( <ContainerWindow layouts={props.layoutitem.children}>{props.item}-{props.layoutitem.widget.type}</ContainerWindow> )
        }  
        </div> 
    )
}

export default SimpleWrapper