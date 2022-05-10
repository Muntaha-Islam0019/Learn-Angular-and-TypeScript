let drawPoint = (point) => {};

drawPoint({
  x: 1,
  y: 2,
});

// this way has a problem which is, we can pass literally anything and it shows no compile time error
// to solve this:

// first way -> inline annotation
let drawPointFirst = (point: { x: number; y: number }) => {};

// second way -> interface
interface Point {
  x: number;
  y: number;
}

let drawPointSecond = (point: Point) => {};
