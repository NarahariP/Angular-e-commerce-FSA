import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 20, 30);

let arrayOfShapes = [];

arrayOfShapes.push(myCircle);
arrayOfShapes.push(myRectangle);

for (let shape of arrayOfShapes) {
  console.log(shape.getinfo());
  console.log(shape.caluculateArea());
}
