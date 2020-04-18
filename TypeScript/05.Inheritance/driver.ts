import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myShape = new Shape(5, 10);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 20, 30);

console.log(myShape.getinfo());
console.log(myCircle.getinfo());
console.log(myRectangle.getinfo());
