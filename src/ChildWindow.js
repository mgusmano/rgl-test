import React, { useRef, useState, useEffect } from 'react'
import ReactResizeDetector from 'react-resize-detector';
const Ext = window['Ext']

const ChildWindow = (props) => {
  const contentRef = useRef()
  const [extitem, SetExtItem] = useState(null)
  const [pixels, setPixels] = useState('0')
  
   
  useEffect(() => {
    console.log('useEffect')
    console.log(props.layoutitem)
    var w = {
      xtype: 'panel',
      xtitle: 'child',
      layout: 'fit',
      items: [
        { xtype: 'button', text:'button '+props.layoutitem.i}
      ]
    }
    w.width = '100%'
    w.height = '100%'
    console.log(w)
    var theItem = Ext.create(w)
    theItem.render(contentRef.current)
    SetExtItem(theItem)
    if (props.mode == 'edit') {
      console.log('SetPixels')
      setPixels('2px solid red')
    }
  }, []);

  const { x, y, w, h } = props.layoutitem.l
  //var l = props.layoutitem
  return (
    <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={(width, height)=> {
      extitem.updateLayout();
    }}>
      <div 
        style={{
          fontSize:'11px',
          width:'100%',
          height:'100%',
          overflow:'auto'
        }} 
      >
        {/* <div className="theParent" ref={contentRef} style={{ width:'90%', height:'90%',border:'2px solid green'}}></div> */}
       
        <div className="theParent" ref={contentRef} style={{ boxSizing:'border-box',width:'100%', height:'100%',border:pixels}}></div>
       
        {/* {props.item}-{props.layoutitem.widget.type}<br/>
        x:{x},y:{y}<br/> w:{w}, h:{h} */}
      </div> 
    </ReactResizeDetector>
  )
}

export default ChildWindow