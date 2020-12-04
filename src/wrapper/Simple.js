import React, { useEffect  } from 'react'

const Simple = (props) => {
   
    useEffect(() => {
        console.log('simple')

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
  hi
        </div> 
    )
}

export default Simple