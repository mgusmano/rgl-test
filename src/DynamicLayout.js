import React from "react";
import SimpleWrapper from './wrapper/SimpleWrapper'
import { Responsive, WidthProvider } from './react-grid-layout';
import './DynamicLayout.css'
import ReactTools from './ReactTools'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DynamicLayout extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor',this.props)
  }

  generateDOM = (currentbreakpoint,layouts) => {
    var thisbreakpoint = ''
    if (currentbreakpoint == null) {
      thisbreakpoint = 'lg'
    }
    else {
      if (layouts[currentbreakpoint] == undefined) {
        thisbreakpoint = 'lg'
      }
      else {
        thisbreakpoint = currentbreakpoint
      }
    }
    return layouts[thisbreakpoint].map((l, i) => {
      return (
        <div key={i} layoutitem={l} data-grid={l} item={i} style={{display:'flex'}}>
            <SimpleWrapper key={i} layoutitem={l} item={i} level={l.l} mode={this.props.totallayout.mode}></SimpleWrapper>
            {/* <div className="text" style={{border:'1px solid gray',height:'100%',fontSize:'11px'}}>{i}<br/> x:{l.x},y:{l.y}<br/> w:{l.w}, l:{l.h}</div> */}
        </div>
      );
    });
  }

  onWidthChange = (width,margin,newCols,containerPadding) => {
    console.log('onWidthChange',width,margin,newCols,containerPadding)
    var cols = this.props.totallayout.cols
    var breakpoints = this.props.totallayout.breakpoints
    var numcols = newCols
    var currentbreakpoint =  this.currentbreakpoint
    if (this.props.parmsChange != undefined) {
      this.props.parmsChange({
        cols,
        breakpoints,
        numcols,
        currentbreakpoint
      })
    }
    // if (this.currentbreakpoint == undefined) {
    //   this.currentbreakpoint = 'lg'
    // }

    window['cols'] = cols
    window['breakpoints'] = breakpoints
    window['numcols'] = numcols
    window['currentbreakpoint'] = currentbreakpoint

    console.log(window['cols'])
    console.log(window['breakpoints'])
    console.log(window['numcols'])
    console.log(window['currentbreakpoint'])
  }

  onLayoutChange = (layout) => {
    console.log('onLayoutChange',layout)
  }

  onBreakpointChange = (currentbreakpoint, cols)=> {
    console.log('onBreakpointChange',currentbreakpoint, cols)
    this.currentbreakpoint = currentbreakpoint
  }

  onReactToolsChange = (values)=> {
    console.log(values.mode)
  }

  render() {
    //window['processsvg'] = true
    const {cols, breakpoints, layouts, level, mode, parent} = this.props.totallayout

    var resizehandles = ['s','se','e']
    if (mode == 'view') {
      resizehandles = []
    }
    console.log(parent)

    return (
      <div style={{height:'100%',width:'100%'}}>
      {parent === 'mainworkspace' &&
        <ReactTools onReactToolsChange={this.onReactToolsChange}/>
      }
      <ResponsiveReactGridLayout
        onWidthChange={this.onWidthChange}
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        cols={cols}
        breakpoints={breakpoints}
        layouts={layouts}
        level={level}
        rowHeight={60}
        margin={[10, 10]}
        resizeHandles={resizehandles}
        className="layout"
        compactType={null}
      >
        {this.generateDOM(this.currentbreakpoint,layouts)}  
      </ResponsiveReactGridLayout>
      </div>  
    );
  }
}
