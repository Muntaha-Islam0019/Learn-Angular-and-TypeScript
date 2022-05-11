class PointP {
  // if we put access modifiers here, the compiler generates these fields and also initiate them for us
  constructor(private _x?: number, private _y?: number) {
    // so this.x = x is not needed anymore
  }

  // public is redundant
  public draw() {
    console.log('X: ' + this._x + ' and Y: ' + this._y);
  }

  // old way:
  //   getX() {
  //     return this.x;
  //   }

  //   setX(value) {
  //     if (value < 0) {
  //         throw new Error('value cannot be less than 0')
  //     }

  //     this.x = value
  //   }

  // using properties:

  public get x(): number {
    return this._x;
  }

  public set x(v: number) {
    this._x = v;
  }
}

let point = new PointP(1, 2);
point.draw();
let x = point.x;
point.x = 10;
