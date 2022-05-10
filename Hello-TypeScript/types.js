var count = 1;
count = 'a'; // can't be done in TS, but is available in JS
// but
var number;
number = 1;
number = 'two';
number = true;
// the solution is
var anotherNumber;
anotherNumber = 1;
anotherNumber = 'two'; // now it throws error
// all types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [true, 2.02, 'three'];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {})); // can also be implicitly declared
