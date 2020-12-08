export function layouts () {
  return {
    "lg":[
      { x:1,y:1, w:12,h:1,  i:"0", l:1,widget:{type:"child"} },
    ],
    "md":[
      { x:1,y:1, w:6,h:1,  i:"0", l:1,widget:{type:"child"} },
    ],
    "sm":[
      { x:1,y:1, w:4,h:1,  i:"0", l:1,widget:{type:"child"} },
    ],
    "xs":[
      { x:1,y:1, w:2,h:1,  i:"0", l:1,widget:{type:"child"} },
    ],
    "xxs":[
      { x:1,y:1, w:2,h:1,  i:"0", l:1,widget:{type:"child"} },
    ],
  }
}

export function cols () {
  return { lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
}

export function breakpoints () {
  return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
}