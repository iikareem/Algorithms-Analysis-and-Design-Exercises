function Pararea(base, height) {

  parallelogramArea = base * height;


  return parallelogramArea;
}

function Traparea(a, b, h) {

  TrapezoidArea = ((a + b) / 2) * h;


  return TrapezoidArea;
}
b = Number(prompt("base"));
h = Number(prompt("height"));

a = Number(prompt("a"));
c = Number(prompt("c"));
h = Number(prompt("h"));


console.log("parallelogram Area = " + Pararea(b, h));
console.log("Trapezoid Area = " + Traparea(a, c, h));
