export default function () {
  var l = {"lg":[
    {
      "i":"0","x":0,"y":0,"w":4,"h":8,l:1,
      "widget":{"type":"child"},"absoluteLayout":false,
    },

    {
      "i":"2","x":4,"y":0,"w":8,"h":8,l:1,
      "widget":{"type":"container"},"absoluteLayout":false,
      children: {
        lg: [
          { x:0,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:4,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:8,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
        ],
        sm: [
          { x:0,y:0, w:1,h:1,  i:"0", l:2,widget:{type:"child"} },
          // { x:2,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
          // { x:3,y:0, w:1,h:1,  i:"0", l:1,widget:{type:"child"} },
        ],
        xs: [
          { x:0,y:0, w:2,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:4,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:8,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
        ],
        xxs: [
          { x:0,y:0, w:1,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:4,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
          { x:8,y:0, w:4,h:7,  i:"0", l:1,widget:{type:"child"} },
        ],
        // md: [
        //   { x:0,y:0, w:2,h:7,  i:"0", l:1,widget:{type:"child"} },
        //   { x:2,y:0, w:2,h:7,  i:"0", l:1,widget:{type:"child"} },
        //   { x:4,y:0, w:2,h:7,  i:"0", l:1,widget:{type:"child"} },
        // ]
      }
    },
    // {
    //   "i":"3","x":0,"y":0,"w":4,"h":6,
    //   "widget":{"type":"child"},"absoluteLayout":true,
    // },
  ]}
  return l
}