import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import './AddWidgetDialog.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';


//import * as Widgets from '../widgets'
//import WidgetUtil from '../Util/WidgetUtil'

// var widgetArray = []
// for (const [key, value] of Object.entries(Widgets)) {
//   var functionToText = '' + value;
//   //https://www.w3schools.com/icons/google_icons_intro.asp
//   var icon = WidgetUtil.getVar('icon', key, 'settings', functionToText)
//   var title = WidgetUtil.getVar('title', key, key, functionToText)
//   var x = parseInt(WidgetUtil.getVar('x', key, 0, functionToText))
//   var y = parseInt(WidgetUtil.getVar('y', key, 0, functionToText))
//   var width = parseInt(WidgetUtil.getVar('width', key, 400, functionToText))
//   var height = parseInt(WidgetUtil.getVar('height', key, 400, functionToText))
//   widgetArray.push({properties: {position: {x:  x, y:  y}, size:{width: width, height:height}}, defaultTitle: title, type: key, icon: icon})
// }
//console.log(widgetArray)

const AddWidgetDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  // const addSkillNet = (event, title, type, width, height) => {
  //   var selectedArray = [
  //     {properties: {position: {x:  10, y:  10}, size:{width:  1300, height: 700}}, defaultTitle: 'All Users', type: 'User2'},
  //     {properties: {position: {x:  100, y:  100}, size:{width:  1000, height: 300}}, defaultTitle: 'Line Report', type: 'Line'},
  //     {properties: {position: {x:  150, y:  150}, size:{width:  1000, height: 700}}, defaultTitle: 'Card Report', type: 'CardWidget'},
  //   ]
  //   onClose(selectedArray)
  // }


  // const addDatashapes = (event, title, type, width, height) => {
  //   var selectedArray = [
  //     {properties: {position: {x:  10, y:  10}, size:{width:  400, height: 400}}, defaultTitle: 'Radar', type: 'Radar'},
  //     {properties: {position: {x: 430, y:  10}, size:{width:  400, height: 400}}, defaultTitle: 'Pipe Analysis', type: 'Datashape'},
  //     {properties: {position: {x: 850, y:  10}, size:{width:  400, height: 400}}, defaultTitle: 'Sphere Analysis', type: 'Datashape2'},

  //     {properties: {position: {x:  10, y: 430}, size:{width:  400, height: 300}}, defaultTitle: 'Drones', type: 'Drones'},
  //     {properties: {position: {x: 430, y: 430}, size:{width:  400, height: 300}}, defaultTitle: 'Flight', type: 'Flight'},
  //     {properties: {position: {x: 850, y: 430}, size:{width:  400, height: 300}}, defaultTitle: 'Laser', type: 'Laser'},

  //     {properties: {position: {x:  10, y: 750}, size:{width: 1240, height: 500}}, defaultTitle: 'Rediness', type: 'Rediness'},

  //     //{id: 10, properties: {position: {x:  0, y:  0}, size:{width: 900, height:600}}, defaultTitle: 'Ticker', type: 'Ticker'},
  //     //{id: 11, properties: {position: {x: 10, y: 10}, size:{width: 600, height:600}}, defaultTitle: 'Population', type: 'Population'}
  //     //{x: 10, y: 10, w: 800, h:600, title: 'Big Data', type: 'BigData'},
  //     //{x: 20, y: 20, w: 800, h:600, title: 'Population', type: 'Population'},
  //   ]
  //   onClose(selectedArray)
  //}



  // const addGRUI = (event, title, type, width, height) => {
  //   var selectedArray = [
  //     {properties: {position: {x:  0, y:  0}, size:{width: 900, height:700}}, defaultTitle: 'PopulationMap', type: 'PopulationMap'},
  //     {properties: {position: {x: 915, y: 0}, size:{width: 400, height:900}}, defaultTitle: 'Population', type: 'Population'},
  //     {properties: {position: {x:  0, y: 715}, size:{width: 600, height:300}}, defaultTitle: 'Receive', type: 'Receive'},
  //     //{id: 10, properties: {position: {x:  0, y:  0}, size:{width: 900, height:600}}, defaultTitle: 'Ticker', type: 'Ticker'},
  //     //{id: 11, properties: {position: {x: 10, y: 10}, size:{width: 600, height:600}}, defaultTitle: 'Population', type: 'Population'}
  //     //{x: 10, y: 10, w: 800, h:600, title: 'Big Data', type: 'BigData'},
  //     //{x: 20, y: 20, w: 800, h:600, title: 'Population', type: 'Population'},
  //   ]
  //   onClose(selectedArray)
  // }

  // const addEvents = (event, title, type, width, height) => {
  //   var selectedArray = [
  //     {properties: {position: {x:  10, y:  0}, size:{width: 400, height:200}}, defaultTitle: 'Send', type: 'Send'},
  //     {properties: {position: {x: 500, y:  0}, size:{width: 400, height:200}}, defaultTitle: 'Receive', type: 'Receive'},
  //   ]
  //   onClose(selectedArray)
  // }


  // const handleClick = (widgets) => {
  //   console.log(widgets)
  //   if (widgets == undefined) {
  //     onClose(null)
  //   }
  //   else {
  //     onClose([widgets])
  //   }
  //   //console.log(width,height)
  //   //dispatch({type: 'ADD_WIDGET', payload: {x: left, y: top, w: width, h: height, title: title, mode: 'chart', type: type}});
  // }

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
//{console.log(widget)}
  return (
    <Dialog style={{zIndex:'3000'}}
      open={open}

      onClose={handleClose}
      PaperComponent={PaperComponent}

    >
      <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Sample Dialog</DialogTitle>





        <DialogContent style={{width:'700px'}} dividers>
          <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',height:'200px'}}>
     


            <Formik
       initialValues={{ mode: props.mode }}
       validate={values => {
         const errors = {};
        //  if (!values.email) {
        //    errors.email = 'Required';
        //  } else if (
        //    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //  ) {
        //    errors.email = 'Invalid email address';
        //  }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        onClose(values)


        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //    onClose(values)
        //  }, 400);


       }}
     >



       {({ isSubmitting }) => (
         <Form>

           Mode: <Field type="mode" name="mode" />
<br/><br/><br/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}


</Formik>






            {/* {widgetArray.map((widget, index) => {
              return (
                <div key={index} className="add-widgets-cell" onClick={(event) => handleClick(widget)}>
                  <span className="widget-type-name"><i className="material-icons">{widget.icon}</i>{widget.defaultTitle}</span>
                </div>
              )
            })
          } */}





          </div>
        </DialogContent>


        {/* <DialogActions>
          <Button onClick={(event) => handleClick()}>Close</Button>
        </DialogActions> */}



    </Dialog>
  )
}

export default AddWidgetDialog
