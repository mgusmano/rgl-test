import React from "react";
import SimpleWrapper from './wrapper/SimpleWrapper'
import { Responsive, WidthProvider } from './react-grid-layout';
import './DynamicLayout.css'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DynamicLayouto extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log('constructor',this.props)
  //   // window.addEventListener('mjg', this.onMessage);
  //   // this.state = { 
  //   //   mounted: false,
  //   //   width: null,
  //   // }
  // }

  // componentDidMount() {
  //   console.log('cdm')
  //   this.setState({
  //     mounted: true
  //   });
  // }

  // onMessage = (e) => {
  //   if (!e.detail) {return}
  //   switch (e.detail.type) {
  //     case 'width1':
  //       //console.log('get Width')
  //       if (this.state.mounted == true) {
  //         // this.setState({
  //         //   width: e.detail.payload
  //         // })
  //       }
  //       break;
  //     case 'width2':
  //       break;
  //     default:
  //       break;
  //   }
  // }

  generate = (currentbreakpoint,layouts) => {
    var g = this.generateDOM(currentbreakpoint,layouts)
    console.log(g)
    return g
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
    //var me = this
    //console.log(JSON.stringify(this.state.layouts[thisbreakpoint]))

    console.log(layouts)
    return layouts[thisbreakpoint].map((l, i) => {
      return (
        <div key={i} layoutitem={l} data-grid={l} item={i} style={{display:'flex'}}>
           <SimpleWrapper key={i} layoutitem={l} item={i} level={l.l}></SimpleWrapper>
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

    window['cols'] = cols
    window['breakpoints'] = breakpoints
    window['numcols'] = numcols
    window['currentbreakpoint'] = currentbreakpoint
  }

  onLayoutChange = (layout) => {
    console.log('onLayoutChange',layout)
  }

  onBreakpointChange = (currentbreakpoint)=> {
    console.log('onBreakpointChange',currentbreakpoint)
    this.currentbreakpoint = currentbreakpoint
    return

    // console.log(this.props)

    // this.setState({
    //   currentbreakpoint: currentbreakpoint
    // })

    // var cols = this.props.totallayout.cols
    // var breakpoints = this.props.totallayout.breakpoints
    // var numcols =this.props.totallayout.cols[currentbreakpoint]

    // if (this.props.parmsChange != undefined) {
    //   this.props.parmsChange({
    //     cols,
    //     breakpoints,
    //     numcols,
    //     currentbreakpoint
    //   })
    //   window['cols'] = cols
    //   window['breakpoints'] = breakpoints
    //   window['numcols'] = numcols
    //   window['currentbreakpoint'] = currentbreakpoint
    // }
  }

  render() {
    const {cols, breakpoints, layouts, level} = this.props.totallayout
    //console.log(this.currentbreakpoint)
    //console.log(layouts)
    //console.log('layouts',layouts)
    //console.log(this)
    //console.log('this.state.width',this.state.width)

    // if (this.state !== null) {
    //   // var currentbreakpoint = 'lg'
    //   // for (const [key, value] of Object.entries(breakpoints)) {
    //   //   if (value < this.state.width) {
    //   //       currentbreakpoint = key
    //   //       break
    //   //   }
    //   // }
    //   // var numcols = cols[currentbreakpoint]

    //   // window['cols'] = cols
    //   // window['breakpoints'] = breakpoints
    //   // window['numcols'] = numcols
    //   // window['currentbreakpoint'] = currentbreakpoint

    //   // if (this.props.parmsChange != undefined) {
    //   //   this.props.parmsChange({cols,breakpoints,numcols,currentbreakpoint})
    //   // }
    // }

    return (
      <ResponsiveReactGridLayout
        onWidthChange={this.onWidthChange}
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        cols={cols}
        breakpoints={breakpoints}
        layouts={layouts}
        level={level}
        rowHeight={60}
        className="layout"
        compactType={null}
      >
        {this.generateDOM(this.currentbreakpoint,layouts)}  
      </ResponsiveReactGridLayout>
    );
  }
}
