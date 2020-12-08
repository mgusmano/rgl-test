export function layouts () {
  return {
    "lg":[
      {
        "i":"0","x":0,"y":0,"w":2,"h":2,l:1,
        "widget":{"type":"child"},"absoluteLayout":true,
      },
      {
        "i":"1","x":3,"y":0,"w":2,"h":8,l:1,
        "widget":{"type":"child"},"absoluteLayout":false,
      }
    ]
  }
}

//export function layouts () {
export function cols () {
  return { lg: 12, md: 6, sm: 4, xs: 2, xxs: 1 }
}

export function breakpoints () {
  return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
}
