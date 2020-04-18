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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _width, _length) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._length = _length;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.getinfo = function () {
        return _super.prototype.getinfo.call(this) + (", length = " + this.length + ", width = " + this.width);
    };
    Rectangle.prototype.caluculateArea = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
