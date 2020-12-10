import React, { useEffect, useState, useCallback } from "react";
import AddWidgetDialog from './AddWidgetDialog'
import Button from '@material-ui/core/Button';

const ReactTools = (props) => {
    const [addWidgetOpen, setAddWidgetOpen] = useState(false);
    const [mode, setMode] = useState('view');

    const handleAddWidgetOpen = () => {
        setAddWidgetOpen(true);
      };
    
      const handleAddWidgetClose = (values) => {
        //console.log(values)
        setMode(values.mode)
        props.onReactToolsChange({mode: values.mode})
        setAddWidgetOpen(false);
      }
    
    

    return (
        <div style={{height:'50px',background:'green',color:'white'}}>
            <Button onClick={handleAddWidgetOpen} style={{color:'white',background:'rgb(5,55,75)',marginTop:'5px'}} >Sample Dialog</Button>
            <AddWidgetDialog open={addWidgetOpen} onClose={handleAddWidgetClose} mode={mode} />
        </div>
    )


}
export default ReactTools