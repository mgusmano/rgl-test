import React, { useEffect, useState, useCallback } from "react";
import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

//import RGL, { WidthProvider } from "react-grid-layout";
import Two from './layouts/Two'
//const ReactGridLayout = WidthProvider(RGL);

const App2 = (props) => {
    const [cols, SetCols] = useState(null)
    const [breakpoints, SetBreakpoints] = useState(null)
    //const [layouts, SetLayouts] = useState(null)
    const [items, SetItems] = useState(null)

    const generateDOM = (layout) => {
        return layout.map((l, i) => {
        return (
            <div key={i} data-grid={l} style={{border:"1px solid blue"}}>       
            {/* <SimpleWrapper key={i} layoutitem={l} item={i}> </SimpleWrapper> */}
            {props.width1val}
            </div>
        )
        });
    }

    useEffect(() => {
        SetCols({ lg: 12, md: 6 })
        SetBreakpoints({ lg: 1200, md: 996 })
        //SetLayouts(props.layouts)

        var l = generateDOM(Two()['lg'])
        console.log(l)

        SetItems(l)
    }, []);

    return (
        <div style={{border:'1px solid red',width:'100%'}}>
        {items !== null &&
        <ResponsiveReactGridLayout
        className= "layout"
        items ={20} 
        rowHeight= {30}
           // layout={Two()}
            cols={cols}
            breakpoints={breakpoints}
        >
            {items}
        </ResponsiveReactGridLayout>
        }
        </div>
    )

}
export default App2