import React from "react";
import SimpleWrapper from './wrapper/SimpleWrapper'
import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class AppPure extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('constructor',this.props)

    window.addEventListener('mjg', this.onMessage);

    const {cols, breakpoints, layouts, width, level} = this.props.totallayout

    //var cols=this.props.totallayout.cols
    //var breakpoints=this.props.totallayout.breakpoints
    //var layouts = this.props.totallayout.layouts
    var currentbreakpoint = 'lg'
    for (const [key, value] of Object.entries(breakpoints)) {
      if (value < this.props.width) {
          currentbreakpoint = key
          break
      }
    }
    var numcols = cols[currentbreakpoint]

    this.state = { 
      currentdraw:  this.generate(currentbreakpoint,layouts),
      mounted: false,
      width: width,
      layouts: layouts,
      level: level,
      cols: cols,
      breakpoints: breakpoints,
      currentbreakpoint: currentbreakpoint,
      numcols: numcols,
    }

    if (this.props.parmsChange != undefined) {
      this.props.parmsChange({cols,breakpoints,numcols,currentbreakpoint})
      window['cols'] = cols
      window['breakpoints'] = breakpoints
      window['numcols'] = numcols
      window['currentbreakpoint'] = currentbreakpoint
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  onMessage = (e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        if (this.state.mounted == true) {
          this.setState({
            width: e.detail.payload
          })
        }
        break;
      case 'width2':
        break;
      default:
        break;
    }
  }

  generate = (currentbreakpoint,layouts) => {
    var g = this.generateDOM(currentbreakpoint,layouts)
    return g
  }

  generateDOM = (currentbreakpoint,layouts) => {
    var thisbreakpoint = ''
    if (layouts[currentbreakpoint] == undefined) {
      thisbreakpoint = 'lg'
    }
    else {
      thisbreakpoint = currentbreakpoint
    }
    var me = this
    //console.log(JSON.stringify(this.state.layouts[thisbreakpoint]))
    return layouts[thisbreakpoint].map((l, i) => {
      return (
        <div key={i} layoutitem={l} data-grid={l} item={i} style={{display:'flex'}}>
           <SimpleWrapper key={i} layoutitem={l} item={i} level={l.l}></SimpleWrapper>
          {/* <div className="text" style={{border:'1px solid gray',height:'100%',fontSize:'11px'}}>{i}<br/> x:{l.x},y:{l.y}<br/> w:{l.w}, l:{l.h}</div> */}
        </div>
      );
    });
  }

  onLayoutChange = (layout) => {
    console.log('onLayoutChange',layout)
  }

  onBreakpointChange = (currentbreakpoint)=> {
    console.log('onBreakpointChange',currentbreakpoint)

    this.setState({
      currentbreakpoint: currentbreakpoint
    })

    var cols = this.state.cols
    var breakpoints = this.state.breakpoints
    var numcols =this.state.cols[currentbreakpoint]

    if (this.props.parmsChange != undefined) {
      this.props.parmsChange({
        cols,
        breakpoints,
        numcols,
        currentbreakpoint
      })
      window['cols'] = cols
      window['breakpoints'] = breakpoints
      window['numcols'] = numcols
      window['currentbreakpoint'] = currentbreakpoint
    }
  }

  render() {
    //console.log('this.state.width',this.state.width)
    return (
      <>
      {this.state !== null &&
      <ResponsiveReactGridLayout
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}

        level={this.state.level}
        layouts={this.state.layouts}
        cols={this.state.cols}
        breakpoints={this.state.breakpoints}
        width={this.state.width}
        rowHeight={60}
        className="layout"
        compactType={null}
      >
        {/* {this.state.currentdraw} */}
        {this.generate(this.state.currentbreakpoint,this.state.layouts)}
      </ResponsiveReactGridLayout>
      }
     </>
    );
  }
 
}

