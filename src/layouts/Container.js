export function layouts () {
  return {

    "lg":[
      { x:0,y:0, w:4,h:10,  i:"0", l:1,widget:{type:"child"}, draggableHandle: ".layout-item-dragger1"},
      { x:4,y:0, w:4,h:10,  i:"1", l:1,widget:{type:"container"}, draggableHandle: ".layout-item-dragger1",
        children: {
          lg: [
            { x:0,y:0, w:4,h:3,  i:"0", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:4,y:0, w:4,h:3,  i:"1", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:8,y:0, w:4,h:3,  i:"2", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
          ],
          sm: [
            { x:0,y:0, w:1,h:3,  i:"0", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:0,y:1, w:1,h:3,  i:"1", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:0,y:2, w:1,h:3,  i:"2", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
          ],
        }
      },
      { x:8,y:0, w:4,h:10,  i:"2", l:1,widget:{type:"child"}, draggableHandle: ".layout-item-dragger1"},
    ],
    "sm":[
      { x:0,y:0, w:6,h:4,  i:"0", l:1,widget:{type:"child"}, draggableHandle: ".layout-item-dragger1"},
      { x:0,y:4, w:6,h:4,  i:"1", l:1,widget:{type:"container"}, draggableHandle: ".layout-item-dragger1",
        children: {
          lg: [
            { x:0,y:0, w:4,h:3,  i:"0", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:4,y:0, w:4,h:3,  i:"1", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:8,y:0, w:4,h:3,  i:"2", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
          ],
          sm: [
            { x:0,y:0, w:1,h:3,  i:"0", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:0,y:1, w:1,h:3,  i:"1", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
            { x:0,y:2, w:1,h:3,  i:"2", l:2,widget:{type:"child"}, draggableHandle: ".layout-item-dragger2" },
          ],
        }
      },
      { x:0,y:8, w:6,h:4,  i:"2", l:1,widget:{type:"child"}, draggableHandle: ".layout-item-dragger1"}
    ]





  }
}


export function cols () {
  return { lg: 12,sm: 6 }
}

export function breakpoints () {
  return { lg: 1200, sm: 768 }
}