export function layouts () {
  return {

          lg: [
            { x:0,y:0, w:4,h:1,  i:"0", l:2,widget:{type:"child"} },
            { x:4,y:0, w:4,h:1,  i:"1", l:2,widget:{type:"child"} },
            { x:8,y:0, w:4,h:1,  i:"2", l:2,widget:{type:"child"} },
          ],
          sm: [
            { x:0,y:0, w:1,h:1,  i:"0", l:2,widget:{type:"child"} },
            { x:0,y:1, w:1,h:1,  i:"1", l:2,widget:{type:"child"} },
            { x:0,y:2, w:1,h:1,  i:"2", l:2,widget:{type:"child"} },
          ],



  }
}


export function cols () {
  return { lg: 12,sm: 1 }
}

export function breakpoints () {
  return { lg: 500, sm: 0 }
}