"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(theX, theY, _radius) {
        var _this = _super.call(this, theX, theY) || this;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.getinfo = function () {
        return _super.prototype.getinfo.call(this) + (", radius = " + this.radius);
    };
    Circle.prototype.caluculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(shape_1.Shape));
exports.Circle = Circle;