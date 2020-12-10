import React, { useEffect, useState  } from 'react'
import ChildWindow from '../ChildWindow'
import ContainerWindow from '../ContainerWindow'

const SdmWrapper = (props) => {
    const [draggablehandle, SetDraggableHandle] = useState(null)

    useEffect(() => {
        SetDraggableHandle('layout-item-dragger' + props.level)
    }, []);

    return (
        <div  
            style={{
                xbackground: 'rgb(5,55,75)',
                xbackground: 'lightgray',
                color: 'black',
                border: '1px solid black',
                height:'100%',
                width:'100%',
                xborderRadius: '5px 5px 5px 5px',
                fontSize: '18px',
                padding: '0',
                xheight: '20px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
            }}
        >
            {/* <div 
                style={{
                    background: 'rgb(5,55,75)',
                    color: 'white',
                    borderBottom: '0px solid lightgray',
                    borderRadius: '5px 5px 0 0',
                    fontSize: '18px',
                    padding: '10px 0 10px 5px',
                    height: '40px',
                    display:'flex',
                    justifyContent:'space-between',
                }}>
                <div className={draggablehandle} style={{cursor:'move',flex:'1',fontSize: '11px',fontWeight:'bold',paddingTop:'3px',marginLeft:'5px'}}>title</div>
            </div>   */}

            {props.layoutitem.widget.type === 'container' 
                ? (  <ContainerWindow layouts={props.layoutitem.children}></ContainerWindow> )
                : (  <ChildWindow item={props.item} layoutitem={props.layoutitem}></ChildWindow> )
            }  
        </div> 
    )
}

export default SdmWrapper


// {props.layoutitem.widget.type === 'child' 
// ? ( <ChildWindow item={props.item} layoutitem={props.layoutitem}></ChildWindow> )
// : ( <ContainerWindow item={props.item} layoutitem={props.layoutitem} layouts={props.layoutitem.children}>{props.item}-{props.layoutitem.widget.type}</ContainerWindow> )
// } 

// {props.layoutitem.widget.type === 'child' 
// ? ( <ChildWindow layoutitem={props.layoutitem}>{props.item}-{props.layoutitem.widget.type}</ChildWindow> )
// : ( <ContainerWindow layouts={props.layoutitem.children}>{props.item}-{props.layoutitem.widget.type}</ContainerWindow> )
// }