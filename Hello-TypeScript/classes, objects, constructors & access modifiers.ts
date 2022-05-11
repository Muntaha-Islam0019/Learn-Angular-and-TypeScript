class Point {
  private x: number;
  private y: number;

  // the ? means optional
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  // public is redundant 
  public draw() {
    console.log('X: ' + this.x + ' and Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();
