import { Shape } from "./shape";

export class Circle extends Shape {
  constructor(theX: number, theY: number, private _radius: number) {
    super(theX, theY);
  }

  public set radius(value: number) {
    this._radius = value;
  }

  public get radius(): number {
    return this._radius;
  }

  getinfo(): string {
    return super.getinfo() + `, radius = ${this.radius}`;
  }

  caluculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
