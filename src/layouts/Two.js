export function layouts () {
  return {
    lg:[
      { x:5,y:4, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
      { x:0,y:1, w:1,h:1,  i:"1", l:1,widget:{type:"child"} },
    ],
    md:[
      { x:0,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
      { x:0,y:2, w:1,h:1,  i:"1", l:1,widget:{type:"child"} },
    ],
    sm:[
      { x:0,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
      { x:0,y:3, w:1,h:1,  i:"1", l:1,widget:{type:"child"} },
    ],
    xs:[
      { x:0,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
      { x:0,y:4, w:1,h:1,  i:"1", l:1,widget:{type:"child"} },
    ],
    xxs:[
      { x:0,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
      { x:0,y:5, w:1,h:1,  i:"1", l:1,widget:{type:"child"} },
    ],
  }
}

export function cols () {
  return { lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
}

export function breakpoints () {
  return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
}