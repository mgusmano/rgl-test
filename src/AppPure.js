import React from "react";
import _ from "lodash";

import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class AppPure extends React.PureComponent {

  onMessage = (e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        this.setState({width: e.detail.payload})
        break;
      case 'width2':
        break;
      default:
        break;
    }
  }

  constructor(props) {
    super(props);
    console.log('constructor')

    window.addEventListener('mjg', this.onMessage);

    var breakpoints={ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
    var cols={ lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }

    var currentbreakpoint
    for (const [key, value] of Object.entries(breakpoints)) {
      if (value < this.props.width) {
          currentbreakpoint = key
          break
      }
    }
    console.log(currentbreakpoint)

    this.state = { 
        width: 0,
        layouts: null,
        cols: null,
        breakpoints: null,
        currentbreakpoint: currentbreakpoint
    };

    var me = this
    requestAnimationFrame(function() {
        me.setState({ 
            width: 500,
            layouts: me.props.layouts,
            cols: cols[currentbreakpoint],
            breakpoints: breakpoints,
            currentbreakpoint: currentbreakpoint
        })
        me.props.parmsChange({cols,breakpoints})
    })
  }

  generate = () => {
    var g = this.generateDOM()
    console.log(g)
    return g
  }

  generateDOM = () => {
    var thisbreakpoint = ''
    if (this.state.layouts[this.state.currentbreakpoint] == undefined) {
      thisbreakpoint = 'lg'
    }
    else {
      thisbreakpoint = this.state.currentbreakpoint
    }
    return this.state.layouts[thisbreakpoint].map((l, i) => {
      return (
  //       <SimpleWrapper key={i} layoutitem={l} item={i}></SimpleWrapper>
        <div key={i} layoutitem={l} data-grid={l} item={i} style={{display:'flex',background:'lightgray'}}>
          <div className="text" style={{border:'1px solid gray',height:'100%',fontSize:'11px'}}>{i}<br/> x:{l.x},y:{l.y}<br/> w:{l.w}, l:{l.h}</div>
        </div>
      );
    });
  }

  onLayoutChange = (layout) => {
    //console.log('onLayoutChange',layout)
  }

  onBreakpointChange = (breakpoint )=> {
    console.log('onBreakpointChange',breakpoint)
    this.props.breakpointChange(breakpoint)
    this.setState({
        //cols: this.state.cols[breakpoint],
        currentbreakpoint: breakpoint
    })
  }

  render() {
    console.log('this.state.width',this.state.width)
    return (
      <>
      {this.state.layouts !== null &&
      <ResponsiveReactGridLayout
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        level={this.state.level}
        rowHeight={60}
        width={this.state.width}
        //cols={this.state.cols}
        // breakpoints={this.state.breakpoints}  
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }}
        className="layout"
        compactType={null}
      >
        {this.generate()}
      </ResponsiveReactGridLayout>
      }
     </>
    );
  }
 
}

