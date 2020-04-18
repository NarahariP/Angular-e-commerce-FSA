var CustomerWithConstructor = /** @class */ (function () {
    function CustomerWithConstructor(fitstname, lastname) {
        this.firstname = fitstname;
        this.lastname = lastname;
    }
    return CustomerWithConstructor;
}());
//creating instatnce of Customer
var myCustWC = new CustomerWithConstructor("Hari", "P");
console.log(myCustWC.firstname);
console.log(myCustWC.lastname);
