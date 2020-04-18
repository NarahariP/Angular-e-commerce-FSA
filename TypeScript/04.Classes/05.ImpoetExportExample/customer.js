"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    Object.defineProperty(Customer.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (first) {
            this._firstname = first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (theLast) {
            this._lastname = theLast;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
