import React, { useRef, useEffect, useState } from 'react'
import ReactResizeDetector from 'react-resize-detector';
const Ext = window['Ext']

const ChildWindow = (props) => {
  const contentRef = useRef()
  const [extitem, SetExtItem] = useState(null)
   
  useEffect(() => {
    console.log('useEffect')
    var w = {
      xtype: 'panel',
      xtitle: 'child',
      layout: 'fit',
      items: [
        { xtype: 'button', text:'button'}
      ]
    }
    w.width = '100%'
    w.height = '100%'
    console.log(w)
    var theItem = Ext.create(w)
    theItem.render(contentRef.current)
    SetExtItem(theItem)
  }, []);

  var l = props.layoutitem
  
  return (
    //  <>
    //  {extitem != null &&

    <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={(width, height)=> {
      //console.log(theItem)
      extitem.updateLayout();
    }}>


      <div 
        ref={contentRef}
        style={{
          fontSize:'11px',
          width:'100%',
          height:'100%',
          border:'0px solid green',
          overflow:'auto'
        }} 
      >
        {/* {props.item}-{props.layoutitem.widget.type}<br/>
        x:{l.x},y:{l.y}<br/> w:{l.w}, h:{l.h} */}
      </div> 

      </ReactResizeDetector>
//  }
//  </>
  )
}

export default ChildWindow