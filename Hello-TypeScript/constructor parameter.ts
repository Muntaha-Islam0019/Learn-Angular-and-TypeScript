class PointCP {
    // if we put access modifiers here, the compiler generates these fields and also initiate them for us
    constructor(private x?: number, private y?: number) {
      // so this.x = x is not needed anymore
    }
  
    // public is redundant 
    public draw() {
      console.log('X: ' + this.x + ' and Y: ' + this.y);
    }
  }
  
  let point = new PointCP(1, 2);
  point.draw();
  