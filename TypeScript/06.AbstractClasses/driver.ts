import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 20, 30);

console.log(myCircle.getinfo());
console.log(myCircle.caluculateArea());

console.log(myRectangle.getinfo());
console.log(myRectangle.caluculateArea());
