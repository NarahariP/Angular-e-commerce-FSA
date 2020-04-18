import { Shape } from "./shape";

export class Rectangle extends Shape {
  constructor(
    theX: number,
    theY: number,
    private _width: number,
    private _length: number
  ) {
    super(theX, theY);
  }

  public set width(value: number) {
    this._width = value;
  }

  public get width(): number {
    return this._width;
  }

  public set length(value: number) {
    this._length = value;
  }

  public get length(): number {
    return this._length;
  }

  getinfo(): string {
    return super.getinfo() + `, length = ${this.length}, width = ${this.width}`;
  }
}
