'use strict';

let x = +(prompt("Введите x="));
let y = +(prompt("Введите y="));
let b;

b = Math.cbrt((x + y) / 0.2 * x) * Math.sin(Math.pow(Math.tan(x), 2));

let i = b;
console.log("Результат вычислений =" + i);

let j = Math.trunc(b);
console.log("Целое число =" + j);