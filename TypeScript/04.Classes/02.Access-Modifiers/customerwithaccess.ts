class Customer {
  private _firstname: string;
  private _lastname: string;

  constructor(firstname: string, lastname: string) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set firstname(first: string) {
    this._firstname = first;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(theLast: string) {
    this._lastname = theLast;
  }
}

let myCust = new Customer("Hari", "P");
console.log(myCust.firstname);
console.log(myCust.lastname);

//Note: compile> tsc --target ES5 customerwithaccess.ts -> cessors are only available when targeting ECMAScript 5 and higher
