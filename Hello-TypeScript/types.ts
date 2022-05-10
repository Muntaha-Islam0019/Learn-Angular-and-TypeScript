let count = 1;
count = 'a'; // can't be done in TS, but is available in JS

// but
let number;
number = 1;
number = 'two';
number = true;

// the solution is
let anotherNumber: number;
anotherNumber = 1;
anotherNumber = 'two'; // now it throws error

// all types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [true, 2.02, 'three'];
enum color {
  Red = 0,
  Green = 1,
  Blue = 2,
} // can also be implicitly declared
