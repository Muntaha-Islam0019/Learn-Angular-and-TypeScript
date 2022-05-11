export class PointM {
  constructor(private _x?: number, private _y?: number) {
    // so this.x = x is not needed anymore
  }

  public draw() {
    console.log('X: ' + this._x + ' and Y: ' + this._y);
  }

  public get x(): number {
    return this._x;
  }

  public set x(v: number) {
    this._x = v;
  }
}
