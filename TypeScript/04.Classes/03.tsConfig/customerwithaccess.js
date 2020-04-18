"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
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
var myCust = new Customer("Hari", "P");
console.log(myCust.firstname);
console.log(myCust.lastname);
//Note: compile> tsc --target ES5 customerwithaccess.ts -> cessors are only available when targeting ECMAScript 5 and higher
