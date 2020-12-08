export default function () {
  return {
    "lg":[
      {
        "i":"1","x":4,"y":2,"w":3,"h":4,l:1,
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