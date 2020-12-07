import React, { useEffect  } from 'react'
import ChildWindow from '../ChildWindow'
import ContainerWindow from '../ContainerWindow'


const SimpleWrapper = (props) => {

   
    useEffect(() => {
        //console.log('props',JSON.stringify(props.layoutitem))

    }, []);
  
    return (
        <div 
      
        style={{
            xbackground: 'rgb(5,55,75)',
            background: 'lightgray',
            color: 'black',
            border: '1px solid black',
            height:'100%',
            width:'100%',
            borderRadius: '5px 5px 5px 5px',
            fontSize: '18px',
            padding: '0',
            xheight: '20px',
            display:'flex',
            justifyContent:'space-between',
        }}
           

        >
        {props.layoutitem.widget.type === 'child' 
            ? ( <ChildWindow item={props.item} layoutitem={props.layoutitem}></ChildWindow> )
            : ( <ContainerWindow item={props.item} layoutitem={props.layoutitem} layouts={props.layoutitem.children}>{props.item}-{props.layoutitem.widget.type}</ContainerWindow> )
        }  
        </div> 
    )
}

export default SimpleWrapper


// {props.layoutitem.widget.type === 'child' 
// ? ( <ChildWindow layoutitem={props.layoutitem}>{props.item}-{props.layoutitem.widget.type}</ChildWindow> )
// : ( <ContainerWindow layouts={props.layoutitem.children}>{props.item}-{props.layoutitem.widget.type}</ContainerWindow> )
// }