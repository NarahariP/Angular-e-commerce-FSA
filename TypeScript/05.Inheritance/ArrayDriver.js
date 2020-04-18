"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myShape = new shape_1.Shape(5, 10);
var myCircle = new circle_1.Circle(5, 10, 20);
var myRectangle = new rectangle_1.Rectangle(5, 10, 20, 30);
var arrayOfShapes = [];
arrayOfShapes.push(myShape);
arrayOfShapes.push(myCircle);
arrayOfShapes.push(myRectangle);
for (var _i = 0, arrayOfShapes_1 = arrayOfShapes; _i < arrayOfShapes_1.length; _i++) {
    var shape = arrayOfShapes_1[_i];
    console.log(shape.getinfo());
}
