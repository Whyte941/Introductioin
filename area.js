function circleArea(radius) {
  return Math.PI * radius**2;
}

function cylinderArea(radius, height) {
  return circleArea(radius) *2* height;
}

let radius = 10
let height = 5
let cArea = circleArea(radius)
let cyArea = cylinderArea(radius, height)

console.log("the area of a circle of radius ", radius, " is ", cArea, " and the area of a cylinder of radius thesame radius and height ", height, " is ", cyArea)
console.log("the area of a circle of radius ", radius, " is ", Math.ceil(cArea), " and the area of a cylinder of radius thesame radius and height ", height, " is ", Math.ceil(cyArea))
console.log("the area of a circle of radius ", radius, " is ", Math.round(cArea), " and the area of a cylinder of radius thesame radius and height ", height, " is ", Math.round(cyArea))
console.log("the area of a circle of radius "+radius+ " is "+ Math.round(cArea)+ " and the area of a cylinder of radius thesame radius and height "+ height+" is "+ Math.round(cyArea))
console.log(`the area of a circle of radius ${radius} is ${Math.round(cArea)} and the area of a cylinder of radius thesame radius and height ${height} is ${Math.round(cyArea)}`)
console.log(`

the area of a circle of radius
  ${radius} is ${Math.round(cArea)}
  and the area of a cylinder of radius thesame radius and height
  ${height} is ${Math.round(cyArea)}
`)

// COMMENTING IN JAVASCRIPT
//1. single line comment
  // this is a single line comment in javascript initiated by two forward slashes
  // single line comments only affect the line they are written on
  // and they affect the line from the point they are written to the end of the line
  // although they still can be used to acheive multiline comments by writing them on multiple lines
  // as we did use it in this explanation
  // but this is not the best practice

//2. multiline comment
  /*
    this is a multiline comment in javascript initiated by a forward slash and an asterisk
    multiline comments can span multiple lines
    and they can be used to comment out multiple lines of code
    multiline comments are best used for commenting out multiple lines of code
    and not for writing long explanations like we did in the single line comment
    this is the best practice for multiline comments
  */