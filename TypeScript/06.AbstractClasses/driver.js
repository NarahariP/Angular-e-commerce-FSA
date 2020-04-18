"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myCircle = new circle_1.Circle(5, 10, 20);
var myRectangle = new rectangle_1.Rectangle(5, 10, 20, 30);
console.log(myCircle.getinfo());
console.log(myCircle.caluculateArea());
console.log(myRectangle.getinfo());
console.log(myRectangle.caluculateArea());