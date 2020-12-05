



import React from "react";
import _ from "lodash";


import { Responsive, WidthProvider } from './react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);



//import RGL, { WidthProvider } from "./react-grid-layout";


//import Two from './layouts/Two'
//import SimpleWrapper from './wrapper/SimpleWrapper'

//const ReactGridLayout = WidthProvider(RGL);

export default class AppPure extends React.PureComponent {
//   static defaultProps = {
//     className: "layout",
//     items: 2,
//     rowHeight: 30,
//     onLayoutChange: function() {},
//    // cols: 14
//   };

onMessage = (e) => {
    if (!e.detail) {return}
    switch (e.detail.type) {
      case 'width1':
        //console.log(e.detail.payload)
        this.setState({width: e.detail.payload})
       // setWidth1Val(e.detail.payload)
        break;
      case 'width2':
       // setWidth2Val(e.detail.payload)
        break;
      default:
        break;
    }
  }


  constructor(props) {
    super(props);

    window.addEventListener('mjg', this.onMessage);

    console.log(this.props.width)
    var currentbreakpoint
    var breakpoints={ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
    var cols={ lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
    for (const [key, value] of Object.entries(breakpoints)) {
       // var c = value
        if (value < this.props.width) {
            currentbreakpoint = key
            break
        }
        //console.log(`${key}: ${value}`);
      }
      console.log(currentbreakpoint)





    //const layout = this.generateLayout();
    //const layout = Two()['lg2'];


    console.log('constructor')


    this.state = { 
        width: 0,
        layouts: null,
        cols: null,
        breakpoints: null,
        currentbreakpoint: currentbreakpoint
    };

    var me = this
    requestAnimationFrame(function() {

        //var breakpoints={ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
        const layouts = me.props.layouts;
        console.log('all layouts sent by app.js',layouts)
        me.setState({ 
            width: 500,
            layouts: layouts,
            cols: cols[currentbreakpoint],
            breakpoints: breakpoints,
            currentbreakpoint: currentbreakpoint
        })
        console.log(me)
        console.log(me.offsetWidth )
        console.log(me.state)

    })




  }

  generateDOM = () => {
      //console.log('generateDOM')
           return this.state.layouts[this.state.currentbreakpoint].map((l, i) => {
    //return _.map(_.range(Two()['lg2']), function(i) {
       // console.log(i)
      return (

  //       <SimpleWrapper key={i} layoutitem={l} item={i}>       
     
  //       </SimpleWrapper>


        <div key={i} layoutitem={l} data-grid={l} item={i} style={{display:'flex'}}>
          <div className="text" style={{border:'1px solid gray',height:'100%',fontSize:'11px'}}>{i}<br/> x:{l.x},y:{l.y}<br/> w:{l.w}, l:{l.h}</div>
        </div>
      );
    });
  }

//   generateLayout() {
//     const p = this.props;
//     return _.map(new Array(p.items), function(item, i) {
//       const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
//       return {
//         x: (i * 2) % 12,
//         y: Math.floor(i / 6) * y,
//         w: 2,
//         h: y,
//         i: i.toString()
//       };
//     });
//   }

  onLayoutChange = (layout) => {
    console.log('onLayoutChange',layout)
      //console.log(layout)
      //console.log(this.state)
    //this.props.onLayoutChange(layout);
    // this.setState({
    //     layout: this.state.layouts['lg']
    //   });
  }

  onBreakpointChange = (breakpoint )=> {
    console.log('onBreakpointChange',breakpoint)
    this.props.breakpointChange(breakpoint)


    this.setState({
        //cols: this.state.cols[breakpoint],
        currentbreakpoint: breakpoint
    })

  
    // if (breakpoint == previousbreakpoint) return
  
    // setCurrentBreakpoint(breakpoint)
    // props.breakpointChange(breakpoint)
    // setPreviousBreakpoint(breakpoint)
  
    // SetItems(null)
  
    // requestAnimationFrame(function() {
    //   SetItems(generateDOM(layouts[breakpoint]))
  
    // })
  
  
    }

  render() {
    //console.log(this.state)
    return (
        <>
            {/* <div>{this.props.width}</div> */}
    {this.state.layouts !== null &&

      <ResponsiveReactGridLayout
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        level={this.state.level}
        rowHeight={60}
        width={this.state.width}

        //cols={this.state.cols}
        // breakpoints={this.state.breakpoints}    
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}

        className="layout"
        //layouts={this.state.layout}
        //onLayoutChange={this.onLayoutChange}

        compactType={null}
      >
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
    }
     </>
    );
  }
 
}

