class CustomerWithConstructor {
  firstname: string;
  lastname: string;

  constructor(fitstname: string, lastname: string) {
    this.firstname = fitstname;
    this.lastname = lastname;
  }
}

//creating instatnce of Customer
let myCustWC = new CustomerWithConstructor("Hari", "P");

console.log(myCustWC.firstname);
console.log(myCustWC.lastname);
